import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required']
    },
    description: {
      type: String,
      required: [true, 'Description is required']
    },
    ingredients: {
      type: [String],
      default: []
    },
    instructions: {
      type: String,
      required: [true, 'Instructions are required']
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { versionKey: false }
);

export default mongoose.model('Recipe', recipeSchema);
