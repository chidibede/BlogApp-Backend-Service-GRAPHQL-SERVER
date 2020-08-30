require('dotenv').config()
import express, { Application } from "express";
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

const port = process.env.PORT || 5005
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})