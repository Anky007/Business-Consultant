import React from "react";
import { ArrowRight, Phone, Mail, Linkedin } from "lucide-react";

const services = [
  {
    title: "Shopify Development & CRO",
    desc: "Store builds, theme customisation, and conversion rate optimisation that turn browsers into buyers.",
    tags: ["Shopify", "Landing pages", "A/B testing"],
  },
  {
    title: "WhatsApp & Email Automation",
    desc: "COD confirmation flows, cart recovery, and customer support automation that reduce RTO and boost retention.",
    tags: ["WhatsApp flows", "Cart recovery", "COD confirmation", "Klaviyo"],
  },
  {
    title: "Meta, Google, YouTube & Pinterest Ads",
    desc: "Full-funnel paid media — creative strategy, campaign setup, ongoing optimisation, and scaling to 4–6× ROAS.",
    tags: ["Meta Ads", "Google Ads", "YouTube", "Pinterest"],
  },
  {
    title: "Marketplace Management",
    desc: "End-to-end presence on Myntra, Nykaa, and other lifestyle & luxury marketplaces — listings, cataloguing, and growth.",
    tags: ["Myntra", "Nykaa", "Luxury marketplaces"],
  },
];

const work = [
  { brand: "Gullye", type: "Luxury Bags & Accessories · D2C", result: "Meta & Pinterest Ads + Shopify CRO — improved conversions and streamlined operations." },
  { brand: "Delta Charms", type: "Jewelry · D2C", result: "Meta Ads + WhatsApp flows + Shopify CRO — improved conversions and streamlined operations." },
  { brand: "Vasundhara Jewellery", type: "Jewelry · D2C", result: "Meta Ads + WhatsApp flows + Shopify CRO + Influencer Marketing — improved brand recognition and conversions." },
  { brand: "Dhauladhar Pickles", type: "Food & Beverage · Marketplace", result: "Meta Ads and marketplace listings to expand reach and scale monthly orders." },
  { brand: "Weekend Artist", type: "Candles & Workshops", result: "Full-funnel paid media and retention automation to scale candle sales and workshop bookings." },
  { brand: "Unacademy", type: "Edtech · ₹60Cr/month", result: "3× revenue growth and 30% increase in active users across a ₹60Cr/month vertical." },
  { brand: "OYO Rooms", type: "Hospitality · ₹17Cr/month", result: "40% increase in productivity and ₹17Cr+ in NRV." },
];

const stats = [
  { val: "7+", label: "Years in D2C growth" },
  { val: "50→5K+", label: "Orders/month scaled" },
  { val: "4–6×", label: "ROAS on paid campaigns" },
  { val: "₹60Cr", label: "Monthly ad spend managed" },
];

const CALENDLY = "https://calendly.com/ankita-anshu12/30min";

