const mongoose = require('mongoose')
const key = require('./key.json')
mongoose.connect(key,{ 
    useNewUrlParser:true,
    useUnifiedTopology: true
    }
)

mongoose.Promise = global.Promise;

module.exports = mongoose