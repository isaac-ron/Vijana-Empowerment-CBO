import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { IMG, uns } from '@/lib/images';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Training Programs',
  description:
    'Vocational training programs in fashion, beauty therapy, driving & mechanics, and computer skills — designed for youth in Sotik Sub-County, Bomet County.',
  path: '/programs/',
});

const TRACKS = [
  {
    href: '/programs/fashion-and-design',
    idx: '01',
    tag: 'Fashion & Textiles',
    title: 'Vijana Fashion Forge',
    body: 'Master tailoring, garment making, and pattern making with a focus on sustainable fashion, illustration, branding, and entrepreneurship, plus internships with local designers and fashion houses.',
    img: IMG.sewing,
    alt: 'A young woman sewing a garment in a workshop',
    points: [
      'Tailoring, garment making & textile knowledge',
      'Fashion illustration, branding & entrepreneurship',
      'Internships with local designers and fashion houses',
    ],
  },
  {
    href: '/programs/computer-training',
    idx: '02',
    tag: 'ICT',
    title: 'Vijana Digital Hub',
    body: 'From digital literacy and MS Office to data entry, graphic design, web development, and digital marketing, equipping youth for local employment and the global gig economy.',
    img: IMG.duoTech,
    alt: 'Two young people working at a computer',
    points: [
      'Computer literacy, data entry & MS Office',
      'Web development & graphic design',
      'Digital marketing for online income',
    ],
  },
  {
    href: '/programs/beauty-therapy',
    idx: '03',
    tag: 'Cosmetology',
    title: 'Glow with Vijana',
    body: 'Hairdressing, styling, nail tech, makeup, and spa management, with an emphasis on locally-sourced products, salon management, and customer service that keeps clients coming back.',
    img: IMG.salon,
    alt: 'A stylist working with a client at a salon',
    points: [
      'Hairdressing, nail tech & makeup',
      'Salon management & customer service',
      'Locally-sourced product mastery',
    ],
  },
  {
    href: '/programs/driving-mechanics',
    idx: '04',
    tag: 'Driving & Mechanics',
    title: 'Vijana Wheels',
    body: 'Practical driving certification, traffic rules, road safety, and basic mechanics. We partner with driving schools, garages, and transport companies for hands-on placement.',
    img: IMG.engine,
    alt: 'A mechanic inspecting an engine',
    points: [
      'NTSA-aligned driving & road safety',
      'Vehicle maintenance & basic mechanics',
      'Placement with garages and transport firms',
    ],
  },
];

const ADVANTAGE = [
  { icon: 'handyman', title: 'Startup Toolkits', body: 'Graduates receive the essential tools of their trade to start earning immediately.' },
  { icon: 'psychology', title: 'Life Skills', body: 'Financial literacy, communication, time management, and branding in every track.' },
  { icon: 'workspace_premium', title: 'Industry Placements', body: 'Internships and job-placement partnerships with local businesses across every program.' },
  { icon: 'diversity_3', title: 'Mentorship', body: 'One-on-one sessions with established professionals in your specific field of study.' },
];

