import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY || "";
const resendFromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const textsmsApiKey = process.env.TEXTSMS_API_KEY || "";
const textsmsPartnerId = process.env.TEXTSMS_PARTNER_ID || "";
const textsmsSenderId = process.env.TEXTSMS_SENDER_ID || "SENDERID";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

type OrderItem = {
  slug: string;
  name: string;
  price: number;
  quantity: number;
};

type OrderNotificationData = {
  reference: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  delivery_address: string;
  payment_method: string;
  payment_status: string;
  subtotal: number;
  delivery_fee: number;
  total: number;
  items: OrderItem[];
};

// Formats Kenyan mobile numbers to textsms.co.ke API format (e.g. 2547XXXXXXXX or 2541XXXXXXXX)
export function formatKenyanPhoneNumber(phone: string): string {
  const clean = phone.replace(/\D/g, "");

  if (clean.startsWith("254") && clean.length === 12) {
    return clean;
  }
  if (clean.startsWith("0") && clean.length === 10) {
    return "254" + clean.substring(1);
  }
  if (clean.length === 9) {
    return "254" + clean;
  }
  return clean;
}

// Formats price KSh values cleanly for notifications
function formatPriceLabel(amount: number): string {
  return `KSh ${amount.toLocaleString("en-KE")}`;
}

