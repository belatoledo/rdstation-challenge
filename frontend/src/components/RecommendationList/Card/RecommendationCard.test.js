// src/components/RecommendationCard/RecommendationCard.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import RecommendationCard from "./RecommendationCard";

describe("RecommendationCard", () => {
  const mockRecommendation = {
    id: 1,
    name: "RD Station CRM",
    score: 5,
    category: "Vendas",
  };

  test("renderiza as informações básicas do produto", () => {
    render(<RecommendationCard recommendation={mockRecommendation} />);

    expect(screen.getByText("RD Station CRM")).toBeInTheDocument();
    expect(screen.getByText(/Score: 5/i)).toBeInTheDocument();
    expect(screen.getByText("Vendas")).toBeInTheDocument();
  });

  test("não renderiza a categoria se ela não for fornecida", () => {
    const recommendationWithoutCategory = {
      ...mockRecommendation,
      category: null,
    };

    render(
      <RecommendationCard recommendation={recommendationWithoutCategory} />
    );

    expect(screen.queryByText("Vendas")).not.toBeInTheDocument();
  });

  test('renderiza o link "Conheça o produto" para um produto mapeado', () => {
    render(<RecommendationCard recommendation={mockRecommendation} />);

    const productLink = screen.getByText("Conheça o produto");
    expect(productLink).toBeInTheDocument();

    expect(productLink).toHaveAttribute(
      "href",
      "https://www.rdstation.com/produtos/crm/"
    );
    expect(productLink).toHaveAttribute("target", "_blank");
  });

  test('NÃO renderiza o link "Conheça o produto" para um produto não mapeado', () => {
    const unmappedRecommendation = {
      id: 99,
      name: "Produto Desconhecido",
      score: 80,
      category: "Outros",
    };

    render(<RecommendationCard recommendation={unmappedRecommendation} />);

    expect(screen.queryByText("Conheça o produto")).not.toBeInTheDocument();
  });
});
