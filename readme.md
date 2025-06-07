# DevQuiz de Inglês para Brasileiros 🇧🇷📚

-----

Bem-vindo ao **DevQuiz de Inglês para Brasileiros**\! Este é um aplicativo de linha de comando (CLI) interativo projetado para ajudar desenvolvedores e entusiastas da tecnologia no Brasil a praticar e aprimorar suas habilidades em inglês.

Com o poder da Inteligência Artificial (IA), o quiz gera perguntas de múltipla escolha dinamicamente, abordando diversos tópicos de gramática e vocabulário, garantindo uma experiência de aprendizado sempre nova e relevante.

-----

## 🌟 Funcionalidades Principais

  * **Perguntas Dinâmicas:** Gere uma quantidade personalizada de perguntas de inglês a cada sessão, com base em diversos tópicos.
  * **Aprendizado Adaptável:** Questões de múltipla escolha que abrangem gramática, vocabulário, `phrasal verbs` e mais.
  * **Feedback Instantâneo:** Receba feedback imediato sobre suas respostas, com a indicação da resposta correta em caso de erro.
  * **Pontuação Final:** Veja sua performance ao final de cada quiz.

-----

## 🚀 Começando

Siga os passos abaixo para configurar e executar o DevQuiz em sua máquina.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) (versão 18 ou superior recomendada) e o [npm](https://www.npmjs.com/) (ou [Yarn](https://yarnpkg.com/)) instalados.

### ⚙️ Instalação

1.  **Clone o Repositório:**

    ```bash
    git clone https://github.com/marcosmvr/Verbosity.git
    cd Verbosity
    ```

2.  **Instale as Dependências:**

    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Configuração da Chave da API Mistral AI:**

    Este projeto utiliza a API da Mistral AI para gerar as perguntas. Você precisará de uma chave de API.

      * Obtenha sua chave em: [Mistral AI](https://console.mistral.ai/)

      * Crie um arquivo `.env` na raiz do projeto e adicione sua chave:

        ```
        MISTRAL_API_KEY=sua_chave_aqui
        ```

-----

## 🎮 Como Usar

Para iniciar o quiz, execute o seguinte comando no terminal na raiz do projeto:

```bash
npm run dev
# ou
yarn dev
```

O CLI irá guiá-lo, perguntando quantas perguntas você gostaria de responder.

-----

## 🛠️ Tecnologias Utilizadas

  * **Node.js:** Ambiente de execução.
  * **TypeScript:** Linguagem de programação para tipagem forte.
  * **Inquirer.js:** Para construir interfaces de linha de comando interativas.
  * **Mistral AI:** Para geração dinâmica de perguntas de inglês.
  * **Dotenv:** Para gerenciamento de variáveis de ambiente.

-----

## 🤝 Contribuição

Contribuições são muito bem-vindas\! Se você tiver ideias para melhorias, novas funcionalidades ou encontrar algum bug, sinta-se à vontade para:

1.  Abrir uma `issue` descrevendo a sugestão ou o problema.
2.  Criar um `fork` do projeto.
3.  Implementar suas mudanças.
4.  Abrir um `Pull Request` explicando o que foi feito.

-----

## 📞 Contato

Marcos Vinicius - [https://www.linkedin.com/in/marcos-vinicius-b274b6334/] - [marcosvr.dev@gmail.com]

Link do Projeto: [https://github.com/marcosmvr/Verbosity]

