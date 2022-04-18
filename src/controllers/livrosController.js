import livros from '../models/Livro.js';

class LivroController {
    static listarLivros = (req, res) => {
        livros.find()
            .populate('autor')
            .exec((err, livros) => {
                if (err) res.status(400).json({erro: err.message});
                else res.status(200).json(livros);
            });
    }

    static cadastrarLivro = (req, res) => {
        const livro = new livros(req.body);
        livro.save(err => {
            if (err) res.status(400).json({erro: err.message});
            else res.status(200).json(livro.toJSON());
        });
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndUpdate(id, {$set: req.body},err => {
            if (err) res.status(400).json({erro: err.message});
            else res.status(200).json({message: 'Livro atualizado com sucesso!'});
        });
    }

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;
        livros.findById(id)
            .populate('autor', 'nome')
            .exec((err, livro) => {
                if (err) res.status(404).json({erro: err.message});
                else res.status(200).json(livro);
            });
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndDelete(id, err => {
            if (err) res.status(400).json({erro: err.message});
            else res.status(200).json({message: 'Livro excluido com sucesso!'});
        });
    }
}

export default LivroController;