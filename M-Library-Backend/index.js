
const cors = require('cors');
require('dotenv').config();
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

const {connection} = require("./connection")
const {userRouter}= require("./Routes/user.routes");
const { bookRouter } = require('./Routes/book.routes');

dotenv.config();
const app = express();
app.use(express.json())
app.use(cors())
app.use("/users",userRouter)
app.use("/books",bookRouter)
app.use(express.static('public'));

  const PORT = process.env.PORT || 3000;

    async function startServer() {
        try {
          await connection;
          console.log("Database connection Established");
        } catch {
          console.log("Database connection Failed");
        }
      
        app.listen(PORT,() => {
          console.log(`Server is running at http://localhost:${PORT}`);
          console.log("Server Started");
        });
      }
      
      startServer();