import autores from '../models/Autor.js';

class AutorController {
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            if (err) res.status(400).json({erro: err.message});
            else res.status(200).json(autores);
        });
    }

    static cadastrarAutor = (req, res) => {
        const autor = new autores(req.body);
        autor.save(err => {
            if (err) res.status(400).json({erro: err.message});
            else res.status(200).json(autor.toJSON());
        });
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndUpdate(id, {$set: req.body},err => {
            if (err) res.status(400).json({erro: err.message});
            else res.status(200).json({message: 'Autor atualizado com sucesso!'});
        });
    }

    static listarAutorPorId = (req, res) => {
        const id = req.params.id;
        autores.findById(id, (err, autor) => {
            if (err) res.status(404).json({erro: err.message});
            else res.status(200).json(autor);
        });
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndDelete(id, err => {
            if (err) res.status(400).json({erro: err.message});
            else res.status(200).json({message: 'Autor excluido com sucesso!'});
        });
    }
}

export default AutorController;