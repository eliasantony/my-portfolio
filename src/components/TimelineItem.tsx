import { motion } from "framer-motion";
import React from "react";

type TimelineItemProps = {
  icon: React.ReactNode;
  date: string;
  title: string;
  subtitle: string;
  tech: string[];
  url?: string;
  isLeft: boolean;
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  icon,
  date,
  title,
  subtitle,
  tech,
  url,
  isLeft,
}) => {
  const itemVariants = {
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const content = (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:ring-2 hover:ring-accent rounded-lg"
    >
      <div className="glass rounded-lg shadow-xl px-6 py-4">
        <p className="text-sm text-gray-400 mb-1">{date}</p>
        <h3 className="mb-2 font-bold text-white text-lg">{title}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-300 mb-3">
          {subtitle}
        </p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs bg-dark-300 text-accent px-2 py-1 rounded-full text-center"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );

  return (
    <motion.div
      className="mb-8 flex justify-between items-center w-full relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={itemVariants}
    >
      {isLeft ? (
        <>
          <div className="w-5/12 text-right">{content}</div>
          <div className="w-5/12"></div>
        </>
      ) : (
        <>
          <div className="w-5/12"></div>
          <div className="w-5/12 text-left">{content}</div>
        </>
      )}

      {/* Central Icon */}
      <div className="z-20 flex items-center justify-center bg-accent shadow-xl rounded-full w-12 h-12 text-white absolute left-1/2 -translate-x-1/2">
        {icon}
      </div>
    </motion.div>
  );
};

export default TimelineItem;
