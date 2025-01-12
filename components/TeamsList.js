// components/TeamsList.js

'use client';

import { motion } from 'framer-motion';
import TeamCard from './TeamCard';

const TeamsList = ({ teams }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team, index) => (
          <motion.div
            key={team.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TeamCard team={team} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TeamsList;
