/*
================================================================================
|                              src/sections/About.tsx                          |
================================================================================
| Description: The 'About Me' section with a professional summary and a        |
|              vertical timeline for education and work experience.            |
================================================================================
*/
import Section from '../components/Section';
import TimelineItem from '../components/TimelineItem';
import { Briefcase, GraduationCap } from 'lucide-react';

const timelineData = [
    // Education: Bachelor at FH St. Pölten
    {
        icon: <GraduationCap />,
        date: 'Sep 2022 - July 2025',
        title: 'Bachelor Creative Computing',
        subtitle: 'FH St. Pölten (University of Applied Sciences)',
        tech: [],
    },
    // Work: IT-Support at AllesWirdGut Architektur ZT GmbH
    {
        icon: <Briefcase />,
        date: 'Since October 2023',
        title: 'IT-Support',
        subtitle: 'AllesWirdGut Architektur ZT GmbH',
        tech: [
            'Assistance in the IT department',
            'User support',
            'Hardware repair and installation',
        ],
    },
    // Work: Internship at Digitalsunray Media GmbH
    {
        icon: <Briefcase />,
        date: 'Aug 2024 - Dec 2024',
        title: 'Internship',
        subtitle: 'Digitalsunray Media GmbH',
        tech: ['DevOps', 'Frontend Development', 'Backend Development', 'Software Testing'],
    },
    // Work: Civilian Service at St. Nikolausstiftung
    {
        icon: <Briefcase />,
        date: 'Sep 2021 - July 2022',
        title: 'Civilian Service',
        subtitle: 'St. Nikolausstiftung',
        tech: ['Assistance tasks in kindergarten'],
    },
    // Education: Higher Computer Science at HTBLuVA Spengergasse
    {
        icon: <GraduationCap />,
        date: 'Sep 2016 - May 2021',
        title: 'Higher Computer Science',
        subtitle:
            'HTBLuVA Spengergasse (Federal Institute of Technology and Research in Computer Science)',
        tech: [],
    },
    // Work: Corporate IT Services at Entain Services GmbH
    {
        icon: <Briefcase />,
        date: 'June 2021',
        title: 'Corporate IT Services',
        subtitle: 'Entain Services GmbH',
        tech: [
            'Hardware repair and installation',
            'User support',
            'Emergency operations center',
        ],
    },
    // Work: Software Developer at BRZ GmbH
    {
        icon: <Briefcase />,
        date: 'July 2019',
        title: 'Software Developer',
        subtitle: 'BRZ (Federal Computing Center) GmbH',
        tech: [
            'Database access with C#',
            'HTML, CSS, JavaScript, XML',
            'Debugging and testing',
        ],
    },
    // Work: Corporate IT Services at bwin.party services GmbH
    {
        icon: <Briefcase />,
        date: '2018',
        title: 'Corporate IT Services',
        subtitle: 'bwin.party services (Austria) GmbH',
        tech: [
            'Insights into ITIL',
            'Win 10 Enterprise - Build 1709 Tests',
            'SCCM 2012',
        ],
    },
];

const About = () => {
  return (
    <Section id="about" className="bg-dark-200/50">
      <h2 className="text-3xl font-bold text-center mb-12">
        About <span className="text-accent">Me</span>
      </h2>
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-lg text-gray-300">
          I'm a product-minded engineer based in Vienna, passionate about building high-quality,
          user-centric applications. With a background in full-stack development, I enjoy turning complex
          problems into simple, beautiful, and intuitive designs.
        </p>
      </div>
      <div className="relative max-w-2xl mx-auto">
        {/* The vertical line in the middle of the timeline */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-dark-300"></div>

        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            icon={item.icon}
            date={item.date}
            title={item.title}
            subtitle={item.subtitle}
            tech={item.tech}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </Section>
  );
};

export default About;