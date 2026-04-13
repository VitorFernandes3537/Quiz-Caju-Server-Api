# GET /categorias

Lista todas as categorias disponíveis com seus IDs e total de perguntas.
Use esta rota para descobrir quais IDs passar no parâmetro `category`.

---

## URL base

```
https://quiz-caju-server-api.vercel.app/categorias
```

---

## Parâmetros

Esta rota não aceita parâmetros.

---

## Teste agora

Cole no navegador:
```
https://quiz-caju-server-api.vercel.app/categorias
```

Ou no console do DevTools:
```js
fetch("https://quiz-caju-server-api.vercel.app/categorias")
  .then(function(r) { return r.json() })
  .then(function(dados) { console.log(dados.categorias) })
```

---

## Resposta

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

| Campo             | Tipo   | O que é                                                       |
|-------------------|--------|---------------------------------------------------------------|
| `id`              | número | Use esse número no parâmetro `category` de `GET /perguntas`   |
| `nome`            | string | Nome legível da categoria                                     |
| `total_perguntas` | número | Quantas perguntas existem nessa categoria                     |

---

## Usando o ID na prática

```js
// Primeiro, descubra os IDs disponíveis
fetch("https://quiz-caju-server-api.vercel.app/categorias")
  .then(function(r) { return r.json() })
  .then(function(dados) {
    dados.categorias.forEach(function(c) {
      console.log("ID:", c.id, "→", c.nome)
    })
  })

// Depois, use o ID para buscar perguntas de uma categoria específica
fetch("https://quiz-caju-server-api.vercel.app/perguntas?amount=5&category=2")
  .then(function(r) { return r.json() })
  .then(function(dados) { console.log(dados.results) })
```
