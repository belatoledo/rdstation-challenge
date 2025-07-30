function InfoCard() {
  return (
    <div className="mt-4 p-8 bg-green-100 border-l-4 border-green-500 rounded-xl">
      <h4 className="mb-4 text-lg text-green-800 font-semibold">
        💡 Como o nosso algoritmo funciona:
      </h4>
      <div className="flex flex-col gap-4 text-sm">
        <p>
          1. Quando você seleciona suas preferências e funcionalidades nós{" "}
          <b>analisamos</b> suas escolhas
        </p>
        <p>
          2. Cada produto selecionado ganha <b>+1</b> ponto baseado em matches
        </p>
        <p>
          3. Nós filtramos todos os produtos com score maior que <b>zero</b>
        </p>
        <p>
          4. Fazemos a ordenação por score: quem tem mais pontos vem{" "}
          <b>primeiro</b>
        </p>
        <p>
          5. Por fim, retornamos a lista conforme o tipo de recomendação
          selecionada :)
        </p>
      </div>
    </div>
  );
}

export default InfoCard;
