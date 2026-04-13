# QuizCaju API

API de perguntas em português para o QuizCaju.
Formato compatível com o `questions.js` do projeto.

---

## Rotas

| Método | Rota        | Descrição                         |
|--------|-------------|-----------------------------------|
| GET    | /perguntas  | Retorna perguntas aleatórias      |
| GET    | /categorias | Lista todas as categorias         |
| GET    | /docs       | Documentação interativa (Swagger) |

---

## Parâmetros — GET /perguntas

| Parâmetro | Tipo   | Padrão | Descrição                             |
|-----------|--------|--------|---------------------------------------|
| amount    | número | 10     | Quantidade de perguntas               |
| category  | número | —      | ID da categoria (ver GET /categorias) |
| encode    | string | —      | Use `base64` para codificar os textos |

---

## Exemplos

**5 perguntas de Tecnologia em Base64:**
```
GET /perguntas?amount=5&category=1&encode=base64
```

**10 perguntas aleatórias de todas as categorias:**
```
GET /perguntas?amount=10
```

**Listar categorias disponíveis:**
```
GET /categorias
```

---

## Formato de resposta

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

Códigos de `response_code`:

| Código | Significado                  |
|--------|------------------------------|
| 0      | Sucesso                      |
| 1      | Categoria não encontrada     |
| 2      | Parâmetro inválido           |

---

## Como rodar localmente

Pré-requisito: Node.js instalado.

```bash
git clone https://github.com/seu-usuario/quizcaju-api.git
cd quizcaju-api
npm install
node server.js
```

Acesse:
- `http://localhost:3000/perguntas?amount=5` — perguntas
- `http://localhost:3000/categorias` — categorias
- `http://localhost:3000/docs` — documentação Swagger

---

## Como adicionar perguntas

Abra o arquivo `perguntas.json`.
Cada categoria tem um array `perguntas`. Adicione um objeto no formato:

```json
{
  "question": "Sua pergunta aqui?",
  "correct_answer": "Resposta correta",
  "incorrect_answers": ["Errada 1", "Errada 2", "Errada 3"],
  "category": "Nome da Categoria"
}
```

Para adicionar uma nova categoria, inclua um novo objeto no array raiz:

```json
{
  "id": 4,
  "nome": "Nome da Categoria",
  "perguntas": []
}
```

---

## Como fazer deploy no Vercel

```bash
# 1. Suba para o GitHub
git add .
git commit -m "QuizCaju API v1"
git push

# 2. Acesse vercel.com
# 3. Add New Project → selecione o repositório
# 4. Clique em Deploy — sem configurar mais nada
```

Após o deploy, atualize a URL em `swagger.js`:

```js
{
  url: "https://sua-url-gerada.vercel.app",
  description: "Produção"
}
```

---

## Como conectar no QuizCaju

No `questions.js` do QuizCaju, troque o array `FONTES`:

```js
const FONTES = [
  {
    url: "https://sua-url-gerada.vercel.app/perguntas?amount=5&category=1&encode=base64",
    categoria: "Tecnologia"
  },
  {
    url: "https://sua-url-gerada.vercel.app/perguntas?amount=5&category=2&encode=base64",
    categoria: "Geografia do Brasil"
  },
  {
    url: "https://sua-url-gerada.vercel.app/perguntas?amount=5&category=3&encode=base64",
    categoria: "Cultura Pop"
  }
]
```

---

*CajuHub · Jovem Tech · Aracaju, SE*
