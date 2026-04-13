const swaggerJsdoc = require("swagger-jsdoc")

const opcoes = {
  definition: {
    openapi: "3.0.0",
    info: {
      title:       "QuizCaju API",
      version:     "1.0.0",
      description: "API de perguntas em português para o QuizCaju. Formato compatível com o questions.js do projeto."
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor local"
      },
      {
        url: "https://sua-url-no-vercel.vercel.app",
        description: "Produção"
      }
    ]
  },
  apis: ["./server.js"]
}

module.exports = swaggerJsdoc(opcoes)
