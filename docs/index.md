---
layout: home

hero:
  name: "QuizCaju API"
  text: "Perguntas em português para o seu quiz"
  tagline: API gratuita, open source, feita por estudantes para estudantes.
  actions:
    - theme: brand
      text: Começar agora
      link: /guia/inicio
    - theme: alt
      text: Ver no GitHub
      link: https://github.com/seu-usuario/quizcaju-api

features:
  - icon: 🇧🇷
    title: 100% em português
    details: Todas as perguntas escritas em português, com categorias relevantes para o público brasileiro.

  - icon: ⚡
    title: Sem cold start
    details: Hospedada no Vercel. Resposta rápida, sem espera de inicialização.

  - icon: 🔌
    title: Compatível com o QuizCaju
    details: Formato idêntico ao questions.js do projeto. Trocar a URL é a única mudança necessária.

  - icon: 📖
    title: Open source
    details: Qualquer pessoa pode adicionar perguntas ou novas categorias via pull request no GitHub.
---

---

## Rotas disponíveis

| Método | Rota          | Descrição                         |
|--------|---------------|-----------------------------------|
| GET    | `/perguntas`  | Retorna perguntas aleatórias      |
| GET    | `/categorias` | Lista todas as categorias         |

---

## Exemplo rápido

Buscar 5 perguntas de Tecnologia codificadas em Base64:

```
GET https://quizcaju-api.vercel.app/perguntas?amount=5&category=1&encode=base64
```

Resposta:

```json
{
  "response_code": 0,
  "results": [
    {
      "question": "TyBxdWUgw6kgbyBET00/",
      "correct_answer": "VW1hIHJlcHJlc2VudGHDp8OjbyBlbSDDoXJ2b3Jl...",
      "incorrect_answers": ["...", "...", "..."],
      "category": "VGVjbm9sb2dpYQ=="
    }
  ]
}
```

::: tip Por que Base64?
O parâmetro `encode=base64` garante que acentos e caracteres especiais do português
não quebrem as comparações no `questions.js`. O `decodificarBase64()` do projeto
já desfaz a codificação automaticamente.
:::
