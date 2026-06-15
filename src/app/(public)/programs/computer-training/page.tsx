import type { Metadata } from 'next';
import ProgramDetail from '@/components/programs/ProgramDetail';
import ProgramEnrollmentForm from '@/components/forms/ProgramEnrollmentForm';
import { IMG } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Vijana Digital Hub | Computer Training Program',
  description:
    'MS Office, digital literacy, data entry, graphic design, web development, and digital marketing, opening up local employment and the global gig economy.',
};

export default function DigitalHubPage() {
  return (
    <main>
      <ProgramDetail
        tag="ICT"
        title="Vijana Digital Hub"
        lede="The skills behind remote work and online income, taught on equipment many trainees have never owned. From first login to first paid client, the Digital Hub opens the door to the global gig economy."
        heroImg={IMG.duoTech}
        heroAlt="Two young people working together at a computer"
        modulesIntro="Skills the gig economy pays for."
        modules={[
          { icon: 'desktop_windows', title: 'Digital literacy', body: 'Computer basics, MS Office, email, and data entry that employers expect on day one.' },
          { icon: 'code', title: 'Web development', body: 'Build and deploy real websites, the foundation of freelance and agency work.' },
          { icon: 'palette', title: 'Graphic design', body: 'Logos, social graphics, and layouts using industry-standard tools.' },
          { icon: 'campaign', title: 'Digital marketing', body: 'Social media, content, and ads that turn a skill into recurring online income.' },
        ]}
        stats={[
          { val: '80%', label: 'Remote-work ready' },
          { val: '9mo', label: 'Course length' },
          { val: '20–30', label: 'Cohort size' },
          { val: 'Lab', label: 'Hands-on equipped lab' },
        ]}
        galleryImg={IMG.coding}
        galleryAlt="A trainee writing code on a laptop"
        pathways={[
          { icon: 'work_history', title: 'Client-ready portfolio', body: 'Every graduate leaves with live projects and a profile ready for freelance platforms.' },
          { icon: 'rocket_launch', title: 'Gig economy onramp', body: 'Coaching on bidding, pricing, and managing remote clients from Sotik.' },
        ]}
      />
      <ProgramEnrollmentForm
        formTitle="Vijana Digital Hub enrollment"
        sectionHeading="Ready to go remote?"
        sectionLead="Apply for the next intake. Subsidized slots are reserved for school leavers, women, teenage mothers, orphans, and persons with disabilities. Evening cohorts available."
        steps={[
          { title: 'Submit application', body: 'Complete the inquiry form or visit our Sotik hub with your National ID.' },
          { title: 'Quick assessment', body: 'A short readiness check. No prior computer experience required.' },
          { title: 'Begin training', body: 'Start on real machines alongside working developers and marketers.' },
        ]}
        interestOptions={['Digital Literacy & Data Entry', 'Web Development', 'Graphic Design', 'Digital Marketing']}
      />
    </main>
  );
}
