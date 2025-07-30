import React, { useState } from "react";
import Form from "./components/Form/Form";
import RecommendationList from "./components/RecommendationList/RecommendationList";

function App() {
  const [recommendations, setRecommendations] = useState([]);

  const handleRecommendationsUpdate = (newRecommendations) => {
    setRecommendations(newRecommendations || []);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center">
      <div className="p-16 w-full lg:w-3/4 xl:w-1/2 bg-gradient-to-r from-purple-200 to-cyan-300 rounded-t-lg">
        <h1 className="text-3xl text-center font-bold text-gray-800">
          Recomendador de Produtos RD Station
        </h1>
      </div>
      <div className="bg-white p-8 rounded-b-lg shadow-md w-full lg:w-3/4 xl:w-1/2 ">
        <div className="mb-4 p-4 bg-cyan-50 text-cyan-900 rounded-lg">
          <p className="text-xs text-justify">
            Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode
            encontrar uma variedade de produtos da RD Station, cada um projetado
            para atender às necessidades específicas do seu negócio. De CRM a
            Marketing, de Conversas a Inteligência Artificial, temos uma solução
            para ajudar você a alcançar seus objetivos. Use o formulário abaixo
            para selecionar suas preferências e funcionalidades desejadas e
            receba recomendações personalizadas de produtos que melhor atendam
            às suas necessidades.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Form onRecommendationsUpdate={handleRecommendationsUpdate} />
          <RecommendationList recommendations={recommendations} />
        </div>
      </div>
    </div>
  );
}

export default App;