const Index = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="font-sans text-neutral-900" style={{ fontFamily: "'Inter', sans-serif" }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@400;500&display=swap"
      />
      <div className="max-w-[680px] mx-auto px-5">
        {/* Nav */}
        <nav className="flex justify-between items-center py-5 border-b border-neutral-200">
          <span
            className="text-[18px] font-medium tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ankita Anshu
          </span>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] bg-neutral-900 text-white rounded-md px-4 py-[7px] font-medium hover:bg-neutral-800 transition"
          >
            Get free audit
          </a>
        </nav>

        {/* Hero */}
        <section className="pt-14 pb-10">
          <p className="text-[12px] tracking-[0.12em] uppercase text-neutral-500 mb-4">
            D2C Growth Consultant · 7+ Years
          </p>
          <h1
            className="text-[40px] leading-[1.18] font-normal m-0 mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Turn your D2C brand into
            <br />a <em>scalable</em> revenue machine.
          </h1>
          <p className="text-base text-neutral-600 leading-[1.7] max-w-[520px] mb-8">
            From Shopify CRO to marketplace expansion — I help Indian D2C brands build the growth infrastructure that takes them from chaos to consistent scale.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-neutral-900 text-white rounded-md px-[22px] py-[10px] font-medium hover:bg-neutral-800 transition inline-flex items-center gap-2"
            >
              Book a free audit <ArrowRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => scrollTo("aa-work")}
              className="text-sm bg-transparent text-neutral-600 border border-neutral-300 rounded-md px-[22px] py-[10px] hover:bg-neutral-50 transition"
            >
              See past work
            </button>
          </div>

          <div className="flex gap-10 flex-wrap mt-12 pt-8 border-t border-neutral-200">
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  className="text-[28px] font-medium mb-0.5"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {s.val}
                </div>
                <div className="text-[12px] text-neutral-500">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="py-10 border-t border-neutral-200">
          <p className="text-[11px] tracking-[0.12em] uppercase text-neutral-400 mb-7">
            What I do
          </p>
          <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))" }}>
            {services.map((s) => (
              <div key={s.title} className="bg-white border border-neutral-200 rounded-lg px-6 py-5">
                <p className="text-[15px] font-medium mb-1.5">{s.title}</p>
                <p className="text-[13px] text-neutral-600 leading-[1.6] m-0">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-3.5">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[11px] bg-neutral-100 text-neutral-600 rounded-full px-2.5 py-[3px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work */}
        <section id="aa-work" className="py-10 border-t border-neutral-200">
          <p className="text-[11px] tracking-[0.12em] uppercase text-neutral-400 mb-7">
            Past work
          </p>
          <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))" }}>
            {work.map((w) => (
              <div key={w.brand} className="bg-neutral-100 rounded-lg p-5">
                <p className="text-sm font-medium mb-1">{w.brand}</p>
                <p className="text-[12px] text-neutral-400 mb-3">{w.type}</p>
                <p className="text-[13px] text-neutral-600 leading-[1.5] m-0">{w.result}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="aa-contact" className="py-10 border-t border-neutral-200">
          <div className="bg-neutral-100 rounded-lg p-8 flex justify-between items-center gap-6 flex-wrap">
            <div className="flex-1 min-w-[240px]">
              <h3
                className="text-[22px] font-normal mb-1.5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Get a free growth audit.
              </h3>
              <p className="text-sm text-neutral-600 m-0">
                Tell me about your brand — I'll share what's working, what's not, and where the real opportunity is.
              </p>
            </div>
            <div className="flex flex-col gap-2.5 min-w-[200px]">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm bg-neutral-900 text-white rounded-md px-[22px] py-[10px] font-medium text-center hover:bg-neutral-800 transition"
              >
                Book a free call →
              </a>
              <a
                href="mailto:ankita.anshu12@gmail.com"
                className="text-sm bg-transparent text-neutral-600 border border-neutral-300 rounded-md px-[22px] py-[10px] text-center hover:bg-white transition"
              >
                Email me
              </a>
              <a
                href="https://www.linkedin.com/in/ankitaanshu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm bg-transparent text-neutral-600 border border-neutral-300 rounded-md px-[22px] py-[10px] text-center hover:bg-white transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-7 border-t border-neutral-200 flex justify-between items-center flex-wrap gap-4">
          <span className="text-[13px] text-neutral-400">© 2026 Ankita Anshu</span>
          <div className="flex gap-5 items-center">
            <a href="tel:9085971270" className="text-[13px] text-neutral-600 flex items-center gap-1.5 hover:text-neutral-900">
              <Phone className="h-3.5 w-3.5" /> 9085971270
            </a>
            <a href="mailto:ankita.anshu12@gmail.com" className="text-[13px] text-neutral-600 flex items-center gap-1.5 hover:text-neutral-900">
              <Mail className="h-3.5 w-3.5" /> ankita.anshu12@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/ankitaanshu/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-neutral-600 flex items-center gap-1.5 hover:text-neutral-900">
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
