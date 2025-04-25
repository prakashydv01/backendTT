import { apierror } from "../utils/apiError.js";
import {apiresponse} from "../utils/apiResponse.js";
import  {asynchandler} from "../utils/asyncHandler.js";

import { Blog} from "../models/Blog.model.js";


const createBlog = asynchandler(async (req, res) => {
    const { title, content, image, category } = req.body;

    if (!category){
        return apierror(res, 400, false, "Category is required");
    }
    const mblog = Blog(category);
    const blog = await mblog.create({
        title,
        content,
        image,
})
    if (!blog) {
        return apierror(res, 400, false, "Blog not created");
    }
res.status(201).json(
            new apiresponse(
                201,
                blog,
                "Blog created successfully"
            )
        )
    });


  


const getBlog = asynchandler(async (req, res) => {
    const {category} = req.body;
    console.log(category);
    if (!category){
        throw new apierror(res, 400, false, "Category is required");
    }
    const mblog = Blog(category.toLowerCase());
    console.log(mblog.collection.name);
   const blog = await mblog.find();
    if (!blog || blog.length === 0) {
        throw new apierror(res, 404, false, "Blog not found");
    }
    res
    .status(200)
    .json(new apiresponse(200, blog, "blogs fetched successfully"));
})



const updateBlog = asynchandler(async (req, res) => {
    const { id } = req.params;
    const { title, content, image } = req.body;
    const blog = await Blog.findByIdAndUpdate(
        id,
        {
            title,
            content,
            image,
        },
        { new: true }
    );
    if (!blog) {
        return apierror(res, 404, false, "Blog not found");
    }
    return apiresponse(res, 200, true, blog, "Blog updated successfully");
}
)
const deleteBlog = asynchandler(async (req, res) => {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
        return apierror(res, 404, false, "Blog not found");
    }
    return apiresponse(res, 200, true, blog, "Blog deleted successfully");
}
)


export { createBlog, getBlog, updateBlog, deleteBlog };