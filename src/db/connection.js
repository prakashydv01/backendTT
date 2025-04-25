import mongoose from 'mongoose';
import {DB_NAME} from '../constant.js'


// Connect to MongoDB
const connectDB = async () => {
  try {
    const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}` );
      
    console.log('\nMongoDB connected', `${connectionInstance.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

export default connectDB;