import { ApolloServer } from 'apollo-server';
import express from 'express';
import { buildSchema } from 'graphql';

import { HelloResolver } from './resolvers/hello';
import './database';

const main = async () => {
  const app = express();
  
  app.use(express.json());
  
  // const apolloServer = new ApolloServer({  
  //   schema: await buildSchema({
  //     resolvers: [HelloResolver],
  //     validate: false,
  //   }),
  // })

  app.listen(3333, () => console.log('Server started on port 3333'));
}

main().catch((err) => {
  console.log(err)
})

