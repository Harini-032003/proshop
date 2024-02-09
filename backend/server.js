import express from 'express';
import dotenv from 'dotenv';
dotenv.config(); // to use environment variables from .env file
import connectDB from './config/db.js';
import products from './data/products.js';
const port=process.env.PORT || 5000; // if env variable PORT is not found, then use port 5000.
// to access env variables, use the prefix process.env.(env_variable_name)
connectDB();
const app=express();
app.get('/',(req, res) => {   // setting first route
  res.send('API is running...');
});   

app.get('/api/products', (req, res)=>{
  res.json(products); //response is a json file
});

app.get('/api/products/:id', (req, res)=>{
  const product= products.find((p)=> p._id === req.params.id);
  res.json(product);
});
app.listen(port, () => console.log(`Server running on port ${port}`));