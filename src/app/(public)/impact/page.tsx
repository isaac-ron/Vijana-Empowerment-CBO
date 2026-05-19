import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impact & Success Stories | Vijana Empowerment Initiative',
  description:
    'See how youth in Sotik and Bomet County are turning vocational training into livelihoods, businesses, and community leadership.',
};

const STORIES = [
  {
    name: 'Sarah',
    title: 'Sarah&rsquo;s Stitch of Success',
    tag: 'Fashion Entrepreneur',
    tagClass: 'bg-secondary-fixed text-on-secondary-fixed',
    quote:
      '&ldquo;Vijana Empowerment didn&rsquo;t just give me a sewing machine; they gave me a business mind. Today I employ three other youth from my village.&rdquo;',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHzb-21NWqki2NZmxYWkQ0nzew7c1nMAJwEgzrqMOfcSp4ISJ6OENul7Ig5sza_Qqa5IeO9yKqV5qrzVCOgiz-1s4jzOjzaOIo_3gi9xUqBdQ21LEe_xvLzGgEtXwvvykcwJupmnVhZ8pXdLSuz4UFte9Rjv8pZT-N8Lmve_7MRjt1G3-07v2T2y3B5UTFG2BFoDZ5Ubsgr98AMX6K5MzXGz22-Nkwp_LpSXVarQdKbEvUcu5Z97O76i8-HJZPRKJmsMT7Wdw3aQfx',
    alt: 'Sarah, a young fashion entrepreneur, in her vibrant studio',
    offset: false,
  },
  {
    name: 'John',
    title: 'John&rsquo;s Digital Leap',
    tag: 'Digital Specialist',
    tagClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    quote:
      '&ldquo;Transitioning from local farming to data analysis seemed impossible until I joined the program. I now work remotely for global clients.&rdquo;',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGXTX5uhRIP2a9jYQNtXfwRtiOuxS09Ol2Kp-G-CV9G29WyMfRkyrIxDrec3oP_PGljbVg-uFY-cNZPCV7irEn57LpiPFxOvNJuCZoGSxU0BKayD0wWrf_VI3GuTXBhWGwnXJqUJdedRGXPo2-MvEJPcm9WJU3awyBio3b1R6-loxqgOacRBfxZh_TZ5DKnuvpftA2KFwzO_YV5FK0zKFk4eldohGJT-jJ02g8u_ARNRgTZ9PY72RfkNtFxsUpc41WXHm_6-YAdxsn',
    alt: 'John, a young digital specialist, mentoring at a computer workstation',
    offset: true,
  },
];

