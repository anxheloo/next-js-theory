import Link from "next/link";
import React from "react";
// fetch api

const fetchListOfUsers = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();

    return data.users;
  } catch (error) {
    throw new Error(error);
  }
};

const ServerSideDataFetching = async () => {
  const listOfUsers = await fetchListOfUsers();

  console.log(listOfUsers);

  return (
    <div>
      <h1>Server Side Data Fetching</h1>

      <ul>
        {listOfUsers && listOfUsers.length > 0 ? (
          listOfUsers.map((item) => (
            <li key={item.id}>
              <Link href={`server-data-fetch/${item.id}`}>
                {item.firstName}
              </Link>
            </li>
          ))
        ) : (
          <div>No users found</div>
        )}
      </ul>
    </div>
  );
};

export default ServerSideDataFetching;
