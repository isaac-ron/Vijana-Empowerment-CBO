import Link from 'next/link';
import Image from 'next/image';
import { IMG, uns } from '@/lib/images';

const PROGRAMS = [
  {
    href: '/programs/fashion-and-design',
    idx: '01',
    tag: 'Fashion & Textiles',
    title: 'Fashion Forge',
    body: 'Garment design, pattern making, and the business of running a tailoring shop.',
    img: IMG.sewing,
    alt: 'Hands feeding fabric through a sewing machine',
    accent: '#9a1e14',
    accentL: '#ff8f84',
  },
  {
    href: '/programs/beauty-therapy',
    idx: '02',
    tag: 'Cosmetology',
    title: 'Glow with Vijana',
    body: 'Beauty therapy, skin care, and salon management, with hours on real clients.',
    img: IMG.salon,
    alt: 'A stylist working with a client at a salon',
    accent: '#fa7f2a',
    accentL: '#fa7f2a',
  },
  {
    href: '/programs/driving-mechanics',
    idx: '03',
    tag: 'Driving & Mechanics',
    title: 'Vijana Wheels',
    body: 'Practical driving, safety certification, and vehicle maintenance for transport work.',
    img: IMG.engine,
    alt: 'A mechanic inspecting an engine',
    accent: '#5e0f0a',
    accentL: '#ff8f84',
  },
  {
    href: '/programs/computer-training',
    idx: '04',
    tag: 'ICT',
    title: 'Digital Hub',
    body: 'Computer literacy, web development, and digital marketing for online income.',
    img: IMG.duoTech,
    alt: 'Two young people working at a computer',
    accent: '#fa7f2a',
    accentL: '#fa7f2a',
  },
];

const BACK = [
  { rc: '01', mk: '#9a1e14', nm: 'Teenage mothers', ct: 'childcare-friendly hours' },
  { rc: '02', mk: '#fa7f2a', nm: 'Single mothers', ct: 'evening cohorts' },
  { rc: '03', mk: '#f6a72c', nm: 'Orphans', ct: 'fees covered' },
  { rc: '04', mk: '#9a1e14', nm: 'Youth with disabilities', ct: 'adapted workshops' },
  { rc: '05', mk: '#fa7f2a', nm: 'School leavers, low-income homes', ct: 'no prior schooling' },
];

const TICK1 = ['500+ trained', '80% placement goal', '4 trades', 'Sotik · Bomet County', '50–100 per cohort', 'job creators, not job seekers'];
const TICK2 = ['Fashion', 'Beauty', 'Mechanics', 'Digital', 'Mentorship', 'First job', 'Own business'];

