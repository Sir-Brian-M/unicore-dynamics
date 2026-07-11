// Thin wrapper around Paystack Inline JS.
// Loads the script once, then opens the payment popup.
// Requires NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY to be set in the environment.

declare global {
  interface Window {
    PaystackPop?: {
      setup: (options: PaystackSetupOptions) => { openIframe: () => void };
    };
  }
}

type PaystackSetupOptions = {
  key: string;
  email: string;
  amount: number; // in the lowest currency unit (cents/kobo)
  currency: string;
  ref: string;
  channels?: string[];
  metadata?: Record<string, unknown>;
  callback: (response: { reference: string }) => void;
  onClose: () => void;
};

let scriptPromise: Promise<void> | null = null;

export function loadPaystackScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.PaystackPop) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Paystack"));
    document.body.appendChild(script);
  });

  return scriptPromise;
}

export function generateReference() {
  return `unicore_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

type OpenCheckoutArgs = {
  email: string;
  amountKes: number;
  reference?: string;
  metadata?: Record<string, unknown>;
  onSuccess: (reference: string) => void;
  onClose?: () => void;
};

export async function openPaystackCheckout({
  email,
  amountKes,
  reference = generateReference(),
  metadata,
  onSuccess,
  onClose,
}: OpenCheckoutArgs) {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

  if (!publicKey) {
    throw new Error(
      "NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY is not set. Add it to .env.local before going live."
    );
  }

  await loadPaystackScript();

  if (!window.PaystackPop) {
    throw new Error("Paystack script did not load correctly.");
  }

  const handler = window.PaystackPop.setup({
    key: publicKey,
    email,
    amount: Math.round(amountKes * 100), // Paystack expects the amount in cents
    currency: "KES",
    ref: reference,
    channels: ["card", "mobile_money"],
    metadata,
    callback: (response) => {
      // NOTE: this confirms the popup completed, not that the payment is
      // verified server side. Once Supabase/an API route is wired up, call
      // POST /api/paystack/verify with response.reference before treating
      // the order as paid.
      onSuccess(response.reference);
    },
    onClose: () => {
      onClose?.();
    },
  });

  handler.openIframe();
}
