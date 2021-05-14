//Fichier de liaison du serveur Apollo et de la base de donnée .

const { ApolloServer } = require("apollo-server");
const connectDb = require("./config/db");
const typeDefs = require("./types");
const resolvers = require("./resolvers");
const models = require("./models");

connectDb(); //On crée la connection

const server = new ApolloServer({ // On récupère tout le reste ici
  typeDefs, // ...types
  resolvers,// ...resolvers
  context: {models /* ...models*/} 
});


server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

