const { ApolloError } = require("apollo-server");

module.exports = async (_, {id, input}, {models}) => {

  try{
    const colisToUpdate = await models.Colis.findOne({_id: id});

    if(!colisToUpdate) throw new ApolloError(`Could not find colis with id: '${id}'.`,400);

    Object.keys(input).forEach(value => {
      colisToUpdate[value] = input[value];
    });

    const updatedColis = await colisToUpdate.save();

    return updatedColis
  }
  catch(e){
    throw new ApolloError(e)
  }
};
  