export default function ImpactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1yI1Kyic6OCZWdg6Ue90kWey8VqaixmCveBPDRdypaGVul3NVHPGoESSMS5z7Q3RQj7TEizI7XBuvKFQy87TphpU1N8uzD0kBU_XprbukxLCFtbckCZMqAklOaRe6u_4lw_T87u9dXy41sIPmp2CzfuzDprYVTuE2S3I-DSoMDsnXsaaz2LYKWrjwlYHMn2w12Fe1RU0vp2KkX9gRKqmyYwAwxKP9oXV5e4GeBztfFpIPw1qPfrqnKJOFzQ3ltWLFXEkk7VJ3BUsv"
            alt="Successful young graduate working confidently on a laptop"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
        </div>
        <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-on-primary">
          <h1 className="text-display-lg-mobile md:text-display-lg max-w-2xl mb-6">
            Real Stories. Real Transformation.
          </h1>
          <p className="text-body-lg max-w-xl mb-8 opacity-90">
            We believe in the power of potential. Through our programs, young people in Sotik
            and Bomet County are turning their training into livelihoods, businesses, and
            community leadership.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl text-headline-sm flex items-center gap-2 hover:scale-105 transition-transform"
              href="#success-stories"
            >
              Explore Stories
              <span className="material-symbols-outlined">arrow_downward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Impact dashboard */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl">school</span>
              </div>
              <p className="text-display-lg text-primary mb-2">500+</p>
              <p className="text-headline-sm text-on-surface-variant">Youth Trained</p>
              <p className="mt-4 text-on-surface-variant/80 text-body-md max-w-xs">
                Equipped with vocational and digital skills for the modern economy.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-secondary-fixed rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-secondary text-3xl">work</span>
              </div>
              <p className="text-display-lg text-secondary mb-2">80%</p>
              <p className="text-headline-sm text-on-surface-variant">Employment Goal</p>
              <p className="mt-4 text-on-surface-variant/80 text-body-md max-w-xs">
                Of graduates employed or self-employed within 6 months of training.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-tertiary-fixed rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-tertiary text-3xl">payments</span>
              </div>
              <p className="text-display-lg text-tertiary mb-2">+50%</p>
              <p className="text-headline-sm text-on-surface-variant">Income Growth</p>
              <p className="mt-4 text-on-surface-variant/80 text-body-md max-w-xs">
                Average increase in beneficiary monthly income within one year of graduation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section id="success-stories" className="py-32 bg-surface-container-low">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <span className="text-primary text-label-md tracking-widest uppercase block mb-4">Faces of Change</span>
            <h2 className="text-display-lg-mobile md:text-display-lg text-on-surface mb-6">
              Our Graduates Are Leading the Way
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              From fashion design to digital innovation, graduates are redefining what is
              possible for the youth of Sotik and the wider Bomet County.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-16">
            {STORIES.map((s) => (
              <div key={s.name} className={`group flex flex-col gap-8 ${s.offset ? 'md:mt-16' : ''}`}>
                <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border border-outline-variant/20">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="md:px-4">
                  <span className={`inline-block px-3 py-1 text-label-sm rounded-full w-fit mb-4 ${s.tagClass}`}>
                    {s.tag}
                  </span>
                  <h3
                    className="text-headline-md mb-4 text-on-surface"
                    dangerouslySetInnerHTML={{ __html: s.title }}
                  />
                  <div className="bg-white/80 backdrop-blur p-6 rounded-2xl border border-outline-variant/20 mb-6 relative shadow-sm">
                    <span className="material-symbols-outlined text-primary/20 text-5xl absolute -top-4 -left-2">
                      format_quote
                    </span>
                    <p
                      className="text-body-md text-on-surface-variant italic relative z-10"
                      dangerouslySetInnerHTML={{ __html: s.quote }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic impact */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 space-y-6">
              <span className="text-secondary text-label-md tracking-widest uppercase block mb-2">Where We Work</span>
              <h2 className="text-display-lg-mobile md:text-display-lg text-on-surface mb-6">
                Rooted in Sotik &amp; Bomet
              </h2>
              <div className="w-12 h-1 bg-secondary rounded-full mb-6" />
              <p className="text-body-lg text-on-surface-variant mb-12">
                We are deeply embedded in the community. Our reach extends across Sotik
                Sub-County and into neighboring areas through training hubs and outreach.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-primary text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                  <div>
                    <h4 className="text-headline-sm text-primary mb-2">Sotik Town Center</h4>
                    <p className="text-on-surface-variant">Main training hub and program coordination office.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-primary text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                  <div>
                    <h4 className="text-headline-sm text-primary mb-2">Local Community Halls</h4>
                    <p className="text-on-surface-variant">
                      Satellite venues bring training closer to learners in surrounding wards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-primary text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                  <div>
                    <h4 className="text-headline-sm text-primary mb-2">Partner Workplaces</h4>
                    <p className="text-on-surface-variant">
                      Garages, salons, fashion houses, and digital labs across Bomet County host
                      our internships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 relative">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVe3PuDSrk3C5pxEjqs4feJp6FijK-1ALjHzG7Ki9vr0I_dNyWxeFqXNG48N-R4URTM3l3abwKdAOlu7KW5V_b9hEO67hDtigZ2S1QpZ_EX2Yb2QVs-swLdkDdrs8z28fkauBLTruQcPSKCXxm5rVV-efw60XL4BkulckKM9zgz1ay2AS-1xgcFNr0oizORJ5ZFGK29ceERWd4SgsCigSBEtkxMb5KW-yIuy_3ILdNyL7yiYmkNEJdN2rfr2iBzZK4t97elTnri92T"
                  alt="Stylized map of Bomet and Sotik counties with impact hubs"
                  width={1000}
                  height={750}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-outline-variant/20 flex justify-between items-center">
                  <div>
                    <p className="text-label-sm text-primary uppercase font-bold tracking-widest">
                      Total Outreach
                    </p>
                    <h5 className="text-headline-sm text-on-surface">15 Communities Reached</h5>
                  </div>
                  <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined text-2xl">map</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-fixed/50 rounded-full blur-[60px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Alumni network */}
      <section className="py-32 bg-primary text-on-primary overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 h-full gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border-r border-white" />
            ))}
          </div>
        </div>
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_5ffICIE003YpAaqFvQXS79jpFJahmd2pq65bdlboldTCTnHrCQdrcmr5Hj9m_R7sG74fBetdsJ171EHYgQX7I_ZOpJwwxWCxRrZXOkVyBnUU-XHI7JzqD7R28dvKNLyHVjXXk1_vhUiySauXnHvoFyEuEzWPJvqs880_6ju8pGNCNM5SpSRGypVT4qEP4ki1h2N6AIkWkNQQxbUQ4oXXyc9elIfsVX7iiVsAeA7MdUuMGWZJNq0cHj4k11QbhEn8B40r57hk58PO"
                  alt="Alumni gathered in a circle during a leadership workshop"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-3xl overflow-hidden shadow-xl z-20 border-4 border-primary">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEyAEAhPanIH5e15IBiBNzHzwcfvdFTduK4Dt8Vqbjor-tvD8b1WfMow70mGLg01E1-RcyULLh4lWHkCH_-oQHnDF2zbploX6f1fYyzzppiUOwnQ6sx02j_WAMjxI4z-QzI_fOPxHKojk58YMOCWhWXgqGH-Ouq_Latrd79Ik0RhDVdiGsGhGZqSIlui0qxjLjOxXK60R8bxNjuKtnUO4UjaX3BUSeEiOCXm9qhvX0qFDHOJTaU125qhogFh8FwdMc3FN9LH-szqih"
                  alt="Two graduates shaking hands at a networking event"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:pl-12">
              <h2 className="text-display-lg-mobile md:text-display-lg mb-8">
                The Alumni Circle: Leadership Beyond Graduation
              </h2>
              <p className="text-body-lg mb-12 opacity-90 leading-relaxed">
                Graduation is just the beginning. Our alumni network provides ongoing mentorship,
                access to micro-grants, and a platform for graduates to become community
                leaders.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary-fixed">diversity_3</span>
                  </div>
                  <div>
                    <h4 className="text-headline-sm mb-2">Peer Support</h4>
                    <p className="text-body-md opacity-80">Regular mastermind sessions for business owners.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary-fixed">volunteer_activism</span>
                  </div>
                  <div>
                    <h4 className="text-headline-sm mb-2">Giving Back</h4>
                    <p className="text-body-md opacity-80">Alumni-led community service projects in Bomet.</p>
                  </div>
                </div>
              </div>
              <Link
                href="/get-involved"
                className="mt-12 inline-block bg-white text-primary px-8 py-4 rounded-full text-headline-sm hover:bg-surface-container-lowest transition-colors shadow-lg hover:-translate-y-1"
              >
                Join the Network
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden bg-cream-to-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-display-lg-mobile md:text-display-lg text-primary">Support Our Next Cohort</h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              Your contribution directly funds the training of youth who are ready to transform
              their lives and their communities. Together, we can scale this impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link
                href="/get-involved#donate-form"
                className="bg-primary text-on-primary px-10 py-4 rounded-full text-headline-sm shadow-lg hover:bg-primary-container transition-all active:scale-95"
              >
                Donate Now
              </Link>
              <Link
                href="/get-involved#partnership"
                className="bg-transparent border-2 border-primary text-primary px-10 py-4 rounded-full text-headline-sm hover:bg-surface-container-highest transition-all"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
