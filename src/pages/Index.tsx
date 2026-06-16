import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { cases as work } from "@/data/cases";

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

const stats = [
  { val: "7+", label: "Years in D2C growth" },
  { val: "50→5K+", label: "Orders/month scaled" },
  { val: "4–6×", label: "ROAS on paid campaigns" },
  { val: "₹60Cr", label: "Monthly ad spend managed" },
];

const CALENDLY = "https://calendly.com/ankita-anshu12/30min";

const HEADING_FONT = "'Inter', system-ui, sans-serif";

const Index = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="text-[#1a1a1a]">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
      />
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Nav */}
        <nav className="flex justify-between items-center py-7">
          <span className="text-[20px] font-bold tracking-tight" style={{ fontFamily: HEADING_FONT }}>
            Ankita Anshu
          </span>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-pill-primary">
            <span className="pl-1">Get free audit</span>
            <span className="arrow-circle"><ArrowRight className="h-4 w-4" /></span>
          </a>
        </nav>

        {/* Hero */}
        <section className="pt-16 pb-20 text-center">
          <p className="text-[12px] tracking-[0.18em] uppercase text-[#6b6b6b] mb-6 font-medium">
            D2C Growth Consultant · 7+ Years
          </p>
          <h1
            className="text-[64px] md:text-[88px] leading-[0.95] font-black tracking-[-0.035em] m-0 mb-8 max-w-[1000px] mx-auto"
            style={{ fontFamily: HEADING_FONT }}
          >
            Turn your D2C brand into a scalable revenue machine.
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#5a5a5a] leading-[1.5] max-w-[680px] mx-auto mb-10">
            From Shopify CRO to marketplace expansion — I help Indian D2C brands build the growth infrastructure that takes them from chaos to consistent scale.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-pill-primary">
              <span className="pl-1">Book a free audit</span>
              <span className="arrow-circle"><ArrowRight className="h-4 w-4" /></span>
            </a>
            <button onClick={() => scrollTo("aa-work")} className="btn-pill-outline">
              See past work
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-[#1a1a1a]/10 max-w-[900px] mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-left">
                <div className="text-[36px] font-black tracking-tight mb-1" style={{ fontFamily: HEADING_FONT }}>
                  {s.val}
                </div>
                <div className="text-[13px] text-[#6b6b6b]">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="py-16 border-t border-[#1a1a1a]/10">
          <p className="text-[12px] tracking-[0.18em] uppercase text-[#6b6b6b] mb-3 font-medium">What I do</p>
          <h2 className="text-[40px] md:text-[56px] font-black tracking-[-0.03em] leading-[1] mb-10 max-w-[720px]" style={{ fontFamily: HEADING_FONT }}>
            Services built for growth.
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="bg-white/60 backdrop-blur-sm border border-[#1a1a1a]/10 rounded-3xl px-7 py-7">
                <p className="text-[20px] font-bold mb-2 tracking-tight" style={{ fontFamily: HEADING_FONT }}>{s.title}</p>
                <p className="text-[15px] text-[#5a5a5a] leading-[1.6] m-0">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[12px] bg-[#1a1a1a]/5 text-[#1a1a1a] rounded-full px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work */}
        <section id="aa-work" className="py-16 border-t border-[#1a1a1a]/10">
          <p className="text-[12px] tracking-[0.18em] uppercase text-[#6b6b6b] mb-3 font-medium">Past work</p>
          <h2 className="text-[40px] md:text-[56px] font-black tracking-[-0.03em] leading-[1] mb-10 max-w-[720px]" style={{ fontFamily: HEADING_FONT }}>
            Results that compound.
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {work.map((w) => {
              const topMetrics = w.metrics.filter((m) => m.val.toLowerCase() !== "fill in").slice(0, 3);
              return (
                <Link
                  key={w.slug}
                  to={`/case/${w.slug}`}
                  className="group relative flex flex-col bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-[#1a1a1a]/10 hover:border-[#1a1a1a]/30 hover:bg-white transition"
                >
                  <p className="text-[20px] font-bold mb-1 tracking-tight" style={{ fontFamily: HEADING_FONT }}>{w.brand}</p>
                  <p className="text-[12px] text-[#6b6b6b] mb-3">{w.type}</p>
                  <p className="text-[14px] text-[#5a5a5a] leading-[1.55] m-0">{w.result}</p>

                  {topMetrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 mt-5 pt-5 border-t border-[#1a1a1a]/10">
                      {topMetrics.map((m) => (
                        <div key={m.label} className="text-left">
                          <div className="text-[20px] font-black tracking-tight leading-tight" style={{ fontFamily: HEADING_FONT }}>
                            {m.val}
                          </div>
                          <div className="text-[10px] text-[#6b6b6b] mt-1 leading-tight">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <span className="mt-5 self-start btn-pill-primary !py-1.5 !text-[13px]">
                    <span className="pl-1">View case study</span>
                    <span className="arrow-circle !w-7 !h-7"><ArrowRight className="h-3.5 w-3.5" /></span>
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section id="aa-contact" className="py-16 border-t border-[#1a1a1a]/10">
          <div className="bg-white/60 backdrop-blur-sm border border-[#1a1a1a]/10 rounded-3xl p-10 md:p-14 text-center">
            <h3 className="text-[40px] md:text-[56px] font-black tracking-[-0.03em] leading-[1] mb-4" style={{ fontFamily: HEADING_FONT }}>
              Get a free growth audit.
            </h3>
            <p className="text-[17px] text-[#5a5a5a] m-0 mb-8 max-w-[560px] mx-auto">
              Tell me about your brand — I'll share what's working, what's not, and where the real opportunity is.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-pill-primary">
                <span className="pl-1">Book a free call</span>
                <span className="arrow-circle"><ArrowRight className="h-4 w-4" /></span>
              </a>
              <a href="mailto:ankita.anshu12@gmail.com" className="btn-pill-outline">Email me</a>
              <a href="https://wa.me/919085971270" target="_blank" rel="noopener noreferrer" className="btn-pill-outline">WhatsApp me</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 border-t border-[#1a1a1a]/10 flex justify-between items-center flex-wrap gap-4">
          <span className="text-[13px] text-[#6b6b6b]">© 2026 Ankita Anshu</span>
          <div className="flex gap-6 items-center">
            <a href="tel:9085971270" className="text-[13px] text-[#1a1a1a] flex items-center gap-1.5 hover:opacity-70">
              <Phone className="h-3.5 w-3.5" /> 9085971270
            </a>
            <a href="mailto:ankita.anshu12@gmail.com" className="text-[13px] text-[#1a1a1a] flex items-center gap-1.5 hover:opacity-70">
              <Mail className="h-3.5 w-3.5" /> ankita.anshu12@gmail.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
