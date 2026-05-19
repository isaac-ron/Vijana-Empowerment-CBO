'use client';

import { useId, useState, type FormEvent } from 'react';

type Step = { title: string; body: string };

type Props = {
  /** Title shown on the form (e.g. "Enroll in Vijana Fashion Forge"). */
  formTitle: string;
  /** Heading above the timeline (e.g. "Ready to Start Your Journey?"). */
  sectionHeading: string;
  /** Lead paragraph under the heading. */
  sectionLead: string;
  /** 3-step "how to apply" timeline. Pass 3 entries for best layout. */
  steps: Step[];
  /** Specialization options shown in the select (program-specific). */
  interestOptions: string[];
  /** Optional id for the section wrapper so nav links can target it. */
  sectionId?: string;
  /** Optional footnote shown under the submit button. */
  footnote?: string;
};

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
    // TODO: wire up to backend / mailto / form endpoint when ready.
    setSubmitted(true);
  }

  return (
    <section
      id={sectionId}
      className="py-32 bg-cream-to-white relative overflow-hidden scroll-mt-24"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="flex-1 space-y-12 pr-0 md:pr-12">
            <div>
              <h2 className="text-display-lg-mobile md:text-display-lg text-primary mb-6">
                {sectionHeading}
              </h2>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">{sectionLead}</p>
            </div>
            <div className="space-y-10 border-l border-outline-variant/30 ml-4 pl-8 relative">
              {steps.map((step, i) => (
                <div key={step.title} className="relative">
                  <div className="absolute -left-[49px] top-0 w-8 h-8 rounded-full border-4 border-surface bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <h4 className="text-headline-sm text-on-surface mb-2">{step.title}</h4>
                  <p className="text-body-md text-on-surface-variant">{step.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full max-w-md md:max-w-none mx-auto">
            {submitted ? (
              <div className="bg-surface-container-highest/30 rounded-[2rem] p-10 border border-outline-variant/20 backdrop-blur-sm text-center space-y-6">
                <span
                  className="material-symbols-outlined text-primary text-6xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <h3 className="text-headline-sm text-primary">Application received</h3>
                <p className="text-body-md text-on-surface-variant">
                  Thank you. Our team will reach out within 3&nbsp;business days to schedule your
                  assessment interview.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-secondary text-label-md uppercase tracking-widest hover:text-primary transition-colors"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-surface-container-highest/30 rounded-[2rem] p-10 border border-outline-variant/20 space-y-6 backdrop-blur-sm"
              >
                <h3 className="text-headline-sm text-primary mb-2 border-b border-outline-variant/30 pb-4">
                  {formTitle}
                </h3>
                <div>
                  <label className="block text-label-md text-on-surface mb-2" htmlFor={nameId}>
                    Full Name
                  </label>
                  <input
                    id={nameId}
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="Jane Mutai"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-label-md text-on-surface mb-2" htmlFor={phoneId}>
                    Phone Number
                  </label>
                  <input
                    id={phoneId}
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="+254 700 000 000"
                    type="tel"
                  />
                </div>
                <div>
                  <label className="block text-label-md text-on-surface mb-2" htmlFor={ageId}>
                    Age
                  </label>
                  <input
                    id={ageId}
                    name="age"
                    required
                    min={16}
                    max={50}
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="22"
                    type="number"
                  />
                </div>
                <div>
                  <label className="block text-label-md text-on-surface mb-2" htmlFor={interestId}>
                    Primary Interest
                  </label>
                  <select
                    id={interestId}
                    name="interest"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none cursor-pointer"
                    defaultValue={interestOptions[0]}
                  >
                    {interestOptions.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <button
                  className="w-full bg-primary text-on-primary py-4 rounded-xl text-label-md uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all shadow-lg active:scale-95 mt-6"
                  type="submit"
                >
                  Submit Application
                </button>
                <p className="text-center text-label-sm text-on-surface-variant pt-4 opacity-80">
                  {footnote}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
