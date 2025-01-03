const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
const userRoutes =require('./Routes/user.routes')
const cookieParser = require('cookie-parser');
const captainRoutes = require('./Routes/captain.route');

connectToDb();


app.use(cors ());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
      
  app.use('/captains', captainRoutes);

app.use('/users' , userRoutes)
module.exports = app;