export default function HomePage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="border-b-2 border-black overflow-hidden">
        <div className="bv-wrap pt-7 pb-5 md:pt-10 md:pb-8">
          <p className="bv-fade flex items-center justify-center gap-3.5 mb-1 font-display font-bold text-[0.8rem] tracking-[0.16em] uppercase text-[#9a1e14]">
            <span className="h-0.5 w-11 bg-black" />
            Vijana Empowerment · Sotik, Kenya
            <span className="h-0.5 w-11 bg-black" />
          </p>

          <div className="relative text-center">
            <h1 className="font-display font-extrabold leading-[0.9] tracking-[-0.04em] text-[clamp(4rem,21vw,16rem)]">
              <span className="bv-future text-[#5e0f0a]">FUTURE</span>
              <span className="bv-clip-2 block relative z-[3] text-[#9a1e14]">MAKERS</span>
            </h1>
            <div className="absolute left-1/2 top-[56%] -translate-x-1/2 -translate-y-1/2 z-[2] w-[clamp(150px,27vw,360px)] aspect-[3/4] bv-border-3 bv-shadow-red overflow-hidden">
              <Image
                src={uns(IMG.portrait, 900)}
                alt="A young Kenyan woman in vibrant print, looking ahead with confidence"
                fill
                priority
                sizes="(max-width: 768px) 60vw, 360px"
                className="object-cover object-[60%_25%]"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-16 items-end mt-14 md:mt-11">
            <p className="bv-fade font-display font-bold text-[clamp(1.5rem,2.7vw,2.15rem)] leading-[1.1] tracking-[-0.03em] max-w-[18ch]">
              We train young people in Sotik to earn a living from a real trade, then back them
              through the first job or first business.
            </p>
            <div>
              <p className="text-on-surface-variant text-[1.04rem] max-w-[48ch]">
                School leavers, young mothers, and youth with disabilities learn fashion, beauty,
                mechanics, or digital work on real equipment, with mentors who stay past graduation.
              </p>
              <div className="flex gap-3 flex-wrap mt-5">
                <Link href="/programs" className="bv-btn bv-btn-black">
                  See the four trades <span className="arr" aria-hidden>→</span>
                </Link>
                <Link href="/get-involved#donate-form" className="bv-btn bv-btn-out">
                  Back a trainee
                </Link>
              </div>
            </div>
          </div>

          <div className="bv-fade inline-flex items-center gap-3.5 mt-7 font-display font-bold text-[0.74rem] tracking-[0.16em] uppercase">
            <span className="bv-bigarr text-[2.6rem] text-[#9a1e14]" style={{ animation: 'bv-bob 1.7s var(--ease-bv) infinite' }} aria-hidden>↓</span>
            Scroll to the programs
          </div>
        </div>
      </section>

      {/* ===== MARQUEES ===== */}
      <div className="bv-ticker bg-[#120d0b] text-[#fdf3e8]" aria-hidden>
        <div className="bv-ticker-track left">
          {[...TICK1, ...TICK1].map((t, i) => (
            <span key={`a${i}`}>
              {t}
              <span className="sq bg-[#fa7f2a]" />
            </span>
          ))}
        </div>
      </div>
      <div className="bv-ticker bg-[#9a1e14] text-[#fdf3e8]" aria-hidden>
        <div className="bv-ticker-track right">
          {[...TICK2, ...TICK2].map((t, i) => (
            <span key={`b${i}`}>
              {t}
              <span className="sq bg-black" />
            </span>
          ))}
        </div>
      </div>

      {/* ===== PROGRAMS ===== */}
      <section id="programs" className="bv-wrap py-16 md:py-28">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-11">
          <h2 className="bv-reveal font-display font-extrabold text-[clamp(2.4rem,6vw,4.4rem)] leading-[0.95] tracking-[-0.04em] max-w-[13ch] text-[#120d0b]">
            Four trades the <span className="text-[#9a1e14]">market</span> is hiring for.
          </h2>
          <p className="bv-reveal text-on-surface-variant max-w-[38ch] text-[1.05rem]">
            Each program is chosen with local employers, taught on real equipment, and finished with
            a placement plan.
          </p>
        </div>

        <div className="bv-grid">
          {PROGRAMS.map((p) => (
            <Link key={p.href} href={p.href} className="bv-prog group bv-reveal text-white min-h-[360px] flex flex-col justify-end p-8">
              <Image src={uns(p.img, 900)} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 640px" className="object-cover -z-20" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#120d0b]/95 via-[#120d0b]/45 to-[#120d0b]/10" />
              <span className="absolute top-0 left-0 font-display font-extrabold text-white px-3 py-2 leading-none" style={{ background: p.accent }}>
                {p.idx}
              </span>
              <span className="absolute top-4 right-5 font-display text-[0.7rem] font-semibold tracking-[0.06em] uppercase text-[#fdf3e8] border border-white/50 px-2.5 py-1">
                {p.tag}
              </span>
              <h3 className="font-display font-extrabold text-[clamp(1.8rem,3vw,2.4rem)] leading-none">{p.title}</h3>
              <span className="block h-[5px] w-[54px] mt-3.5 transition-[width] duration-500 group-hover:w-[120px]" style={{ background: p.accent }} />
              <p className="mt-3.5 text-[1rem] max-w-[30ch] text-white/92">{p.body}</p>
              <span className="mt-3.5 inline-flex items-center font-display font-semibold text-[0.86rem] tracking-[0.06em] uppercase text-white/90">
                Explore
              </span>
              <span className="bv-bigarr absolute right-5 bottom-4 text-[3.4rem]" style={{ color: p.accentL }} aria-hidden>↗</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== WHO WE BACK ===== */}
      <section className="bg-[#120d0b] text-[#fdf3e8] border-y-2 border-black">
        <div className="bv-wrap py-16 md:py-28 grid md:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-20 items-start">
          <div className="bv-reveal">
            <span className="bv-kicker bv-kicker-light">Who we back</span>
            <h2 className="font-display font-extrabold text-[clamp(2.2rem,4.6vw,3.4rem)] leading-[0.95] tracking-[-0.03em] max-w-[12ch] text-white mt-4">
              The young people most programs <span className="text-[#fa7f2a]">leave out</span>.
            </h2>
            <p className="text-[#fdf3e8]/72 mt-4 max-w-[40ch] text-[1.05rem]">
              We built Vijana for the trainees who rarely make it onto a course list, and we shape
              the timetable around their lives.
            </p>
          </div>
          <div className="bv-reveal border-t-2 border-white/20">
            {BACK.map((r) => (
              <div
                key={r.rc}
                className="relative isolate overflow-hidden flex items-center gap-4 md:gap-5 px-3 md:px-4 py-5 border-b border-white/15 transition-colors duration-300 before:absolute before:inset-0 before:-z-10 before:bg-[#9a1e14] before:-translate-x-[101%] before:transition-transform before:duration-500 hover:before:translate-x-0"
              >
                <span className="font-display text-sm text-[#fdf3e8]/45">{r.rc}</span>
                <span className="w-4 h-4 shrink-0 rotate-45" style={{ background: r.mk }} />
                <span className="flex-1 font-display font-bold text-[clamp(1.2rem,2.4vw,1.7rem)] tracking-[-0.03em]">
                  {r.nm}
                </span>
                <span className="hidden sm:block font-display text-[0.82rem] uppercase tracking-[0.03em] text-[#fdf3e8]/55">
                  {r.ct}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMPACT ===== */}
      <section id="impact" className="bg-[#120d0b] text-[#fdf3e8] border-t-[5px] border-[#9a1e14]">
        <div className="bv-wrap py-16 md:py-28">
          <p className="bv-reveal font-display font-bold text-[clamp(1.3rem,2.6vw,2rem)] leading-tight tracking-[-0.03em] max-w-[24ch] mb-12 text-white">
            A small CBO with a sharp aim: get young people into{' '}
            <span className="text-[#fa7f2a]">paid work</span> within six months of finishing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12">
            {[
              { n: <><span data-count="500">0</span>+</>, l: 'young people trained since the pilot', c: '#ffffff' },
              { n: <><span data-count="80">0</span>%</>, l: 'placement goal in work or self-employment', c: '#fa7f2a' },
              { n: <><span className="align-middle text-[0.4em] font-bold tracking-normal mr-[0.14em]">KES</span><span data-count="4.5" data-dec="1">0</span><span className="align-middle text-[0.5em] ml-[0.04em]">M</span></>, l: 'annual budget on tools and teaching', c: '#f6a72c' },
              { n: <>50&ndash;100</>, l: 'trainees per cohort at full scale', c: '#ffffff' },
            ].map((s, i) => (
              <div key={i} className={'bv-reveal px-0 lg:px-8 ' + (i > 0 ? 'lg:border-l-2 lg:border-white/18' : '')}>
                <div className="font-display font-extrabold tabular-nums whitespace-nowrap text-[clamp(2.6rem,5.2vw,4.2rem)] leading-[1.04] tracking-[-0.04em]" style={{ color: s.c }}>
                  {s.n}
                </div>
                <div className="mt-4 text-[#fdf3e8]/72 text-[0.96rem] max-w-[22ch]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STORIES ===== */}
      <section className="bv-wrap py-16 md:py-28 grid md:grid-cols-[0.7fr_1.3fr] gap-10 md:gap-16">
        <div className="bv-reveal">
          <span className="bv-kicker">Blog &amp; updates</span>
          <h2 className="font-display font-extrabold text-[1.6rem] tracking-[-0.03em] mt-2 mb-1 text-[#120d0b]">
            From the field
          </h2>
          <ul className="mt-6">
            {[
              { t: 'April 2026', c: 'Cohort news', h: 'Our Sotik tailoring cohort lands its first wholesale order' },
              { t: 'March 2026', c: 'Programs', h: 'Digital Hub opens an evening class for young mothers' },
              { t: 'Feb 2026', c: 'Field notes', h: "Why Bomet's youth are choosing trades over the city" },
              { t: 'Jan 2026', c: 'Partnerships', h: 'UK partner renews a three-year mentorship pledge' },
            ].map((n) => (
              <li key={n.h} className="py-4 border-t-2 border-black">
                <time className="font-display text-[0.72rem] font-bold tracking-[0.06em] uppercase text-on-surface-variant">
                  {n.t} · <span className="text-[#9a1e14]">{n.c}</span>
                </time>
                <a href="#" className="block font-display font-semibold text-[1.05rem] mt-1.5 leading-[1.25] hover:text-[#9a1e14] transition-colors">
                  {n.h}
                </a>
              </li>
            ))}
          </ul>
          <a href="#" className="inline-flex items-center gap-1.5 mt-6 font-display font-bold text-[0.82rem] tracking-[0.04em] uppercase text-[#9a1e14] hover:gap-2.5 transition-all">
            Read the blog <span aria-hidden>→</span>
          </a>
        </div>
        <article className="bv-reveal">
          <div className="relative aspect-video bv-border-3 bv-shadow-red overflow-hidden">
            <span className="absolute top-0 left-0 z-10 bg-[#fa7f2a] text-[#120d0b] font-display font-bold text-[0.72rem] tracking-[0.06em] uppercase px-3.5 py-2">
              Latest post
            </span>
            <Image src={uns(IMG.duoTech, 1200)} alt="Two young people working together at a computer" fill sizes="(max-width:768px) 100vw, 800px" className="object-cover" />
          </div>
          <h3 className="font-display font-extrabold text-[clamp(1.8rem,3.4vw,2.7rem)] leading-none tracking-[-0.03em] mt-6 max-w-[18ch] text-[#120d0b]">
            From the back of a classroom to running her own data desk
          </h3>
          <p className="mt-3.5 text-on-surface-variant">
            A Digital Hub graduate now subcontracts data work to three of her classmates.
          </p>
          <div className="flex gap-2 flex-wrap mt-4">
            {['Digital Hub', 'Placement', 'Sotik'].map((tag) => (
              <span key={tag} className="font-display text-[0.72rem] font-bold tracking-[0.04em] uppercase border-[1.5px] border-black px-3 py-1.5 text-[#120d0b]">
                {tag}
              </span>
            ))}
          </div>
        </article>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden bg-[#9a1e14] text-white border-t-2 border-black">
        <div className="bv-wrap py-16 md:py-28 text-center relative">
          <span className="bv-kicker bv-kicker-white justify-center">Support the work</span>
          <h2 className="font-display font-extrabold text-[clamp(2.6rem,7vw,5rem)] leading-[0.92] tracking-[-0.04em] max-w-[16ch] mx-auto mt-4">
            Back a young person who refuses to wait.
          </h2>
          <p className="mt-5 max-w-[44ch] mx-auto text-[1.1rem] text-white/92">
            Your gift buys fabric, engine parts, lab time, and the mentors who turn a course into a
            career.
          </p>
          <div className="mt-8 flex gap-3.5 justify-center flex-wrap">
            <Link href="/get-involved#donate-form" className="bv-btn bv-btn-black">
              Donate now <span className="arr" aria-hidden>→</span>
            </Link>
            <Link href="/get-involved#partnership" className="bv-btn bv-btn-line">
              Become a partner
            </Link>
          </div>
        </div>
        <span className="absolute inset-x-0 bottom-0 h-3.5 opacity-45 [background:repeating-linear-gradient(90deg,#120d0b_0_28px,transparent_28px_56px)]" aria-hidden />
      </section>
    </main>
  );
}
