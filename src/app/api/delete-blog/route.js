import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export const DELETE = async (req) => {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const currentBlogId = searchParams.get("id");

    const blogPost = await Blog.findByIdAndDelete(currentBlogId);
    console.log("This is blog post:", blogPost);

    if (blogPost) {
      return NextResponse.json({
        success: true,
        message: "Blog successfully deleted!",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Blog Doesn't Exist or is removed!",
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
