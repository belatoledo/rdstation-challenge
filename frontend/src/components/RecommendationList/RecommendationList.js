import React from "react";
import { RecommendationCard, InfoCard } from "./Card";

function RecommendationList({ recommendations }) {
  return (
    <div className="w-full h-full flex flex-col mx-auto p-6 bg-purple-50 border-2 border-purple-200 rounded-lg">
      <h2 className="text-lg text-gray-800 font-bold mb-4">
        Lista de Recomendações:
      </h2>

      {recommendations.length > 0 && (
        <p className="mt-2 p-2 text-cyan-800 font-medium bg-cyan-100 rounded-lg">
          🎯 {recommendations.length} produto(s) recomendado(s)
        </p>
      )}
      {recommendations.length === 0 && (
        <p className="mt-8 px-8 text-purple-950 text-center font-light">
          Selecione suas preferências e clique em
          <strong>"Obter recomendação"</strong> para ver os resultados! ✨
        </p>
      )}
      <div className="flex flex-col justify-between flex-grow">
        <ul className="space-y-4 mt-6">
          {recommendations.map((recommendation) => (
            <RecommendationCard
              key={recommendation.id}
              recommendation={recommendation}
            />
          ))}
        </ul>
        <InfoCard />
      </div>
    </div>
  );
}

export default RecommendationList;
