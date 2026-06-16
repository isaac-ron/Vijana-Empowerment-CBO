import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import DonationForm from '@/components/forms/DonationForm';
import { IMG, uns } from '@/lib/images';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Get Involved',
  description:
    'Donate, sponsor a youth, partner with us, or volunteer your skills. Help fund vocational training, mentorship, and entrepreneurship support in Sotik Sub-County.',
  path: '/get-involved/',
});

const WAYS = [
  { icon: 'volunteer_activism', title: 'One-time gift', body: 'Direct financial support that provides immediate resources to our ongoing training cohorts.', cta: 'Give now', href: '#donate-form' },
  { icon: 'workspace_premium', title: 'Sponsor a youth', body: 'Sponsor a specific student through a full training cycle, with regular progress updates.', cta: 'Sponsor a youth', href: '#partnership' },
  { icon: 'handshake', title: 'Corporate partnership', body: 'Long-term partnerships covering CSR, equipment, internships, and graduate hiring pipelines.', cta: 'Partner with us', href: '#partnership' },
  { icon: 'psychology', title: 'Mentorship', body: 'Volunteer your professional skills to coach graduates entering the workforce or starting a business.', cta: 'Volunteer your skills', href: '#partnership' },
];

const BUDGET = [
  { t: 'Instructor fees', v: 'KES 1.5M', d: 'Expert mentorship and training delivery.' },
  { t: 'Rent & utilities', v: 'KES 300K', d: 'Safe community training spaces (6 months).' },
  { t: 'Marketing & outreach', v: 'KES 200K', d: 'Recruitment of beneficiaries and partners.' },
  { t: 'Admin & contingency', v: 'KES 500K', d: 'Operations, audits, and reserves.' },
];

