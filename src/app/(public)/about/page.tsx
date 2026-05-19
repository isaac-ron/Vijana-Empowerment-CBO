import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Vijana Empowerment Initiative',
  description:
    'A community-based organization in Sotik Sub-County, Bomet County, serving teenage mothers, orphans, persons with disabilities, and youth seeking self-employment.',
};

type Member = {
  name: string;
  role: string;
  bio: string;
  src: string;
};

// NOTE: names + bios are placeholders for client preview; swap for real
// leadership details once finalized.
const LEADERSHIP: Member[] = [
  {
    name: 'John Doe',
    role: 'Executive Director',
    bio: 'Founding director with 15+ years guiding community development and TVET initiatives across Bomet County.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgKUaRehonS9q-Lr5ZPrNVwxvpXOfxGo8lNWiTkjbqLgLaVnIXrR1HEfHEfUwX-pLL1RrXpB3ZGDDBB7-SXk5kTjzuQNfnPCBuhF3yeIlOZciSlXqmaluM6jBV-c2Gu-vzbnh41452pORlXFLyMzPgysWTAUEFC_8ATKLP2Q4B7o_z0ONlIlhz4QjEmlgpCtlx-cYCcpzihecOeT6wa9pm4V0oahg_Xu6zClj4u0eDI6yWSHf-9-w9QB9cCWDxTOQ9WrbcBGNVL8fD',
  },
  {
    name: 'Jane Smith',
    role: 'Programs Coordinator',
    bio: 'Designs curriculum and tracks learner outcomes across all four vocational tracks.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeqdurTX5hq5O7oJdiwNduikJ3h4AWoYAyzUrvPVrhFvbtHZs4rIw3oRmR9_55dH_evM3ApCgKpV5AWfek5MDOrjZ7hUOhx-5Xt-0xyM32hsA_-uxVulSirf814ahecDuE3ceVfHuijWLnUJN-nQBy_vrMXKiETUvFjyrV3mIB70kd0j0VoFDWHN5uPFJvF7oiZO7pscZjbT62pX4qHk1gsT2UXqbUuW3rFLqnhY0b7ltShoU43yBI1STHUWF_EzPaW_3EQ2No502o',
  },
  {
    name: 'John Smith',
    role: 'Community Liaison',
    bio: 'Connects the initiative with chiefs, faith leaders, and local government partners across Sotik.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3TqBNoDZPL_6wt-cmTv9z2ey0-GuCyUCWEI2sHfrEFk1zTA9HO7nnFmT5Me2QxEf0Vy7vkP5p4Fh8bfF4cFM9KCQtNNcbmF_jM0t-ZR9ztrfTnIQajWy50ZsEH4n4mgIa5lgXp6t4ySFdRYIrTDAtSp9MtClvPWkNMzo5sTUPMUyguyjn-95LVYA1u4mHQBDE8L6qBpNhcPlVbzLhW1szPyT87o4HSKlhQulAhjNSrYDGkpBqtoJ7-QRfC4X7OM6VYa_j9XiG95JK',
  },
  {
    name: 'Jane Doe',
    role: 'Finance & Operations',
    bio: 'Stewards day-to-day finances, donor reporting, and compliance with the Department of Social Services.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLady_l-Rsqh3Vn2fGEiB-vQjAXDq44rFbVHt0r08lkcU1dhd5cuESHB-rzVHOcdfqZSjhRJTmS2gKxNc-ny37zY5ZEn3TUCU2-oW0e_OwhrVOcWVQd6YBjVPK6spaXTULkN-fhkfqhEoe27DWxXxioGbM07gzkYshymOSngnrzlAp6MsK2G1WfIf5GILQE25BqXFLzH4mEqOQnGSDWEcwS1K55BppAR0FbfjG6ZfvvfFnS8gvwwL1aG46VUdobAz-qe4kfw9OGpKw',
  },
];