export async function sendOrderConfirmationEmail(order: OrderNotificationData) {
  if (!resend) {
    console.warn("Resend notification skipped: RESEND_API_KEY is not configured.");
    return;
  }

  const itemsHtml = order.items
    .map(
      (item) => `
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid #1E2238; color: #1E2238;">
        <strong>${item.name}</strong><br/>
        <span style="font-size: 12px; color: rgba(30, 34, 56, 0.6);">Qty: ${item.quantity} &times; ${formatPriceLabel(item.price)}</span>
      </td>
      <td style="padding: 10px 0; text-align: right; border-bottom: 1px solid #1E2238; font-family: monospace; color: #1E2238;">
        ${formatPriceLabel(item.price * item.quantity)}
      </td>
    </tr>
  `
    )
    .join("");

  const trackingLink = `${baseUrl}/track-order?ref=${order.reference}`;

  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Order Confirmation - Unicore Dynamics</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: sans-serif; background-color: #F1EDE4; color: #1E2238;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F1EDE4; padding: 20px;">
        <tr>
          <td align="center">
            <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #E8E1D2; border-radius: 16px; padding: 30px; border: 1px solid rgba(30, 34, 56, 0.1);">
              <tr>
                <td align="center" style="padding-bottom: 20px; border-bottom: 1px solid rgba(30, 34, 56, 0.1);">
                  <h1 style="font-size: 24px; margin: 0; color: #1E2238; letter-spacing: -0.5px;">Unicore Dynamics</h1>
                  <p style="font-size: 12px; margin: 5px 0 0 0; color: #2F6B5E; text-transform: uppercase; letter-spacing: 2px;">Kids Equipment Built to Last</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 20px 0;">
                  <p style="font-size: 16px; margin: 0 0 10px 0;">Hello ${order.customer_name},</p>
                  <p style="font-size: 14px; line-height: 1.5; margin: 0 0 20px 0; color: rgba(30, 34, 56, 0.8);">
                    Thank you for shopping at Unicore Dynamics. We have received your order and are currently processing it.
                  </p>
                  
                  <!-- Order Details Box -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F1EDE4; border-radius: 8px; padding: 15px; margin-bottom: 20px;">
                    <tr>
                      <td style="font-size: 12px; color: rgba(30, 34, 56, 0.6); padding-bottom: 5px;">ORDER REFERENCE</td>
                      <td style="font-size: 12px; color: rgba(30, 34, 56, 0.6); padding-bottom: 5px; text-align: right;">PAYMENT METHOD</td>
                    </tr>
                    <tr>
                      <td style="font-size: 14px; font-weight: bold; font-family: monospace; color: #1E2238;">${order.reference}</td>
                      <td style="font-size: 14px; font-weight: bold; color: #1E2238; text-align: right; text-transform: capitalize;">${order.payment_method}</td>
                    </tr>
                    <tr>
                      <td style="font-size: 12px; color: rgba(30, 34, 56, 0.6); padding-top: 15px; padding-bottom: 5px;">DELIVERY ADDRESS</td>
                      <td style="font-size: 12px; color: rgba(30, 34, 56, 0.6); padding-top: 15px; padding-bottom: 5px; text-align: right;">PAYMENT STATUS</td>
                    </tr>
                    <tr>
                      <td style="font-size: 13px; color: #1E2238; max-width: 250px;">${order.delivery_address}</td>
                      <td style="font-size: 14px; font-weight: bold; color: ${order.payment_status === "paid" ? "#2F6B5E" : "#B54B32"}; text-align: right; text-transform: capitalize;">${order.payment_status}</td>
                    </tr>
                  </table>
                  
                  <!-- Items Table -->
                  <h3 style="font-size: 16px; margin: 20px 0 10px 0; color: #1E2238; border-bottom: 2px solid #1E2238; padding-bottom: 5px;">Items Ordered</h3>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 20px;">
                    ${itemsHtml}
                  </table>
                  
                  <!-- Totals -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 20px;">
                    <tr>
                      <td style="padding: 5px 0; font-size: 14px; color: rgba(30, 34, 56, 0.7);">Subtotal</td>
                      <td style="padding: 5px 0; text-align: right; font-family: monospace; font-size: 14px; color: rgba(30, 34, 56, 0.7);">${formatPriceLabel(order.subtotal)}</td>
                    </tr>
                    <tr>
                      <td style="padding: 5px 0; font-size: 14px; color: rgba(30, 34, 56, 0.7);">Delivery fee</td>
                      <td style="padding: 5px 0; text-align: right; font-family: monospace; font-size: 14px; color: rgba(30, 34, 56, 0.7);">${formatPriceLabel(order.delivery_fee)}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; font-size: 16px; font-weight: bold; color: #1E2238; border-top: 1px solid rgba(30, 34, 56, 0.1);">Total</td>
                      <td style="padding: 10px 0; text-align: right; font-family: monospace; font-size: 16px; font-weight: bold; color: #1E2238; border-top: 1px solid rgba(30, 34, 56, 0.1);">${formatPriceLabel(order.total)}</td>
                    </tr>
                  </table>
                  
                  <!-- Tracking Action Button -->
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 30px;">
                    <tr>
                      <td align="center">
                        <a href="${trackingLink}" style="display: inline-block; background-color: #1E2238; color: #F1EDE4; padding: 12px 30px; font-size: 14px; font-weight: bold; text-decoration: none; border-radius: 24px; text-transform: uppercase; letter-spacing: 1px;">
                          Track Your Order
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding-top: 20px; border-top: 1px solid rgba(30, 34, 56, 0.1); font-size: 11px; color: rgba(30, 34, 56, 0.4); line-height: 1.5;">
                  Unicore Dynamics &copy; 2026. All rights reserved.<br/>
                  Nairobi, Kenya
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    const { error } = await resend.emails.send({
      from: `Unicore Dynamics <${resendFromEmail}>`,
      to: [order.customer_email],
      subject: `Order Confirmation - ${order.reference}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend API returned an error:", error);
    }
  } catch (err) {
    console.error("Exception thrown while sending email confirmation:", err);
  }
}

export async function sendOrderConfirmationSMS(order: OrderNotificationData) {
  if (!textsmsApiKey || !textsmsPartnerId) {
    console.warn("TextSMS notification skipped: TEXTSMS_API_KEY or TEXTSMS_PARTNER_ID is not configured.");
    return;
  }

  const recipientMobile = formatKenyanPhoneNumber(order.customer_phone);
  if (!recipientMobile) {
    console.warn(`TextSMS notification skipped: Phone number is invalid (${order.customer_phone}).`);
    return;
  }

  const trackingLink = `${baseUrl}/track-order?ref=${order.reference}`;
  const messageText = `Thank you for shopping at Unicore Dynamics! Your order reference is ${order.reference}. Total: ${formatPriceLabel(order.total)}. Track your order progress live here: ${trackingLink}`;

  try {
    const res = await fetch("https://sms.textsms.co.ke/api/services/sendsms/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apikey: textsmsApiKey,
        partnerID: textsmsPartnerId,
        message: messageText,
        shortcode: textsmsSenderId,
        mobile: recipientMobile,
      }),
    });

    if (!res.ok) {
      const responseText = await res.text();
      console.error(`TextSMS API returned error status ${res.status}: ${responseText}`);
    }
  } catch (err) {
    console.error("Exception thrown while sending SMS confirmation:", err);
  }
}
