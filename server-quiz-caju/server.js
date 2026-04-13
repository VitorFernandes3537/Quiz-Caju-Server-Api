const express     = require("express")
const swaggerUi   = require("swagger-ui-express")
const swaggerSpec = require("./swagger")
const banco       = require("./perguntas.json")

const app = express()

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  next()
})

// ── UTILITÁRIOS ───────────────────────────────

function embaralhar(array) {
  var copia = array.slice()
  for (var i = copia.length - 1; i > 0; i--) {
    var j    = Math.floor(Math.random() * (i + 1))
    var temp = copia[i]
    copia[i] = copia[j]
    copia[j] = temp
  }
  return copia
}

// Buffer.from é o equivalente Node.js do btoa() do browser
// O browser não tem Buffer — o Node não tem btoa
function codificar(str) {
  return Buffer.from(str).toString("base64")
}

function encodar(texto, encode) {
  return encode === "base64" ? codificar(texto) : texto
}


// ── ROTAS ─────────────────────────────────────

/**
 * @swagger
 * /perguntas:
 *   get:
 *     summary: Retorna perguntas aleatórias
 *     description: Retorna um array de perguntas no formato compatível com o questions.js do QuizCaju.
 *     parameters:
 *       - in: query
 *         name: amount
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Quantidade de perguntas a retornar
 *       - in: query
 *         name: category
 *         schema:
 *           type: integer
 *         description: ID da categoria (use GET /categorias para ver os IDs disponíveis)
 *       - in: query
 *         name: encode
 *         schema:
 *           type: string
 *           enum: [base64]
 *         description: Se "base64", todos os textos virão codificados em Base64
 *     responses:
 *       200:
 *         description: Lista de perguntas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response_code:
 *                   type: integer
 *                   example: 0
 *                 results:
 *                   type: array
 *       400:
 *         description: Parâmetro inválido
 *       404:
 *         description: Categoria não encontrada
 */
app.get("/perguntas", function(req, res) {
  var amount   = parseInt(req.query.amount) || 10
  var category = req.query.category ? parseInt(req.query.category) : null
  var encode   = req.query.encode || null

  if (isNaN(amount) || amount <= 0) {
    return res.status(400).json({
      response_code: 2,
      message:       "Parâmetro 'amount' inválido."
    })
  }

  var categoriasFiltradas = banco

  if (category !== null) {
    categoriasFiltradas = banco.filter(function(c) { return c.id === category })

    if (categoriasFiltradas.length === 0) {
      return res.status(404).json({
        response_code: 1,
        message:       "Categoria não encontrada."
      })
    }
  }

  var todasPerguntas = []
  categoriasFiltradas.forEach(function(categoria) {
    categoria.perguntas.forEach(function(p) {
      todasPerguntas.push(p)
    })
  })

  var selecionadas = embaralhar(todasPerguntas).slice(0, amount)

  var results = selecionadas.map(function(p) {
    return {
      question:          encodar(p.question, encode),
      correct_answer:    encodar(p.correct_answer, encode),
      incorrect_answers: p.incorrect_answers.map(function(r) {
        return encodar(r, encode)
      }),
      category: encodar(p.category, encode)
    }
  })

  res.json({
    response_code: 0,
    results:       results
  })
})


/**
 * @swagger
 * /categorias:
 *   get:
 *     summary: Retorna todas as categorias disponíveis
 *     description: Lista os IDs e nomes das categorias. Use o ID no parâmetro category de GET /perguntas.
 *     responses:
 *       200:
 *         description: Lista de categorias
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 categorias:
 *                   type: array
 */
app.get("/categorias", function(req, res) {
  var categorias = banco.map(function(c) {
    return {
      id:               c.id,
      nome:             c.nome,
      total_perguntas:  c.perguntas.length
    }
  })

  res.json({ categorias: categorias })
})


// ── SWAGGER UI ────────────────────────────────
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))


// ── INICIALIZAÇÃO ─────────────────────────────
const PORTA = process.env.PORT || 3000

app.listen(PORTA, function() {
  console.log("QuizCaju API rodando em http://localhost:" + PORTA)
  console.log("Documentação em http://localhost:" + PORTA + "/docs")
})

module.exports = app