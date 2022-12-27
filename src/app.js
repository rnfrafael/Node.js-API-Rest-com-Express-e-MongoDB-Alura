import express, { json } from 'express'
import db from "./config/dbConnect.js"
import livros from './models/Livro.js'
import routes from './routes/index.js'

db.on("error", console.log.bind(console, 'Erro de Conexão'))
db.once("open", () => {
    console.log("Conexão com MongoDB realizada.")
})

const app = express();

app.use(json())

routes(app)

/* Código antigo para salvar no Array/Memória e agora foi atualizado por livros vindo do MongoDB
const livros = [
    {id: 1, titulo: "O Guia Do Mochileiro Das Galáxias"},
    {id: 2, titulo: "Harry Potter e a Pedra Filosofal"}
]*/



app.get('/', (req, res) => {
    res.status(200).send("Curso Alura de Node com Express")
})

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(livros, req.params.id);
    res.send(livros[index])
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(livros, req.params.id);
    livros.splice(index, 1);
    res.send(`Livro removido com sucesso`);
})





//Função que recebe um array e id para buscar e retornar o indice do item no array
function buscaLivro(arr, id){
    return arr.findIndex(item => item.id == id)
}

export default app