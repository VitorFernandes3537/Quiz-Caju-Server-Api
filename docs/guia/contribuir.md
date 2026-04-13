# Adicionando perguntas

O banco de perguntas fica no arquivo `perguntas.json`.
Qualquer pessoa pode contribuir — seja adicionando perguntas a uma categoria existente
ou criando uma categoria nova.

---

## Entendendo a estrutura do arquivo

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

::: warning Regras do formato
- `incorrect_answers` deve ter **exatamente 3** itens — nem mais, nem menos
- O campo `category` dentro de cada pergunta deve ser **idêntico** ao `nome` da categoria
- Todos os textos devem estar em **português**
:::

---

## Adicionando uma pergunta a uma categoria existente

1. Abra o `perguntas.json`
2. Encontre a categoria onde quer adicionar
3. Adicione um novo objeto no array `perguntas` da categoria:

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
- A pergunta deve ter uma única resposta claramente correta
- As respostas erradas devem ser plausíveis — não óbvias demais
- Evite perguntas com "Todas as anteriores" ou "Nenhuma das anteriores"
:::

---

## Criando uma nova categoria

Para criar uma categoria nova, adicione um objeto no array raiz do `perguntas.json`:

```json
{
  "id": 4,
  "nome": "Nome da Nova Categoria",
  "perguntas": [
    {
      "question": "Primeira pergunta da categoria?",
      "correct_answer": "Resposta correta",
      "incorrect_answers": [
        "Resposta errada 1",
        "Resposta errada 2",
        "Resposta errada 3"
      ],
      "category": "Nome da Nova Categoria"
    }
  ]
}
```

::: warning IDs únicos
O `id` de cada categoria deve ser um número único.
Verifique os IDs existentes antes de criar um novo para não haver conflito.
Use `GET /categorias` para ver os IDs em uso.
:::

---

## Testando após a adição

Depois de adicionar perguntas, reinicie o servidor e teste:

```bash
# Pare o servidor com Ctrl+C e inicie novamente
node server.js
```

Verifique se o total de perguntas da categoria atualizou:

```
http://localhost:3000/categorias
```

Busque perguntas da categoria para confirmar que chegam corretamente:

```
http://localhost:3000/perguntas?amount=5&category=SEU_ID
```

---

## Contribuindo via pull request

Se quiser contribuir com perguntas para o projeto oficial:

```bash
# 1. Faça um fork do repositório no GitHub

# 2. Clone o seu fork
git clone https://github.com/seu-usuario/quizcaju-api.git

# 3. Crie uma branch para sua contribuição
git checkout -b feat/perguntas-historia-do-brasil

# 4. Edite o perguntas.json e faça commit
git add perguntas.json
git commit -m "adiciona perguntas de historia do Brasil"

# 5. Envie para o seu fork
git push origin feat/perguntas-historia-do-brasil

# 6. Abra um Pull Request no GitHub
```
