import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glow with Vijana | Beauty Therapy Program',
  description:
    'Hairdressing, styling, nail technology, makeup, and spa management — with an emphasis on local products, salon management, and customer service.',
};

const HAIR_TRACKS = ['Braiding & Weaving', 'Color Theory & Application', 'Modern Bridal Styling'];

const PARTNER_SALONS = [
  'Luxe Styles Nairobi',
  'Savannah Spa',
  'Coastal Glow',
  'The Barber Studio',
  'Urban Chic Salon',
];

export default function BeautyTherapyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative w-full overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter items-center relative z-10">
          <div className="z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-sm mb-6 uppercase tracking-widest shadow-sm">
              Vocational excellence
            </span>
            <h1 className="text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">
              Glow with Vijana: Beauty Therapy
            </h1>
            <p className="text-body-lg text-on-surface-variant mb-10 max-w-xl leading-relaxed">
              A comprehensive training program that builds technical mastery in hairdressing,
              nail technology, makeup, and spa management &mdash; fueled by Kenyan-made products
              and modern salon management practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-involved#apply"
                className="px-8 py-4 bg-primary text-white rounded-xl text-label-md shadow-lg shadow-primary/20 hover:shadow-xl transition-all flex items-center gap-2"
              >
                Enroll Now
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                href="/programs"
                className="px-8 py-4 bg-white border-2 border-outline-variant text-on-surface rounded-xl text-label-md hover:bg-surface-container-low transition-all"
              >
                View All Programs
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFZmbogh8N6qqp_2LC1V5ScL3n7iphtQfvDggLa41puRuFFayGmimVlGa78JANeMLr0BbAaf_WnT6U-GDGnuXJ-fWa1SGel58rMrKyAwEslx-2pg36CSfO84lwEwGNgBHAFzzysQTiQ0RfOn8O-K0MHGexRIrnzbguL3TWupheAxV52FTFe8z55REyllTJ34mFd-B0iknGUHCqWjK3LL3zSAyPq9-IeHC92aohKhDRuRiHrIpGmaUP_Y0yqTtlJHiDTCZYHQRybhIy"
                alt="Beauty therapy student finishing a vibrant hairstyle"
                width={600}
                height={750}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-white">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </div>
              <div>
                <p className="text-headline-sm text-primary">100%</p>
                <p className="text-label-sm text-on-surface-variant">Internship Placement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Tracks */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-20">
            <h2 className="text-headline-md text-primary mb-4">Master Your Craft</h2>
            <p className="text-on-surface-variant text-body-md max-w-2xl mx-auto">
              From the art of styling to the science of management, our tracks prepare you for
              every facet of the beauty industry.
            </p>
          </div>
          <div className="space-y-32">
            {/* Hair Dressing */}
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-6 relative">
                <div className="aspect-[4/5] md:aspect-auto md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHd3Y3R3xa1i7A8l82UBXh2GTBEsJC8-NrXCaKzxpjr05UTs6RVgBxcoI_2lP9ZT29KH_DpuPUQ2BOoS8T3d4I2wlII2vG6ZwBZ30u744kDxWmEpdsOnFieVo3LxXa_F6b4ay9nPfiwH_SrGJprbmawpv0OZYjo_J6NcKChdguJkOQhgVGZh_GJ8jxYCVGnqSErlKJ24DrN4BX3HVQnRiJwTUCc-alQAB2ai7dr0d3W5Wa_XkHERW6hraOcHc63ywFDWbioFv1PIEb"
                    alt="Skilled hands performing intricate braiding with styling tools"
                    width={600}
                    height={500}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary-fixed/50 rounded-full blur-[60px] -z-10" />
              </div>
              <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6 text-secondary border-b border-outline-variant/30 pb-4">
                  <span className="material-symbols-outlined text-[28px]">content_cut</span>
                  <span className="text-label-md uppercase tracking-wider">Hair Dressing &amp; Styling</span>
                </div>
                <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                  Advanced techniques in braiding, chemical treatments, and precision cutting —
                  with a focus on diverse hair textures and cultural styling excellence.
                </p>
                <ul className="space-y-4 mb-10">
                  {HAIR_TRACKS.map((t) => (
                    <li key={t} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-secondary-container/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="material-symbols-outlined text-secondary text-[18px]">check</span>
                      </div>
                      <span className="text-body-md text-on-surface pt-1">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Nail Tech & Spa */}
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 relative py-12">
              <div className="absolute inset-0 bg-gradient-to-b from-surface-container/50 to-transparent -z-10 rounded-[3rem] -mx-8 md:-mx-12" />
              <div className="flex flex-col">
                <div className="w-20 h-20 bg-tertiary-fixed text-on-tertiary-fixed rounded-[2rem] flex items-center justify-center mb-8 shadow-sm">
                  <span className="material-symbols-outlined text-[40px]">draw</span>
                </div>
                <h3 className="text-display-lg-mobile mb-6 text-on-background">Nail Technology</h3>
                <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                  Manicures, pedicures, and nail art using safe, high-quality products to create
                  stunning visual statements.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <div className="bg-surface-variant px-4 py-2 rounded-full text-label-sm text-on-surface-variant">UV Gel Art</div>
                  <div className="bg-surface-variant px-4 py-2 rounded-full text-label-sm text-on-surface-variant">Acrylic Mastery</div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="w-20 h-20 bg-primary-fixed text-on-primary-fixed rounded-[2rem] flex items-center justify-center mb-8 shadow-sm">
                  <span className="material-symbols-outlined text-[40px]">spa</span>
                </div>
                <h3 className="text-display-lg-mobile mb-6 text-on-background">Spa Management</h3>
                <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                  Operational excellence for wellness centers — customer service, hygiene
                  standards, and luxury service protocols.
                </p>
              </div>
            </div>

            {/* Salon Business */}
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5 flex flex-col justify-center order-2 md:order-1">
                <div className="flex items-center gap-3 mb-6 text-secondary border-b border-outline-variant/30 pb-4">
                  <span className="material-symbols-outlined text-[28px]">storefront</span>
                  <span className="text-label-md uppercase tracking-wider">Business</span>
                </div>
                <h3 className="text-display-lg-mobile mb-6 text-on-background">Salon Management Training</h3>
                <p className="text-body-lg text-on-surface-variant mb-10 leading-relaxed">
                  We don&rsquo;t just train artists; we build entrepreneurs. Learn the
                  fundamentals of running a successful beauty business in the Kenyan market.
                </p>
                <div className="flex gap-8 items-center mb-10">
                  <div>
                    <span className="block text-label-sm text-secondary mb-1">Inventory</span>
                    <span className="text-label-md text-on-surface font-bold uppercase tracking-wide">Local Sourcing</span>
                  </div>
                  <div className="w-px h-12 bg-outline-variant/30" />
                  <div>
                    <span className="block text-label-sm text-secondary mb-1">Finance</span>
                    <span className="text-label-md text-on-surface font-bold uppercase tracking-wide">Profitability</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 md:col-start-7 relative order-1 md:order-2">
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2hDuWcvsZJeqwIgTZjIsgB2EkfkgZaqN2-mdeOB5WT016x0VwyFapra8e-BTbagbfTBU8HK_wV6sgCrD5ka2Z2-ijuC4PAIjCBrxwHyQI-3BNstihuiMjRLgOx_I51qX8WLs-3nRBA3X6tbCiEWqamaXj6UabeiPMPWQme2w5FzU6wgCQm2GBS1MVvLb9zUhCe5nbUYzdbEBO8nkVAJfUKXIndFQT8G_T520He6oUbR9pAUy1G_h92V8nSOk2oUmLzjT0jVRWhotT"
                    alt="Eco-conscious salon with locally sourced products"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary-fixed/30 rounded-full blur-[80px] -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local product focus */}
      <section className="py-24 bg-inverse-surface text-white relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="space-y-8 flex-1 pl-6 border-l-4 border-secondary">
              <h2 className="text-display-lg-mobile md:text-display-lg">The Local Advantage</h2>
              <p className="text-lg opacity-80 text-body-lg max-w-xl leading-relaxed">
                We prioritize training with Kenyan-made organic products. Our curriculum focuses
                on sustainable sourcing — supporting local farmers who provide shea butter,
                coconut oil, and essential oils.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary">eco</span>
                  </div>
                  <div>
                    <h4 className="text-label-md text-white">Ethical Sourcing</h4>
                    <p className="text-sm opacity-70">100% commitment to cruelty-free and locally sourced ingredients.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary">support</span>
                  </div>
                  <div>
                    <h4 className="text-label-md text-white">Community Growth</h4>
                    <p className="text-sm opacity-70">Empowering local artisans through direct supply chains.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 flex-1">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS4v3rkL2CcdXdQi9X00r7tsTTGizIV3tGyQFZlBP442SuCsjicv7mQlbAezWM7-sO8NLFRs0RoVPQrYDruIL_Fvif8JfLx4n6erALandE25z-oOQpXep5a0radZIcAswMisFa3fO9R-mvYSXh-K9iUg2RkNdM2W74pIzQTzYsD1fZKiGkPQzn3kdenx7CpcLz6z0a4htITmTqvwYxM7fYuQveNkvNS20nXYWHqhf12vb-O3MT483Z1-0wH7fGm-0BYrT5D5o_ryGx"
                alt="Organic beauty products in glass jars"
                width={400}
                height={400}
                className="rounded-2xl shadow-lg w-full object-cover aspect-square"
              />
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf0pBn6WXstGUOXWYDJssQHBuxfrswTppDpqqrX6wbxDQUqILZsgJkJLt6jYuo9EnPO3P4WvSx9uAQCnDjf-BdjHVwCrmZPpmKVQ3sUDjjftHh2m49PjfaLjQcaevNgIlgomL3b-47Cezw8K_IGBgYbQZGrJQQX060aOWlhsj1F1MNn2UWZRxnRu6YBT3Yhdvmf8eflmdnq4Pw1a1YB_53bzMGiliBxfe-rX5HYEtgC3eZtlrGgoo62qjf3ajronYLk2NoaOeKONJh"
                alt="Aesthetician applying locally sourced facial oil"
                width={400}
                height={400}
                className="rounded-2xl shadow-lg mt-8 w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none" />
      </section>

      {/* Partnerships */}
      <section className="py-24 bg-surface-container-highest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-headline-md text-primary mb-4">From Training to Industry</h2>
              <p className="text-on-surface-variant text-body-md">
                We work with salons and spas across Nairobi, Mombasa, and Kisumu to provide
                hands-on internships and immediate employment pathways for our graduates.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-70">
            {PARTNER_SALONS.map((name) => (
              <div key={name} className="flex flex-col items-center gap-3">
                <div className="w-full h-16 rounded-lg flex items-center justify-center p-4">
                  <span className="font-bold text-on-surface-variant uppercase tracking-widest text-sm text-center">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bg-primary-container rounded-[2rem] p-8 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-display-lg-mobile md:text-headline-md text-white mb-6">Start Your Glow Journey</h2>
            <p className="text-body-lg text-white/80 mb-10">
              Applications are open for our next intake. Limited subsidized slots are reserved
              for the most vulnerable youth in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-involved#apply"
                className="bg-white text-primary px-10 py-4 rounded-xl text-label-md hover:bg-surface-container-low transition-all shadow-lg"
              >
                Start My Application
              </Link>
            </div>
          </div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary rounded-full blur-[80px] opacity-20" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-tertiary rounded-full blur-[80px] opacity-20" />
        </div>
      </section>
    </main>
  );
}
