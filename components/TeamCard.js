// components/TeamCard.js

'use client';

import { motion } from 'framer-motion';

const TeamCard = ({ team }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-lg font-semibold mb-2">{team.name}</h3>
      <p className="text-sm text-gray-600 mb-1">Strength: {team.strength}</p>
      {/* Add more team stats here */}
      {/* Example:
      <p className="text-sm text-gray-600 mb-1">Games Played: {team.games_played}</p>
      <p className="text-sm text-gray-600 mb-1">Wins: {team.wins}</p>
      */}
    </motion.div>
  );
};

export default TeamCard;
