// Form.js
import { useState } from "react";
import { Preferences, Features, RecommendationType } from "./Fields";
import { SubmitButton } from "./SubmitButton";
import useProducts from "../../hooks/useProducts";
import useForm from "../../hooks/useForm";
import useRecommendations from "../../hooks/useRecommendations";

function Form({ onRecommendationsUpdate }) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: "",
  });

  const { getRecommendations } = useRecommendations(products);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (
      formData.selectedPreferences.length === 0 &&
      formData.selectedFeatures.length === 0
    ) {
      setError(
        "Por favor, selecione pelo menos uma preferência ou funcionalidade."
      );
      return;
    }

    if (!formData.selectedRecommendationType) {
      setError("Por favor, selecione o tipo de recomendação.");
      return;
    }

    try {
      const dataRecommendations = getRecommendations(formData);
      console.log("recomendações geradas:", dataRecommendations);
      return onRecommendationsUpdate(dataRecommendations);
    } catch (error) {
      console.error("erro nas recomendações:", error);
    }
  };

  return (
    <form
      className="w-full mx-auto p-6 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences}
        onPreferenceChange={(selected) =>
          handleChange("selectedPreferences", selected)
        }
      />
      <Features
        features={features}
        onFeatureChange={(selected) =>
          handleChange("selectedFeatures", selected)
        }
      />
      <RecommendationType
        onRecommendationTypeChange={(selected) =>
          handleChange("selectedRecommendationType", selected)
        }
      />

      {error && (
        <div className="my-4 p-3 bg-red-50 border border-red-300 text-red-700 text-sm rounded-lg flex items-center justify-between">
          <span>{error}</span>

          <button
            onClick={() => setError("")}
            className="font-bold text-lg ml-2"
          >
            &times;
          </button>
        </div>
      )}

      <SubmitButton text="Obter recomendação" />
    </form>
  );
}

export default Form;
