# Unicore Dynamics

Kids equipment e-commerce site. Next.js 14, App Router, TypeScript, Tailwind, Paystack.

## Setup

npm install
cp .env.local.example .env.local
# fill in your Paystack keys in .env.local
npm run dev

## What's built

- Home, Shop (with category filters), Product detail, Cart, Checkout, Order confirmation
- Registry and Track order pages (waitlist/placeholder until backend is wired)
- About page
- Cart persists in the browser via localStorage
- Checkout: Paystack inline popup (card + M-Pesa) or Pay on delivery
- /api/paystack/verify: server-side verification stub, wire to your DB before going live
- SEO: metadata, Open Graph, sitemap.xml, robots.txt
- Brand tokens (colors, fonts) live in tailwind.config.ts

## Before going live

1. Add real Paystack keys to .env.local (test keys first)
2. In src/app/checkout/page.tsx, call /api/paystack/verify after the Paystack
   callback and only show success once verified is true
3. Replace src/data/products.ts with real product data (or wire to Supabase)
4. Swap the plain-text wordmark in Header.tsx and Footer.tsx for the final
   logo SVG once it's exported from Canva
5. Replace the sand-colored placeholder image blocks with real product photos
