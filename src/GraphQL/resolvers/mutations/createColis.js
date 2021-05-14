const { ApolloError } = require("apollo-server");

module.exports = async (_, {input}, {models}) => {

  try{
    newColis = await models.Colis.create(input);
    return newColis
  }
  catch(e){
    throw new ApolloError(e)
  }
  
};
