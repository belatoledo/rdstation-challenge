// src/components/RecommendationCard.js

import React from "react";

function RecommendationCard({ recommendation }) {
  const { name, category, score } = recommendation;
  return (
    <li className="p-4 bg-white border-l-4 border-purple-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg text-purple-800">{name}</h3>

        <div className="top-3 right-3 bg-gradient-to-r from-purple-400 to bg-cyan-300 text-white text-sm font-bold px-3 py-1 rounded-full">
          Score: {score}
        </div>
      </div>
      {category && (
        <p className="inline px-4 py-1 text-xs bg-cyan-50 text-cyan-800 rounded-full">
          {category}
        </p>
      )}
    </li>
  );
}

export default RecommendationCard;
