// getRecommendations.js

function calculateScores(products, preferencesSet, featuresSet) {
  return products.map((product) => {
    let score = 0;
    if (product.preferences) {
      score += product.preferences.filter((p) => preferencesSet.has(p)).length;
    }
    if (product.features) {
      score += product.features.filter((f) => featuresSet.has(f)).length;
    }
    return { ...product, score };
  });
}

const getRecommendations = (formData = {}, products = []) => {
  const {
    selectedPreferences = [],
    selectedFeatures = [],
    selectedRecommendationType = "MultipleProducts",
  } = formData;

  if (
    (selectedPreferences.length === 0 && selectedFeatures.length === 0) ||
    !products ||
    products.length === 0
  ) {
    return [];
  }

  const preferencesSet = new Set(selectedPreferences);
  const featuresSet = new Set(selectedFeatures);

  const productsWithScore = calculateScores(
    products,
    preferencesSet,
    featuresSet
  );

  const filteredProducts = productsWithScore.filter(
    (product) => product.score > 0
  );

  if (filteredProducts.length === 0) {
    return [];
  }

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return b.id - a.id;
  });

  if (selectedRecommendationType === "SingleProduct") {
    return sortedProducts.length > 0 ? [sortedProducts[0]] : [];
  }

  return sortedProducts;
};

export default getRecommendations;
