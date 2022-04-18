import mongoose from "mongoose";

const schema = new mongoose.Schema({
    id: {type: String},
    titulo: {type: String, required: true},
    autor: {type: String, required: true},
    editora: {type: String, required: true},
    numeroPaginas: {type: Number}
});

const livros = mongoose.model('livros', schema);
export default livros;