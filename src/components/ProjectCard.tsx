/*
================================================================================
|                          src/components/ProjectCard.tsx                      |
================================================================================
| Description: A card component for the 'Other Projects' grid. Displays a      |
|              project's image, title, description, and links.                 |
================================================================================
*/
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  imgSrc: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgSrc, tags, liveUrl, repoUrl }) => {
  return (
    <motion.div
      className="glass rounded-xl overflow-hidden h-full flex flex-col"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="text-xs bg-dark-300 text-accent px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <div className="mt-auto flex justify-end gap-4">
            {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
              <Github size={22} />
            </a>
            )}
            {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
              <ExternalLink size={22} />
            </a>
            )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;