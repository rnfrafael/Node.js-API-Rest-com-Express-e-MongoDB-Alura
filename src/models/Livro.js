import mongoose from "mongoose";

//Schema/Esquema do formato de dados que é utilizado no BD
const livroSchema = new mongoose.Schema(
    {
        id:{type: String},
        titulo:{type: String, required:true},
        autor:{type: String, required:true},
        editora:{type: String, required:true},
        numeroPaginas:{type: Number}
    }
);

//Caso o banco de dados não exista ainda essa linha criará um banco de dados com esse nome
const livros = mongoose.model("livros", livroSchema);

export default livros;