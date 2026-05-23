import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import ProgramEnrollmentForm from '@/components/forms/ProgramEnrollmentForm';

export const metadata: Metadata = {
  title: 'Vijana Fashion Forge | Fashion & Design Program',
  description:
    'Tailoring, garment making, pattern making, sustainable fashion, illustration, branding, and entrepreneurship — with internships at local fashion houses.',
};

const HIGHLIGHTS = [
  { icon: 'architecture', title: 'Pattern Making', body: 'Precision engineering for wearable art. Learn 2D drafting and 3D draping.' },
  { icon: 'sell', title: 'Brand Identity', body: 'Build a clear voice and visual system that stands out in the local market.' },
];

const ENTREPRENEURSHIP = [
  'Financial literacy for emerging designers',
  'Sustainable fabric sourcing and supply chains',
  'Pricing, costing, and pitching to investors or buyers',
];

export default function FashionForgePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[640px] flex items-center overflow-hidden py-20">
        <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full text-label-sm mb-6 uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              Enrollment open for the next cohort
            </span>
            <h1 className="text-display-lg-mobile md:text-display-lg text-primary mb-6">
              Vijana Fashion Forge
            </h1>
            <p className="text-body-lg text-on-surface-variant mb-10 leading-relaxed">
              A hands-on vocational program that turns creative energy into a thriving fashion
              career. From the first stitch to the final brand identity, we equip the next
              generation of Kenyan fashion designers with practical, market-ready skills.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#enroll"
                className="bg-primary text-on-primary px-8 py-4 rounded-xl text-label-md shadow-lg hover:shadow-xl transition-all"
              >
                Enroll in the Forge
              </Link>
              <Link
                href="/programs"
                className="bg-transparent border-2 border-outline-variant px-8 py-4 rounded-xl text-label-md hover:bg-surface-container-highest transition-all"
              >
                View All Programs
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP6vRZDN0RMVVhD6agt9UqROZgXQocQDShLiU2X7ADMhBlcSrJRimoArdiV-hl3W_Q5Ke37-RqntMNzbLhO2PTn6cfeyQTnl0W1V3D9-onPAXiqLUbOb4xZkD7tKafMOf-X5Ou1aQZK6C_DKhmn6aDWQkF7aA_SweGWNdDnHa3ljTzGEaOSX7EFv05uS5vOypiNLW9yuBhjGX9s-QK49DroBCDKBsjALX6VIKZQvRDnDzk2ZfYOqPwFYXMmuhOV5SBAOVu4UsudHi0"
                alt="Fashion designer&rsquo;s workstation in a modern studio"
                width={600}
                height={750}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary-fixed/50 rounded-full blur-[60px] -z-10" />
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-headline-md text-primary mb-4">Master the Art of the Forge</h2>
          <p className="text-on-surface-variant text-body-lg leading-relaxed">
            Our curriculum is built on three pillars: technical mastery, creative branding, and
            sustainable entrepreneurship.
          </p>
        </div>
        <div className="space-y-24">
          {/* Technical */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6 text-secondary border-b border-outline-variant/30 pb-4">
                <span className="material-symbols-outlined text-[28px]">content_cut</span>
                <span className="text-label-md uppercase tracking-wider">Core module</span>
              </div>
              <h3 className="text-display-lg-mobile mb-4 text-on-background">
                Technical Tailoring &amp; Garment Making
              </h3>
              <p className="text-on-surface-variant text-body-lg leading-relaxed mb-6">
                Industrial sewing, pattern drafting from scratch, and complex garment
                construction techniques using both traditional and modern textiles.
              </p>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center gap-12">
              {HIGHLIGHTS.map((h) => (
                <div key={h.title} className="pl-6 border-l-2 border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">{h.icon}</span>
                  <h4 className="text-headline-sm mb-2 text-primary">{h.title}</h4>
                  <p className="text-on-surface-variant text-body-md">{h.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-outline-variant/20 max-w-3xl mx-auto" />

          {/* Entrepreneurship */}
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 relative order-2 md:order-1">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl relative z-10">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQOt5O4NXOMAbzre28-LSI7ydhdRu-D4g3dfNkUjmRmmxHerZd5ZRgVFJAidVf2odOudWywPZbYUzp4nPf6Wp8_LRu4rMsTLwI1fWwSnLyW8CXXqxA9CSH8fyHGNHsXzDak9r06LzaJujKlVv7AJwEBQmL0yWbyGZDtKGwYxb_udG1eEN6qwabF-aH2j0BcVbYdj2EAwPwvgYHE3lU9JAaH_mXkxohGkW9gss1_2tnGrQxK2yUqIoCNdQbSymLZEBpRpXjgZCmlaU6"
                  alt="Female entrepreneur presenting a fashion lookbook to mentors"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center order-1 md:order-2">
              <h3 className="text-display-lg-mobile mb-6 text-on-background">Fashion Entrepreneurship</h3>
              <ul className="space-y-6">
                {ENTREPRENEURSHIP.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1">
                      <span className="material-symbols-outlined text-secondary text-[18px]">check</span>
                    </div>
                    <span className="text-body-lg text-on-surface pt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-4 h-full gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="border-r border-white" />
            ))}
          </div>
        </div>
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            {[
              { val: '80%', label: 'Target employment rate' },
              { val: '20–30', label: 'Pilot cohort size' },
              { val: '12mo', label: 'Program duration' },
              { val: '3mo', label: 'Guaranteed internship' },
            ].map((s) => (
              <div key={s.label} className="py-6 md:py-0">
                <div className="text-display-lg text-primary-fixed-dim mb-2">{s.val}</div>
                <div className="text-white text-label-md tracking-widest uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships + Gallery */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-12">
            <div className="space-y-6">
              <h2 className="text-headline-md text-primary">Pathways to Success</h2>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                Training continues beyond the classroom. Every student is matched with an
                internship at a local fashion house or production studio, with ongoing mentorship
                after graduation.
              </p>
            </div>
            <div className="space-y-10">
              <div className="flex gap-6 pb-8 border-b border-outline-variant/30">
                <span className="material-symbols-outlined text-secondary text-4xl mt-1">work_history</span>
                <div>
                  <h4 className="text-headline-sm text-on-surface mb-2">Guaranteed Internships</h4>
                  <p className="text-on-surface-variant text-body-md leading-relaxed">
                    Placement with partner studios so students learn the realities of the industry
                    first-hand.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 pb-4">
                <span className="material-symbols-outlined text-primary text-4xl mt-1">rocket_launch</span>
                <div>
                  <h4 className="text-headline-sm text-on-surface mb-2">Incubation Hub</h4>
                  <p className="text-on-surface-variant text-body-md leading-relaxed">
                    Post-graduation studio space, machinery access, and business mentorship for
                    founders launching their own labels.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCymen81wMHGeRwmepGz7MApE5N_0iIbdwH3s5eIEAjanFp9m4dMKVOXUinJyYr-StNfdBXUpo0FUhMagZeuY5XBf6hPefBrp3Anfbsv9K_HJM7GD4nCkr8mL4v_1k2lgmyoWgNnDGw-MWVsEp0P8lNrqqFZG2ADg80i0647JC8R2J4ZpYOiTD2GZUUlXbHIyL9VV3lk77scezkwtzkoLdBur9gKnkWhSufZheh5xNjNLsg41vT3I0ZSmAcUJW5sF_2qPgHqCrzf9ew"
                  alt="Designer at a sewing machine in a high-tech studio"
                  width={400}
                  height={300}
                  className="rounded-[2rem] h-72 w-full object-cover shadow-lg hover:scale-105 transition-transform duration-500"
                />
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrxcK5jpa7LOibwxh8KnlKngNRwUN8IPvBsgyvwOzWChVNBZWlBKS-dCZXMl7psUB4AbG1mY0Vjay2zcxjTqiMh3UBZ1gTXXR391q553a3SSGJ56bla1VhFDK3KhhoSlZXRdHLx9ncrtOR_vwbd4i0GDGk1dJxWmqaAzZlUKVozwkU4KbLSPCCAPnsnw0zOK4Hs_mlIJc_1XJ5MeKZvI7Nr5As61ovHHlqTfqneV5L4K_dBrUL_mkkldOGgBSis0elHum6zDIaDI7b"
                  alt="Tailoring tools and African textiles flat-lay"
                  width={400}
                  height={400}
                  className="rounded-[2rem] h-80 w-full object-cover shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-6">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuARHSDS5XBprvGu3zH2h1VoA4zjWNVkMiVlH-a1e9PX8HPKP6shc5vF9rCf5hlE1PnyDKdc-v6wEIpG1z--kkk25FYTMFGIG1xgLi0E2MiT6VqIO5m3xoVbOfUZWYymlN6PH3mydz1gCXonk__bBmUKUyoVI07ALGPECdEOY9vSC578gHCElj1mgy-b9gYr9fZn7vFrSGRWd0ZXKbRJKE7e1y1_dDekkwq48M9sFDMNFN-ov1EueYwaa4xqpSwdqMMP0LfohlhtzgcB"
                  alt="Graduate designer&rsquo;s collection on a runway"
                  width={400}
                  height={400}
                  className="rounded-[2rem] h-80 w-full object-cover shadow-lg hover:scale-105 transition-transform duration-500"
                />
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjVLa70bM9O7jmCaXU4Ct_3wSOZyZIijdyz0Vao_IDT_q6QXOq9OtkHgz_NyW4jlVDOfq9XBbibRayOdlVjjBwewf9Da67M0-A8V-O-wL89QCh2WZDGub7uaYKhfTD971QblmtLFd9yx0laB68VwtYtlyt5jo9NNuIld2HM2ZxvpKZ4XtfvSaJuIlWHk1UXPqJbH3-U4pZiEm-Zt6Ha3ZjqZvrXQ1eqiSAvEvlbkZSzFZEOMmbHbXMILW-cNgJV85oAxpji2o8s_0c"
                  alt="Two female fashion students collaborating on a design project"
                  width={400}
                  height={300}
                  className="rounded-[2rem] h-72 w-full object-cover shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProgramEnrollmentForm
        formTitle="Vijana Fashion Forge Enrollment"
        sectionHeading="Ready to shape the future?"
        sectionLead="Apply for our next intake. Limited subsidized slots reserved for school leavers, women, teenage mothers, orphans, and persons with disabilities."
        steps={[
          {
            title: 'Submit Application',
            body: 'Complete the inquiry form or visit our Sotik hub with your National ID and a sample of your work (optional).',
          },
          {
            title: 'Portfolio Review',
            body: 'Bring or describe a garment, sketch, or craft you have made. No prior experience required.',
          },
          {
            title: 'Begin Training',
            body: 'Start sewing, drafting, and designing alongside experienced tailors and mentors.',
          },
        ]}
        interestOptions={[
          'Tailoring & Garment Making',
          'Pattern Making & Drafting',
          'Sustainable Fashion & Textiles',
          'Fashion Illustration & Branding',
        ]}
      />
    </main>
  );
}
