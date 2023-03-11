import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    id: Number,
    artist: String,
    label: String,
    storageImgUrl: String,
    price: Number,
    genre: [String],
    year: String,
  },
  { collection: 'products' },
);

export default mongoose.model('Products', productSchema);
