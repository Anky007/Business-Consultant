import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Edit3 } from "lucide-react";
import { getCase } from "@/data/cases";

const CALENDLY = "https://calendly.com/ankita-anshu12/30min";

const CaseStudy = () => {
  const { slug } = useParams();
  const c = slug ? getCase(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!c) {
    return (
      <div className="max-w-[680px] mx-auto px-5 py-20 text-center">
        <p className="text-neutral-600 mb-4">Case study not found.</p>
        <Link to="/" className="text-neutral-900 underline">Back to home</Link>
      </div>
    );
  }

  return (
    <div className="text-neutral-900" style={{ fontFamily: "'Inter', sans-serif" }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@400;500&display=swap"
      />
      <div className="max-w-[680px] mx-auto px-5">
        <nav className="flex justify-between items-center py-5 border-b border-neutral-200">
          <Link to="/" className="text-[18px] font-medium tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ankita Anshu
          </Link>
          <Link to="/" className="text-[13px] bg-neutral-900 text-white rounded-md px-4 py-[7px] font-medium hover:bg-neutral-800 transition">
            ← All work
          </Link>
        </nav>

        <div className="pt-8">
          <Link to="/" className="inline-flex items-center gap-1.5 text-[13px] text-neutral-600 hover:text-neutral-900 mb-8">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to all work
          </Link>

          <p className="text-[12px] tracking-[0.12em] uppercase text-neutral-500 mb-3">{c.eyebrow}</p>
          <h1 className="text-[34px] leading-[1.2] font-normal m-0 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            {c.brand}
          </h1>
          <p className="text-[15px] text-neutral-600 mb-8">{c.subtitle}</p>

          <div className="flex flex-wrap gap-1.5 mb-8">
            {c.tags.map((t) => (
              <span key={t} className="text-[11px] bg-neutral-100 text-neutral-600 rounded-full px-2.5 py-[3px]">
                {t}
              </span>
            ))}
          </div>

          <hr className="border-t border-neutral-200 my-8" />

          <p className="text-[11px] tracking-[0.12em] uppercase text-neutral-400 mb-3">Key results</p>
          <div className="grid gap-3 mb-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))" }}>
            {c.metrics.map((m) => (
              <div key={m.label} className="bg-neutral-100 rounded-md p-4">
                <div className="text-[26px] font-medium mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {m.val}
                </div>
                <div className="text-[12px] text-neutral-600">{m.label}</div>
              </div>
            ))}
          </div>

          <hr className="border-t border-neutral-200 my-8" />

          <p className="text-[11px] tracking-[0.12em] uppercase text-neutral-400 mb-3">The challenge</p>
          <p className="text-sm text-neutral-600 leading-[1.75] mb-6">{c.challenge}</p>

          <p className="text-[11px] tracking-[0.12em] uppercase text-neutral-400 mb-3">What I did</p>
          <p className="text-sm text-neutral-600 leading-[1.75] mb-6">{c.what}</p>

          <p className="text-[11px] tracking-[0.12em] uppercase text-neutral-400 mb-3">Metrics to fill in</p>
          <div className="space-y-2 mb-8">
            {c.fill.map((f) => (
              <div key={f} className="bg-neutral-100 rounded-md px-5 py-3 text-[13px] text-neutral-500 border border-dashed border-neutral-300 flex items-center gap-2">
                <Edit3 className="h-3.5 w-3.5" /> {f}
              </div>
            ))}
          </div>

          <hr className="border-t border-neutral-200 my-8" />

          <div className="bg-neutral-100 rounded-lg p-8 flex justify-between items-center gap-6 flex-wrap">
            <div className="flex-1 min-w-[240px]">
              <h3 className="text-[22px] font-normal mb-1.5" style={{ fontFamily: "'Playfair Display', serif" }}>
                Working on something similar?
              </h3>
              <p className="text-sm text-neutral-600 m-0">I'd love to hear about your brand and share a few ideas.</p>
            </div>
            <div className="flex flex-col gap-2.5 min-w-[200px]">
              <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="text-sm bg-neutral-900 text-white rounded-md px-[22px] py-[10px] font-medium text-center hover:bg-neutral-800 transition">
                Book a free call →
              </a>
              <a href="mailto:ankita.anshu12@gmail.com" className="text-sm bg-transparent text-neutral-600 border border-neutral-300 rounded-md px-[22px] py-[10px] text-center hover:bg-white transition">
                Email me
              </a>
            </div>
          </div>
          <div className="h-12" />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
