const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/chat')
  .then(() => console.log('Connected!')).catch((error)=>{console.log(error)});

  module.exports =mongoose;