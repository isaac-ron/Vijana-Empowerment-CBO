import type { Metadata } from 'next';
import ProgramDetail from '@/components/programs/ProgramDetail';
import ProgramEnrollmentForm from '@/components/forms/ProgramEnrollmentForm';
import { IMG } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Vijana Fashion Forge | Fashion & Design Program',
  description:
    'Tailoring, garment making, pattern making, sustainable fashion, illustration, branding, and entrepreneurship, with internships at local fashion houses.',
};

export default function FashionForgePage() {
  return (
    <main>
      <ProgramDetail
        tag="Fashion & Textiles"
        title="Vijana Fashion Forge"
        lede="A hands-on program that turns creative energy into a thriving fashion career. From the first stitch to the final brand identity, we equip the next generation of Kenyan designers with practical, market-ready skills."
        heroImg={IMG.sewing}
        heroAlt="A young woman sewing a garment in a workshop"
        modulesIntro="Master the art of the forge."
        modules={[
          { icon: 'architecture', title: 'Pattern making', body: '2D drafting and 3D draping, turning measurements into wearable art.' },
          { icon: 'content_cut', title: 'Garment construction', body: 'Industrial sewing and complex construction with modern and traditional textiles.' },
          { icon: 'sell', title: 'Brand identity', body: 'Build a clear voice and visual system that stands out in the local market.' },
          { icon: 'payments', title: 'Entrepreneurship', body: 'Pricing, costing, sustainable sourcing, and pitching to buyers and investors.' },
        ]}
        stats={[
          { val: '80%', label: 'Target employment' },
          { val: '20–30', label: 'Pilot cohort size' },
          { val: '12mo', label: 'Program duration' },
          { val: '3mo', label: 'Guaranteed internship' },
        ]}
        galleryImg={IMG.portrait}
        galleryAlt="A confident young designer in vibrant print"
        pathways={[
          { icon: 'work_history', title: 'Guaranteed internships', body: 'Placement with partner studios so students learn the realities of the industry first-hand.' },
          { icon: 'rocket_launch', title: 'Incubation hub', body: 'Post-graduation studio space, machinery access, and business mentorship for new label founders.' },
        ]}
      />
      <ProgramEnrollmentForm
        formTitle="Vijana Fashion Forge enrollment"
        sectionHeading="Ready to shape the future?"
        sectionLead="Apply for our next intake. Limited subsidized slots reserved for school leavers, women, teenage mothers, orphans, and persons with disabilities."
        steps={[
          { title: 'Submit application', body: 'Complete the inquiry form or visit our Sotik hub with your National ID and a work sample (optional).' },
          { title: 'Portfolio review', body: 'Bring or describe a garment, sketch, or craft you have made. No prior experience required.' },
          { title: 'Begin training', body: 'Start sewing, drafting, and designing alongside experienced tailors and mentors.' },
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
