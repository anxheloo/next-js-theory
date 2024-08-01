import connectToDB from "@/database";
import Blog from "@/models/blog";
import Joi from "joi";
import { NextResponse } from "next/server";

const EditNewBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export const PUT = async (req) => {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    const currentBlogId = searchParams.get("id");
    const { title, description } = await req.json();

    const { error } = EditNewBlog.validate({
      title,
      description,
    });

    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    const updateBlog = await Blog.findByIdAndUpdate(
      { _id: currentBlogId },
      { title, description },
      { new: true }
    );

    if (updateBlog) {
      return NextResponse.json({
        success: true,
        message: "Blog updated successfully",
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
