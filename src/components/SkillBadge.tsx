/*
================================================================================
|                          src/components/SkillBadge.tsx                       |
================================================================================
| Description: A simple badge to display a technology/skill with its name.     |
================================================================================
*/
import { motion } from 'framer-motion';

type SkillBadgeProps = {
    name: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
    return (
        <motion.div
            className="glass rounded-lg px-4 py-2 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(0,199,149,0.5)" }}
        >
            {/* You could add an icon here */}
            <span className="font-medium text-white">{name}</span>
        </motion.div>
    );
};

export default SkillBadge;