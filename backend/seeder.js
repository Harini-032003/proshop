// to use sample data in db
// import mongoose from 'mongoose';
import dotenv from 'dotenv'; //to use MONGO_URI
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config(); //to use variables to connect to db

connectDB();

const importData = async () => {
  try { // before importing we should  delete all data i.e order,producr,user data
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users); //user inserted

    const adminUser = createdUsers[0]._id; //getting admin user

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }; //using spread operator to add all data
    });

    await Product.insertMany(sampleProducts); //inserting the values sampleProducts to the Product model i.e inserting data into db

    console.log('Data Imported!'.green.inverse); //use od color package for text
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};
//destroying data
const destroyData = async () => {
  try { //before we do anything delete everything in db
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
   // thus data is destroyed
    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
