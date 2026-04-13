import { defineConfig } from "vitepress"

export default defineConfig({
  base: "/Quiz-Caju-Server-Api/",
  lang: "pt-BR",
  title: "QuizCaju API",
  description: "API de perguntas em português para o QuizCaju",

  head: [
    ["link", { rel: "icon", href: "/Quiz-Caju-Server-Api/favicon.ico" }]
  ],

  themeConfig: {
    logo: "/logo.svg",

    nav: [
      { text: "Início", link: "/" },
      { text: "Guia", link: "/guia/inicio" },
      { text: "API Reference", link: "/api/perguntas" },
    ],

    sidebar: {
      "/guia/": [
        {
          text: "Guia",
          items: [
            { text: "Rodando localmente", link: "/guia/inicio" },
            { text: "Deploy no Vercel", link: "/guia/deploy" },
            { text: "Adicionando perguntas", link: "/guia/contribuir" },
            { text: "Conectando no QuizCaju", link: "/guia/conectar" },
          ]
        }
      ],
      "/api/": [
        {
          text: "API Reference",
          items: [
            { text: "GET /perguntas", link: "/api/perguntas" },
            { text: "GET /categorias", link: "/api/categorias" },
          ]
        }
      ],
      "/": [
        {
          text: "Introdução",
          items: [
            { text: "O que é a QuizCaju API", link: "/" },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/seu-usuario/quizcaju-api" }
    ],

    footer: {
      message: "CajuHub · Jovem Tech · Aracaju, SE"
    },

    search: {
      provider: "local"
    }
  }
})
