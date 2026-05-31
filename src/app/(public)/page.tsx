import Link from 'next/link';
import Image from 'next/image';

const PROGRAMS = [
  {
    href: '/programs/fashion-and-design',
    tag: 'Fashion & Textiles',
    title: 'Vijana Fashion Forge',
    body: 'Modern garment design, pattern making, and textile entrepreneurship.',
    src: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=80&auto=format&fit=crop',
    alt: 'Hands working a sewing machine in a tailor’s workshop',
    offset: false,
  },
  {
    href: '/programs/beauty-therapy',
    tag: 'Cosmetology',
    title: 'Glow with Vijana',
    body: 'Professional beauty therapy, skin care, and salon management training.',
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80&auto=format&fit=crop',
    alt: 'Stylist working on a client at a professional salon station',
    offset: true,
  },
  {
    href: '/programs/driving-mechanics',
    tag: 'Driving & Mechanics',
    title: 'Vijana Wheels',
    body: 'Practical driving, traffic-safety certification, and vehicle maintenance.',
    src: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=900&q=80&auto=format&fit=crop',
    alt: 'Mechanic inspecting a vehicle engine in a workshop',
    offset: false,
  },
  {
    href: '/programs/computer-training',
    tag: 'ICT',
    title: 'Vijana Digital Hub',
    body: 'Computer literacy, web development, data entry, and digital marketing.',
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80&auto=format&fit=crop',
    alt: 'Developer working on code at a laptop',
    offset: true,
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden bg-cream-to-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-fixed text-on-secondary-fixed rounded-full shadow-sm">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span className="text-label-sm uppercase tracking-wider">Empowering the Future</span>
            </div>
            <h1 className="text-display-lg-mobile md:text-display-lg text-primary max-w-xl">
              Vocational Training for Youth Empowerment in Sotik
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
              Vijana Empowerment Initiative equips young people in Sotik Sub-County, Bomet County
              with market-ready skills, mentorship, and entrepreneurship support so that they become
              job creators, not job seekers.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/programs"
                className="px-8 py-4 bg-primary text-on-primary rounded-xl text-label-md hover:bg-primary-container transition-all flex items-center gap-2 group"
              >
                Explore Programs
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link
                href="/impact"
                className="px-8 py-4 bg-surface-container-highest text-primary rounded-xl text-label-md hover:bg-white transition-all border border-outline-variant/30 text-center"
              >
                View Our Impact
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJA5FxKxdaZI2b0iXZCNaGKlqrlnY5nLvUdsMvB7mkCIqBQG1DQNAVfHtHoGlEWRkMky7fwAWH88Wju_aZ5yepvPRrMyruiB_s7abwzRqTDRDBXbvQ-nz6txacmaXQrvMparj2sCFMsN9H-tQZVT_NOHz8aHM5B2804PP1La4eyQdycuylHrogJTg0WbJbWNl9bNk63bVssBVvc5XDHwuoZn-5NjPot0mDaKpo14NERWolfZamxDLO2puGaP1lGHCu1lTGGBXz_TwP"
                alt="Young Kenyan woman operating a sewing machine in a vocational workshop"
                width={600}
                height={750}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="h-12 w-12 bg-secondary-container rounded-full flex items-center justify-center text-white">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  volunteer_activism
                </span>
              </div>
              <div>
                <p className="text-headline-sm text-primary">500+</p>
                <p className="text-label-sm text-on-surface-variant">Youth Trained</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-highest/30 -z-0 [clip-path:polygon(100%_0,_100%_100%,_0_100%)]" />
      </section>

      {/* Foundation: Origins, Vision, Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-headline-md text-primary">Born in Sotik, Built for Kenya</h2>
              <div className="w-12 h-1 bg-secondary rounded-full" />
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Vijana Empowerment Initiative was founded in Sotik Sub-County, Bomet County, in
                response to rising youth unemployment and limited access to practical skills among
                vulnerable groups including teenage mothers, single mothers, orphans, persons with
                disabilities, and school leavers from low-income households.
              </p>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Registered as a CBO with the Department of Social Services, our organization works in partnership with international agencies, local businesses, faith based groups including Bethesda House of Grace Ministries, UK, and government agencies to deliver hands on training, mentorship and entrepreneurship support, tailored to the local market.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12 lg:pl-12">
              <div className="pl-6 border-l-2 border-outline-variant/30">
                <span
                  className="material-symbols-outlined text-secondary text-4xl mb-4"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  visibility
                </span>
                <h3 className="text-headline-sm text-primary mb-3">Our Vision</h3>
                <p className="text-body-md text-on-surface-variant">
                  A society where all youths have access to quality vocational training, enabling
                  them to achieve economic independence and contribute to Kenya&rsquo;s development.
                </p>
              </div>
              <div className="pl-6 border-l-2 border-outline-variant/30">
                <span
                  className="material-symbols-outlined text-secondary text-4xl mb-4"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  rocket_launch
                </span>
                <h3 className="text-headline-sm text-primary mb-3">Our Mission</h3>
                <p className="text-body-md text-on-surface-variant">
                  Empowering youths through practical skills training, mentorship, and
                  entrepreneurship support to drive economic growth and social transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      {/*
      <section className="py-24 bg-white border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <p className="text-label-md uppercase tracking-widest text-secondary">Partnerships</p>
            <h2 className="text-headline-md text-primary">Stronger Together</h2>
            <p className="text-body-md text-on-surface-variant">
              Our work in Sotik is amplified by partners who share our commitment to youth
              empowerment.
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-cream-to-white border border-outline-variant/30 rounded-[2rem] p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
              <span
                className="material-symbols-outlined text-primary text-[40px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                handshake
              </span>
            </div>
          
            <div className="flex-1 text-center md:text-left">
              <p className="text-label-sm uppercase tracking-widest text-secondary mb-2">
                Founding Partner
              </p>
              <h3 className="text-headline-sm text-primary mb-3">
                Bethesda House of Grace Ministries, UK
              </h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                We are proud to partner with Bethesda House of Grace Ministries, UK in advancing
                vocational training, mentorship, and entrepreneurship support for vulnerable youth
                in Sotik Sub-County.
              </p>
            </div> 
          </div>
          <div className="text-center mt-10">
            <Link
              href="/get-involved#partnership"
              className="inline-flex items-center gap-2 text-primary text-label-md uppercase tracking-widest hover:text-secondary transition-colors group"
            >
              <span className="border-b border-current pb-1">Become a Partner</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>
      */}

      {/* Program quick links */}
      <section className="py-32 bg-cream-to-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-headline-md text-primary">Our Empowerment Hubs</h2>
            <p className="text-body-md text-on-surface-variant">
              Four specialized training programs designed to transform raw passion into
              professional excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-16">
            {PROGRAMS.map((p) => (
              <div key={p.href} className={`group flex flex-col gap-8 ${p.offset ? 'md:mt-16' : ''}`}>
                <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border border-outline-variant/20">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="md:px-4">
                  <div className="inline-block px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full text-label-sm mb-4">
                    {p.tag}
                  </div>
                  <h3 className="text-headline-sm text-primary mb-3">{p.title}</h3>
                  <p className="text-body-md text-on-surface-variant mb-6 leading-relaxed">{p.body}</p>
                  <Link
                    className="text-secondary text-label-md inline-flex items-center gap-1 group/link"
                    href={p.href}
                  >
                    Learn More
                    <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">
                      chevron_right
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="py-32 bg-primary overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 h-full gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border-r border-white" />
            ))}
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="space-y-4 py-8 md:py-0">
              <p className="text-display-lg text-on-tertiary-container">80%</p>
              <p className="text-headline-sm text-white">Employment Rate Goal</p>
              <p className="text-label-sm text-primary-fixed-dim max-w-[220px] mx-auto">
                Of graduates employed or self-employed within 6 months of training.
              </p>
            </div>
            <div className="space-y-4 py-8 md:py-0">
              <p className="text-display-lg text-on-tertiary-container">KES 4.5M</p>
              <p className="text-headline-sm text-white">Annual Project Budget</p>
              <p className="text-label-sm text-primary-fixed-dim max-w-[220px] mx-auto">
                Allocated to equipment, instructors, and operational sustainability.
              </p>
            </div>
            <div className="space-y-4 py-8 md:py-0">
              <p className="text-display-lg text-on-tertiary-container">50–100</p>
              <p className="text-headline-sm text-white">Students per Cohort</p>
              <p className="text-label-sm text-primary-fixed-dim max-w-[220px] mx-auto">
                Once all four programs scale beyond the fashion-and-design pilot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-cream-to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="space-y-8 flex-1 pl-6 border-l-4 border-primary">
              <h2 className="text-headline-md text-primary max-w-xl">Empower a life, secure a future.</h2>
              <p className="text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
                Your support funds the tools, training, and mentorship required to lift young
                people in Sotik out of poverty and into self-reliance.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
              <Link
                href="/get-involved#donate-form"
                className="px-10 py-4 bg-primary text-on-primary rounded-full text-headline-sm hover:bg-primary-container transition-all shadow-lg active:scale-95 whitespace-nowrap text-center"
              >
                Donate Now
              </Link>
              <Link
                href="/get-involved#partnership"
                className="px-10 py-4 border-2 border-primary text-primary rounded-full text-label-md hover:bg-surface-container-highest transition-all text-center whitespace-nowrap"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
