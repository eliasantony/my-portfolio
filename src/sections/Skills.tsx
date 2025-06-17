/*
================================================================================
|                           src/sections/Skills.tsx                            |
================================================================================
| Description: The 'Skills & Tools' section, categorizing and displaying       |
|              various technologies using SkillBadge components.               |
================================================================================
*/
import Section from '../components/Section';
import SkillBadge from '../components/SkillBadge';

const skills = {
    languages: ['Dart', 'JavaScript', 'TypeScript', 'C#', 'Java', 'HTML5', 'CSS3', 'Python'],
    frameworks: ['Flutter', 'React', 'Next.js', 'Node.js', 'Firebase'],
    tools: ['Git', 'Figma', 'Firebase', 'Adobe CC', 'Vercel', 'Jira', 'Postman'],
};

const Skills = () => {
  return (
    <Section id="skills">
      <h2 className="text-3xl font-bold text-center mb-12">
        Skills & <span className="text-accent">Tools</span>
      </h2>
      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-center text-accent mb-6 capitalize">{category}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {items.map(skill => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;