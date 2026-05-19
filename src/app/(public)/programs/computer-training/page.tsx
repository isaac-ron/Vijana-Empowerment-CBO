import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import ProgramEnrollmentForm from '@/components/forms/ProgramEnrollmentForm';

export const metadata: Metadata = {
  title: 'Vijana Digital Hub | Computer Training Program',
  description:
    'MS Office, digital literacy, data entry, graphic design, web development, and digital marketing — opening up local employment and the global gig economy.',
};

export default function DigitalHubPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative w-full min-h-[600px] flex items-center overflow-hidden bg-cream-to-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
          <div className="max-w-xl text-on-surface">
            <span className="inline-block bg-secondary-fixed text-on-secondary-fixed px-4 py-1 rounded-full text-label-sm mb-6 uppercase tracking-wider">
              Flagship Training Program
            </span>
            <h1 className="text-display-lg-mobile md:text-display-lg mb-6 leading-tight text-primary">
              Vijana Digital Hub
            </h1>
            <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              Accelerating youth careers in the digital economy. From basic computer literacy and
              online safety to data entry, graphic design, web development, and digital
              marketing &mdash; equipping you to thrive locally and in the global gig market.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#enroll"
                className="bg-primary text-on-primary px-8 py-4 rounded-xl text-label-md shadow-lg shadow-primary/20 hover:shadow-xl transition-all flex items-center gap-2 group"
              >
                Enroll Now
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link
                href="/programs"
                className="bg-surface-container-highest text-primary border border-outline-variant/30 px-8 py-4 rounded-xl text-label-md hover:bg-white transition-all"
              >
                View All Programs
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] md:aspect-auto md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdhFqJVxGQBV3Fsl0BjVdZvuZusZTk48e_BHS5X9WJI-uaGMRM4BRhgSFKzDZ6DDiElVhCM9G8iYVsfppoWyjZex3Q9VBZSKYO7e4HhhvqqCWSuw17gWZDwtAYyQu5T_K8L6mm3vjgkEn35mGgDXo7NvWlTFo84L4CVR2Io_ZmeV3E-dfVy0bLD2BXiubI7xpbnAHtbWZmr2eLFEkXF44YqHik0G-uKU4YQGz8Z_QPLZwYLXAjRbHYYw2mfAFV_SCgMIWCbKji7Wu0"
                alt="Diverse youth working on laptops in a modern technology hub"
                width={800}
                height={500}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary-fixed/50 rounded-full blur-[60px] -z-10" />
          </div>
        </div>
      </section>

      {/* Core modules */}
      <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-20 max-w-2xl mx-auto space-y-4">
          <h2 className="text-headline-md text-primary mb-4">Comprehensive Digital Curriculum</h2>
          <p className="text-on-surface-variant text-body-md">
            Industry-vetted courses that take you from beginner to professional in about 16 weeks.
          </p>
        </div>
        <div className="space-y-32">
          {/* Graphic Design */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 flex flex-col justify-center order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6 text-secondary border-b border-outline-variant/30 pb-4">
                <span className="material-symbols-outlined text-[28px]">palette</span>
                <span className="text-label-md uppercase tracking-wider">Design</span>
              </div>
              <h3 className="text-display-lg-mobile mb-6 text-on-background">Graphic Design &amp; Visual Identity</h3>
              <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                Adobe Creative Suite and Figma. Brand storytelling through color theory,
                typography, and professional composition.
              </p>
              <ul className="space-y-4 mb-10">
                {['Logo Design & Branding', 'UI/UX Fundamentals'].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary-container/20 flex items-center justify-center shrink-0 mt-1">
                      <span className="material-symbols-outlined text-secondary text-[18px]">check</span>
                    </div>
                    <span className="text-body-md text-on-surface pt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-6 md:col-start-7 relative order-1 md:order-2">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-outline-variant/20 relative z-10">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP6yXqnSQ83DdySVQF8uxu2hcec6JdU2orF0ZavgdO5lfgvhxQ8dnBapRv7HB5ReD84Eu4QeRTMto3-5MEJFHtWjL0zWMKx2G3azzQhoiOpcbN8E_blAk3KGCkecI5aaoFAuIUQ_e9auuwe51KtQvKKBu4pu6btVj67j_wC_zEoQadPaXXeBIensw-Qa5yGV5O1TWd0Xq9e51sX_yEus3gexFLlvt0vk8Z7hF4JcBt_M3yDOf0wpSnlIxefU13G3js8ApirkHk7_Hd"
                  alt="Designer's workspace with brand identity work on dual monitors"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-outline-variant/20 max-w-4xl mx-auto" />

          {/* MS Office & Web Dev */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 relative py-12">
            <div className="absolute inset-0 bg-gradient-to-b from-surface-container-low/50 to-transparent -z-10 rounded-[3rem] -mx-8 md:-mx-12" />
            <div className="flex flex-col">
              <div className="w-20 h-20 bg-primary-fixed text-on-primary-fixed rounded-[2rem] flex items-center justify-center mb-8 shadow-sm">
                <span className="material-symbols-outlined text-[40px]">description</span>
              </div>
              <h3 className="text-display-lg-mobile mb-6 text-on-background">MS Office Professional</h3>
              <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                Advanced Excel, professional report writing, and dynamic presentations &mdash;
                the foundation for every corporate role.
              </p>
              <div className="mt-auto">
                <div className="w-full bg-surface-dim h-1.5 rounded-full mb-3">
                  <div className="bg-primary h-full w-full rounded-full" />
                </div>
                <span className="text-label-sm text-on-surface-variant uppercase tracking-wider">Essential Skillset</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="w-20 h-20 bg-tertiary-fixed text-on-tertiary-fixed rounded-[2rem] flex items-center justify-center mb-8 shadow-sm">
                <span className="material-symbols-outlined text-[40px]">code</span>
              </div>
              <h3 className="text-display-lg-mobile mb-6 text-on-background">Web Development</h3>
              <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                Build modern websites and web apps using HTML5, CSS, JavaScript, and React.
                Create real digital solutions for local businesses.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-outline-variant/20 max-w-4xl mx-auto" />

          {/* Digital Marketing */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 relative">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-outline-variant/20 relative z-10">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXmp1VOb3JznKcVK_JQ0--tliU1IrMEdJiZsWl_Qs0Hlsv841a3eAse89N7M0THKDm7ZdoCkzhPWoIdDnzVENYdVr6guUrg93lmEp_1ia5iLorKEEn1Ou1j_7HoVCPgzdLJpSBV6oGEtSqeOUm5lqzbXz2AoaQNU52bT2S8-xOfL2zIAe_F_ouYPco5PwPZJalRMsDFgWHmyIbt5EZFxzBf_lIt_BVbDO_N4rOurtcKGziFDSo3Lm4rxDZ9cA-SpH2lvbbgizoma74"
                  alt="Digital marketing analytics on a glowing dashboard"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-secondary-fixed/50 rounded-full blur-[60px] -z-10" />
            </div>
            <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6 text-secondary border-b border-outline-variant/30 pb-4">
                <span className="material-symbols-outlined text-[28px]">ads_click</span>
                <span className="text-label-md uppercase tracking-wider">Marketing</span>
              </div>
              <h3 className="text-display-lg-mobile mb-6 text-on-background">Digital Marketing</h3>
              <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                SEO, social media management, and content strategy &mdash; learn to drive
                measurable growth for any local brand or business.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-block px-4 py-2 bg-surface-container-high text-on-surface-variant rounded-full text-label-sm border border-outline-variant/30">
                  Meta Certified
                </span>
                <span className="inline-block px-4 py-2 bg-surface-container-high text-on-surface-variant rounded-full text-label-sm border border-outline-variant/30">
                  Google Analytics
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career paths */}
      <section className="bg-surface py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-headline-md text-primary">Unlocking Global Opportunities</h2>
              <div className="w-12 h-1 bg-secondary rounded-full" />
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                We don&rsquo;t just teach tools; we build careers. Our specialized tracks focus
                on high-demand remote-work sectors.
              </p>
              <div className="space-y-12 pt-8">
                <div className="pl-6 border-l-2 border-secondary/30 relative">
                  <span className="material-symbols-outlined text-secondary text-3xl mb-3 absolute -left-[18px] bg-surface top-0 pb-2">
                    support_agent
                  </span>
                  <h4 className="text-headline-sm text-on-surface mb-3 mt-1">Virtual Assistant Hub</h4>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    Administrative support, executive scheduling, and customer management for
                    international clients &mdash; earn in foreign currency while working from
                    home.
                  </p>
                </div>
                <div className="pl-6 border-l-2 border-primary/30 relative">
                  <span className="material-symbols-outlined text-primary text-3xl mb-3 absolute -left-[18px] bg-surface top-0 pb-2">
                    work
                  </span>
                  <h4 className="text-headline-sm text-on-surface mb-3 mt-1">Gig Economy Mastery</h4>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    Profile optimization for Upwork, Fiverr, and similar platforms. High-value
                    bidding, client communication, and project management.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 relative lg:pl-12">
              <div className="relative">
                <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 z-10 relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8NHGTGFwTbRMGL-r3Rlx99kjNMmybm7nsP0qCtIGTX4rDLB028BlDFuup1MLuPl2uNyRAuvwfC49KD7PnTqdxMF-VxEbJVf80bMktBU4efy6C4pVoykmh2IDbxoTIvWXZeegIMm8s0TTq91kywllqY_tZp_WG0cdq55x2gHL4l1cork63aoxC2k_IwaJYWLXWPO40b_CWZwiEoUmxb-pj_u4VxB9XB6myrvmOkSPtZ42UL9C-80tVViNdVS282WPsfJ3Pu95KnxfH"
                    alt="Young virtual assistant smiling during a remote video call"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-fixed/30 rounded-full blur-[80px] -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-cream-to-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-outline-variant/20">
            {[
              { val: '16 wk', color: 'text-primary', label: 'Core Track Length' },
              { val: '4', color: 'text-secondary', label: 'Specialization Paths' },
              { val: '1:1', color: 'text-primary', label: 'Lab Computer Ratio' },
              { val: '24/7', color: 'text-secondary', label: 'Lab Wi-Fi Access' },
            ].map((s) => (
              <div key={s.label} className="space-y-4">
                <p className={`text-display-lg leading-none font-black tracking-tighter ${s.color}`}>{s.val}</p>
                <p className="text-label-md text-on-surface-variant uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProgramEnrollmentForm
        formTitle="Vijana Digital Hub Enrollment"
        sectionHeading="Ready to start your digital journey?"
        sectionLead="Applications for the next cohort are open. Secure your spot and join the next generation of digitally fluent youth in Bomet County."
        steps={[
          {
            title: 'Submit Application',
            body: 'Complete the inquiry below. Bring your National ID when you visit the Sotik hub.',
          },
          {
            title: 'Aptitude Chat',
            body: 'A short conversation to help us place you on the right track — from total beginner to intermediate.',
          },
          {
            title: 'Start Learning',
            body: 'Begin on Day 1 with foundational digital literacy, then specialize.',
          },
        ]}
        interestOptions={[
          'Digital Literacy & MS Office',
          'Data Entry & Virtual Assistance',
          'Graphic Design & Digital Marketing',
          'Web Development',
        ]}
      />
    </main>
  );
}
