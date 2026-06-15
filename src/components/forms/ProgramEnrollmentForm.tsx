'use client';

import { useId, useState, type FormEvent } from 'react';

type Step = { title: string; body: string };

type Props = {
  formTitle: string;
  sectionHeading: string;
  sectionLead: string;
  steps: Step[];
  interestOptions: string[];
  sectionId?: string;
  footnote?: string;
};

const inputCls =
  'w-full px-4 py-3 border-2 border-black bg-white outline-none transition-all focus:border-[#9a1e14] focus:ring-2 focus:ring-[#fa7f2a]/40';

export default function ProgramEnrollmentForm({
  formTitle,
  sectionHeading,
  sectionLead,
  steps,
  interestOptions,
  sectionId = 'enroll',
  footnote = 'No application fee. Subsidized slots reserved for the most vulnerable youth.',
}: Props) {
  const nameId = useId();
  const phoneId = useId();
  const interestId = useId();
  const ageId = useId();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id={sectionId} className="bg-[#120d0b] text-[#fdf3e8] border-t-2 border-black scroll-mt-24">
      <div className="bv-wrap py-16 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="bv-reveal space-y-10">
          <div>
            <span className="bv-kicker bv-kicker-light">Apply now</span>
            <h2 className="font-display font-extrabold text-[clamp(2.2rem,5vw,3.6rem)] leading-none tracking-[-0.03em] mt-4 mb-5 text-white">
              {sectionHeading}
            </h2>
            <p className="text-[#fdf3e8]/80 text-body-lg leading-relaxed max-w-[48ch]">{sectionLead}</p>
          </div>
          <div className="space-y-7">
            {steps.map((step, i) => (
              <div key={step.title} className="flex gap-5">
                <span className="shrink-0 grid place-items-center w-10 h-10 bg-[#fa7f2a] text-[#120d0b] font-display font-extrabold">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-display font-bold text-headline-sm text-white mb-1">{step.title}</h4>
                  <p className="text-[#fdf3e8]/70 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bv-reveal w-full">
          {submitted ? (
            <div className="bg-white text-[#120d0b] p-10 text-center space-y-5 bv-border-3" style={{ boxShadow: '10px 10px 0 0 #fa7f2a' }}>
              <span className="material-symbols-outlined text-[#9a1e14] text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <h3 className="font-display font-bold text-headline-sm text-[#9a1e14]">Application received</h3>
              <p className="text-on-surface-variant">
                Thank you. Our team will reach out within 3&nbsp;business days to schedule your
                assessment interview.
              </p>
              <button type="button" onClick={() => setSubmitted(false)} className="font-display font-bold text-[#9a1e14] uppercase tracking-widest text-label-md hover:text-[#5e0f0a] transition-colors">
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white text-[#120d0b] p-8 md:p-10 space-y-5 bv-border-3" style={{ boxShadow: '10px 10px 0 0 #fa7f2a' }}>
              <h3 className="font-display font-bold text-headline-sm text-[#9a1e14] border-b-2 border-black pb-4">{formTitle}</h3>
              <div>
                <label className="block font-display font-bold text-label-md mb-2" htmlFor={nameId}>Full name</label>
                <input id={nameId} name="name" required className={inputCls} placeholder="Jane Mutai" type="text" />
              </div>
              <div>
                <label className="block font-display font-bold text-label-md mb-2" htmlFor={phoneId}>Phone number</label>
                <input id={phoneId} name="phone" required className={inputCls} placeholder="+254 700 000 000" type="tel" />
              </div>
              <div>
                <label className="block font-display font-bold text-label-md mb-2" htmlFor={ageId}>Age</label>
                <input id={ageId} name="age" required min={16} max={50} className={inputCls} placeholder="22" type="number" />
              </div>
              <div>
                <label className="block font-display font-bold text-label-md mb-2" htmlFor={interestId}>Primary interest</label>
                <select id={interestId} name="interest" required className={inputCls + ' appearance-none cursor-pointer'} defaultValue={interestOptions[0]}>
                  {interestOptions.map((opt) => <option key={opt}>{opt}</option>)}
                </select>
              </div>
              <button className="bv-btn bv-btn-red w-full justify-center mt-2" type="submit">
                Submit application <span className="arr" aria-hidden>→</span>
              </button>
              <p className="text-center text-label-sm text-on-surface-variant pt-2">{footnote}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
