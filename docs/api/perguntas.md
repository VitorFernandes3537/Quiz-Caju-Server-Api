# GET /perguntas

Retorna um array de perguntas aleatórias no formato compatível com o `questions.js` do QuizCaju.

---

## Endpoint

```
GET /perguntas
```

---

## Parâmetros

| Parâmetro  | Tipo    | Obrigatório | Padrão | Descrição |
|------------|---------|-------------|--------|-----------|
| `amount`   | número  | não         | `10`   | Quantidade de perguntas a retornar |
| `category` | número  | não         | —      | ID da categoria. Sem este parâmetro, retorna de todas. Use `GET /categorias` para ver os IDs. |
| `encode`   | string  | não         | —      | Se `base64`, todos os textos são codificados em Base64 |

---

## Exemplos

**10 perguntas aleatórias de todas as categorias:**
```
GET /perguntas?amount=10
```

**5 perguntas de Tecnologia:**
```
GET /perguntas?amount=5&category=1
```

**5 perguntas de Tecnologia codificadas em Base64:**
```
GET /perguntas?amount=5&category=1&encode=base64
```

---

## Respostas

### 200 — Sucesso

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

Com `encode=base64`, todos os campos de texto chegam codificados:

```json
{
  "response_code": 0,
  "results": [
    {
      "question": "TyBxdWUgc2lnbmlmaWNhIGEgc2lnbGEgSFRNTD8=",
      "correct_answer": "SHlwZXJUZXh0IE1hcmt1cCBMYW5ndWFnZQ==",
      "incorrect_answers": [
        "SHlwZXJUZXh0IE1hY2hpbmUgTGFuZ3VhZ2U=",
        "SGlnaFRleHQgTWFya3VwIExhbmd1YWdl",
        "SHlwZXJUb29sIE1hcmt1cCBMYW5ndWFnZQ=="
      ],
      "category": "VGVjbm9sb2dpYQ=="
    }
  ]
}
```

### 400 — Parâmetro inválido

Retornado quando `amount` não é um número válido:

```json
{
  "response_code": 2,
  "message": "Parâmetro 'amount' inválido."
}
```

### 404 — Categoria não encontrada

Retornado quando o `category` informado não existe:

```json
{
  "response_code": 1,
  "message": "Categoria não encontrada."
}
```

---

## Códigos de response_code

| Código | Significado              |
|--------|--------------------------|
| `0`    | Sucesso                  |
| `1`    | Categoria não encontrada |
| `2`    | Parâmetro inválido       |

---

## Sobre o encode=base64

O português tem muitos acentos e caracteres especiais.
Sem codificação, comparações de strings como `.indexOf()` podem falhar silenciosamente.

O parâmetro `encode=base64` faz o servidor codificar cada campo com `Buffer.from(str).toString("base64")` antes de enviar.

No `questions.js` do QuizCaju, a função `decodificarBase64()` desfaz essa codificação automaticamente usando `atob()`.

::: tip No console do navegador
Para decodificar manualmente e verificar o conteúdo de uma string Base64:
```js
atob("TyBxdWUgc2lnbmlmaWNhIGEgc2lnbGEgSFRNTD8=")
// → "O que significa a sigla HTML?"
```
:::
