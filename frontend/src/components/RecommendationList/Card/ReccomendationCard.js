// src/components/RecommendationCard.js

import React from "react";

function RecommendationCard({ name, category }) {
  return (
    <li className="p-4 bg-white border-l-4 border-purple-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <h3 className="font-bold text-lg text-purple-800">{name}</h3>
      {category && (
        <p className="inline px-4 py-1 text-xs bg-cyan-50 text-cyan-800 rounded-full">
          {category}
        </p>
      )}
    </li>
  );
}

export default RecommendationCard;
