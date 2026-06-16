import type { Metadata } from 'next';
import ProgramDetail from '@/components/programs/ProgramDetail';
import ProgramEnrollmentForm from '@/components/forms/ProgramEnrollmentForm';
import { IMG } from '@/lib/images';
import { pageMetadata, ogImg } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Vijana Wheels — Driving & Mechanics',
  description:
    'Practical driving, traffic rules, road safety, vehicle maintenance, and basic mechanics, with placement at driving schools, garages, and transport companies.',
  path: '/programs/driving-mechanics/',
  image: ogImg(IMG.engine),
});

export default function VijanaWheelsPage() {
  return (
    <main>
      <ProgramDetail
        tag="Driving & Mechanics"
        title="Vijana Wheels"
        lede="A direct route into transport and garage work, two of the steadiest employers in the sub-county. Vijana Wheels turns out drivers and mechanics who are road-ready and garage-ready."
        heroImg={IMG.engine}
        heroAlt="A mechanic inspecting a vehicle engine"
        modulesIntro="Road-ready and garage-ready."
        modules={[
          { icon: 'directions_car', title: 'Defensive driving', body: 'Practical driving hours building confidence for town, highway, and rough rural roads.' },
          { icon: 'gpp_good', title: 'Road safety & NTSA', body: 'Traffic rules and certification aligned to NTSA requirements for licensing.' },
          { icon: 'build', title: 'Engine maintenance', body: 'Diagnostics, servicing, and basic repairs that keep a vehicle, and a livelihood, running.' },
          { icon: 'local_shipping', title: 'Fleet & logistics', body: 'The basics of transport work, from boda and matatu routes to small-fleet operation.' },
        ]}
        stats={[
          { val: '85%', label: 'Target placement' },
          { val: '6mo', label: 'Course length' },
          { val: 'NTSA', label: 'Aligned certification' },
          { val: 'Partner', label: 'Garages & transport firms' },
        ]}
        galleryImg={IMG.manPro}
        galleryAlt="A confident young driver and mechanic"
        pathways={[
          { icon: 'work_history', title: 'Garage placements', body: 'Hands-on attachments with partner garages and transport companies across Bomet.' },
          { icon: 'rocket_launch', title: 'Toolbox to start', body: 'Graduates receive a basic toolkit and guidance to take on their first paid jobs.' },
        ]}
      />
      <ProgramEnrollmentForm
        formTitle="Vijana Wheels enrollment"
        sectionHeading="Ready to get moving?"
        sectionLead="Apply for the next intake. Subsidized slots are reserved for school leavers, women, teenage mothers, orphans, and persons with disabilities."
        steps={[
          { title: 'Submit application', body: 'Complete the inquiry form or visit our Sotik hub with your National ID.' },
          { title: 'Readiness check', body: 'A short interview about your goals. No prior driving experience needed.' },
          { title: 'Begin training', body: 'Start behind the wheel and under the hood with certified instructors.' },
        ]}
        interestOptions={['Driving & Road Safety', 'Vehicle Maintenance', 'Basic Mechanics', 'Fleet & Logistics']}
      />
    </main>
  );
}
