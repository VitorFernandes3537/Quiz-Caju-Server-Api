---
layout: home

hero:
  name: "QuizCaju API"
  text: "Perguntas em português para o seu quiz"
  tagline: Gratuita, open source e feita por estudantes para estudantes do CajuHub.
  actions:
    - theme: brand
      text: Começar agora
      link: /guia/inicio
    - theme: alt
      text: Ver no GitHub
      link: https://github.com/VitorFernandes3537/Quiz-Caju-Server-Api

features:
  - icon: 🇧🇷
    title: 100% em português
    details: Todas as perguntas escritas em português, com categorias relevantes para quem está aprendendo desenvolvimento web.

  - icon: ⚡
    title: Simples de usar
    details: Duas rotas, zero autenticação. Cole a URL no navegador e veja o JSON chegar. É só isso.

  - icon: 🔌
    title: Feita para o QuizCaju
    details: O formato de resposta é idêntico ao que o questions.js do QuizCaju já espera. Trocar a URL é a única mudança necessária.

  - icon: 🤝
    title: Open source
    details: Qualquer pessoa pode adicionar perguntas ou criar novas categorias via pull request no GitHub.
---

---

## O que essa API faz?

Ela entrega perguntas de quiz no formato JSON quando você chama uma URL.
É como um garçom — você faz o pedido, ele traz o prato.

```
Você chama:
https://quiz-caju-server-api.vercel.app/perguntas?amount=5&category=1&encode=base64

A API responde:
{
  "response_code": 0,
  "results": [ ...5 perguntas de Tecnologia... ]
}
```

---

## Categorias disponíveis

| ID | Categoria           | Perguntas |
|----|---------------------|-----------|
| 1  | Tecnologia          | 30        |
| 2  | Geografia do Brasil | 6         |
| 3  | Cultura Pop         | 6         |

---

## Rotas disponíveis

| Método | Rota          | O que faz                    |
|--------|---------------|------------------------------|
| GET    | `/perguntas`  | Retorna perguntas aleatórias |
| GET    | `/categorias` | Lista todas as categorias    |
