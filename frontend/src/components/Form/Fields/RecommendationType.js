import React from "react";
import Checkbox from "../../shared/Checkbox";

function RecommendationType({ onRecommendationTypeChange }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg text-gray-800 font-bold mb-4">
        Tipo de Recomendação:
      </h2>
      <div className="flex items-center">
        <Checkbox
          id="SingleProduct"
          type="radio"
          name="recommendationType"
          value="SingleProduct"
          onChange={() => onRecommendationTypeChange("SingleProduct")}
          className="mr-2"
        />
        <label htmlFor="SingleProduct" className="mr-4">
          Produto Único
        </label>
        <Checkbox
          id="MultipleProducts"
          type="radio"
          name="recommendationType"
          value="MultipleProducts"
          onChange={() => onRecommendationTypeChange("MultipleProducts")}
          className="mr-2"
        />
        <label htmlFor="MultipleProducts">Múltiplos Produtos</label>
      </div>
    </div>
  );
}

export default RecommendationType;
