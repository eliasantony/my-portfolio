import { motion } from 'framer-motion';
import React from 'react';

type TimelineItemProps = {
  icon: React.ReactNode;
  date: string;
  title: string;
  subtitle: string;
  tech: string[];
  isLeft: boolean;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ icon, date, title, subtitle, tech, isLeft }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      className="mb-8 flex justify-between items-center w-full relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={itemVariants}
    >
      <div className={`order-1 w-5/12 ${isLeft ? '' : 'flex justify-end'}`}></div>
      <div className="z-20 flex items-center order-1 bg-accent shadow-xl w-12 h-12 rounded-full text-white absolute left-1/2 -translate-x-1/2">
        <div className="mx-auto">{icon}</div>
      </div>
      <div className={`order-1 glass rounded-lg shadow-xl w-5/12 px-6 py-4 ${isLeft ? 'ml-auto' : ''}`}>
        <p className="text-sm text-gray-400 mb-1">{date}</p>
        <h3 className="mb-2 font-bold text-white text-lg">{title}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100 mb-3">{subtitle}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map(t => (
            <span key={t} className="text-xs bg-dark-300 text-accent px-2 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;