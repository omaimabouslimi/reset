const mongoose = require ('mongoose');
const dbconnect = async ()=> {
    mongoose.connect('mongodb://localhost:27017//list')
    .then(()=>{
        console.log('dbconnected with succes')
    })
    .catch ((err)=>{
        console.log(err);
    })
}
module.exports = dbConnect ;