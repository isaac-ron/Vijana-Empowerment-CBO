import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-surface-container-low">
        <div className="main-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-fixed text-secondary rounded-full">
              <span className="text-sm font-bold uppercase tracking-wider">Empowering the Future</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-primary leading-tight">
              Empowering Kenyan Youth through Practical Skills
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
              Join us in transforming lives in Sotik Sub-County by equipping the next generation with market-ready vocational expertise and entrepreneurial spirit.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="/programs" 
                className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-container transition-all flex items-center gap-2 group shadow-md"
              >
                Explore Programs
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link 
                href="/partners" 
                className="px-8 py-4 bg-surface-container-highest text-primary rounded-xl font-bold hover:bg-surface-container-high transition-all"
              >
                View Impact Report
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 bg-surface-container-high flex items-center justify-center text-on-surface-variant/40 border border-outline-variant/20">
              <span className="font-display font-bold text-center p-4">Youth Empowerment in Action</span>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-surface p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-outline-variant/30">
              <div className="h-12 w-12 bg-secondary-container rounded-full flex items-center justify-center text-white text-xl">
                ❤️
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-primary">500+</p>
                <p className="text-sm text-on-surface-variant font-medium">Youth Trained</p>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-highest/30 -z-0"></div>
      </section>

      {/* Impact Tracking Section */}
      <section className="py-24 bg-surface">
        <div className="main-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Our Community Impact</h2>
            <p className="text-on-surface-variant">We track our Key Performance Indicators (KPIs) to ensure sustainable development and accountability.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-surface-container-low rounded-2xl border border-outline-variant/30 text-center space-y-4 shadow-sm">
              <p className="text-5xl font-display font-black text-secondary">80%</p>
              <h3 className="text-xl font-bold text-primary">Employment Rate</h3>
              <p className="text-sm text-on-surface-variant">Graduates secured jobs or started businesses within 6 months of completion.</p>
            </div>
            
            <div className="p-8 bg-surface-container-low rounded-2xl border border-outline-variant/30 text-center space-y-4 shadow-sm">
              <p className="text-5xl font-display font-black text-secondary">50%+</p>
              <h3 className="text-xl font-bold text-primary">Income Increase</h3>
              <p className="text-sm text-on-surface-variant">Average increase in beneficiary income within the first year of graduation.</p>
            </div>
            
            <div className="p-8 bg-surface-container-low rounded-2xl border border-outline-variant/30 text-center space-y-4 shadow-sm">
              <p className="text-5xl font-display font-black text-secondary">90%</p>
              <h3 className="text-xl font-bold text-primary">Life Skills Growth</h3>
              <p className="text-sm text-on-surface-variant">Graduates reporting significantly improved confidence and entrepreneurial mindset.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-surface-container">
        <div className="main-container">
          <div className="bg-primary text-white rounded-3xl p-12 md:p-20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold max-w-md">Empower a life, secure a future.</h2>
              <p className="text-lg opacity-90 max-w-lg">
                Your support directly funds the tools, training, and mentorship required to lift young people out of poverty in Sotik.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto relative z-10">
              <Link 
                href="/donate" 
                className="px-12 py-5 bg-surface text-primary rounded-2xl font-bold text-xl hover:bg-surface-container-low transition-all shadow-lg text-center"
              >
                Donate Now
              </Link>
              <Link 
                href="/apply" 
                className="px-12 py-5 border-2 border-surface text-surface rounded-2xl font-bold hover:bg-surface/10 transition-all text-center"
              >
                Become a Partner
              </Link>
            </div>
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-surface/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
