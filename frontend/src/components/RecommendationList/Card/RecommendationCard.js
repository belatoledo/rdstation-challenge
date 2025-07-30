// src/components/RecommendationCard.js

import React from "react";

function RecommendationCard({ recommendation }) {
  const { name, category, score } = recommendation;

  const productLinks = {
    "RD Station CRM": "https://www.rdstation.com/produtos/crm/",
    "RD Station Marketing": "https://www.rdstation.com/produtos/marketing/",
    "RD Conversas": "https://www.rdstation.com/produtos/conversas/",
    "RD Mentor AI": "https://www.rdstation.com/produtos/mentor-ia/",
  };

  const productUrl = productLinks[name];

  return (
    <li className="p-6 bg-white border-l-4 border-purple-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
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

      {productUrl && (
        <div className="mt-4 text-end">
          <a
            href={productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-purple-600 hover:text-purple-700 hover:underline transition-colors duration-200"
          >
            Conheça o produto
          </a>
        </div>
      )}
    </li>
  );
}

export default RecommendationCard;
