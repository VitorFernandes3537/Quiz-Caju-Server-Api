# Rodando localmente

Antes de colocar a API no ar, vamos garantir que ela funciona na sua máquina.

## Pré-requisitos

Você precisa ter o Node.js instalado. Para verificar, abra o terminal e rode:

```bash
node -v
npm -v
```

Se aparecer um número de versão em cada linha, está pronto.
Se não, acesse [nodejs.org](https://nodejs.org) e instale a versão LTS.

---

## Passo 1 — Clonar o repositório

```bash
git clone https://github.com/seu-usuario/quizcaju-api.git
cd quizcaju-api
```

---

## Passo 2 — Instalar as dependências

```bash
npm install
```

Isso vai criar a pasta `node_modules/` com tudo que o projeto precisa para rodar.
Essa pasta nunca vai para o GitHub — ela está no `.gitignore`.

---

## Passo 3 — Iniciar o servidor

```bash
node server.js
```

Se tudo estiver certo, você vai ver no terminal:

```
QuizCaju API rodando em http://localhost:3000
Documentação em http://localhost:3000/docs
```

---

## Passo 4 — Testar as rotas

Abra o navegador e acesse cada uma:

**Listar categorias:**
```
http://localhost:3000/categorias
```

**Buscar 5 perguntas de Tecnologia em Base64:**
```
http://localhost:3000/perguntas?amount=5&category=1&encode=base64
```

**Buscar 10 perguntas aleatórias:**
```
http://localhost:3000/perguntas?amount=10
```

**Documentação interativa:**
```
http://localhost:3000/docs
```

---

## Entendendo a estrutura do projeto

```
quizcaju-api/
├── server.js        ← servidor Express com as rotas
├── swagger.js       ← configuração da documentação automática
├── perguntas.json   ← banco de perguntas em português
├── package.json     ← dependências e scripts do projeto
├── vercel.json      ← configuração do deploy
└── .gitignore       ← arquivos que não vão para o GitHub
```

::: tip node_modules no .gitignore
A pasta `node_modules/` pode ter centenas de megabytes.
Ela nunca vai para o GitHub porque o `package.json` já lista tudo que precisa ser instalado.
Quem clonar o projeto roda `npm install` e o Node baixa tudo automaticamente.
:::

---

## Parando o servidor

Para parar o servidor, pressione `Ctrl + C` no terminal.
