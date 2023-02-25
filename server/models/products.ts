import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  id: { type: Number },
  artist: { type: String },
  label: { type: String },
  storageImgUrl: { type: String },
  price: { type: Number },
  genre: { type: Array },
  year: { type: String },
});

export default mongoose.model('Products', productSchema);
