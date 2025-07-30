<h1 align="center"> Recomendador de Produtos RD Station</h1>
<h4 align="center">
  React | JavaScript | Tailwind | Jest</h4>

  <p align="center">
  <a href="#-sobre">Sobre</a> •
  <a href="#-tecnologias-utilizadas">Tecnologias</a> • 
 <a href="#-pré-requisitos">Pré-requisitos</a> • 
  <a href="#-executando-o-projeto">Executando o projeto</a> •
 <a href="#-autor">Autor</a>
</p> 

## 💎 Sobre
O projeto é parte do **desafio técnico proposto pela RD Station**. A estrutura básica da aplicação já está construída com React.js para o front-end e utiliza json-server para simular um servidor RESTful com dados de produtos. Trata-se de uma feature para implementar a lógica de recomendação de produtos em uma aplicação web existente onde os usuários podem selecionar suas preferências e funcionalidades desejadas, e então receber recomendações de produtos correspondentes.

-----

## 🔧 Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias principais:

- React.js: Para o desenvolvimento do front-end
- json-server: Para simular um servidor RESTful com dados de produtos
- Tailwind CSS: Para estilização e layout responsivo

## 📝 Pré-requisitos

Para rodar o projeto localmente, certifique-se de ter os seguintes softwares instalados:

### Yarn

O projeto usa como gerenciador de pacotes a ferramenta Yarn
Instale `yarn` (caso ainda não tenha) seguindo as instruções em: https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable

### Node.js

Este projeto requer Node.js versão 18.3 ou superior. Se você não tem essa versão instalada, siga as instruções abaixo para instalá-la usando `nvm`.

#### Usando `nvm` (Node Version Manager):

1. Instale `nvm` (caso ainda não tenha) seguindo as instruções em: https://github.com/nvm-sh/nvm

2. Instale e use a versão 18.3 do Node.js: nvm install 18.3 & nvm use 18.3

Após instalar a versão correta do Node.js, você pode prosseguir com a instalação das dependências do projeto e iniciar o desenvolvimento.

## 🎲 Executando o projeto

Siga os passos abaixo para configurar e executar a aplicação em seu ambiente local:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/belatoledo/rdstation-challenge.git
    cd rdstation-challenge
    ```
   
2. **Instale as dependências:**

    ```bash
    yarn install
    ```

3. **Instale o projeto**
  - Execute o script:
   
   ```bash
   bash install.sh
   ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    yarn start
    ```

    A aplicação estará disponível em `http://localhost:3000`.

### Scripts Disponíveis

- `start`: Inicia a aplicação React em modo de desenvolvimento.
- `start:frontend`: Inicia apenas a parte frontend da aplicação em modo de desenvolvimento.
- `start:backend`: Inicia apenas a parte backend da aplicação em modo de desenvolvimento.
- `dev`: Inicia simultaneamente a parte frontend e backend da aplicação em modo de desenvolvimento.

### Testes
Para executar os testes:
    
    ```
    cd frontend
    yarn test
    ```


## 🎉 Autor

<a href="https://www.linkedin.com/in/izabela-toledo/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/61567726?v=4" width="100px;" alt="Izabela Toledo"/>
 <br />
 <sub><b>Izabela Toledo</b></sub><a href="https://github.com/belatoledo">🚀</a>

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
