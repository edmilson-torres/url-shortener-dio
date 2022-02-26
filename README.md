# Projeto Construindo Encurtador de URL

## 📄 Sobre
Projeto criado junto da DIO para construção de um Encurtador de URL. Eduzz Fullstack Developer #3. Especialista [Alexia Pereira](https://www.linkedin.com/in/alexiapereira/).

## 📋 Funcionalidades

### Padrão
- Endpoint `/shorten` para encurtar a URL
- Endpoint `/{hash}` para redirecionar para a página origem
### Recursos adicionados
- Remoção do pacote `shortid` que está **deprecated** e adicionado o `nanoid`
- **Update dos pacotes** e refatoração para adequação, removendo avisos de vulnerabilidade
- Endpoint `/{hash}/stats` para visualizar as informações
- **Contador de visitas** quando usada a rota de redirecionamento
- **Validação da URL** enviada utilizando RegEx
- **Melhoria na segurança** adicionando o package Helmet, Rate Limit e Dotenv
- **Testes** de rota e da validação de URL
- **Documentação** Open API
- Mudanças do HTTP status code para melhor adequação REST API
`201 Created`, `302 Redirect  `, `429 Rate limit `


## 🔗 Preview
https://url-dio.herokuapp.com/api-docs/
** Host heroku grátis, pode demorar um pouco para responder
## 💻 Tecnologias utilizadas
  - NojeJS
  - NPM
  - ExpressJS
  - TypeScript
  - MongoDB
  - Jest
  - Swagger
  - ESLint
  - Prettier

## ⚙️ Rodando o projeto

##### Instale as dependências necessárias para a execução
`npm install`

#####  Executar
`npm run dev`

#####  Testar
`npm run test`

#####  Build
`npm run build`
