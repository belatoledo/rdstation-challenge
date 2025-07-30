import React from "react";
import RecommendationCard from "./Card/ReccomendationCard";

function RecommendationList({ recommendations }) {
  return (
    <div className="max-w-md h-full mx-auto p-6 bg-purple-50 border-2 border-purple-200 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {recommendations.length === 0 && (
        <p className="mt-8 px-8 text-purple-950 text-center font-light">
          Selecione suas preferências e clique em
          <strong>"Obter recomendação"</strong> para ver os resultados! ✨
        </p>
      )}

      <ul className="space-y-4 mt-6">
        {recommendations.map((recommendation) => (
          <RecommendationCard
            key={recommendation.id}
            name={recommendation.name}
            category={recommendation.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
