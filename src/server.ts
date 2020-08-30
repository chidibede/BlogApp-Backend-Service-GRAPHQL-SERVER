require('dotenv').config()
import express, { Application } from "express";
import {ApolloServer} from 'apollo-server-express';
import mongoose from 'mongoose'
import cors from 'cors';

const app: Application = express();
const db_uri: any = process.env.DB_URI;

mongoose.connect(
    db_uri, 
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    (error) => {
      if (error) {
        console.log("Error connecting to mongo atlas", error);
      } else {
        console.log("Connected to mongo atlas successfully...");
      }
    }
  );
  
app.use(cors());

const apolloServer: ApolloServer = new ApolloServer({
  modules: [
    require("./graphql/modules/posts/index"),
    require('./graphql/modules/users/index'),
  ],
})

apolloServer.applyMiddleware({app, path:'/graphql'})

const port = process.env.PORT || 5005
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/graphql`);
})