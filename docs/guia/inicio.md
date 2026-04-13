# Primeiros passos

Você não precisa instalar nada para começar a usar a API.
Ela já está no ar. É só chamar a URL.

---

## Testando direto no navegador

Cole qualquer uma dessas URLs na barra de endereço e aperte Enter:

**Listar as categorias disponíveis:**
```
https://quiz-caju-server-api.vercel.app/categorias
```

**5 perguntas de Tecnologia:**
```
https://quiz-caju-server-api.vercel.app/perguntas?amount=5&category=1
```

**10 perguntas aleatórias de todas as categorias:**
```
https://quiz-caju-server-api.vercel.app/perguntas?amount=10
```

O navegador vai exibir o JSON diretamente na tela.
Se quiser ver mais bonito, instale a extensão [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa) no Chrome.

---

## Testando no console do navegador

Abra qualquer página, pressione `F12` para abrir o DevTools,
clique na aba **Console** e cole o código abaixo:

```js
fetch("https://quiz-caju-server-api.vercel.app/perguntas?amount=3&category=1")
  .then(function(resposta) { return resposta.json() })
  .then(function(dados) { console.log(dados) })
```

Pressione Enter. Você vai ver o objeto JSON aparecer no console.

Para ver só as perguntas:

```js
fetch("https://quiz-caju-server-api.vercel.app/perguntas?amount=3&category=1")
  .then(function(r) { return r.json() })
  .then(function(dados) {
    dados.results.forEach(function(p) {
      console.log(p.question)
      console.log("Correta:", p.correct_answer)
      console.log("---")
    })
  })
```

---

## Entendendo o que a API responde

Toda resposta tem esse formato:

```json
{
  "response_code": 0,
  "results": [
    {
      "question": "O que significa a sigla HTML?",
      "correct_answer": "HyperText Markup Language",
      "incorrect_answers": [
        "HyperText Machine Language",
        "HighText Markup Language",
        "HyperTool Markup Language"
      ],
      "category": "Tecnologia"
    }
  ]
}
```

| Campo              | O que é                                          |
|--------------------|--------------------------------------------------|
| `response_code`    | `0` = sucesso. Outro número = algum problema.    |
| `results`          | Array com as perguntas que você pediu            |
| `question`         | O texto da pergunta                              |
| `correct_answer`   | A resposta correta                               |
| `incorrect_answers`| Array com 3 respostas erradas                    |
| `category`         | Nome da categoria                                |

---

## Rodando localmente

Se quiser rodar o servidor na sua máquina:

**1 — Clone o repositório:**
```bash
git clone https://github.com/VitorFernandes3537/Quiz-Caju-Server-Api.git
cd Quiz-Caju-Server-Api/server-quiz-caju
```

**2 — Instale as dependências:**
```bash
npm install
```

**3 — Inicie o servidor:**
```bash
node server.js
```

Acesse em `http://localhost:3000`.

::: tip Node.js
Precisa ter o Node.js instalado. Verifique com `node -v` no terminal.
Se não tiver, baixe em [nodejs.org](https://nodejs.org) — versão LTS.
:::
