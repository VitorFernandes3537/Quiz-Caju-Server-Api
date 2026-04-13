# GET /perguntas

Retorna perguntas aleatórias no formato compatível com o `questions.js` do QuizCaju.

---

## URL base

```
https://quiz-caju-server-api.vercel.app/perguntas
```

---

## Parâmetros

| Parâmetro  | Tipo   | Obrigatório | Padrão | O que faz                                              |
|------------|--------|-------------|--------|--------------------------------------------------------|
| `amount`   | número | não         | `10`   | Quantas perguntas retornar                             |
| `category` | número | não         | —      | ID da categoria. Sem isso, retorna de todas.           |
| `encode`   | string | não         | —      | Se `base64`, os textos chegam codificados em Base64    |

---

## Exemplos prontos para testar

Cole no navegador ou no console do DevTools:

**10 perguntas aleatórias:**
```
https://quiz-caju-server-api.vercel.app/perguntas
```

**5 perguntas de Tecnologia:**
```
https://quiz-caju-server-api.vercel.app/perguntas?amount=5&category=1
```

**5 perguntas de Tecnologia em Base64** (formato para o QuizCaju):
```
https://quiz-caju-server-api.vercel.app/perguntas?amount=5&category=1&encode=base64
```

**Teste no console do navegador:**
```js
fetch("https://quiz-caju-server-api.vercel.app/perguntas?amount=3&category=1")
  .then(function(r) { return r.json() })
  .then(function(dados) { console.log(dados.results) })
```

---

## Resposta de sucesso

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

Com `encode=base64` os textos chegam assim — o `decodificarBase64()` do QuizCaju desfaz automaticamente:

```json
{
  "response_code": 0,
  "results": [
    {
      "question": "TyBxdWUgc2lnbmlmaWNhIGEgc2lnbGEgSFRNTD8=",
      "correct_answer": "SHlwZXJUZXh0IE1hcmt1cCBMYW5ndWFnZQ==",
      "incorrect_answers": ["...", "...", "..."],
      "category": "VGVjbm9sb2dpYQ=="
    }
  ]
}
```

---

## Respostas de erro

**400 — amount inválido:**
```json
{
  "response_code": 2,
  "message": "Parâmetro 'amount' inválido."
}
```

**404 — categoria não encontrada:**
```json
{
  "response_code": 1,
  "message": "Categoria não encontrada."
}
```

---

## Tabela de response_code

| Código | Significado              |
|--------|--------------------------|
| `0`    | Sucesso                  |
| `1`    | Categoria não encontrada |
| `2`    | Parâmetro inválido       |
