import type { Metadata } from 'next';
import ProgramDetail from '@/components/programs/ProgramDetail';
import ProgramEnrollmentForm from '@/components/forms/ProgramEnrollmentForm';
import { IMG } from '@/lib/images';
import { pageMetadata, ogImg } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Glow with Vijana — Beauty Therapy',
  description:
    'Hairdressing, styling, nail technology, makeup, and spa management with an emphasis on local products, salon management, and customer service.',
  path: '/programs/beauty-therapy/',
  image: ogImg(IMG.salon),
});

export default function BeautyTherapyPage() {
  return (
    <main>
      <ProgramDetail
        tag="Cosmetology"
        title="Glow with Vijana"
        lede="Turn a passion for beauty into a salon of your own. We train hairdressers, stylists, and therapists who can run the chair and the books, with hours on real clients from week one."
        heroImg={IMG.salon}
        heroAlt="A stylist working with a client at a salon station"
        modulesIntro="From the chair to the cash box."
        modules={[
          { icon: 'content_cut', title: 'Hairdressing & styling', body: 'Cutting, braiding, colour, treatments, and modern bridal styling.' },
          { icon: 'spa', title: 'Skin & nail care', body: 'Facials, manicures, pedicures, and makeup with locally-sourced product mastery.' },
          { icon: 'storefront', title: 'Salon management', body: 'Stock control, pricing, bookings, and hygiene standards that keep a salon profitable.' },
          { icon: 'diversity_3', title: 'Customer service', body: 'The consultations and care that turn a first visit into a loyal client base.' },
        ]}
        stats={[
          { val: '85%', label: 'Target placement' },
          { val: '6mo', label: 'Course length' },
          { val: '20–30', label: 'Cohort size' },
          { val: 'Kit', label: 'Startup toolkit on graduation' },
        ]}
        galleryImg={IMG.womanPro}
        galleryAlt="A confident young beauty professional"
        pathways={[
          { icon: 'work_history', title: 'Salon placements', body: 'Internships with established salons across Sotik and Bomet for real client experience.' },
          { icon: 'rocket_launch', title: 'Mobile salon kit', body: 'Graduates receive a starter kit to launch a mobile or home-based salon immediately.' },
        ]}
      />
      <ProgramEnrollmentForm
        formTitle="Glow with Vijana enrollment"
        sectionHeading="Ready to make people glow?"
        sectionLead="Apply for the next intake. Subsidized slots are reserved for school leavers, women, teenage mothers, orphans, and persons with disabilities."
        steps={[
          { title: 'Submit application', body: 'Complete the inquiry form or visit our Sotik hub with your National ID.' },
          { title: 'Short interview', body: 'A quick chat about your goals. No prior experience needed, just willingness to learn.' },
          { title: 'Begin training', body: 'Start practising on real clients alongside certified beauty therapists.' },
        ]}
        interestOptions={['Hairdressing & Styling', 'Nail Technology', 'Makeup & Skin Care', 'Salon Management']}
      />
    </main>
  );
}
