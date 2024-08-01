import connectToDB from "@/database";
import Joi from "joi";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectToDB();

    const allBlogs = await Blog.find({});

    if (allBlogs) {
      console.log("everything is okej");
      return NextResponse.json({
        success: true,
        message: "Blog successfully found!",
        data: allBlogs,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong! Please try again",
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
