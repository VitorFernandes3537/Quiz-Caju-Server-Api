# Adicionando perguntas

O banco de perguntas fica no arquivo `perguntas.json`.
Qualquer pessoa pode contribuir — adicionando perguntas a uma categoria existente
ou criando uma categoria nova.

---

## Estrutura do arquivo

O `perguntas.json` é um array de categorias.
Cada categoria tem um `id`, um `nome` e um array de `perguntas`:

```json
[
  {
    "id": 1,
    "nome": "Tecnologia",
    "perguntas": [
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
]
```

::: warning Regras obrigatórias
- `incorrect_answers` deve ter **exatamente 3** itens
- O campo `category` dentro da pergunta deve ser **idêntico** ao `nome` da categoria
- Todos os textos em **português**
:::

---

## Adicionando uma pergunta a uma categoria existente

1. Abra o `perguntas.json`
2. Encontre a categoria onde quer adicionar
3. Adicione um novo objeto no array `perguntas`:

```json
{
  "question": "Sua pergunta aqui?",
  "correct_answer": "Resposta correta",
  "incorrect_answers": [
    "Resposta errada 1",
    "Resposta errada 2",
    "Resposta errada 3"
  ],
  "category": "Nome da Categoria"
}
```

::: tip Boas perguntas
- Uma única resposta claramente correta
- Respostas erradas plausíveis — não óbvias demais
- Evite "Todas as anteriores" ou "Nenhuma das anteriores"
:::

---

## Criando uma categoria nova

Adicione um novo objeto no array raiz do `perguntas.json`:

```json
{
  "id": 4,
  "nome": "Nome da Nova Categoria",
  "perguntas": [
    {
      "question": "Primeira pergunta?",
      "correct_answer": "Resposta correta",
      "incorrect_answers": [
        "Errada 1",
        "Errada 2",
        "Errada 3"
      ],
      "category": "Nome da Nova Categoria"
    }
  ]
}
```

::: warning IDs únicos
O `id` de cada categoria deve ser único.
Use `GET /categorias` para ver os IDs em uso antes de criar um novo.
:::

---

## Contribuindo via pull request

```bash
# 1. Fork o repositório no GitHub

# 2. Clone o seu fork
git clone https://github.com/seu-usuario/Quiz-Caju-Server-Api.git

# 3. Crie uma branch para sua contribuição
git checkout -b feat/perguntas-historia-brasil

# 4. Edite o perguntas.json e faça commit
git add server-quiz-caju/perguntas.json
git commit -m "adiciona perguntas de historia do Brasil"

# 5. Envie para o seu fork
git push origin feat/perguntas-historia-brasil

# 6. Abra um Pull Request no GitHub
```
