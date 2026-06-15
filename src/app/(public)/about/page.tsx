import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { IMG, uns } from '@/lib/images';

export const metadata: Metadata = {
  title: 'About Us | Vijana Empowerment Initiative',
  description:
    'A community-based organization in Sotik Sub-County, Bomet County, serving teenage mothers, orphans, persons with disabilities, and youth seeking self-employment.',
};

type Member = { name: string; role: string; bio: string; img: string };

// NOTE: names + bios are placeholders for client preview; swap for real
// leadership details once finalized.
const LEADERSHIP: Member[] = [
  { name: 'John Doe', role: 'Executive Director', bio: 'Founding director with 15+ years guiding community development and TVET initiatives across Bomet County.', img: IMG.manPro },
  { name: 'Jane Smith', role: 'Programs Coordinator', bio: 'Designs curriculum and tracks learner outcomes across all four vocational tracks.', img: IMG.womanPro },
  { name: 'John Smith', role: 'Community Liaison', bio: 'Connects the initiative with chiefs, faith leaders, and local government partners across Sotik.', img: IMG.instr3 },
  { name: 'Jane Doe', role: 'Finance & Operations', bio: 'Stewards day-to-day finances, donor reporting, and compliance with the Department of Social Services.', img: IMG.womanLaptop },
];

const INSTRUCTORS: Member[] = [
  { name: 'Mary Kemboi', role: 'Lead Instructor — Fashion Forge', bio: 'Tailor and pattern-maker with 12 years running her own workshop in Sotik town.', img: IMG.instr1 },
  { name: 'Linet Cherono', role: 'Lead Instructor — Glow with Vijana', bio: 'Salon owner and certified beauty therapist focused on locally-sourced product mastery.', img: IMG.instr2 },
  { name: 'Peter Mutai', role: 'Lead Instructor — Vijana Wheels', bio: 'NTSA-certified driving instructor and mechanic, formerly with a regional logistics fleet.', img: IMG.instr4 },
  { name: 'Brian Korir', role: 'Lead Instructor — Digital Hub', bio: 'Freelance web developer and digital-marketing trainer, building youth into remote workers.', img: IMG.manPro },
];

const ED_STATEMENTS = [
  'When we registered Vijana Empowerment Initiative, we set ourselves a simple test: would a young mother walking past our hub on her way to fetch water see a future for herself inside it? Every decision we make is measured against that question.',
  'We are not a substitute for the public TVET system, we are a bridge. We meet learners where they are, equip them with skills the local market will actually pay for, and walk with them into their first job or their first business.',
  'To our partners and donors: we promise transparency. Every shilling has an owner, and that owner is a young person in Sotik whose life is changing because you chose to invest in them.',
];

const OUTCOMES = [
  { n: '80', u: '%', t: 'Employment rate', d: 'Of graduates employed or self-employed within 6 months of finishing.', c: '#ffffff' },
  { n: '50', u: '%', t: 'Income growth', d: 'Average increase in beneficiary income within one year of graduation.', c: '#fa7f2a' },
  { n: '90', u: '%', t: 'Confidence & life skills', d: 'Of graduates report real improvements in confidence and self-advocacy.', c: '#f6a72c' },
];

const PHASES = [
  { p: 'Phase 1', t: 'First 3 months', h: 'Setup & Launch', b: 'Secure premises, acquire equipment, recruit instructors, launch the Fashion & Design pilot, and enroll the first cohort of 20–30 students.' },
  { p: 'Phase 2', t: '6 – 12 months', h: 'Expansion', b: 'Introduce the remaining programs, scale intake to 50–100, and build partnerships with local businesses for internships and job placement.' },
  { p: 'Phase 3', t: 'Year 2 and beyond', h: 'Sustainability', b: 'Embed community ownership, generate income through subsidized fees and services, and deepen integration with county and national programs.' },
];

const ACCOUNT = [
  { icon: 'fact_check', t: 'Regular Assessments', b: 'Progress reviews with each cohort to capture feedback and adapt the curriculum.' },
  { icon: 'query_stats', t: 'Graduate Tracking', b: 'We follow alumni employment and income for at least 12–24 months after graduation.' },
  { icon: 'group_work', t: 'Annual Impact Evaluations', b: 'Transparent yearly reporting to donors, partners, and the wider community.' },
];

