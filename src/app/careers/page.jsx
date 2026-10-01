import Careers from '../../views/Careers';
import { SITE_CONFIG, SITE_URL } from '../../lib/siteConfig';

export const metadata = {
  title: 'Careers & Opportunities | Join Cobolt Machineries',
  description: 'Explore career opportunities at Cobolt Machineries in Manjeri, Kerala: Sales Executive, Senior Mechanical Design Engineer, 5-Axis CNC Specialist, and PLC Automation Engineers.',
  alternates: {
    canonical: `${SITE_URL}/careers`,
  },
  openGraph: {
    title: 'Careers & Opportunities | Cobolt Machineries',
    description: 'Build the future of heavy industrial machinery and precision engineering with our team.',
    url: `${SITE_URL}/careers`,
    images: [
      {
        url: '/hm_about1.jpg',
        width: 1200,
        height: 630,
        alt: 'Cobolt Machineries Career Opportunities',
      },
    ],
  },
};

export default function CareersPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Careers',
        item: `${SITE_URL}/careers`,
      },
    ],
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can fresh graduates apply for engineering positions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We run regular Graduate Engineering Trainee (GET) and Diploma Trainee programs for mechanical, electrical, and manufacturing streams.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the standard work schedule at the Manjeri facility?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our plant and engineering studios operate Monday through Saturday, from 9:00 AM to 6:00 PM, with standard breaks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer relocation support for candidates outside Malappuram?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, for specialized technical and senior engineering roles, we provide initial lodging assistance and relocation support to help candidates settle comfortably.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if there is no current opening matching my profile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can still submit a general application using our form. Our HR team retains qualified resumes in our active talent pool for upcoming projects.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <Careers />
    </>
  );
}
