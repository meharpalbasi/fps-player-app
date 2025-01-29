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
      <p className="text-sm text-gray-600 mb-1">Strength Overall Home: {team.strength_overall_home}</p>
      <p className="text-sm text-gray-600 mb-1">Strength Overall Away: {team.strengthOverallAway}</p>
      <p className="text-sm text-gray-600 mb-1">Strength Attack Home: {team.strengthAttackHome}</p>
      <p className="text-sm text-gray-600 mb-1">Strength Attack Away: {team.strengthAttackAway}</p>
      <p className="text-sm text-gray-600 mb-1">Strength Defence Home: {team.strengthDefenceHome}</p>
      <p className="text-sm text-gray-600 mb-1">Strength Defence Away: {team.strengthDefenceAway}</p>
      {/* Add more team stats here */}
      {/* Example:
      <p className="text-sm text-gray-600 mb-1">Games Played: {team.games_played}</p>
      <p className="text-sm text-gray-600 mb-1">Wins: {team.wins}</p>
      */}
    </motion.div>
  );
};

export default TeamCard;