function People({ items }: { items: Member[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
      {items.map((m) => (
        <article key={m.name + m.role} className="group bv-reveal flex flex-col">
          <div className="relative aspect-[4/5] bv-border overflow-hidden mb-4">
            <Image src={uns(m.img, 500)} alt={`Portrait of ${m.name}`} fill sizes="(max-width:1024px) 50vw, 280px" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
          <h3 className="font-display font-bold text-headline-sm text-[#120d0b]">{m.name}</h3>
          <p className="font-display text-label-md text-[#9a1e14] uppercase tracking-wider mt-1 mb-2">{m.role}</p>
          <p className="text-on-surface-variant text-body-md leading-relaxed">{m.bio}</p>
        </article>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b-2 border-black">
        <div className="bv-wrap py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="bv-reveal">
            <span className="bv-kicker">Our mission in Bomet County</span>
            <h1 className="font-display font-extrabold text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.92] tracking-[-0.04em] mt-4 text-[#120d0b]">
              Empowering the unseen potential of youth.
            </h1>
            <p className="text-on-surface-variant text-body-lg mt-6 leading-relaxed max-w-[54ch]">
              In Sotik Sub-County and the wider Bomet County, youth unemployment is a major barrier
              to development. For teenage mothers, orphans, persons with disabilities, and school
              leavers from low-income households, those challenges are compounded by limited capital,
              few mentors, and few marketable skills.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <span className="flex items-center gap-2 font-display font-bold text-[#9a1e14]"><span className="material-symbols-outlined">check_circle</span> Locally led</span>
              <span className="flex items-center gap-2 font-display font-bold text-[#9a1e14]"><span className="material-symbols-outlined">check_circle</span> Inclusive by design</span>
            </div>
          </div>
          <div className="bv-reveal relative">
            <div className="relative aspect-[4/3] bv-border-3 bv-shadow-red overflow-hidden">
              <Image src={uns(IMG.groupLaptop, 1000)} alt="Young people collaborating in a workshop" fill sizes="(max-width:768px) 100vw, 560px" className="object-cover" priority />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-[#fa7f2a] text-[#120d0b] p-5 max-w-[230px] bv-border">
              <p className="font-display font-extrabold text-3xl leading-none">65%</p>
              <p className="text-label-sm mt-1.5">Youth unemployment rate in rural Bomet clusters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="bv-wrap py-16 md:py-28">
        <div className="max-w-3xl mb-12 bv-reveal">
          <span className="bv-kicker">Who we serve</span>
          <h2 className="font-display font-extrabold text-[clamp(2rem,4.4vw,3.2rem)] leading-none tracking-[-0.03em] mt-4 text-[#120d0b]">
            We train the young people most programs pass over.
          </h2>
          <p className="text-on-surface-variant text-body-lg mt-5 leading-relaxed">
            We focus on youth aged 18–35 facing the steepest climb toward financial independence,
            turning vulnerability into community strength.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="bv-reveal relative aspect-[4/3] bv-border-3 overflow-hidden" style={{ boxShadow: '12px 12px 0 0 #9a1e14' }}>
            <Image src={uns(IMG.handsStack, 1000)} alt="Many hands stacked together in a circle" fill sizes="(max-width:768px) 100vw, 560px" className="object-cover" />
          </div>
          <div className="bv-reveal space-y-8">
            {[
              { t: 'Teenage mothers, single mothers & orphans', b: 'Bridging isolation and economic participation through flexible schedules and supportive mentorship.' },
              { t: 'Persons with disabilities', b: 'Adaptive training modules designed for inclusivity and accessibility from day one.' },
              { t: 'School leavers', b: 'Catching talent immediately after school to prevent long-term unemployment and rural-urban migration.' },
            ].map((x) => (
              <div key={x.t} className="pl-5 border-l-4 border-[#fa7f2a]">
                <h3 className="font-display font-bold text-headline-sm text-[#120d0b] mb-1.5">{x.t}</h3>
                <p className="text-on-surface-variant leading-relaxed">{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes (black) */}
      <section className="bg-[#120d0b] text-[#fdf3e8] border-y-2 border-black">
        <div className="bv-wrap py-16 md:py-24">
          <div className="bv-reveal mb-12 max-w-2xl">
            <span className="bv-kicker bv-kicker-light">Our expected outcomes</span>
            <h2 className="font-display font-extrabold text-[clamp(2rem,4.4vw,3.2rem)] leading-none tracking-[-0.03em] mt-4 text-white">
              Targeting measurable change.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-y-10">
            {OUTCOMES.map((o, i) => (
              <div key={o.t} className={'bv-reveal px-0 sm:px-8 ' + (i > 0 ? 'sm:border-l-2 sm:border-white/18' : '')}>
                <div className="font-display font-extrabold text-[clamp(3rem,6vw,4.6rem)] leading-none tracking-[-0.05em]" style={{ color: o.c }}>
                  {o.n}<span className="text-[0.5em] align-super text-[#fa7f2a]">{o.u}</span>
                </div>
                <h3 className="font-display font-bold text-headline-sm mt-3 text-white">{o.t}</h3>
                <p className="text-[#fdf3e8]/70 mt-2 max-w-[28ch]">{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bv-wrap py-16 md:py-28">
        <div className="bv-reveal mb-12">
          <span className="bv-kicker">How we scale</span>
          <h2 className="font-display font-extrabold text-[clamp(2rem,4.4vw,3.2rem)] leading-none tracking-[-0.03em] mt-4 text-[#120d0b]">
            Implementation roadmap.
          </h2>
        </div>
        <div className="bv-grid">
          {PHASES.map((ph, i) => (
            <div key={ph.p} className="bv-reveal p-8">
              <span className="font-display font-extrabold text-[#fa7f2a] text-2xl">0{i + 1}</span>
              <p className="font-display text-label-md uppercase tracking-widest text-[#9a1e14] mt-3">{ph.p} · {ph.t}</p>
              <h3 className="font-display font-bold text-headline-sm mt-2 mb-3 text-[#120d0b]">{ph.h}</h3>
              <p className="text-on-surface-variant leading-relaxed">{ph.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accountability */}
      <section className="bv-wrap pb-16 md:pb-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bv-reveal order-2 md:order-1 space-y-8">
            {ACCOUNT.map((a) => (
              <div key={a.t} className="flex gap-5 border-b border-black/15 pb-6">
                <span className="material-symbols-outlined text-[#9a1e14] text-4xl">{a.icon}</span>
                <div>
                  <h4 className="font-display font-bold text-headline-sm text-[#120d0b] mb-1.5">{a.t}</h4>
                  <p className="text-on-surface-variant leading-relaxed">{a.b}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bv-reveal order-1 md:order-2">
            <span className="bv-kicker">Transparency first</span>
            <h2 className="font-display font-extrabold text-[clamp(2rem,4.4vw,3.2rem)] leading-none tracking-[-0.03em] mt-4 mb-6 text-[#120d0b]">
              Accountability & evaluation.
            </h2>
            <p className="text-on-surface-variant text-body-lg leading-relaxed mb-8">
              Transparency is the core of our partnership with donors and the community. We
              don&rsquo;t just count numbers; we measure the real shift in human agency and local
              economic resilience.
            </p>
            <Link href="/impact" className="bv-btn bv-btn-black">
              See our impact <span className="arr" aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ED statement (black) */}
      <section id="director" className="bg-[#120d0b] text-[#fdf3e8] border-y-2 border-black">
        <div className="bv-wrap py-16 md:py-28 grid lg:grid-cols-[0.4fr_0.6fr] gap-12 lg:gap-20 items-start">
          <div className="bv-reveal">
            <div className="relative aspect-[4/5] bv-border-3 overflow-hidden" style={{ boxShadow: '12px 12px 0 0 #9a1e14' }}>
              <Image src={uns(LEADERSHIP[0].img, 600)} alt={`Portrait of ${LEADERSHIP[0].name}`} fill sizes="(max-width:1024px) 100vw, 400px" className="object-cover" />
            </div>
            <p className="font-display text-label-md uppercase tracking-widest text-[#fa7f2a] mt-5">Executive Director</p>
            <h3 className="font-display font-bold text-headline-sm text-white">{LEADERSHIP[0].name}</h3>
          </div>
          <div className="bv-reveal space-y-7">
            <h2 className="font-display font-extrabold text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.02] tracking-[-0.03em] text-white">
              &ldquo;Skills, dignity, and a path forward. That&rsquo;s the work.&rdquo;
            </h2>
            <div className="space-y-5 border-l-4 border-[#fa7f2a] pl-7">
              {ED_STATEMENTS.map((p) => (
                <p key={p.slice(0, 20)} className="text-[#fdf3e8]/80 text-body-lg leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bv-wrap py-16 md:py-28">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12 border-b-2 border-black pb-10">
          <div className="max-w-2xl bv-reveal">
            <span className="bv-kicker">Our people</span>
            <h2 className="font-display font-extrabold text-[clamp(2rem,4.4vw,3.2rem)] leading-none tracking-[-0.03em] mt-4 mb-5 text-[#120d0b]">
              Led by the community.
            </h2>
            <p className="text-on-surface-variant text-body-lg leading-relaxed">
              Community members, educators, and local entrepreneurs who came together because they
              intimately understand the landscape of Sotik and the wider Bomet County.
            </p>
          </div>
          <Link href="/get-involved" className="bv-btn bv-btn-out whitespace-nowrap">Join the team</Link>
        </div>

        <p className="font-display text-label-md uppercase tracking-widest text-on-surface-variant mb-8">Leadership</p>
        <People items={LEADERSHIP} />

        <p className="font-display text-label-md uppercase tracking-widest text-on-surface-variant mt-16 mb-8 pt-12 border-t-2 border-black">Lead instructors</p>
        <People items={INSTRUCTORS} />

        <p className="mt-14 text-center text-on-surface-variant">
          Plus a growing circle of volunteer mentors, alumni, and community partners.{' '}
          <Link href="/get-involved" className="text-[#9a1e14] font-semibold hover:underline">Get in touch</Link> if you&rsquo;d like to lend your skills.
        </p>
      </section>
    </main>
  );
}
