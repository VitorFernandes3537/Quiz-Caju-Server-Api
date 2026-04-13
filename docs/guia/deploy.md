# Deploy no Vercel

O Vercel conecta direto com o GitHub. Cada vez que você fizer `git push`,
o Vercel detecta a mudança e refaz o deploy automaticamente — sem nenhum comando extra.

---

## Passo 1 — Subir o código para o GitHub

Se ainda não tem o repositório no GitHub, crie agora:

1. Acesse [github.com](https://github.com) e crie um novo repositório chamado `quizcaju-api`
2. No terminal, dentro da pasta do projeto, rode:

```bash
git init
git add .
git commit -m "QuizCaju API v1"
git remote add origin https://github.com/seu-usuario/quizcaju-api.git
git push -u origin main
```

::: warning Verifique o .gitignore
Antes do push, confirme que o arquivo `.gitignore` existe e contém `node_modules/`.
Subir a pasta `node_modules` para o GitHub é um erro comum — ela tem centenas de MB
e não deve ser versionada.
:::

---

## Passo 2 — Criar conta no Vercel

Acesse [vercel.com](https://vercel.com) e clique em **Sign Up**.

Escolha **Continue with GitHub** — isso conecta automaticamente os seus repositórios.

---

## Passo 3 — Criar o projeto no Vercel

1. No painel do Vercel, clique em **Add New Project**
2. Encontre o repositório `quizcaju-api` na lista e clique em **Import**
3. Na tela de configuração, **não mude nada** — o `vercel.json` já contém tudo que o Vercel precisa saber
4. Clique em **Deploy**

O Vercel vai instalar as dependências e colocar a API no ar.
Quando terminar, você verá uma URL no formato:

```
https://quizcaju-api.vercel.app
```

---

## Passo 4 — Testar a URL pública

Substitua pela sua URL real e teste no navegador:

```
https://quizcaju-api.vercel.app/categorias
https://quizcaju-api.vercel.app/perguntas?amount=5&encode=base64
https://quizcaju-api.vercel.app/docs
```

---

## Passo 5 — Atualizar a URL no swagger.js

Abra o arquivo `swagger.js` e substitua a URL de produção pela sua URL real:

```js
servers: [
  {
    url: "http://localhost:3000",
    description: "Servidor local"
  },
  {
    url: "https://quizcaju-api.vercel.app", // ← sua URL aqui
    description: "Produção"
  }
]
```

Faça commit e push — o Vercel atualiza automaticamente:

```bash
git add swagger.js
git commit -m "atualiza URL de produção no swagger"
git push
```

---

## Deploy automático

A partir de agora, qualquer `git push` para a branch `main` vai:

1. Vercel detecta a mudança no GitHub
2. Instala as dependências
3. Coloca a nova versão no ar

Você não precisa fazer nada além do `git push`.

::: tip Visualizando os deploys
No painel do Vercel, na aba **Deployments**, você consegue ver o histórico completo
de todos os deploys, o log de cada um e reverter para uma versão anterior se precisar.
:::
