import React from "react";

function RecommendationList({ recommendations }) {
  return (
    <div className="max-w-md h-full mx-auto p-6 bg-purple-50 border-2 border-purple-200 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {recommendations.length === 0 && <p>Nenhuma recomendação encontrada.</p>}

      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index} className="mb-2">
            {recommendation.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
