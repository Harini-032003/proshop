import mongoose from "mongoose";
// modelling the database fields 
const reviewSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
     type: String,
     required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true, 
  },
}, {
  timestamps: true,
});
const productSchema = new mongoose.Schema({
  user: { // to ensure if the user is admin or not
     type: mongoose.Schema.Types.ObjectId, //anytime we create anything in db, it has an _id field and that is ObjectId and it has it's own types
     required: true,
     ref: "User", // to specify from which collection it comes from
  },
  name: { 
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
}, {
  timestamps: true,
});

const Product= mongoose.model("Product",productSchema);

export default Product;