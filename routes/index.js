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
        console.log(filme);
      }
      console.log(filme);
      res.send('Filme ' + filme.titulo  + ' recebido no servidor.');
    });
};
