import Link from 'next/link';
import Image from 'next/image';
import { uns } from '@/lib/images';

export type Module = { icon: string; title: string; body: string };
export type Stat = { val: string; label: string };

export type ProgramDetailProps = {
  tag: string;
  title: string;
  lede: string;
  heroImg: string;
  heroAlt: string;
  modulesIntro: string;
  modules: Module[];
  stats: Stat[];
  galleryImg: string;
  galleryAlt: string;
  pathways: { icon: string; title: string; body: string }[];
};

export default function ProgramDetail(p: ProgramDetailProps) {
  return (
    <>
      {/* Hero */}
      <section className="border-b-2 border-black">
        <div className="bv-wrap py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="bv-reveal">
            <span className="inline-flex items-center gap-2 bg-[#fa7f2a] text-[#120d0b] font-display font-bold text-label-sm uppercase tracking-wider px-3 py-1.5">
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              Enrollment open
            </span>
            <h1 className="font-display font-extrabold text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.92] tracking-[-0.04em] mt-5 text-[#120d0b]">
              {p.title}
            </h1>
            <p className="text-on-surface-variant text-body-lg mt-6 leading-relaxed max-w-[52ch]">{p.lede}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="#enroll" className="bv-btn bv-btn-red">Enroll now <span className="arr" aria-hidden>→</span></Link>
              <Link href="/programs" className="bv-btn bv-btn-out">All programs</Link>
            </div>
          </div>
          <div className="bv-reveal relative aspect-[4/5] bv-border-3 bv-shadow-red overflow-hidden">
            <Image src={uns(p.heroImg, 900)} alt={p.heroAlt} fill priority sizes="(max-width:1024px) 100vw, 500px" className="object-cover" />
            <span className="absolute top-0 left-0 bg-[#120d0b] text-white font-display font-bold text-label-sm uppercase tracking-wider px-3.5 py-2">{p.tag}</span>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bv-wrap py-16 md:py-28">
        <div className="max-w-2xl mb-12 bv-reveal">
          <span className="bv-kicker">What you&rsquo;ll learn</span>
          <h2 className="font-display font-extrabold text-[clamp(2rem,4.4vw,3.2rem)] leading-none tracking-[-0.03em] mt-4 text-[#120d0b]">
            {p.modulesIntro}
          </h2>
        </div>
        <div className="bv-grid">
          {p.modules.map((m) => (
            <div key={m.title} className="bv-reveal p-8 min-h-[200px]">
              <span className="material-symbols-outlined text-[#9a1e14] text-[38px] mb-4">{m.icon}</span>
              <h3 className="font-display font-bold text-headline-sm text-[#120d0b] mb-2">{m.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-[#120d0b] text-[#fdf3e8] border-y-2 border-black">
        <div className="bv-wrap py-14 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-y-10">
          {p.stats.map((s, i) => (
            <div key={s.label} className={'bv-reveal px-0 md:px-8 ' + (i > 0 ? 'md:border-l-2 md:border-white/18' : '')}>
              <div className="font-display font-extrabold text-[clamp(2.4rem,5vw,3.6rem)] leading-none tracking-[-0.04em]" style={{ color: i % 2 ? '#fa7f2a' : '#ffffff' }}>
                {s.val}
              </div>
              <div className="font-display text-label-md uppercase tracking-wider text-[#fdf3e8]/70 mt-3">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pathways + gallery */}
      <section className="bv-wrap py-16 md:py-28 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="bv-reveal space-y-8">
          <div>
            <span className="bv-kicker">Beyond the classroom</span>
            <h2 className="font-display font-extrabold text-[clamp(2rem,4.4vw,3.2rem)] leading-none tracking-[-0.03em] mt-4 text-[#120d0b]">
              Pathways to a paycheck.
            </h2>
          </div>
          {p.pathways.map((x) => (
            <div key={x.title} className="flex gap-5 border-b border-black/15 pb-6">
              <span className="material-symbols-outlined text-[#9a1e14] text-4xl">{x.icon}</span>
              <div>
                <h4 className="font-display font-bold text-headline-sm text-[#120d0b] mb-1.5">{x.title}</h4>
                <p className="text-on-surface-variant leading-relaxed">{x.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bv-reveal relative aspect-[4/5] bv-border-3 overflow-hidden" style={{ boxShadow: '-12px 12px 0 0 #9a1e14' }}>
          <Image src={uns(p.galleryImg, 900)} alt={p.galleryAlt} fill sizes="(max-width:768px) 100vw, 520px" className="object-cover" />
        </div>
      </section>
    </>
  );
}
