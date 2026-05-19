import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Involved | Vijana Empowerment Initiative',
  description:
    'Donate, sponsor a youth, partner with us, or volunteer your skills. Help fund vocational training, mentorship, and entrepreneurship support in Sotik Sub-County.',
};

const WAYS_TO_HELP = [
  {
    icon: 'volunteer_activism',
    title: 'One-time Gift',
    body: 'Direct financial support that provides immediate relief and resources to our ongoing training cohorts.',
    cta: 'Give Now',
    href: '#donate-form',
    color: 'text-primary',
  },
  {
    icon: 'workspace_premium',
    title: 'Sponsor a Youth',
    body: 'Sponsor a specific student through a full training cycle. Includes regular progress updates from the team.',
    cta: 'Sponsor a Youth',
    href: '#partnership',
    color: 'text-secondary',
  },
  {
    icon: 'handshake',
    title: 'Corporate Partnership',
    body: 'Long-term partnerships covering CSR, equipment donations, internships, and graduate hiring pipelines.',
    cta: 'Partner With Us',
    href: '#partnership',
    color: 'text-tertiary',
  },
  {
    icon: 'psychology',
    title: 'Mentorship',
    body: 'Volunteer your professional skills to coach graduates as they enter the workforce or start a business.',
    cta: 'Volunteer Your Skills',
    href: '#partnership',
    color: 'text-secondary-container',
  },
];

