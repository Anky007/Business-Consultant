import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Edit3, TrendingUp, BarChart3, Wallet, PieChart } from "lucide-react";
import { getCase } from "@/data/cases";

const CALENDLY = "https://calendly.com/ankita-anshu12/30min";
const HEADING_FONT = "'Inter', system-ui, sans-serif";

const CaseStudy = () => {
  const { slug } = useParams();
  const c = slug ? getCase(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!c) {
    return (
      <div className="max-w-[680px] mx-auto px-5 py-20 text-center">
        <p className="text-[#5a5a5a] mb-4">Case study not found.</p>
        <Link to="/" className="text-[#1a1a1a] underline">Back to home</Link>
      </div>
    );
  }

  return (
    <div className="text-[#1a1a1a]">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
      />
      <div className="max-w-[1000px] mx-auto px-6">
        <nav className="flex justify-between items-center py-7">
          <Link to="/" className="text-[20px] font-bold tracking-tight" style={{ fontFamily: HEADING_FONT }}>
            Ankita Anshu
          </Link>
          <Link to="/" className="btn-pill-outline !py-2 !px-5 !text-[13px]">← All work</Link>
        </nav>

        <div className="pt-10">
          <Link to="/" className="inline-flex items-center gap-1.5 text-[13px] text-[#5a5a5a] hover:text-[#1a1a1a] mb-10">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to all work
          </Link>

          <p className="text-[12px] tracking-[0.18em] uppercase text-[#6b6b6b] mb-4 font-medium">{c.eyebrow}</p>
          <h1 className="text-[56px] md:text-[80px] leading-[0.95] font-black tracking-[-0.035em] m-0 mb-5" style={{ fontFamily: HEADING_FONT }}>
            {c.brand}
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#5a5a5a] mb-8 leading-[1.5] max-w-[720px]">{c.subtitle}</p>

          <div className="flex flex-wrap gap-2 mb-12">
            {c.tags.map((t) => (
              <span key={t} className="text-[12px] bg-[#1a1a1a]/5 text-[#1a1a1a] rounded-full px-3 py-1">
                {t}
              </span>
            ))}
          </div>

          <hr className="border-t border-[#1a1a1a]/10 my-10" />

          {/* Key results — gradient card */}
          <div className="relative rounded-[28px] p-[2px] mb-12 shadow-[0_20px_60px_-20px_rgba(80,120,200,0.35)]"
               style={{ background: "linear-gradient(160deg, #cfe0ff 0%, #e8efff 35%, #fdf2e4 70%, #f5d9bf 100%)" }}>
            <div className="rounded-[26px] bg-white p-7 md:p-9">
              <h3 className="text-[20px] md:text-[22px] font-bold tracking-tight mb-1" style={{ fontFamily: HEADING_FONT }}>
                Key results
              </h3>
              <p className="text-[13px] text-[#6b6b6b] mb-6">Performance snapshot from the engagement.</p>
              <div className="h-px bg-[#1a1a1a]/8 mb-6" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {c.metrics.map((m, i) => {
                  const Icon = [TrendingUp, BarChart3, Wallet, PieChart][i % 4];
                  return (
                    <div key={m.label} className="flex items-center gap-4">
                      <div className="shrink-0 h-12 w-12 rounded-full bg-[#f1efe9] flex items-center justify-center">
                        <Icon className="h-5 w-5 text-[#1a1a1a]" strokeWidth={1.75} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[26px] md:text-[28px] font-black tracking-tight leading-none" style={{ fontFamily: HEADING_FONT }}>
                          {m.val}
                        </div>
                        <div className="text-[13px] text-[#6b6b6b] mt-1 leading-tight">{m.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>


          <hr className="border-t border-[#1a1a1a]/10 my-10" />

          <p className="text-[12px] tracking-[0.18em] uppercase text-[#6b6b6b] mb-3 font-medium">The challenge</p>
          <p className="text-[16px] text-[#3a3a3a] leading-[1.7] mb-8 max-w-[720px]">{c.challenge}</p>

          <p className="text-[12px] tracking-[0.18em] uppercase text-[#6b6b6b] mb-3 font-medium">What I did</p>
          <p className="text-[16px] text-[#3a3a3a] leading-[1.7] mb-8 max-w-[720px]">{c.what}</p>

          <p className="text-[12px] tracking-[0.18em] uppercase text-[#6b6b6b] mb-4 font-medium">MEASURABLE GROWTH</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
            {c.fill.map((f) => {
              const match = f.trim().match(/^(#?[\d.,]+\s*(?:[xX%×])?)\s*(.*)$/);
              const stat = match ? match[1].trim() : "";
              const rest = match ? match[2].trim() : f.trim();
              return (
                <div
                  key={f}
                  className="group relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm border border-[#1a1a1a]/10 px-5 py-4 flex items-baseline gap-4 hover:border-[#1a1a1a]/25 hover:shadow-[0_8px_24px_-12px_rgba(80,120,200,0.3)] transition-all"
                >
                  {stat && (
                    <span
                      className="shrink-0 text-[28px] md:text-[34px] font-black tracking-[-0.03em] leading-none bg-clip-text text-transparent"
                      style={{
                        fontFamily: HEADING_FONT,
                        backgroundImage: "linear-gradient(135deg, #1a1a1a 0%, #4a6cf7 100%)",
                      }}
                    >
                      {stat}
                    </span>
                  )}
                  <span className="text-[14px] md:text-[15px] text-[#3a3a3a] leading-snug">{rest || f}</span>
                </div>
              );
            })}
          </div>

          <hr className="border-t border-[#1a1a1a]/10 my-10" />

          <div className="bg-white/60 backdrop-blur-sm border border-[#1a1a1a]/10 rounded-3xl p-10 md:p-12 text-center">
            <h3 className="text-[32px] md:text-[44px] font-black tracking-[-0.03em] leading-[1.05] mb-4" style={{ fontFamily: HEADING_FONT }}>
              Working on something similar?
            </h3>
            <p className="text-[16px] text-[#5a5a5a] m-0 mb-7 max-w-[520px] mx-auto">I'd love to hear about your brand and share a few ideas.</p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-pill-primary">
                <span className="pl-1">Book a free call</span>
                <span className="arrow-circle"><ArrowRight className="h-4 w-4" /></span>
              </a>
              <a href="mailto:ankita.anshu12@gmail.com" className="btn-pill-outline">Email me</a>
              <a href="https://wa.me/919085971270" target="_blank" rel="noopener noreferrer" className="btn-pill-outline">WhatsApp me</a>
            </div>
          </div>
          <div className="h-16" />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
