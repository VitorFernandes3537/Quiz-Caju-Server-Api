# Conectando no QuizCaju

Com a API no ar, a única mudança necessária no projeto QuizCaju
é trocar as URLs no array `FONTES` do `questions.js`.
O resto do código não muda — o formato de resposta é idêntico.

---

## Onde fazer a mudança

Abra o arquivo `questions.js` do QuizCaju e localize o array `FONTES` no topo do arquivo.

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
  },
  {
    url: "https://opentdb.com/api.php?amount=5&category=9&type=multiple&encode=base64",
    categoria: "Conhecimentos Gerais"
  }
]
```

**Depois — QuizCaju API em português:**

```js
const FONTES = [
  {
    url: "https://quizcaju-api.vercel.app/perguntas?amount=5&category=1&encode=base64",
    categoria: "Tecnologia"
  },
  {
    url: "https://quizcaju-api.vercel.app/perguntas?amount=5&category=2&encode=base64",
    categoria: "Geografia do Brasil"
  },
  {
    url: "https://quizcaju-api.vercel.app/perguntas?amount=5&category=3&encode=base64",
    categoria: "Cultura Pop"
  }
]
```

::: tip Substituindo a URL
Troque `quizcaju-api.vercel.app` pela URL real da sua instância da API.
Consulte `GET /categorias` para ver os IDs de cada categoria disponível.
:::

---

## Por que só isso muda?

O `questions.js` já foi construído para consumir qualquer fonte que siga o formato:

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

A QuizCaju API responde exatamente nesse formato.
A função `normalizarPergunta()` e todo o fluxo de `buscarDeFonte()` continuam funcionando sem nenhuma alteração.

---

## Testando após a troca

Abra o quiz no navegador. Na tela inicial, o contador de perguntas deve atualizar
e as perguntas que aparecerem no jogo já serão em português.

Para confirmar, abra o DevTools → aba **Network**, recarregue a página
e verifique que as requisições agora vão para `quizcaju-api.vercel.app`
em vez de `opentdb.com`.

---

## Usando as duas fontes ao mesmo tempo

Se quiser misturar perguntas em português com categorias que ainda não existem
na QuizCaju API, você pode manter fontes das duas APIs no mesmo array:

```js
const FONTES = [
  {
    url: "https://quizcaju-api.vercel.app/perguntas?amount=5&category=1&encode=base64",
    categoria: "Tecnologia"
  },
  {
    url: "https://opentdb.com/api.php?amount=5&category=31&type=multiple&encode=base64",
    categoria: "Anime"
  }
]
```

O `Promise.all` busca as duas em paralelo e o resultado é mesclado normalmente.
