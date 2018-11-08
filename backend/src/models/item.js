var mongoose = require('mongoose');
const uri = "mongodb://aria:malkani28@ds155243.mlab.com:55243/hackerspace-demo";
let db = mongoose.createConnection(uri);

var schema = mongoose.Schema({ name: 'string' });
var Item = db.model('Item', schema);

module.exports = Item; 