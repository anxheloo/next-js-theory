import connectToDB from "@/database";
import Joi from "joi";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

const AddNewBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export const POST = async (req) => {
  try {
    await connectToDB();

    const extractBlogData = await req.json();
    console.log("This is extractBlogData:", extractBlogData);
    const { title, description } = extractBlogData;

    const { error } = AddNewBlog.validate({
      title,
      description,
    });

    if (error) {
      console.log("There is an error:", error);
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    const newlyCreatedBlogItem = await Blog.create(extractBlogData);

    if (newlyCreatedBlogItem) {
      console.log("everything is okej");
      return NextResponse.json({
        success: true,
        message: "Blog added successfully",
        data: newlyCreatedBlogItem,
      });
    }
  } catch (error) {
    console.log("Error in catch:", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};
