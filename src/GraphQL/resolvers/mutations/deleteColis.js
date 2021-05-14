const { ApolloError } = require("apollo-server");

module.exports = async (_, {id}, {models}) => {
  
  const deleteColis = await models.Colis.deleteOne({_id: id})

  if(deleteColis.deletedCount) return{id: id}

  else throw new ApolloError(`Failed to delete address.`);

};