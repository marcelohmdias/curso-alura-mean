var mongoose = require('mongoose'),
    filmeSchema, filme;

mongoose.connect('mongodb://localhost/mean');

filmeSchema = new mongoose.Schema({
  titulo: { type: String, require: true },
  diretor: { type: String, require: true },
  ano: { type: String}
});

filme = mongoose.model('filme', filmeSchema);
module.exports = filme;
