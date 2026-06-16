import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { IMG, uns } from '@/lib/images';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Impact & Success Stories',
  description:
    'See how youth in Sotik and Bomet County are turning vocational training into livelihoods, businesses, and community leadership.',
  path: '/impact/',
});

const STATS = [
  { n: <><span data-count="500">0</span>+</>, t: 'Youth trained', d: 'Equipped with vocational and digital skills for the modern economy.', c: '#9a1e14' },
  { n: <><span data-count="80">0</span>%</>, t: 'Employment goal', d: 'Of graduates employed or self-employed within 6 months of training.', c: '#fa7f2a' },
  { n: <>+<span data-count="50">0</span>%</>, t: 'Income growth', d: 'Average increase in beneficiary monthly income within one year.', c: '#8a5a00' },
];

const STORIES = [
  {
    name: 'Sarah', title: "Sarah's stitch of success", tag: 'Fashion Entrepreneur',
    quote: 'Vijana Empowerment didn’t just give me a sewing machine; they gave me a business mind. Today I employ three other youth from my village.',
    img: IMG.sewing, alt: 'A young fashion entrepreneur at her sewing machine',
  },
  {
    name: 'John', title: "John's digital leap", tag: 'Digital Specialist',
    quote: 'Transitioning from local farming to data analysis seemed impossible until I joined the program. I now work remotely for global clients.',
    img: IMG.coding, alt: 'A young digital specialist working at a computer',
  },
];

const HUBS = [
  { t: 'Sotik Town Center', b: 'Main training hub and program coordination office.' },
  { t: 'Local community halls', b: 'Satellite venues bring training closer to learners in surrounding wards.' },
  { t: 'Partner workplaces', b: 'Garages, salons, fashion houses, and digital labs across Bomet host our internships.' },
];

