import livros from "../models/Livro.js";

class LivroController{

    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros);
        })
    }

    static cadastrarLivro = (req, res) => {
        let livroCad = new livros(req.body);
        livroCad.save((error) => {
            if(error){
                res.status(500).send({message: `${error.message} - Falha ao cadastrar livro.`});
            } else {
                res.status(201).send(livroCad.toJSON());
            }
        })
    }

    static alterarLivro = (req, res) => {
        const idAlter = req.params.id;
        livros.findByIdAndUpdate(idAlter, {$set: req.body}, (e) => {
            if(!e){
                res.status(200).send({message: "Livro atualizado com sucesso."});
            } else {
                res.status(500).send({messagem: `${e.message} - Erro ao atualizar item`})
            }
        })
    }
}


export default LivroController;