export default function GetInvolvedPage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b-2 border-black">
        <div className="bv-wrap py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="bv-reveal">
            <span className="bv-kicker">Join the mission</span>
            <h1 className="font-display font-extrabold text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.92] tracking-[-0.04em] mt-4 text-[#120d0b]">
              Empower Kenyan youth through strategic partnership.
            </h1>
            <p className="text-on-surface-variant text-body-lg mt-6 leading-relaxed max-w-[52ch]">
              We&rsquo;re more than a charity. We are an investment in the next generation of
              innovators, artisans, drivers, and leaders. Your support fuels sustainable community
              growth in Sotik Sub-County and beyond.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="#donate-form" className="bv-btn bv-btn-red">Donate now <span className="arr" aria-hidden>→</span></Link>
              <Link href="#partnership" className="bv-btn bv-btn-out">Become a partner</Link>
            </div>
          </div>
          <div className="bv-reveal relative aspect-[4/3] bv-border-3 bv-shadow-red overflow-hidden">
            <Image src={uns(IMG.collab, 1000)} alt="Diverse youth collaborating in a workshop space" fill sizes="(max-width:1024px) 100vw, 560px" className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Budget transparency */}
      <section className="bv-wrap py-16 md:py-28">
        <div className="max-w-2xl mb-12 bv-reveal">
          <span className="bv-kicker">Financial transparency</span>
          <h2 className="font-display font-extrabold text-[clamp(2rem,4.4vw,3.2rem)] leading-none tracking-[-0.03em] mt-4 text-[#120d0b]">
            Where the KES 4.5M goes.
          </h2>
          <p className="text-on-surface-variant text-body-lg mt-5 leading-relaxed">
            We believe in radical accountability. Here is the breakdown of our estimated project
            budget covering setup and the first year of programming.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div className="bv-reveal bg-[#120d0b] text-white p-8 md:p-10 bv-border">
            <span className="bv-kicker bv-kicker-light">Major allocation</span>
            <h3 className="font-display font-extrabold text-headline-md mt-3 mb-3">Equipment & materials</h3>
            <p className="text-[#fdf3e8]/75 leading-relaxed mb-7 max-w-[40ch]">
              Specialized tools for tailoring, beauty therapy, mechanics, and a fully equipped digital
              lab so training matches industry standards from day one.
            </p>
            <div className="font-display font-extrabold text-[clamp(2.6rem,5vw,3.6rem)] leading-none text-[#fa7f2a]">KES 2M</div>
            <div className="mt-5 h-2.5 w-full bg-white/15">
              <div className="h-full w-[44%] bg-[#fa7f2a]" />
            </div>
            <p className="font-display text-label-md uppercase tracking-wide text-[#fdf3e8]/60 mt-2">~44% of total budget</p>
          </div>
          <div className="bv-reveal grid sm:grid-cols-2 gap-px bg-black bv-border">
            {BUDGET.map((b) => (
              <div key={b.t} className="bg-[#fdf3e8] p-6">
                <div className="font-display font-extrabold text-2xl text-[#9a1e14]">{b.v}</div>
                <h4 className="font-display font-bold text-headline-sm text-[#120d0b] mt-1.5">{b.t}</h4>
                <p className="text-on-surface-variant text-body-md mt-1">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to help */}
      <section className="bg-[#120d0b] text-[#fdf3e8] border-y-2 border-black">
        <div className="bv-wrap py-16 md:py-28">
          <h2 className="bv-reveal font-display font-extrabold text-[clamp(2rem,4.4vw,3.2rem)] leading-none tracking-[-0.03em] mb-12 text-white text-center">
            Ways you can make an impact.
          </h2>
          <div className="bv-grid bv-grid-dark">
            {WAYS.map((w) => (
              <div key={w.title} className="bv-reveal p-8 flex flex-col min-h-[240px]">
                <span className="material-symbols-outlined text-[#fa7f2a] text-[40px] mb-5">{w.icon}</span>
                <h3 className="font-display font-bold text-headline-sm text-white mb-2">{w.title}</h3>
                <p className="text-[#fdf3e8]/70 flex-1 leading-relaxed">{w.body}</p>
                <a href={w.href} className="mt-5 inline-flex items-center gap-1.5 font-display font-bold text-[#fa7f2a] group">
                  {w.cta}
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation + partnership */}
      <section id="donate-form" className="bv-wrap py-16 md:py-28 scroll-mt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-8">
            <div className="flex items-center gap-4 border-b-2 border-black pb-5">
              <span className="material-symbols-outlined text-3xl text-[#9a1e14]">security</span>
              <div>
                <h3 className="font-display font-bold text-headline-sm text-[#120d0b]">Secure donation</h3>
                <p className="text-label-sm text-on-surface-variant">Processed by trusted M-Pesa and card partners</p>
              </div>
            </div>
            <DonationForm />
          </div>

          <div id="partnership" className="space-y-10 lg:pl-12 lg:border-l-2 lg:border-black scroll-mt-24">
            <div>
              <h3 className="font-display font-extrabold text-headline-md text-[#120d0b] mb-5">Partner & apply inquiries</h3>
              <p className="text-on-surface-variant text-body-lg leading-relaxed">
                Looking to fund a cohort, sponsor a student, or apply for training? Our team is ready
                to talk, whether you&rsquo;re a prospective partner or a prospective student.
              </p>
            </div>
            <div id="apply" className="space-y-6 scroll-mt-24">
              {[
                { icon: 'mail', t: 'Email coordination', lines: ['hello@vijanaempowerment.org', 'partnerships@vijanaempowerment.org'] },
                { icon: 'call', t: 'Direct line', lines: ['+254 700 000 000'] },
                { icon: 'location_on', t: 'Visit our hub', lines: ['Sotik Town Center, Sotik Sub-County, Bomet County, Kenya.'] },
              ].map((c) => (
                <div key={c.t} className="flex gap-5 items-start">
                  <span className="material-symbols-outlined text-3xl text-[#9a1e14] mt-1">{c.icon}</span>
                  <div>
                    <h4 className="font-display font-bold text-label-md text-[#120d0b] mb-1">{c.t}</h4>
                    {c.lines.map((l) => <p key={l} className="text-on-surface-variant">{l}</p>)}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#fa7f2a] text-[#120d0b] p-7 bv-border">
              <p className="font-display font-bold text-body-lg italic leading-relaxed">
                &ldquo;When youths are equipped with practical skills and confidence, entire
                communities thrive.&rdquo;
              </p>
              <p className="font-display text-label-sm uppercase tracking-widest mt-3">— Vijana Empowerment Initiative</p>
            </div>
            <Link href="/programs" className="bv-btn bv-btn-black">Browse all programs <span className="arr" aria-hidden>→</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
