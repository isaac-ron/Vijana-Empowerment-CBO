import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Training Programs | Vijana Empowerment Initiative',
  description:
    'Vocational training programs in fashion, beauty therapy, driving & mechanics, and computer skills — designed for youth in Sotik Sub-County, Bomet County.',
};

export default function ProgramsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-secondary-fixed text-on-secondary-fixed px-4 py-1 rounded-full text-label-sm mb-6 uppercase tracking-widest">
              Skill up for the future
            </span>
            <h1 className="text-display-lg-mobile md:text-display-lg text-on-background mb-6">
              Our Vocational Training Tracks
            </h1>
            <p className="text-body-lg text-on-surface-variant mb-10 leading-relaxed">
              We bridge the gap between unemployment and opportunity through hands-on technical
              training, industry mentorship, and sustainable business incubation for the youth of
              Sotik and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#tracks"
                className="bg-primary text-on-primary px-8 py-4 rounded-xl text-label-md shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
              >
                Explore All Tracks
              </Link>
              <Link
                href="/get-involved#donate-form"
                className="bg-white border-2 border-outline-variant text-on-surface px-8 py-4 rounded-xl text-label-md hover:bg-surface-container-low transition-all"
              >
                Support the Programs
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,var(--color-secondary-container)_0%,transparent_70%)] opacity-30" />
        </div>
      </section>

      {/* Editorial program layout */}
      <section
        id="tracks"
        className="py-12 md:py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop"
      >
        <div className="space-y-32">
          {/* Fashion Forge */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 relative">
              <div className="aspect-[4/5] md:aspect-auto md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfkaMFXDItMxXWSX81gB78J03cA6ihA6U2hZa7YWBjHvE4DXTGKH5Ww4VxQ0n-h9rhX7zvtRXKWMVfHJsmQSjrn3xGI3pjbOAil9AycQqq-K2dU87jzq46PpxvVK7S7-WV_o0XKCnT_xnQ4S0iBGKfP52tRSl7ZcaoS9cJLsAV0tr028UkWiMhOs2LQTz1ZsQx0G4J-AsYj2KnxODeAfxcHIT8GvrqX9COKKjtmJeTr4wVkFDDLNPACz1hUUa1g_3IndHPbWabIXPb"
                  alt="Young Kenyan woman sewing a vibrant garment in a sunlit studio"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary-fixed/50 rounded-full blur-[60px] -z-10" />
            </div>
            <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6 text-secondary border-b border-outline-variant/30 pb-4">
                <span className="material-symbols-outlined text-[28px]">apparel</span>
                <span className="text-label-md uppercase tracking-wider">Fashion &amp; Design</span>
              </div>
              <h2 className="text-display-lg-mobile mb-6 text-on-background">Vijana Fashion Forge</h2>
              <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                Master tailoring, garment making, and pattern making with a focus on sustainable
                fashion. Includes fashion illustration, branding, entrepreneurship, and
                internships with local designers or fashion houses.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Tailoring, garment making & textile knowledge',
                  'Fashion illustration, branding & entrepreneurship',
                  'Internships with local designers and fashion houses',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary-container/20 flex items-center justify-center shrink-0 mt-1">
                      <span className="material-symbols-outlined text-secondary text-[18px]">check</span>
                    </div>
                    <span className="text-body-md text-on-surface pt-1">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                className="inline-flex items-center gap-2 text-primary text-label-md hover:text-secondary transition-colors group"
                href="/programs/fashion-and-design"
              >
                <span className="border-b border-current pb-1">Explore Fashion Forge</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="w-full h-px bg-outline-variant/20 max-w-3xl mx-auto" />

          {/* Digital Hub & Beauty (Split) */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 relative py-12">
            <div className="absolute inset-0 bg-gradient-to-b from-surface-container-low/50 to-transparent -z-10 rounded-[3rem] -mx-8 md:-mx-12" />
            <div className="flex flex-col">
              <div className="w-20 h-20 bg-tertiary-fixed text-on-tertiary-fixed rounded-[2rem] flex items-center justify-center mb-8 shadow-sm">
                <span className="material-symbols-outlined text-[40px]">devices</span>
              </div>
              <h2 className="text-display-lg-mobile mb-6 text-on-background">Vijana Digital Hub</h2>
              <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                From MS Office and digital literacy to data entry, graphic design, web
                development, and digital marketing — equipping youth for both local employment
                and the global gig economy.
              </p>
              <Link
                className="inline-flex items-center gap-2 text-tertiary text-label-md hover:opacity-80 transition-opacity group mt-auto"
                href="/programs/computer-training"
              >
                <span className="border-b border-current pb-1">Explore Digital Hub</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="flex flex-col">
              <div className="w-20 h-20 bg-primary-fixed text-on-primary-fixed rounded-[2rem] flex items-center justify-center mb-8 shadow-sm">
                <span className="material-symbols-outlined text-[40px]">face_5</span>
              </div>
              <h2 className="text-display-lg-mobile mb-6 text-on-background">Glow with Vijana</h2>
              <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                Hairdressing, styling, nail tech, makeup, and spa management with an emphasis on
                local products, salon management, and customer service.
              </p>
              <div className="bg-white/80 backdrop-blur p-6 rounded-2xl border border-outline-variant/20 mb-8 relative">
                <span className="material-symbols-outlined text-primary/20 text-5xl absolute -top-4 -left-2">format_quote</span>
                <p className="text-body-md text-on-surface-variant italic relative z-10">
                  &ldquo;I now run my own mobile salon thanks to the startup kit.&rdquo; &mdash; Sarah M., Glow graduate
                </p>
              </div>
              <Link
                className="inline-flex items-center gap-2 text-primary text-label-md hover:opacity-80 transition-opacity group mt-auto"
                href="/programs/beauty-therapy"
              >
                <span className="border-b border-current pb-1">Explore Glow with Vijana</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="w-full h-px bg-outline-variant/20 max-w-3xl mx-auto" />

          {/* Wheels */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 flex flex-col justify-center order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6 text-secondary border-b border-outline-variant/30 pb-4">
                <span className="material-symbols-outlined text-[28px]">directions_car</span>
                <span className="text-label-md uppercase tracking-wider">Transport &amp; Maintenance</span>
              </div>
              <h2 className="text-display-lg-mobile mb-6 text-on-background">Vijana Wheels</h2>
              <p className="text-body-lg text-on-surface-variant mb-10 leading-relaxed">
                Practical driving certification, traffic rules, road safety, and basic mechanics.
                We partner with driving schools, garages, and transport companies for placement.
              </p>
              <div className="flex gap-8 items-center mb-10">
                <div>
                  <span className="block text-display-lg text-secondary mb-1">85%</span>
                  <span className="text-label-md text-on-surface-variant uppercase tracking-wide">Target Job Placement</span>
                </div>
                <div className="w-px h-12 bg-outline-variant/30" />
                <div>
                  <span className="block text-display-lg text-secondary mb-1">
                    6<span className="text-headline-sm">mo.</span>
                  </span>
                  <span className="text-label-md text-on-surface-variant uppercase tracking-wide">Course Length</span>
                </div>
              </div>
              <Link
                className="inline-flex items-center gap-2 text-primary text-label-md hover:text-secondary transition-colors group"
                href="/programs/driving-mechanics"
              >
                <span className="border-b border-current pb-1">Explore Vijana Wheels</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="md:col-span-6 md:col-start-7 relative order-1 md:order-2">
              <div className="aspect-[4/3] md:aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHtpqpPpn92i7HLpCx-SX3KMnsVTX3QK3EuMY0__8VX5KKZhZziyAotS6enItMQiC2ewVK2kdVxDuNj0BUbghbDSMczQEzpfbLXGMPQIlpMEhuUVIfxqGRe6KM08O02fE12DnXUJwtg_09NEwye-D3N4PyhnYNsOTDl43GlZ9EzVvuzx-x-s6DxT4EhuhUXc-zzZhuoIL934M6waryZk1FetW0tdg8ZvoFaK86yHXLReGnxG9myxnoiGy9Frz-NMZtlzXeoJ-QdT85"
                  alt="Young adults learning engine maintenance in a training garage"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary-fixed/30 rounded-full blur-[80px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* The Vijana Advantage */}
      <section className="bg-inverse-surface text-inverse-on-surface py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-headline-md mb-4">The Vijana Advantage</h2>
            <p className="text-body-md opacity-80">
              Every student, regardless of their chosen track, receives the foundational support
              needed to thrive in the real world.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'handyman', title: 'Startup Toolkits', body: 'Graduates receive the essential tools of their trade to start their business immediately.' },
              { icon: 'psychology', title: 'Life Skills', body: 'Financial literacy, communication, time management, and product branding integrated into every track.' },
              { icon: 'workspace_premium', title: 'Industry Placements', body: 'Internships and job-placement partnerships with local businesses across every program.' },
              { icon: 'diversity_3', title: 'Mentorship', body: 'One-on-one sessions with established professionals in your specific field of study.' },
            ].map((f) => (
              <div key={f.title} className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                <span className="material-symbols-outlined text-secondary-fixed-dim text-[40px] mb-6">{f.icon}</span>
                <h3 className="text-headline-sm mb-3">{f.title}</h3>
                <p className="text-body-md opacity-70">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bg-primary-container rounded-[2rem] p-8 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-display-lg-mobile md:text-headline-md text-white mb-6">
              Ready to transform your future?
            </h2>
            <p className="text-body-lg text-white/80 mb-10">
              Applications for the next training cohort are open. Sponsored slots are available
              for school leavers, women, teenage mothers, orphans, and persons with disabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-involved#apply"
                className="bg-white text-primary px-10 py-4 rounded-xl text-label-md hover:bg-surface-container-low transition-all text-center"
              >
                Apply Now
              </Link>
              <Link
                href="/get-involved"
                className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-xl text-label-md hover:bg-white/10 transition-all text-center"
              >
                Inquire for Next Cohort
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
