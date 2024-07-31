import React from "react";

const getSingleUser = async (id) => {
  try {
    const result = await fetch(`https://dummyjson.com/users/${id}`);
    const user = await result.json();

    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const UserDetails = async ({ params }) => {
  const singleUser = await getSingleUser(params.details);

  console.log("this is single user:", singleUser);

  return (
    <div>
      This is user details :{singleUser.firstName} {singleUser.lastName}{" "}
      {singleUser.email}
    </div>
  );
};

export default UserDetails;
