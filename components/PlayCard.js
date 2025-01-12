// components/PlayerCard.js

'use client';

import { motion } from 'framer-motion';

const PlayerCard = ({ player, onClick }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold mb-2">{player.fullName}</h3>
      <p className="text-sm text-gray-600 mb-1">Position: {player.position || 'N/A'}</p>
      <p className="text-sm text-gray-600 mb-1">Team: {player.teamName || 'N/A'}</p>
      <p className="text-sm text-gray-600 mb-1">Total Points: {player.totalPoints || 0}</p>
      <p className="text-sm text-gray-600 mb-1">
        Goals Scored: {player.goalsScored !== undefined ? player.goalsScored : 'N/A'}
      </p>
      <p className="text-sm text-gray-600 mb-1">
        Assists: {player.assists !== undefined ? player.assists : 'N/A'}
      </p>
      <p className="text-sm text-gray-600 mb-1">
        Clean Sheets: {player.cleanSheets !== undefined ? player.cleanSheets : 'N/A'}
      </p>
      <p className="text-sm text-gray-600 mb-1">
        Yellow Cards: {player.yellowCards !== undefined ? player.yellowCards : 'N/A'}
      </p>
      <p className="text-sm text-gray-600">
        Red Cards: {player.redCards !== undefined ? player.redCards : 'N/A'}
      </p>
      {/* Add more stats as needed */}
    </motion.div>
  );
};

export default PlayerCard;
