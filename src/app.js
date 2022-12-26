import express, { json } from 'express'

const app = express()

const livros = [
    {id: 1, titulo: "O Guia Do Mochileiro Das Galáxias"},
    {id: 2, titulo: "Harry Potter e a Pedra Filosofal"}
]

app.use(json())

app.get('/', (req, res) => {
    res.status(200).send("Curso Alura de Node com Express")
})

app.get('/livros', (req, res) =>{
    res.status(200).json(livros)
})

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(livros, req.params.id);
    res.send(livros[index])
})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.send(`Livro ${req.body.titulo} cadastrado com sucesso`)
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(livros, req.params.id);
    livros[index].titulo = req.body.titulo;
    res.send(livros)
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