const INSTRUCTORS: Member[] = [
  {
    name: 'Mary Kemboi',
    role: 'Lead Instructor — Vijana Fashion Forge',
    bio: 'Tailor and pattern-maker with 12 years running her own workshop in Sotik town.',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop',
  },
  {
    name: 'Linet Cherono',
    role: 'Lead Instructor — Glow with Vijana',
    bio: 'Salon owner and certified beauty therapist focused on locally-sourced product mastery.',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop',
  },
  {
    name: 'Peter Mutai',
    role: 'Lead Instructor — Vijana Wheels',
    bio: 'NTSA-certified driving instructor and mechanic, formerly with a regional logistics fleet.',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop',
  },
  {
    name: 'Brian Korir',
    role: 'Lead Instructor — Vijana Digital Hub',
    bio: 'Freelance web developer and digital-marketing trainer, building youth into remote workers.',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop',
  },
];

const ED_STATEMENTS = [
  'When we registered Vijana Empowerment Initiative, we set ourselves a simple test: would a young mother walking past our hub on her way to fetch water see a future for herself inside it? Every decision we make is measured against that question.',
  'We are not a substitute for the public TVET system — we are a bridge. We meet learners where they are, equip them with skills the local market will actually pay for, and walk with them into their first job or their first business.',
  'To our partners and donors: we promise transparency. Every shilling has an owner, and that owner is a young person in Sotik whose life is changing because you chose to invest in them.',
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full text-label-sm mb-6">
              Our Mission in Bomet County
            </span>
            <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface mb-6">
              Empowering the Unseen Potential of Youth.
            </h1>
            <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              In Sotik Sub-County and the wider Bomet County, youth unemployment is a major
              barrier to development. For teenage mothers, single mothers, orphans, persons with
              disabilities, and school leavers from low-income households, those challenges are
              compounded by limited capital, few mentors, and few marketable skills.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-primary font-bold">
                <span className="material-symbols-outlined">check_circle</span>
                <span className="text-label-md">Locally Led</span>
              </div>
              <div className="flex items-center gap-2 text-primary font-bold">
                <span className="material-symbols-outlined">check_circle</span>
                <span className="text-label-md">Inclusive by Design</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWIfGAeISZsS54Big0dW98e42lPEhVrSZe1l_ZIxKWOnzIjOv1XWSl05ASFl-lo6nPt00yUeuidRkKfQafF_aCNDswnwGOV1OIsBQgq1buOIF5nAtsl9XRNqtMHqufsq9uJ0A1_s2OFcJJQbk41eIXeq4ZUgVgEOMvKHVhTE9P3F3X04g1QYDSY9X6UJZVQTDhpj7vilPDZ7Nkwn35LfAjVmsIeqegA__YZ5ZbCqxFEv0N1D7J8APxmTDQU4ErEtSPhTlOdXyRH4mX"
                alt="Youth workshop in Bomet County"
                width={800}
                height={600}
                priority
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary-container p-6 rounded-2xl max-w-[240px] shadow-lg">
              <p className="text-headline-sm text-on-secondary-container">65%</p>
              <p className="text-label-sm text-on-secondary-container">
                Youth unemployment rate in rural Bomet clusters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficiaries */}
      <section className="py-24 bg-surface-container-low border-t border-b border-surface-dim/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl mb-20">
            <h2 className="text-headline-md text-on-surface mb-6">Who We Serve</h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              We focus on youth aged 18&ndash;35 who face the steepest climb toward financial
              independence &mdash; aiming to transform vulnerability into community strength.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
            <div className="md:col-span-5 flex flex-col justify-center">
              <span className="text-secondary text-label-md tracking-wider uppercase mb-2 block">Primary Focus</span>
              <h3 className="text-display-lg-mobile text-on-surface mb-4">Teenage Mothers, Single Mothers &amp; Orphans</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Bridging isolation and economic participation through flexible training schedules
                and supportive mentorship.
              </p>
            </div>
            <div className="md:col-span-7">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqjQekoHvhw-U2ucERMjrM6OmMHyHza-Z3aklPCwzlHQ93Y6hAFOtzcbO8t7-O2LDFctsDRYfM9qwkrvKsH-nfTGPxoyG6ri8_Z8aCcmNmjHkvRMOY6MKULbOFEV0n43j6K52xRO7fnJ4ymgKkQXgbV731ebjEKF51B9duP1US-uoOFtQysiDjSUS9AUapv-yci5sgihtxjNVtVtAlsnQ8tLhd_JnxfFIveRYJlooqyV2Rvkm0SSCX4-NGTGkC_vpq8DuT6wWDhbar"
                alt="Teenage mothers participating in a training program"
                width={1000}
                height={500}
                className="w-full h-[400px] object-cover rounded-3xl shadow-xl"
              />
            </div>
            <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center mt-12 md:mt-0 order-last md:order-none">
              <div className="flex items-center gap-4 mb-4">
                <span
                  className="material-symbols-outlined text-3xl text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  accessible_forward
                </span>
                <h3 className="text-headline-md text-on-surface">PWDs &amp; Vulnerable Groups</h3>
              </div>
              <p className="text-body-md text-on-surface-variant leading-relaxed mb-6">
                Adaptive training modules designed for inclusivity and accessibility from day one.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {['A', 'B', 'C'].map((l) => (
                    <div
                      key={l}
                      className="w-10 h-10 rounded-full border-2 border-surface-container-low bg-primary flex items-center justify-center text-xs font-bold text-on-primary"
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <p className="text-on-surface-variant text-label-sm">Inclusive cohort design</p>
              </div>
            </div>
            <div className="md:col-span-5 md:col-start-1 flex flex-col justify-center mt-12 md:mt-20">
              <h3 className="text-headline-md text-on-surface mb-4">School Leavers</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Catching talent immediately after primary or secondary school to prevent
                long-term unemployment and rural-urban migration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-surface text-on-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-surface-dim/40 pb-8">
            <div>
              <h2 className="text-display-lg-mobile mb-4">Targeting Measurable Change</h2>
              <p className="text-body-lg text-on-surface-variant">Our expected outcomes</p>
            </div>
            <p className="max-w-md text-on-surface-variant text-body-md">
              We believe in transparent, quantifiable impact that drives real economic resilience
              in Sotik and Bomet.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2 mb-4 text-primary">
                <span className="text-display-lg text-[64px] leading-none font-black tracking-tighter">80</span>
                <span className="text-headline-sm">%</span>
              </div>
              <h3 className="text-headline-sm mb-3">Employment Rate</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Of graduates employed or self-employed within 6 months of completing training.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2 mb-4 text-secondary">
                <span className="text-display-lg text-[64px] leading-none font-black tracking-tighter">50</span>
                <span className="text-headline-sm">%</span>
              </div>
              <h3 className="text-headline-sm mb-3">Income Growth</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Average increase in beneficiary income within one year of graduation.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2 mb-4 text-primary">
                <span className="text-display-lg text-[64px] leading-none font-black tracking-tighter">90</span>
                <span className="text-headline-sm">%</span>
              </div>
              <h3 className="text-headline-sm mb-3">Confidence &amp; Life Skills</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Of graduates report significant improvements in life skills, confidence, and
                self-advocacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-display-lg-mobile text-on-surface mb-20 text-center">Implementation Roadmap</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-20 relative">
              <div className="md:w-1/3 flex-shrink-0 md:text-right relative">
                <span className="text-primary text-label-md tracking-widest uppercase block mb-1">Phase 1</span>
                <time className="text-headline-sm text-on-surface block">First 3 months</time>
                <div className="hidden md:block absolute top-2 -right-8 w-4 h-4 rounded-full bg-primary z-10" />
              </div>
              <div className="md:w-2/3 pb-8 md:pb-0 md:border-l border-surface-dim pl-0 md:pl-8 relative">
                <div className="md:hidden absolute top-2 -left-[5px] w-3 h-3 rounded-full bg-primary z-10" />
                <h3 className="text-headline-md text-on-surface mb-4">Setup &amp; Launch</h3>
                <p className="text-on-surface-variant text-body-lg leading-relaxed">
                  Secure premises (rent/lease), acquire equipment and materials, recruit
                  instructors, launch the Fashion &amp; Design pilot, and enroll the first cohort
                  of 20&ndash;30 students.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-20 relative">
              <div className="md:w-1/3 flex-shrink-0 md:text-right relative">
                <span className="text-secondary text-label-md tracking-widest uppercase block mb-1">Phase 2</span>
                <time className="text-headline-sm text-on-surface block">6 – 12 months</time>
                <div className="hidden md:block absolute top-2 -right-8 w-4 h-4 rounded-full bg-secondary z-10" />
              </div>
              <div className="md:w-2/3 pb-8 md:pb-0 md:border-l border-surface-dim pl-0 md:pl-8 relative">
                <div className="md:hidden absolute top-2 -left-[5px] w-3 h-3 rounded-full bg-secondary z-10" />
                <h3 className="text-headline-md text-on-surface mb-4">Expansion</h3>
                <p className="text-on-surface-variant text-body-lg leading-relaxed">
                  Introduce the remaining programs, scale student intake to 50&ndash;100, and
                  establish partnerships with local businesses for internships and job placement.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 relative">
              <div className="md:w-1/3 flex-shrink-0 md:text-right relative">
                <span className="text-on-surface-variant text-label-md tracking-widest uppercase block mb-1">Phase 3</span>
                <time className="text-headline-sm text-on-surface-variant block">Year 2 and beyond</time>
                <div className="hidden md:block absolute top-2 -right-8 w-4 h-4 rounded-full bg-surface-dim z-10" />
              </div>
              <div className="md:w-2/3 pl-0 md:pl-8 md:border-l border-surface-dim relative">
                <div className="md:hidden absolute top-2 -left-[5px] w-3 h-3 rounded-full bg-surface-dim z-10" />
                <h3 className="text-headline-md text-on-surface-variant mb-4">Sustainability &amp; Maturity</h3>
                <p className="text-on-surface-variant text-body-lg leading-relaxed">
                  Embed community ownership, generate income through subsidized training fees and
                  services, and deepen integration with county and national programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accountability */}
      <section className="py-24 bg-surface border-t border-surface-dim/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-12">
              <div className="flex gap-6 border-b border-surface-dim/40 pb-8">
                <span className="material-symbols-outlined text-4xl text-primary mt-1">fact_check</span>
                <div>
                  <h4 className="text-headline-sm text-on-surface mb-2">Regular Assessments</h4>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    Progress reviews with each cohort to capture feedback and adapt the curriculum.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 border-b border-surface-dim/40 pb-8">
                <span className="material-symbols-outlined text-4xl text-primary mt-1">query_stats</span>
                <div>
                  <h4 className="text-headline-sm text-on-surface mb-2">Graduate Tracking</h4>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    We follow alumni employment and income for at least 12&ndash;24 months after
                    graduation.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 pb-4">
                <span className="material-symbols-outlined text-4xl text-primary mt-1">group_work</span>
                <div>
                  <h4 className="text-headline-sm text-on-surface mb-2">Annual Impact Evaluations</h4>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    Transparent yearly reporting to donors, partners, and the wider community.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 md:pl-12">
            <h2 className="text-display-lg-mobile text-on-surface mb-8">Accountability &amp; Evaluation</h2>
            <p className="text-body-lg text-on-surface-variant mb-10 leading-relaxed">
              Transparency is the core of our partnership with donors and the community. We
              don&rsquo;t just count numbers; we measure the real shift in human agency and
              local economic resilience.
            </p>
            <Link
              href="/impact"
              className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all text-lg border-b-2 border-primary pb-1"
            >
              See Our Impact
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Executive Director statement */}
      <section id="director" className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-4">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={LEADERSHIP[0].src}
                  alt={`Portrait of ${LEADERSHIP[0].name}, ${LEADERSHIP[0].role}`}
                  width={500}
                  height={625}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6">
                <p className="text-label-md uppercase tracking-widest text-secondary mb-2">
                  Executive Director
                </p>
                <h3 className="text-headline-sm text-on-surface">{LEADERSHIP[0].name}</h3>
                <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed">
                  {LEADERSHIP[0].bio}
                </p>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <p className="text-label-md uppercase tracking-widest text-secondary">
                A word from our director
              </p>
              <h2 className="text-display-lg-mobile md:text-display-lg text-on-surface leading-tight">
                &ldquo;Skills, dignity, and a path forward &mdash; that&rsquo;s the work.&rdquo;
              </h2>
              <div className="space-y-6 border-l-4 border-secondary pl-8">
                {ED_STATEMENTS.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="text-body-lg text-on-surface-variant leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="h-px flex-1 bg-outline-variant/40" />
                <p className="text-label-md uppercase tracking-widest text-on-surface-variant">
                  &mdash; {LEADERSHIP[0].name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-surface-dim/40 pb-12">
            <div className="max-w-2xl">
              <p className="text-label-md uppercase tracking-widest text-secondary mb-3">
                Our People
              </p>
              <h2 className="text-display-lg-mobile text-on-surface mb-6">Led by the Community</h2>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                Community members, educators, and local entrepreneurs who came together because
                they intimately understand the landscape of Sotik and the wider Bomet County.
              </p>
            </div>
            <Link
              href="/get-involved"
              className="border border-secondary text-secondary px-8 py-3 rounded-full text-label-md uppercase tracking-widest hover:bg-secondary hover:text-white transition-all whitespace-nowrap"
            >
              Join the Team
            </Link>
          </div>

          <div className="mb-16">
            <p className="text-label-md uppercase tracking-widest text-on-surface-variant mb-10">
              Leadership
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {LEADERSHIP.map((m) => (
                <article key={m.name} className="group flex flex-col">
                  <div className="overflow-hidden mb-5 aspect-[4/5] w-full rounded-2xl shadow-md bg-surface-container-highest">
                    <Image
                      src={m.src}
                      alt={`Portrait of ${m.name}`}
                      width={400}
                      height={500}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <h3 className="text-headline-sm text-on-surface mb-1">{m.name}</h3>
                  <p className="text-label-md text-primary uppercase tracking-widest mb-3">{m.role}</p>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">{m.bio}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="border-t border-surface-dim/40 pt-12">
            <p className="text-label-md uppercase tracking-widest text-on-surface-variant mb-10">
              Lead Instructors
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {INSTRUCTORS.map((m) => (
                <article key={m.name} className="group flex flex-col">
                  <div className="overflow-hidden mb-5 aspect-[4/5] w-full rounded-2xl shadow-md bg-surface-container-highest">
                    <Image
                      src={m.src}
                      alt={`Portrait of ${m.name}`}
                      width={400}
                      height={500}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <h3 className="text-headline-sm text-on-surface mb-1">{m.name}</h3>
                  <p className="text-label-md text-primary uppercase tracking-widest mb-3">{m.role}</p>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">{m.bio}</p>
                </article>
              ))}
            </div>
          </div>

          <p className="mt-16 text-center text-body-md text-on-surface-variant">
            Plus a growing circle of volunteer mentors, alumni, and community partners.{' '}
            <Link href="/get-involved" className="text-secondary hover:text-primary transition-colors">
              Get in touch
            </Link>{' '}
            if you&rsquo;d like to lend your skills.
          </p>
        </div>
      </section>
    </main>
  );
}
