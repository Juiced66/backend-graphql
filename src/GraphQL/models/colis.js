const mongoose = require("mongoose");
const { Schema } = mongoose;

const colisSchema = new Schema({
  numeroVoie: {
    type : String,
    trim : true //comme methode trim()
  },
  typeVoie: {
    type: String,
    trim : true
  },
  nomVoie:{ 
    type : String,
    trim : true
  },
  codePostal:{ 
    type : String,
    trim : true
  },
  ville: { 
    type: String,
    trim : true
  },
  dateRetrait: {
    type : String,
    trim : true
  }
})

const Colis = mongoose.model("Colis", colisSchema); //creation du Schema mongoose (stockage BDD)

module.exports = { Colis };
