"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const { details } = useParams();

  useEffect(() => {
    const getSingleUser = async (id) => {
      try {
        const result = await fetch(`https://dummyjson.com/users/${id}`);
        const user = await result.json();
        setUser(user);
        setLoading(true);
      } catch (error) {
        setLoading(false);
        setUser([]);
        throw new Error(error);
      }
    };

    getSingleUser(details);
  }, []);

  if (!loading) return <h1>LOADING...</h1>;

  return (
    <div>
      This is user details :{user?.firstName} {user?.lastName} {user?.email}
    </div>
  );
};

export default UserDetails;
