export interface CaseStudy {
  slug: string;
  brand: string;
  type: string;
  result: string;
  eyebrow: string;
  subtitle: string;
  tags: string[];
  metrics: { val: string; label: string }[];
  challenge: string;
  what: string;
  fill: string[];
}

export const cases: CaseStudy[] = [
  {
    slug: "gullye",
    brand: "Gullye",
    type: "Luxury Bags & Accessories · D2C",
    result: "Meta & Pinterest Ads + Shopify CRO — improved conversions and streamlined operations.",
    eyebrow: "Luxury Bags & Accessories · D2C",
    subtitle: "Scaling a luxury accessories brand through targeted paid media and a high-converting Shopify storefront.",
    tags: ["Meta Ads", "Pinterest Ads", "Shopify CRO"],
    metrics: [
      { val: "5X", label: "ROAS (Meta)" },
      { val: "23%", label: "CVR improvement" },
      { val: "300%", label: "Revenue growth" },
      { val: "55$", label: "Cost per purchase" },
    ],
    challenge: "Gullye needed to reach the right luxury buyer online — a discerning audience that doesn't convert on generic ad creatives. The Shopify store wasn't built to match the premium positioning of the product.",
    what: "Rebuilt the Shopify store with a focus on premium visual storytelling and CRO best practices. Ran Meta and Pinterest campaigns targeting luxury lifestyle audiences, with creative strategy tailored to each platform's intent.",
    fill: ["ROAS before & after", "Conversion rate before & after", "Monthly revenue before & after", "Cost per purchase before & after", "Pinterest vs Meta performance split"],
  },
  {
    slug: "delta-charms",
    brand: "Delta Charms",
    type: "Jewelry · D2C",
    result: "Meta Ads + WhatsApp flows + Shopify CRO — improved conversions and streamlined operations.",
    eyebrow: "Jewelry · D2C",
    subtitle: "Combining paid ads, WhatsApp automation, and CRO to drive consistent order growth for a jewelry D2C brand.",
    tags: ["Meta Ads", "WhatsApp Flows", "Shopify CRO"],
    metrics: [
      { val: "4.5X", label: "ROAS" },
      { val: "25%", label: "Cart recovery rate" },
      { val: "80%", label: "RTO reduction" },
      { val: "20%", label: "Orders/month growth" },
    ],
    challenge: "High cart abandonment and COD-related RTOs were eating into margins. Ad spend wasn't being supported by a strong enough post-click experience.",
    what: "Set up WhatsApp flows for COD confirmation, cart recovery, and order updates. Optimised the Shopify store for conversions and ran Meta campaigns with full-funnel creative strategy.",
    fill: ["ROAS before & after", "Cart recovery rate", "RTO % before & after", "Orders/month before & after", "WhatsApp open & click rates", "Revenue attributed to WhatsApp flows"],
  },
  {
    slug: "vasundhara-jewellery",
    brand: "Vasundhara Jewellery",
    type: "Jewelry · D2C",
    result: "Meta Ads + WhatsApp + Shopify CRO + Influencer Marketing — improved brand recognition and conversions.",
    eyebrow: "Jewelry · D2C",
    subtitle: "Building brand recognition and conversions through a mix of paid media, automation, and influencer marketing.",
    tags: ["Meta Ads", "WhatsApp Flows", "Shopify CRO", "Influencer Marketing"],
    metrics: [
      { val: "3X", label: "ROAS" },
      { val: "1.5", label: "Brand search growth" },
      { val: "6 lacs monthly", label: "Influencer-driven revenue" },
      { val: "21%", label: "CVR improvement" },
    ],
    challenge: "Vasundhara had strong products but limited brand awareness. Paid media alone wasn't enough — the brand needed social proof and authentic reach to build trust with new buyers.",
    what: "Layered influencer marketing on top of paid media to build awareness, then captured that demand through optimised Meta campaigns and Shopify CRO. WhatsApp flows handled retention and COD confirmation.",
    fill: ["ROAS before & after", "3-4X ROAS consistently delivered through strategic influencer partnerships\n\n", "25% Focus on Micro & Nano-Influencer Marketing (where the real ROI lives)\n\n", "155% Monthly engagement growth", "Conversion rate before & after", "Repeat purchase rate"],
  },
  {
    slug: "dhauladhar-pickles",
    brand: "Dhauladhar Pickles",
    type: "Food & Beverage · Marketplace",
    result: "Meta Ads and marketplace listings to expand reach and scale monthly orders.",
    eyebrow: "Food & Beverage · Marketplace",
    subtitle: "Expanding a regional food brand's reach through marketplace listings and targeted paid media.",
    tags: ["Meta Ads", "Marketplace Management"],
    metrics: [
      { val: "Fill in", label: "Orders/month growth" },
      { val: "Fill in", label: "Marketplace GMV" },
      { val: "Fill in", label: "ROAS" },
      { val: "Fill in", label: "New marketplaces live" },
    ],
    challenge: "A beloved regional product with limited online distribution. The brand needed to be discoverable on the right marketplaces and supported by paid media to drive first purchases.",
    what: "Listed and optimised products across relevant marketplaces. Ran Meta campaigns to drive awareness and trial, linking ad traffic to marketplace and DTC product pages.",
    fill: ["Orders/month before & after", "Marketplace GMV per platform", "ROAS on Meta", "Number of marketplaces listed on", "Best-selling SKU data", "Return customer rate"],
  },
  {
    slug: "weekend-artist",
    brand: "Weekend Artist",
    type: "Candles & Workshops",
    result: "Full-funnel paid media and retention automation to scale candle sales and workshop bookings.",
    eyebrow: "Candles & Creative Workshops",
    subtitle: "Scaling both product sales and workshop bookings through full-funnel paid media and retention automation.",
    tags: ["Meta Ads", "Email Automation", "WhatsApp Flows"],
    metrics: [
      { val: "Fill in", label: "Workshop bookings growth" },
      { val: "Fill in", label: "Candle sales growth" },
      { val: "Fill in", label: "ROAS" },
      { val: "Fill in", label: "Retention rate" },
    ],
    challenge: "Weekend Artist had two revenue streams — physical candle sales and workshop bookings — each needing a different funnel and audience strategy.",
    what: "Built separate paid media funnels for candles and workshops. Set up email and WhatsApp retention flows to convert first-time buyers into repeat customers and workshop attendees.",
    fill: ["Workshop bookings before & after", "Candle revenue before & after", "ROAS per channel", "Email open & click rates", "WhatsApp flow conversion rate", "Customer LTV"],
  },
  {
    slug: "unacademy",
    brand: "Unacademy",
    type: "Edtech · ₹60Cr/month",
    result: "3× revenue growth and 30% increase in active users across a ₹60Cr/month vertical.",
    eyebrow: "Edtech · ₹60Cr/month vertical",
    subtitle: "Driving 3× revenue growth and 30% more active users on India's largest edtech platform.",
    tags: ["Performance Marketing", "Google Ads", "Meta Ads", "Funnel Optimisation"],
    metrics: [
      { val: "3×", label: "Revenue growth" },
      { val: "+30%", label: "Active users" },
      { val: "₹60Cr", label: "Monthly vertical size" },
      { val: "Fill in", label: "CAC improvement" },
    ],
    challenge: "Scaling a ₹60Cr/month vertical while maintaining efficiency in CAC across multiple subject verticals and audience segments.",
    what: "Managed large-scale paid media across Meta and Google, overseeing creative strategy, campaign testing, and optimisation. Worked on funnel improvements from ad to landing page to activation.",
    fill: ["CAC before & after", "ROAS or CPL data", "Channel-wise spend & revenue split", "Activation rate improvement", "Retention / resubscription rate"],
  },
];

export const getCase = (slug: string) => cases.find((c) => c.slug === slug);
