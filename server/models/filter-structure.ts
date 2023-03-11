import mongoose from 'mongoose';

const filterStructureSchema = new mongoose.Schema(
  {
    id: String,
    label: String,
    items: [
      {
        id: String,
        title: String,
      },
    ],
  },
  { collection: 'filter-structure' },
);

export default mongoose.model('FilterStructure', filterStructureSchema);