export default function ImpactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#120d0b] text-white border-b-2 border-black">
        <Image src={uns(IMG.duoTech, 1700)} alt="Graduates working confidently at a computer" fill priority sizes="100vw" className="object-cover object-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#120d0b] via-[#120d0b]/85 to-[#120d0b]/30" />
        <div className="bv-wrap relative py-24 md:py-36">
          <span className="bv-kicker bv-kicker-light bv-fade">Faces of change</span>
          <h1 className="bv-fade font-display font-extrabold text-[clamp(2.8rem,7vw,5.4rem)] leading-[0.9] tracking-[-0.04em] mt-4 max-w-[16ch]">
            Real stories. Real transformation.
          </h1>
          <p className="bv-fade text-white/85 text-body-lg mt-6 max-w-[54ch] leading-relaxed">
            Through our programs, young people in Sotik and Bomet County are turning their training
            into livelihoods, businesses, and community leadership.
          </p>
          <Link href="#stories" className="bv-btn bv-btn-orange mt-8">
            Explore the stories <span className="arr" aria-hidden>↓</span>
          </Link>
        </div>
      </section>

      {/* Marquee */}
      <div className="bv-ticker bg-[#9a1e14] text-[#fdf3e8]" aria-hidden>
        <div className="bv-ticker-track left">
          {['500+ trained', '80% placement', '+50% income', '15 communities', '4 trades', 'Sotik · Bomet', '500+ trained', '80% placement', '+50% income', '15 communities', '4 trades', 'Sotik · Bomet'].map((t, i) => (
            <span key={i}>{t}<span className="sq bg-black" /></span>
          ))}
        </div>
      </div>

      {/* Dashboard */}
      <section className="bv-wrap py-16 md:py-24">
        <div className="grid sm:grid-cols-3 gap-y-10">
          {STATS.map((s, i) => (
            <div key={s.t} className={'bv-reveal text-center px-0 sm:px-8 ' + (i > 0 ? 'sm:border-l-2 sm:border-black/15' : '')}>
              <div className="font-display font-extrabold text-[clamp(3rem,6vw,4.8rem)] leading-none tracking-[-0.05em]" style={{ color: s.c }}>{s.n}</div>
              <h3 className="font-display font-bold text-headline-sm mt-3 text-[#120d0b]">{s.t}</h3>
              <p className="text-on-surface-variant mt-2 max-w-[28ch] mx-auto">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success stories */}
      <section id="stories" className="bg-[#fdf3e8] border-y-2 border-black">
        <div className="bv-wrap py-16 md:py-28">
          <div className="max-w-3xl mb-14 bv-reveal">
            <span className="bv-kicker">Our graduates</span>
            <h2 className="font-display font-extrabold text-[clamp(2.2rem,5vw,3.6rem)] leading-none tracking-[-0.03em] mt-4 text-[#120d0b]">
              Leading the way.
            </h2>
            <p className="text-on-surface-variant text-body-lg mt-5 leading-relaxed">
              From fashion design to digital innovation, graduates are redefining what is possible
              for the youth of Sotik and the wider Bomet County.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 md:gap-12">
            {STORIES.map((s, i) => (
              <article key={s.name} className={'bv-reveal flex flex-col ' + (i % 2 ? 'md:mt-16' : '')}>
                <div className="relative aspect-[4/3] bv-border-3 overflow-hidden" style={{ boxShadow: '12px 12px 0 0 #9a1e14' }}>
                  <Image src={uns(s.img, 900)} alt={s.alt} fill sizes="(max-width:768px) 100vw, 560px" className="object-cover" />
                </div>
                <span className="inline-block w-fit bg-[#fa7f2a] text-[#120d0b] font-display font-bold text-label-sm uppercase tracking-wider px-3 py-1.5 mt-7">{s.tag}</span>
                <h3 className="font-display font-extrabold text-headline-md mt-4 text-[#120d0b]">{s.title}</h3>
                <p className="text-on-surface-variant text-body-lg italic leading-relaxed mt-3 pl-5 border-l-4 border-[#9a1e14]">
                  &ldquo;{s.quote}&rdquo;
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic */}
      <section className="bv-wrap py-16 md:py-28 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="bv-reveal">
          <span className="bv-kicker">Where we work</span>
          <h2 className="font-display font-extrabold text-[clamp(2rem,4.4vw,3.2rem)] leading-none tracking-[-0.03em] mt-4 mb-5 text-[#120d0b]">
            Rooted in Sotik & Bomet.
          </h2>
          <p className="text-on-surface-variant text-body-lg leading-relaxed mb-8 max-w-[48ch]">
            We are deeply embedded in the community. Our reach extends across Sotik Sub-County and
            into neighboring areas through training hubs and outreach.
          </p>
          <div className="space-y-6">
            {HUBS.map((h) => (
              <div key={h.t} className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#9a1e14] text-3xl">location_on</span>
                <div>
                  <h4 className="font-display font-bold text-headline-sm text-[#120d0b] mb-1">{h.t}</h4>
                  <p className="text-on-surface-variant">{h.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bv-reveal relative aspect-[4/3] bv-border-3 overflow-hidden" style={{ boxShadow: '-12px 12px 0 0 #9a1e14' }}>
          <Image src={uns(IMG.groupLaptop, 1000)} alt="Trainees gathered around laptops at a hub" fill sizes="(max-width:768px) 100vw, 560px" className="object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-[#120d0b]/90 text-white p-5 flex justify-between items-center">
            <div>
              <p className="font-display text-label-sm uppercase tracking-widest text-[#fa7f2a]">Total outreach</p>
              <h5 className="font-display font-bold text-headline-sm">15 communities reached</h5>
            </div>
            <span className="material-symbols-outlined text-[#fa7f2a] text-3xl">map</span>
          </div>
        </div>
      </section>

      {/* Alumni (black) */}
      <section className="bg-[#120d0b] text-[#fdf3e8] border-y-2 border-black">
        <div className="bv-wrap py-16 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="bv-reveal relative aspect-[4/5] bv-border-3 overflow-hidden order-2 lg:order-1" style={{ boxShadow: '12px 12px 0 0 #9a1e14' }}>
            <Image src={uns(IMG.handsStack, 900)} alt="Alumni joining hands during a leadership workshop" fill sizes="(max-width:1024px) 100vw, 520px" className="object-cover" />
          </div>
          <div className="bv-reveal order-1 lg:order-2">
            <span className="bv-kicker bv-kicker-light">Beyond graduation</span>
            <h2 className="font-display font-extrabold text-[clamp(2rem,4.4vw,3.3rem)] leading-[0.98] tracking-[-0.03em] mt-4 mb-6 text-white">
              The alumni circle: leadership beyond graduation.
            </h2>
            <p className="text-[#fdf3e8]/80 text-body-lg leading-relaxed mb-8">
              Graduation is just the beginning. Our alumni network provides ongoing mentorship,
              access to micro-grants, and a platform for graduates to become community leaders.
            </p>
            <div className="space-y-6 mb-9">
              <div className="flex gap-5 items-start">
                <span className="material-symbols-outlined text-[#fa7f2a] text-3xl">diversity_3</span>
                <div><h4 className="font-display font-bold text-headline-sm text-white mb-1">Peer support</h4><p className="text-[#fdf3e8]/70">Regular mastermind sessions for business owners.</p></div>
              </div>
              <div className="flex gap-5 items-start">
                <span className="material-symbols-outlined text-[#fa7f2a] text-3xl">volunteer_activism</span>
                <div><h4 className="font-display font-bold text-headline-sm text-white mb-1">Giving back</h4><p className="text-[#fdf3e8]/70">Alumni-led community service projects in Bomet.</p></div>
              </div>
            </div>
            <Link href="/get-involved" className="bv-btn bv-btn-white">Join the network <span className="arr" aria-hidden>→</span></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#9a1e14] text-white">
        <div className="bv-wrap py-16 md:py-24 text-center">
          <h2 className="font-display font-extrabold text-[clamp(2.2rem,5.5vw,4rem)] leading-[0.95] tracking-[-0.04em] max-w-[16ch] mx-auto">
            Support our next cohort.
          </h2>
          <p className="mt-5 max-w-[52ch] mx-auto text-white/90 text-body-lg">
            Your contribution directly funds the training of youth who are ready to transform their
            lives and their communities.
          </p>
          <div className="mt-8 flex gap-3.5 justify-center flex-wrap">
            <Link href="/get-involved#donate-form" className="bv-btn bv-btn-white">Donate now <span className="arr" aria-hidden>→</span></Link>
            <Link href="/get-involved#partnership" className="bv-btn bv-btn-line">Partner with us</Link>
          </div>
        </div>
        <span className="absolute inset-x-0 bottom-0 h-3.5 opacity-45 [background:repeating-linear-gradient(90deg,#120d0b_0_28px,transparent_28px_56px)]" aria-hidden />
      </section>
    </main>
  );
}
