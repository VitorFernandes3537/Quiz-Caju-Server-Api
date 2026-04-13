# Deploy no Vercel

O Vercel conecta direto com o GitHub. Cada push na `main`
refaz o deploy automaticamente — sem nenhum comando extra.

---

## Passo 1 — Subir o código para o GitHub

```bash
git init
git add .
git commit -m "chore: initial commit"
git remote add origin https://github.com/seu-usuario/Quiz-Caju-Server-Api.git
git push -u origin main
```

::: warning .gitignore
Confirme que o `.gitignore` existe e contém `node_modules/` antes do push.
:::

---

## Passo 2 — Criar conta no Vercel

Acesse [vercel.com](https://vercel.com) → **Sign Up** → **Continue with GitHub**.

---

## Passo 3 — Criar o projeto

1. No painel do Vercel, clique em **Add New Project**
2. Encontre o repositório na lista e clique em **Import**
3. Em **Root Directory**, coloque `server-quiz-caju`
4. Clique em **Deploy**

::: tip Root Directory
Esse passo é importante. Sem ele, o Vercel vai tentar fazer deploy da raiz do repo
em vez do servidor Express que está dentro de `server-quiz-caju/`.
:::

---

## Passo 4 — Testar

Substitua pela sua URL real:

```
https://seu-projeto.vercel.app/categorias
https://seu-projeto.vercel.app/perguntas?amount=5&encode=base64
```

---

## Deploy automático

A partir do primeiro deploy, qualquer `git push` para a branch `main` vai:

1. Vercel detecta a mudança no GitHub
2. Instala as dependências
3. Coloca a nova versão no ar em segundos

Você não precisa fazer nada além do `git push`.
