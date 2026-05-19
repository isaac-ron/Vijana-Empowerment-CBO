import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vijana Wheels | Driving & Mechanics Program',
  description:
    'Practical driving, traffic rules, road safety, vehicle maintenance, and basic mechanics — with placement at driving schools, garages, and transport companies.',
};

const PARTNERS = [
  { icon: 'local_shipping', name: 'TransEast Logistics' },
  { icon: 'precision_manufacturing', name: 'Apex Auto Garage' },
  { icon: 'commute', name: 'Metro Transit Co.' },
  { icon: 'handyman', name: 'Unity Mechanics Hub' },
  { icon: 'delivery_dining', name: 'Swift Delivery Ltd.' },
];

export default function WheelsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden bg-cream-to-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-fixed text-on-secondary-fixed rounded-full shadow-sm">
              <span className="text-label-sm uppercase tracking-wider">Vocational Program</span>
            </div>
            <h1 className="text-display-lg-mobile md:text-display-lg text-primary max-w-xl">
              Vijana Wheels: Driving Your Future
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
              Master the road and the machine. A professional training program for aspiring
              drivers and mechanics, with partnerships at driving schools, garages, and
              transport companies for immediate placement.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#enroll"
                className="px-8 py-4 bg-primary text-on-primary rounded-xl text-label-md hover:bg-primary-container transition-all flex items-center gap-2 group"
              >
                Enroll Now
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link
                href="#modules"
                className="px-8 py-4 bg-surface-container-highest text-primary rounded-xl text-label-md hover:bg-white transition-all border border-outline-variant/30"
              >
                Explore Modules
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeBfjQ5ETm5nt4Z78h4ryJ807Gz9X0VM_qMvc0arIFTVDWsvuNJMdLMvXW5vqb-a17iqa2SpivFCJtkR1FOVlX_8FahoQxU5CEd_ctas3xP2s2mKRkYuXIppLrvX2QqqEPsLb96hr4OE_uQYDeuXoKuPJcwLdtCMskned490ayF-RWiSpqMB4ld16bZA12EOj_Am9TyNT4DG07R9X3fCYOFG9ykw-UJ_9itADhZzmR-9Z6yx_JIdsjrJe6Y61Pkw0jIw5jzL4y3efI"
                alt="Young driver confidently holding a steering wheel during a driving lesson"
                width={600}
                height={600}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-fixed/50 rounded-full blur-[60px] -z-10" />
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section id="modules" className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-headline-md text-primary mb-4">Program Core Pillars</h2>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            We don&rsquo;t just teach you to drive; we equip you with the technical expertise and
            safety mindset required for a successful career in the transport industry.
          </p>
        </div>
        <div className="space-y-32">
          {/* Practical Driving */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6 text-secondary border-b border-outline-variant/30 pb-4">
                <span className="material-symbols-outlined text-[28px]">directions_car</span>
                <span className="text-label-md uppercase tracking-wider">Core Training</span>
              </div>
              <h3 className="text-display-lg-mobile mb-6 text-on-background">Practical Driving Excellence</h3>
              <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                Hands-on experience with a mixed fleet of manual and automatic vehicles.
                Certified instructors guide you through diverse terrains — from rural roads to
                long-distance highway handling.
              </p>
              <ul className="space-y-4 mb-10">
                {['Urban & Highway Maneuvers', 'Defensive Driving Techniques', 'Night Driving Proficiency'].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-secondary-container/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="material-symbols-outlined text-secondary text-[18px]">check</span>
                      </div>
                      <span className="text-body-md text-on-surface pt-1">{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="md:col-span-6 md:col-start-7 relative">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaJhtczNmRJRXUg0UctjW-GQt-bZkkVzsyhuxDc4x544zKxuzus5ckM4zbv07tgsxvuFu77aVCcXkI5PE7JvyxkGbo-1Lcd_ehlbFUx4dbdTL_pLSeGFVTCrhCu39WbryWB9lJ2gzRFFZR-6hZXGjucvZjNU3Mm0K_CWL9lWq-f1B_7W0vdPUhZb85Xrbfov-pINHLGx9rF6qMCvZgGfvZ8OMxVsn9u4Ep0VpPydt_Pv7DJdBMs_z7y8CErkt2BIfhkHh-w98AXghK"
                  alt="Diverse young students gathered around an open car hood with an instructor"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-primary-fixed/30 rounded-full blur-[60px] -z-10" />
            </div>
          </div>

          <div className="w-full h-px bg-outline-variant/20 max-w-3xl mx-auto" />

          {/* Traffic Laws & Basic Mechanics */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 relative py-12">
            <div className="absolute inset-0 bg-gradient-to-b from-surface-container-low/50 to-transparent -z-10 rounded-[3rem] -mx-8 md:-mx-12" />
            <div className="flex flex-col">
              <div className="w-20 h-20 bg-primary-fixed text-on-primary-fixed rounded-[2rem] flex items-center justify-center mb-8 shadow-sm">
                <span className="material-symbols-outlined text-[40px]">gavel</span>
              </div>
              <h3 className="text-display-lg-mobile mb-6 text-on-background">Traffic Laws &amp; Safety</h3>
              <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                Master the Kenyan Highway Code and international safety standards. We focus on
                ethical road use and pedestrian safety.
              </p>
              <div className="mt-auto border-l-4 border-secondary pl-6 py-2">
                <span className="block text-display-lg text-primary mb-1">94%</span>
                <span className="text-label-md text-on-surface-variant uppercase tracking-wide">First-time Pass Rate</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="w-20 h-20 bg-secondary-fixed text-on-secondary-fixed rounded-[2rem] flex items-center justify-center mb-8 shadow-sm">
                <span className="material-symbols-outlined text-[40px]">build</span>
              </div>
              <h3 className="text-display-lg-mobile mb-6 text-on-background">Basic Mechanics</h3>
              <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                Understand what happens under the hood — engine maintenance, troubleshooting,
                and emergency repairs so you&rsquo;re never stranded.
              </p>
              <div className="mt-auto flex gap-12">
                <div>
                  <p className="text-headline-sm text-primary mb-1">Engines</p>
                  <p className="text-label-md text-on-surface-variant">Diagnostics</p>
                </div>
                <div>
                  <p className="text-headline-sm text-primary mb-1">Tires</p>
                  <p className="text-label-md text-on-surface-variant">Maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="text-headline-md text-primary mb-16">Industry Partners &amp; Career Pathways</h2>
          <div className="flex flex-wrap justify-center gap-16 opacity-70 hover:opacity-100 transition-opacity duration-500">
            {PARTNERS.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-4xl">{p.icon}</span>
                <span className="font-bold text-xl">{p.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-20 max-w-3xl mx-auto relative">
            <span className="material-symbols-outlined text-primary/20 text-6xl absolute -top-8 -left-8">format_quote</span>
            <p className="text-body-lg text-on-surface-variant italic relative z-10">
              &ldquo;Our partnership with Vijana Empowerment ensures a steady pipeline of highly
              skilled, disciplined, and technically proficient drivers for our regional transport
              fleet.&rdquo; &mdash; HR Manager, TransEast Logistics
            </p>
          </div>
        </div>
      </section>

      {/* Enrollment */}
      <section id="enroll" className="py-32 bg-cream-to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="flex-1 space-y-12 pr-0 md:pr-12">
              <div>
                <h2 className="text-display-lg-mobile md:text-display-lg text-primary mb-6">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-body-lg text-on-surface-variant leading-relaxed">
                  Join our next intake. New classes begin every first Monday of the month with
                  flexible morning and evening shifts.
                </p>
              </div>
              <div className="space-y-10 border-l border-outline-variant/30 ml-4 pl-8 relative">
                {[
                  {
                    n: 1,
                    title: 'Submit Application',
                    body: 'Complete the online inquiry below or visit our Sotik hub with your National ID.',
                  },
                  {
                    n: 2,
                    title: 'Assessment Interview',
                    body: 'A brief aptitude and health assessment with our team to confirm fit for the program.',
                  },
                  {
                    n: 3,
                    title: 'Commence Training',
                    body: 'Step into the classroom and behind the wheel to start building your future.',
                  },
                ].map((step) => (
                  <div key={step.n} className="relative">
                    <div className="absolute -left-[49px] top-0 w-8 h-8 rounded-full border-4 border-surface bg-primary text-white flex items-center justify-center font-bold text-sm">
                      {step.n}
                    </div>
                    <h4 className="text-headline-sm text-on-surface mb-2">{step.title}</h4>
                    <p className="text-body-md text-on-surface-variant">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full max-w-md md:max-w-none mx-auto">
              <form className="bg-surface-container-highest/30 rounded-[2rem] p-10 border border-outline-variant/20 space-y-6 backdrop-blur-sm">
                <h3 className="text-headline-sm text-primary mb-8 border-b border-outline-variant/30 pb-4">
                  Enrollment Inquiry
                </h3>
                <div>
                  <label className="block text-label-md text-on-surface mb-2" htmlFor="wheels-name">
                    Full Name
                  </label>
                  <input
                    id="wheels-name"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-label-md text-on-surface mb-2" htmlFor="wheels-phone">
                    Phone Number
                  </label>
                  <input
                    id="wheels-phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="+254 700 000 000"
                    type="tel"
                  />
                </div>
                <div>
                  <label className="block text-label-md text-on-surface mb-2" htmlFor="wheels-interest">
                    Primary Interest
                  </label>
                  <select
                    id="wheels-interest"
                    name="interest"
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none cursor-pointer"
                    defaultValue="Professional Driving (Class B/C/E)"
                  >
                    <option>Professional Driving (Class B/C/E)</option>
                    <option>Automotive Mechanics</option>
                    <option>Combined Fleet Management</option>
                  </select>
                </div>
                <button
                  className="w-full bg-primary text-on-primary py-4 rounded-xl text-label-md hover:bg-primary-container hover:text-on-primary-container transition-all shadow-lg active:scale-95 mt-6"
                  type="submit"
                >
                  Submit Application
                </button>
                <p className="text-center text-label-sm text-on-surface-variant pt-4 opacity-80">
                  No application fee. Sponsored slots available for eligible youth.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
