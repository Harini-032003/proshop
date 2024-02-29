import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config(); // to use environment variables from .env file
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js';
const port=process.env.PORT || 5000; // if env variable PORT is not found, then use port 5000.
// to access env variables, use the prefix process.env.(env_variable_name)
connectDB();
const app=express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//cookie parser middleware
app.use(cookieParser());
app.get('/',(req, res) => {   // setting first route
  res.send('API is running...');
});   
 app.use('/api/products',productRoutes); //whenever we hit this api/products endpoint it will check the file productRoutes where we have separately mentioned and check the corresponding end point specified there and send response
 app.use('/api/users', userRoutes);
 app.use('/api/orders', orderRoutes);
 app.use('/api/upload', uploadRoutes);
app.get('/api/config/paypal', (req,res) =>  res.send({ clientId: process.env.PAYPAL_CLIENT_ID})
); 

const __dirname = path.resolve();//set __dirname to current directory
app.use('/uploads', express.static(path.join(__dirname, '/uploads'))); 


app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server running on port ${port}`));