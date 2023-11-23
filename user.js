const mongoose = require ('mongoose');
const userSchema = new mongoose.Schema({
    name : string ,
    email : string 
})
module.export = mongoose.model('User',userSchema)