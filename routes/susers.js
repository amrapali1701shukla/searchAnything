const mongoose = require('mongoose');

const suserSchema = mongoose.Schema({
  susername: String,
  sname: String,
  college:String,
  spassword:String
})


module.exports = mongoose.model('suser',suserSchema);