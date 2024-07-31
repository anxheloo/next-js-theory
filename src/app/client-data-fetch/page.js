"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ClientSideDataFetching = () => {
  // useEffect hook
  // swr, useSwr hook
  // with loading state

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchListOfUsers = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();

        setUsers(data.users);
        setLoading(true);
      } catch (error) {
        setLoading(false);
        setUsers([]);
        throw new Error(error);
      }
    };

    fetchListOfUsers();
  }, []);

  if (!loading) return <h1>LOADING...</h1>;

  return (
    <div>
      <h1>Client Side Data Fetching</h1>
      {users && users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id} className="text-black text-xl">
              <Link href={`client-data-fetch/${user.id}`}>
                {user.firstName}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>There are no users </div>
      )}
    </div>
  );
};

export default ClientSideDataFetching;