export default function ProgramsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b-2 border-black">
        <div className="bv-wrap py-16 md:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          <div className="bv-reveal">
            <span className="bv-kicker">Skill up for the future</span>
            <h1 className="font-display font-extrabold text-[clamp(2.6rem,6.5vw,5rem)] leading-[0.92] tracking-[-0.04em] mt-4 text-[#120d0b]">
              Four vocational tracks the market is hiring for.
            </h1>
            <p className="text-on-surface-variant text-body-lg mt-6 max-w-[52ch] leading-relaxed">
              We bridge the gap between unemployment and opportunity through hands-on technical
              training, industry mentorship, and business incubation for the youth of Sotik and the
              wider Bomet County.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="#tracks" className="bv-btn bv-btn-red">
                Explore all tracks <span className="arr" aria-hidden>→</span>
              </Link>
              <Link href="/get-involved#donate-form" className="bv-btn bv-btn-out">
                Support the programs
              </Link>
            </div>
          </div>
          <div className="bv-reveal relative aspect-[4/5] bv-border-3 bv-shadow-red overflow-hidden">
            <Image src={uns(IMG.portrait, 900)} alt="A young Kenyan woman in vibrant print" fill sizes="(max-width:1024px) 100vw, 500px" className="object-cover object-[60%_20%]" priority />
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section id="tracks" className="bv-wrap py-16 md:py-28 space-y-20 md:space-y-28">
        {TRACKS.map((t, i) => (
          <div key={t.href} className={'grid md:grid-cols-2 gap-10 md:gap-16 items-center ' + (i % 2 ? 'md:[direction:rtl]' : '')}>
            <div className="bv-reveal relative aspect-[4/3] bv-border-3 overflow-hidden [direction:ltr]" style={{ boxShadow: i % 2 ? '-12px 12px 0 0 #9a1e14' : '12px 12px 0 0 #9a1e14' }}>
              <Image src={uns(t.img, 1000)} alt={t.alt} fill sizes="(max-width:768px) 100vw, 620px" className="object-cover" />
              <span className="absolute top-0 left-0 bg-[#120d0b] text-white font-display font-extrabold text-lg px-3.5 py-2 leading-none">{t.idx}</span>
            </div>
            <div className="bv-reveal [direction:ltr]">
              <span className="bv-kicker">{t.tag}</span>
              <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3rem)] leading-none tracking-[-0.03em] mt-4 mb-5 text-[#120d0b]">
                {t.title}
              </h2>
              <p className="text-on-surface-variant text-body-lg leading-relaxed mb-7 max-w-[50ch]">{t.body}</p>
              <ul className="space-y-3 mb-8">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#9a1e14] text-[20px] mt-0.5">arrow_right_alt</span>
                    <span className="text-on-surface">{p}</span>
                  </li>
                ))}
              </ul>
              <Link href={t.href} className="bv-btn bv-btn-black">
                Explore {t.title.replace('Vijana ', '')} <span className="arr" aria-hidden>→</span>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* The Vijana Advantage */}
      <section className="bg-[#120d0b] text-[#fdf3e8] border-y-2 border-black">
        <div className="bv-wrap py-16 md:py-28">
          <div className="max-w-2xl mb-14 bv-reveal">
            <span className="bv-kicker bv-kicker-light">Every track, the same backing</span>
            <h2 className="font-display font-extrabold text-[clamp(2rem,4.4vw,3.2rem)] leading-none tracking-[-0.03em] mt-4 text-white">
              The Vijana Advantage
            </h2>
          </div>
          <div className="bv-grid bv-grid-dark">
            {ADVANTAGE.map((f) => (
              <div key={f.title} className="bv-reveal p-8 min-h-[220px] flex flex-col">
                <span className="material-symbols-outlined text-[#fa7f2a] text-[40px] mb-5">{f.icon}</span>
                <h3 className="font-display font-bold text-headline-sm mb-2 text-white">{f.title}</h3>
                <p className="text-[#fdf3e8]/70">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#9a1e14] text-white">
        <div className="bv-wrap py-16 md:py-24 text-center">
          <h2 className="font-display font-extrabold text-[clamp(2.2rem,5.5vw,4rem)] leading-[0.95] tracking-[-0.04em] max-w-[18ch] mx-auto">
            Ready to transform your future?
          </h2>
          <p className="mt-5 max-w-[52ch] mx-auto text-white/90 text-body-lg">
            Applications for the next cohort are open. Sponsored slots are reserved for school
            leavers, women, teenage mothers, orphans, and persons with disabilities.
          </p>
          <div className="mt-8 flex gap-3.5 justify-center flex-wrap">
            <Link href="/get-involved#apply" className="bv-btn bv-btn-white">
              Apply now <span className="arr" aria-hidden>→</span>
            </Link>
            <Link href="/get-involved" className="bv-btn bv-btn-line">
              Inquire for next cohort
            </Link>
          </div>
        </div>
        <span className="absolute inset-x-0 bottom-0 h-3.5 opacity-45 [background:repeating-linear-gradient(90deg,#120d0b_0_28px,transparent_28px_56px)]" aria-hidden />
      </section>
    </main>
  );
}
