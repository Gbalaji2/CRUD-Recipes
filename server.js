import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import recipeRoutes from './src/routes/recipes.js';
import errorHandler from './src/middleware/errorHandler.js';

dotenv.config();

const app = express();
const { MONGO_URI, PORT = 5000 } = process.env;

if (!MONGO_URI) {
  console.error('❌ MONGO_URI is not defined in .env file');
  process.exit(1);
}

app.use(express.json());
app.use('/api/recipes', recipeRoutes);
app.use(errorHandler);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
