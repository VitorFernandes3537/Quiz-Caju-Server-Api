# Conectando no QuizCaju

A única mudança necessária no projeto QuizCaju é trocar as URLs
no array `FONTES` do `questions.js`. O resto do código não muda.

---

## Onde fazer a mudança

Abra o `questions.js` e encontre o array `FONTES` no topo do arquivo.

**Antes — OpenTDB em inglês:**

```js
const FONTES = [
  {
    url: "https://opentdb.com/api.php?amount=5&category=18&type=multiple&encode=base64",
    categoria: "Tecnologia"
  },
  {
    url: "https://opentdb.com/api.php?amount=5&category=31&type=multiple&encode=base64",
    categoria: "Anime"
  }
]
```

**Depois — QuizCaju API em português:**

```js
const FONTES = [
  {
    url: "https://quiz-caju-server-api.vercel.app/perguntas?amount=5&category=1&encode=base64",
    categoria: "Tecnologia"
  },
  {
    url: "https://quiz-caju-server-api.vercel.app/perguntas?amount=5&category=2&encode=base64",
    categoria: "Geografia do Brasil"
  },
  {
    url: "https://quiz-caju-server-api.vercel.app/perguntas?amount=5&category=3&encode=base64",
    categoria: "Cultura Pop"
  }
]
```

É só isso. O jogo já vai buscar as perguntas em português.

---

## Por que só muda a URL?

O `questions.js` já foi construído para consumir qualquer fonte que responda nesse formato:

```json
{
  "response_code": 0,
  "results": [
    {
      "question": "...",
      "correct_answer": "...",
      "incorrect_answers": ["...", "...", "..."],
      "category": "..."
    }
  ]
}
```

A QuizCaju API responde exatamente assim.
A função `normalizarPergunta()` e todo o fluxo continuam funcionando sem nenhuma alteração.

---

## O que é o encode=base64?

O parâmetro `encode=base64` faz a API codificar todos os textos antes de enviar.

Sem ele, acentos e caracteres especiais do português podem causar bugs silenciosos nas comparações de string dentro do `questions.js`.

Com ele, os textos chegam assim:

```
"TyBxdWUgc2lnbmlmaWNhIGEgc2lnbGEgSFRNTD8="
```

E a função `decodificarBase64()` do `questions.js` desfaz isso automaticamente:

```js
atob("TyBxdWUgc2lnbmlmaWNhIGEgc2lnbGEgSFRNTD8=")
// → "O que significa a sigla HTML?"
```

Teste no console do navegador para ver funcionando.

---

## Confirmando que funcionou

Abra o quiz no navegador. Na tela inicial, o contador deve mostrar
o número de perguntas e as categorias corretas.

Para confirmar, abra o DevTools → aba **Network**, recarregue a página
e verifique que as requisições agora vão para `quiz-caju-server-api.vercel.app`.
