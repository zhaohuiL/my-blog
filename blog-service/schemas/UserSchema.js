var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//创建Schema
var userSchema = new Schema({
    name:String,
    password:String,
    confirm:String,
    prefix:String,
    name: String,
    avatar: String,
    notifyCount: Number
});
module.exports = userSchema;