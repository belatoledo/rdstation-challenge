// getRecommendations.js

const getRecommendations = (formData = {}, products = []) => {
  const { selectedPreferences = [], selectedFeatures = [] } = formData;

  if (
    (selectedPreferences.length === 0 && selectedFeatures.length === 0) ||
    !products ||
    products.length === 0
  ) {
    return [];
  }

  const productsWithScore = products.map((product) => {
    let score = 0;
    if (product.preferences) {
      score += product.preferences.filter((prod) =>
        selectedPreferences.includes(prod)
      ).length;
    }
    if (product.features) {
      score += product.features.filter((feat) =>
        selectedFeatures.includes(feat)
      ).length;
    }
    return { ...product, score };
  });

  const filteredProducts = productsWithScore.filter(
    (product) => product.score > 0
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return b.id - a.id;
  });

  const cleanProducts = sortedProducts.map(({ score, ...product }) => product);

  return cleanProducts;
};

export default { getRecommendations };
