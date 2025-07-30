// src/components/RecommendationList/RecommendationList.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import RecommendationList from "./RecommendationList";

describe("RecommendationList", () => {
  test("Renderiza a mensagem inicial quando a lista de recomendações está vazia", () => {
    const recommendations = [];

    render(<RecommendationList recommendations={recommendations} />);

    expect(
      screen.getByText(/Selecione suas preferências/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/produto\(s\) recomendado\(s\)/i)
    ).not.toBeInTheDocument();
  });

  test("Renderiza os cards reais com os dados corretos quando há recomendações", () => {
    const mockRecommendations = [
      { id: 1, name: "RD Station CRM", score: 3, category: "Vendas" },
      { id: 2, name: "RD Station Marketing", score: 2, category: "Marketing" },
    ];

    render(<RecommendationList recommendations={mockRecommendations} />);

    expect(screen.getByText("RD Station CRM")).toBeInTheDocument();
    expect(screen.getByText("RD Station Marketing")).toBeInTheDocument();

    expect(screen.getByText(/Score: 3/i)).toBeInTheDocument();
    expect(screen.getByText(/Score: 2/i)).toBeInTheDocument();

    expect(screen.getByText("Vendas")).toBeInTheDocument();
    expect(screen.getByText("Marketing")).toBeInTheDocument();

    expect(
      screen.getByText(
        `🎯 ${mockRecommendations.length} produto(s) recomendado(s)`
      )
    ).toBeInTheDocument();

    expect(
      screen.queryByText(/Selecione suas preferências/i)
    ).not.toBeInTheDocument();
  });
});
