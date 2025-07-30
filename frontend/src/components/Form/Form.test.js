import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Form from "./Form";

jest.mock("../../hooks/useProducts", () => ({
  __esModule: true,
  default: () => ({
    products: [],
    preferences: ["Automação de marketing", "Integração com chatbots"],
    features: ["Rastreamento de comportamento do usuário", "Análise de dados"],
  }),
}));

const mockGetRecommendations = jest.fn();
jest.mock("../../hooks/useRecommendations", () => ({
  __esModule: true,
  default: () => ({
    getRecommendations: mockGetRecommendations,
  }),
}));

describe("Form", () => {
  let mockOnRecommendationsUpdate;

  beforeEach(() => {
    mockOnRecommendationsUpdate = jest.fn();
    mockGetRecommendations.mockClear();
  });

  test("deve renderizar o formulário com os campos iniciais", () => {
    render(<Form onRecommendationsUpdate={mockOnRecommendationsUpdate} />);

    expect(screen.getByText("Preferências:")).toBeInTheDocument();
    // CORRIGIDO
    expect(screen.getByText("Funcionalidades:")).toBeInTheDocument();
    expect(screen.getByText("Tipo de Recomendação:")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /obter recomendação/i })
    ).toBeInTheDocument();
  });

  test("deve exibir erro se o formulário for enviado vazio", async () => {
    render(<Form onRecommendationsUpdate={mockOnRecommendationsUpdate} />);
    await userEvent.click(
      screen.getByRole("button", { name: /obter recomendação/i })
    );
    expect(
      await screen.findByText(
        "Por favor, selecione pelo menos uma preferência ou funcionalidade."
      )
    ).toBeInTheDocument();
    expect(mockOnRecommendationsUpdate).not.toHaveBeenCalled();
  });

  test("deve exibir erro se o tipo de recomendação não for selecionado", async () => {
    render(<Form onRecommendationsUpdate={mockOnRecommendationsUpdate} />);
    await userEvent.click(screen.getByLabelText("Automação de marketing"));
    await userEvent.click(
      screen.getByRole("button", { name: /obter recomendação/i })
    );
    expect(
      await screen.findByText("Por favor, selecione o tipo de recomendação.")
    ).toBeInTheDocument();
    expect(mockOnRecommendationsUpdate).not.toHaveBeenCalled();
  });

  test("deve submeter com sucesso e chamar onRecommendationsUpdate", async () => {
    const user = userEvent.setup();
    const fakeRecommendations = [{ id: "2", name: "RD Station Marketing" }];
    mockGetRecommendations.mockReturnValue(fakeRecommendations);
    render(<Form onRecommendationsUpdate={mockOnRecommendationsUpdate} />);

    await user.click(screen.getByLabelText("Automação de marketing"));
    await user.click(
      screen.getByLabelText("Rastreamento de comportamento do usuário")
    );
    await user.click(screen.getByLabelText("Produto Único"));

    await user.click(
      screen.getByRole("button", { name: /obter recomendação/i })
    );

    expect(mockGetRecommendations).toHaveBeenCalledTimes(1);
    expect(mockGetRecommendations).toHaveBeenCalledWith({
      selectedPreferences: ["Automação de marketing"],
      selectedFeatures: ["Rastreamento de comportamento do usuário"],
      selectedRecommendationType: "SingleProduct",
    });
    expect(mockOnRecommendationsUpdate).toHaveBeenCalledWith(
      fakeRecommendations
    );
  });
});
