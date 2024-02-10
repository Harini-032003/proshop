import express from 'express';
import dotenv from 'dotenv';
dotenv.config(); // to use environment variables from .env file
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
const port=process.env.PORT || 5000; // if env variable PORT is not found, then use port 5000.
// to access env variables, use the prefix process.env.(env_variable_name)
connectDB();
const app=express();
app.get('/',(req, res) => {   // setting first route
  res.send('API is running...');
});   
 app.use('/api/products',productRoutes); //whenever we hit this api/products endpoint it will check the file productRoutes where we have separately mentioned and check the corresponding end point specified there and send response
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server running on port ${port}`));