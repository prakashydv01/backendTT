import mongoose, {Schema} from "mongoose";


const BlogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        }
 
    },
    {
        timestamps: true,
    }
);

export const Blog = (category) => {
    const collectionName = `${category.toLowerCase()}`;
  
    return mongoose.model('Blog', BlogSchema, collectionName);
};