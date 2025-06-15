import { motion } from 'framer-motion';

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  return (
    <motion.section
      id={id}
      className={`w-full py-20 lg:py-28 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;