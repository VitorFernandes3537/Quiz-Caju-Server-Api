# GET /categorias

Retorna a lista completa de categorias disponíveis com seus IDs e total de perguntas.
Use esta rota para descobrir quais IDs passar no parâmetro `category` de `GET /perguntas`.

---

## Endpoint

```
GET /categorias
```

---

## Parâmetros

Esta rota não aceita parâmetros.

---

## Exemplo

```
GET /categorias
```

---

## Resposta

### 200 — Sucesso

```json
{
  "categorias": [
    {
      "id": 1,
      "nome": "Tecnologia",
      "total_perguntas": 30
    },
    {
      "id": 2,
      "nome": "Geografia do Brasil",
      "total_perguntas": 6
    },
    {
      "id": 3,
      "nome": "Cultura Pop",
      "total_perguntas": 6
    }
  ]
}
```

---

## Campos da resposta

| Campo             | Tipo   | Descrição |
|-------------------|--------|-----------|
| `id`              | número | Identificador da categoria. Use no parâmetro `category` de `GET /perguntas`. |
| `nome`            | string | Nome legível da categoria |
| `total_perguntas` | número | Quantidade de perguntas disponíveis nesta categoria |

---

## Usando o ID na prática

Após listar as categorias, use o `id` para filtrar perguntas:

```
# Buscar 5 perguntas da categoria com id 2 (Geografia do Brasil)
GET /perguntas?amount=5&category=2&encode=base64
```

---

## No questions.js do QuizCaju

Cada objeto do array `FONTES` usa um ID de categoria:

```js
const FONTES = [
  {
    url: "https://quizcaju-api.vercel.app/perguntas?amount=5&category=1&encode=base64",
    categoria: "Tecnologia"           // id: 1
  },
  {
    url: "https://quizcaju-api.vercel.app/perguntas?amount=5&category=2&encode=base64",
    categoria: "Geografia do Brasil"  // id: 2
  },
  {
    url: "https://quizcaju-api.vercel.app/perguntas?amount=5&category=3&encode=base64",
    categoria: "Cultura Pop"          // id: 3
  }
]
```
