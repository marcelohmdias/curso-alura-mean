var Filme = require('../models/filme.js');

exports.index = function (req, res) {
  res.render('index');
};

exports.lista = function (req, res) {
  Filme.find({}, function (error, filmes) {
    if (error) {
      console.log(error);
    }
    res.json({ filmes: filmes });
  });
};

exports.grava = function (req, res) {
    var filme = new Filme(req.body);

    filme.save(function (error, filme) {
      if (error) {
        console.log(error);
      }
      res.send(filme);
    });
};

exports.deleta = function (req, res) {
  var id = req.params.id;
  Filme.findByIdAndRemove(id, function (error, filme) {
    res.send('Filme' + filme.titulo + ' removido com sucesso.');
  });
};
