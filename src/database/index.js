import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://anxhelocenollari:anxhelocenollari1@cluster0.4zl4de8.mongodb.net/";

  mongoose
    .connect(connectionUrl)
    .then(() => console.log("blog databse connection is successfull"))
    .catch((error) => console.log(error));
};

export default connectToDB;
