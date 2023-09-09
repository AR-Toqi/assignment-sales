const mongoose =require('mongoose');
const dataSchema= mongoose.Schema({
    product: String,
    quantity: Number,
    price: Number,
    department: String,
    date: {
    type: Date,
    default: new Date().toISOString(),
}
},{timestamps:true,versionKey:false})

const Sales=mongoose.model('Sales',dataSchema)
module.exports=Sales