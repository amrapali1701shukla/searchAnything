const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost/rapp',{useNewUrlParser:true});

const userSchema = mongoose.Schema({
  usernamename:String,
  company:String
})

userSchema.plugin(plm);

module.exports = mongoose.model('user',userSchema);

