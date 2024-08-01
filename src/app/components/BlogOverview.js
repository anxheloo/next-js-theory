"use client";

import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const BlogOverview = () => {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [currentUpdatedBlogId, setCurrentUpdatedBlogId] = useState(null);

  const getAllBlogs = async () => {
    const results = await fetch("/api/get-blog", {
      method: "GET",
      cache: "no-store",
    })
      .then((response) => response.json())
      .then((data) => setData(data?.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  const handleDialog = () => {
    setOpenBlogDialog(true);
    setFormData({
      title: "",
      description: "",
    });
  };

  const handleInputChange = (event) => {
    setFormData((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      console.log("Inside handleSubmit function: ", handleSubmit);

      const apiResponse = await fetch("/api/add-blog", {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(formData),
      });

      const result = await apiResponse.json();
      console.log("This is result:", result);

      if (result?.success === true) {
        setData((prevValues) => [
          ...prevValues,
          { _id: result.data._id, ...formData },
        ]);
        setOpenBlogDialog(false);
        setFormData({
          title: "",
          description: "",
        });
        setLoading(false);
        // window.location.reload();
        // router.refresh();
      }
    } catch (error) {
      setLoading(false);
      console.error("Error in catch at handleSubmit:", error);
    }
  };

  const handleEdit = async (item) => {
    setOpenBlogDialog(true);
    setCurrentUpdatedBlogId(item._id);
    setFormData({
      title: item?.title,
      description: item?.description,
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `/api/update-blog?id=${currentUpdatedBlogId}`,
        {
          method: "PUT",
          headers: new Headers({ "content-type": "application/json" }),
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result?.success === true) {
        getAllBlogs();
        setOpenBlogDialog(false);
        setFormData({
          title: "",
          description: "",
        });
        setLoading(false);
      }
    } catch (error) {
      console.error("Error in catch at handleEdit:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!id) {
      window.alert("Please select a valid id");
    }

    try {
      const result = await fetch(`/api/delete-blog?id=${id}`, {
        method: "DELETE",
      });

      const response = await result.json();

      if (response?.success === true) {
        setData((prevValues) => prevValues.filter((item) => item._id !== id));
        // window.alert(`Blog with id: ${id} is successfully removed`);
        // window.location.reload();
      }
    } catch (error) {
      console.log("This is error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-500 to-blue-600 p-6">
      <div>
        <button
          onClick={handleDialog}
          className="bg-black text-white p-3 rounded min-w-[150px]"
        >
          Add new Blog
        </button>
      </div>
      <div>Blog List Section</div>

      <div className="flex flex-wrap gap-3 p-2">
        {data && data?.length > 0 ? (
          data.map((item) => (
            <div key={item._id}>
              <h2>{item.title}</h2>
              <h2>{item.description}</h2>
              <button type="button" onClick={() => handleEdit(item)}>
                Edit
              </button>
              <button type="button" onClick={() => handleDelete(item._id)}>
                Delete
              </button>
            </div>
          ))
        ) : (
          <h2>No Blogs Found</h2>
        )}
      </div>

      <dialog open={openBlogDialog} className="bg-black p-4">
        <div
          className=" size-2 rounded-full bg-red-600"
          onClick={() => {
            setOpenBlogDialog(false);
            setCurrentUpdatedBlogId(null);
          }}
        ></div>
        <form onSubmit={currentUpdatedBlogId ? handleUpdate : handleSubmit}>
          <div>
            <label className="text-white">Name:</label>
            <input
              placeholder="Enter a title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleInputChange}
            ></input>

            <label className="text-white">Description:</label>
            <textarea
              placeholder="Enter a description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="p-3 bg-black text-white rounded border"
          >
            {loading ? (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            ) : (
              "Save Changes"
            )}
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default BlogOverview;
