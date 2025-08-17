const express = require("express");
const path = require("path");
import honeycombRouter from './server/honeycomb-verxio.js';
 const app = express();

  app.use(express.static(path.join(__dirname,"./")));
  app.use('/api', honeycombRouter);
 app.listen(3000,()=>{
      console.log("game connected");
 });