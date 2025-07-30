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

function findTopProduct(productsWithScore) {
  let topScoreProduct = null;
  for (const product of productsWithScore) {
    if (product.score > 0) {
      if (
        !topScoreProduct ||
        product.score > topScoreProduct.score ||
        (product.score === topScoreProduct.score &&
          product.id > topScoreProduct.id)
      ) {
        topScoreProduct = product;
      }
    }
  }
  return topScoreProduct;
}

function filterAndSortProducts(productsWithScore) {
  const filteredProducts = productsWithScore.filter((p) => p.score > 0);
  if (filteredProducts.length === 0) {
    return [];
  }

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return b.id - a.id;
  });
  return sortedProducts;
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

  if (selectedRecommendationType === "SingleProduct") {
    const topProduct = findTopProduct(productsWithScore);
    if (!topProduct) return [];
    return [topProduct];
  }

  return filterAndSortProducts(productsWithScore);
};

export default getRecommendations;