export default function GetInvolvedPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 md:py-32 min-h-[700px] flex items-center overflow-hidden bg-cream-to-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-fixed text-on-secondary-fixed rounded-full shadow-sm">
              <span className="text-label-sm uppercase tracking-wider">Join the Mission</span>
            </div>
            <h1 className="text-display-lg-mobile md:text-display-lg text-primary leading-tight">
              Empower Kenyan Youth Through Strategic Partnership.
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              We&rsquo;re more than a charity &mdash; we are an investment in the next
              generation of innovators, artisans, drivers, and leaders. Your support fuels
              sustainable community growth in Sotik Sub-County and beyond.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                className="px-8 py-4 bg-primary text-on-primary rounded-xl text-label-md hover:bg-primary-container transition-all flex items-center gap-2 group"
                href="#donate-form"
              >
                Donate Now
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
              <a
                className="px-8 py-4 bg-surface-container-highest text-primary rounded-xl text-label-md hover:bg-white transition-all border border-outline-variant/30"
                href="#partnership"
              >
                Become a Partner
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsc8WPDJJhyKdMFY9-wwJntOcjiknHzweB48VuluaDM0G2TAN1-5_W6oOJF-_acKjrO_GfIenX5zYHyqK_Ltwlc_Dk3zgA-xdHNKmz2DN8Dn6szPvAMlIyzg6CAiQXoQ5Dcjk4l2pOuOlheeAd70LCcOY4aLOLauc5N2rr6YKeyh_mrW8XWv14u24adztswKkOft12H-AyNC9uy2PRvpPIG1vadgY-S6Vrxgl6XZmPTR456B-NRH7v-Gwftwp_m89O6qbUfP7j_kj3"
                alt="Diverse youth collaborating in a workshop space"
                width={800}
                height={600}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-highest/30 -z-0 [clip-path:polygon(100%_0,_100%_100%,_0_100%)]" />
      </section>

      {/* Budget transparency */}
      <section className="py-24 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-20 text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-headline-md text-primary">Financial Transparency</h2>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              We believe in radical accountability. Here is the breakdown of our estimated
              KES&nbsp;4.5&nbsp;million project budget covering setup and the first year of
              programming.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="md:col-span-6 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-3 text-secondary">
                <span className="material-symbols-outlined text-[28px]">handyman</span>
                <span className="text-label-md tracking-wider uppercase">Major Allocation</span>
              </div>
              <h3 className="text-display-lg-mobile text-primary">Equipment &amp; Materials</h3>
              <p className="text-body-lg text-on-surface-variant leading-relaxed mb-6">
                Specialized tools for tailoring, beauty therapy, mechanics, and a fully equipped
                digital lab so that training matches industry standards from day one.
              </p>
              <div>
                <div className="text-primary text-display-lg text-[64px] leading-none font-black tracking-tighter mb-2">
                  KES 2M
                </div>
                <div className="w-full bg-surface-dim h-2 rounded-full overflow-hidden mt-6 mb-2">
                  <div className="bg-primary h-full w-[44%]" />
                </div>
                <p className="text-label-md text-on-surface-variant uppercase tracking-wide">
                  ~44% of total budget
                </p>
              </div>
            </div>
            <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="pl-6 border-l-2 border-outline-variant/30 space-y-4">
                <span
                  className="material-symbols-outlined text-secondary text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  school
                </span>
                <h4 className="text-headline-sm text-primary">Instructor Fees</h4>
                <div className="text-secondary text-display-lg-mobile font-bold">KES 1.5M</div>
                <p className="text-body-md text-on-surface-variant">Expert mentorship and training delivery</p>
              </div>
              <div className="pl-6 border-l-2 border-outline-variant/30 space-y-4">
                <span
                  className="material-symbols-outlined text-tertiary text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  storefront
                </span>
                <h4 className="text-headline-sm text-primary">Rent &amp; Utilities</h4>
                <div className="text-tertiary text-display-lg-mobile font-bold">KES 300K</div>
                <p className="text-body-md text-on-surface-variant">Safe community training spaces (6 months)</p>
              </div>
              <div className="pl-6 border-l-2 border-outline-variant/30 space-y-4">
                <span
                  className="material-symbols-outlined text-secondary-container text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  campaign
                </span>
                <h4 className="text-headline-sm text-primary">Marketing &amp; Outreach</h4>
                <div className="text-secondary-container text-display-lg-mobile font-bold">KES 200K</div>
                <p className="text-body-md text-on-surface-variant">Recruitment of beneficiaries &amp; partners</p>
              </div>
              <div className="pl-6 border-l-2 border-primary/30 space-y-4">
                <span
                  className="material-symbols-outlined text-primary text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  eco
                </span>
                <h4 className="text-headline-sm text-primary">Admin &amp; Contingency</h4>
                <div className="text-primary text-display-lg-mobile font-bold">KES 500K</div>
                <p className="text-body-md text-on-surface-variant">Operations, audits, and reserves</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to help */}
      <section className="py-32 bg-surface-container-high relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <h2 className="text-headline-md text-primary text-center mb-20">Ways You Can Make an Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12">
            {WAYS_TO_HELP.map((w) => (
              <div key={w.title} className="group flex flex-col gap-6">
                <div
                  className={`w-16 h-16 bg-white rounded-2xl shadow-sm border border-outline-variant/20 flex items-center justify-center ${w.color} mb-2`}
                >
                  <span
                    className="material-symbols-outlined text-[32px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {w.icon}
                  </span>
                </div>
                <h3 className="text-headline-sm text-primary">{w.title}</h3>
                <p className="text-body-md text-on-surface-variant flex-1 leading-relaxed">{w.body}</p>
                <a
                  className={`${w.color} text-label-md flex items-center gap-1 group/link mt-4`}
                  href={w.href}
                >
                  {w.cta}
                  <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation & partnership */}
      <section id="donate-form" className="py-32 bg-cream-to-white scroll-mt-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Donation form */}
            <div className="space-y-10">
              <div className="flex items-center gap-4 border-b border-outline-variant/30 pb-6">
                <span className="material-symbols-outlined text-[32px] text-primary">security</span>
                <div>
                  <h3 className="text-headline-sm text-primary">Secure Donation</h3>
                  <p className="text-label-sm text-on-surface-variant">
                    Processed by trusted M-Pesa and card partners
                  </p>
                </div>
              </div>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { val: 'KES 5K', label: 'Basic Kit' },
                    { val: 'KES 15K', label: 'One Trainee' },
                    { val: 'Custom', label: 'Enter Amount' },
                  ].map((opt) => (
                    <label
                      key={opt.val}
                      className="flex flex-col items-center justify-center p-6 border-2 border-outline-variant/50 rounded-2xl cursor-pointer hover:border-secondary transition-all bg-white"
                    >
                      <span className="text-headline-sm text-primary mb-1">{opt.val}</span>
                      <span className="text-label-sm text-on-surface-variant">{opt.label}</span>
                    </label>
                  ))}
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-label-md mb-2" htmlFor="donor-name">Full Name</label>
                    <input
                      id="donor-name"
                      name="name"
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant/50 bg-white focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-label-md mb-2" htmlFor="donor-email">Email Address</label>
                    <input
                      id="donor-email"
                      name="email"
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant/50 bg-white focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                      placeholder="you@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="pt-4 border-t border-outline-variant/30">
                  <p className="text-label-md text-primary mb-4">Preferred Payment Method</p>
                  <div className="flex gap-4 mb-8">
                    <button
                      className="flex-1 py-3 bg-white rounded-xl border-2 border-outline-variant/50 text-label-md flex items-center justify-center gap-2 hover:border-secondary transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-secondary-container">smartphone</span>
                      M-Pesa
                    </button>
                    <button
                      className="flex-1 py-3 bg-white rounded-xl border-2 border-outline-variant/50 text-label-md flex items-center justify-center gap-2 hover:border-secondary transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-primary">credit_card</span>
                      Card
                    </button>
                  </div>
                  <button
                    className="w-full bg-primary text-on-primary py-4 rounded-full text-headline-sm shadow-lg hover:bg-primary-container active:scale-95 transition-all"
                    type="submit"
                  >
                    Confirm Donation
                  </button>
                </div>
              </form>
            </div>

            {/* Partnership / apply */}
            <div
              id="partnership"
              className="space-y-12 lg:pl-12 lg:border-l border-outline-variant/30 scroll-mt-24"
            >
              <div>
                <h3 className="text-headline-md text-primary mb-6">Partner &amp; Apply Inquiries</h3>
                <p className="text-body-lg text-on-surface-variant leading-relaxed">
                  Looking to fund a cohort, sponsor a student, or apply for training? Our team is
                  ready to talk &mdash; whether you&rsquo;re a prospective partner or a
                  prospective student.
                </p>
              </div>
              <div id="apply" className="space-y-8 scroll-mt-24">
                <div className="flex gap-6 items-start">
                  <span className="material-symbols-outlined text-[32px] text-secondary mt-1">mail</span>
                  <div>
                    <h4 className="text-label-md text-primary mb-1">Email Coordination</h4>
                    <p className="text-body-md text-on-surface-variant">hello@vijanaempowerment.org</p>
                    <p className="text-body-md text-on-surface-variant">partnerships@vijanaempowerment.org</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <span className="material-symbols-outlined text-[32px] text-tertiary mt-1">call</span>
                  <div>
                    <h4 className="text-label-md text-primary mb-1">Direct Line</h4>
                    <p className="text-body-md text-on-surface-variant">+254 700 000 000</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <span className="material-symbols-outlined text-[32px] text-primary mt-1">location_on</span>
                  <div>
                    <h4 className="text-label-md text-primary mb-1">Visit Our Hub</h4>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">
                      Sotik Town Center, Sotik Sub-County, Bomet County, Kenya.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 p-8 bg-surface border-l-4 border-secondary rounded-r-2xl">
                <p className="text-body-lg text-primary italic leading-relaxed">
                  &ldquo;When youths are equipped with practical skills and confidence, entire
                  communities thrive.&rdquo;
                </p>
                <p className="text-label-sm text-on-surface-variant uppercase tracking-widest mt-4">
                  &mdash; Vijana Empowerment Initiative
                </p>
              </div>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 text-primary text-label-md hover:text-secondary transition-colors group"
              >
                <span className="border-b border-current pb-1">Browse all training programs</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
