const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ticket = new Schema(
  {
    nomcommerce: {type: String, required:true},
    date: {type:Date, required:true},
    produits: {type:[String], required: true},
    total: {type:Number, required:true}
  },
  {timestamps: true},

)

module.exports = mongoose.model('tickets',Ticket)
