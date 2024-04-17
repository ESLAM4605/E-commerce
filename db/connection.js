import mongoose from "mongoose";

const connectToDb = () => {
  mongoose
    .connect(process.env.DB_STRING)
    .then(() => console.log("Connecting to DB"))
    .catch(() => console.log("Error connecting to DB!"));
};

export default connectToDb;
