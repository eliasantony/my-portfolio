/*
================================================================================
|                          src/sections/Projects.tsx                           |
================================================================================
| Description: Displays a grid of 'Other Noteworthy Projects' using the        |
|              ProjectCard component.                                          |
================================================================================
*/
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import BudgetBuddy from '../assets/BudgetBuddy.png';
import ForrestOfShadows from '../assets/ForrestOfShadows.png';
import UnityZombieShooter from '../assets/UnityZombieShooter.png';
import InvasionAtDawn from '../assets/InvasionAtDawn.png';

const otherProjectsData = [
    {
        title: 'Invasion at Dawn',
        description: 'A multiplayer zombie horror game developed in Unity with the Riptide Networking framework. Players must survive against waves of zombies, using various weapons and strategies to stay alive. The game features a dynamic environment, thrilling audio effects, and a point system to buy weapons and upgrades. Developed in a group of 4 during the "Creative Code Lab 4 - Extending Realities" at FH St. Pölten.',
        imgSrc: InvasionAtDawn,
        tags: ['Unity', 'C#', 'Riptide Networking', 'Blender', 'Animation'],
        liveUrl: '#',
        repoUrl: '#',
    },
    {
        title: 'Unity Zombie Shooter',
        description: 'A 3D zombie shooter game developed in Unity, featuring a first-person perspective, enemy AI, and various weapons. The game includes a health system, ammo management, and a scoring system.',
        imgSrc: UnityZombieShooter,
        tags: ['Unity', 'Blender', 'C#'],
        liveUrl: 'https://eliasantony.github.io/EbCRD_FinalProject/',
        repoUrl: 'https://github.com/eliasantony/EbCRD_FinalProject',
    },
    {
        title: 'Budget Buddy',
        description: 'An native android expense tracker app written in Kotlin with Jetpack Compose to keep track of your personal finances. Add and manage your expenses, and see visual representations of your spending. Developed during the "Creative Code Lab 3 - Mobile Applications" at FH St. Pölten.',
        imgSrc: BudgetBuddy,
        tags: ['Android', 'Jetpack Compose', 'Kotlin'],
        liveUrl: '#',
        repoUrl: 'https://git.nwt.fhstp.ac.at/cc221025/mc_finalproject',
    },
    {
        title: 'Forrest of Shadows',
        description: 'A side-scroller game with platforms, collectibles and enemies. Written in Vanilla JavaScript with HTML Canvas with self drawn assest in photoshop. Developed during the "Creative Code Lab 1 - Games and Playful Frontends" at FH St. Pölten.',
        imgSrc: ForrestOfShadows,
        tags: ['HTML', 'Photoshop', 'Canvas'],
        liveUrl: '#',
        repoUrl: 'https://git.nwt.fhstp.ac.at/cc221025/ccl1_forrestofshadows',
  },
];

const Projects = () => {
  return (
    <Section id="projects" className="bg-dark-200/50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Other Noteworthy <span className="text-accent">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherProjectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;