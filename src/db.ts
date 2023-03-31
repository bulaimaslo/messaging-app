import mongoose from "mongoose";

const dbport = process.env.DBPORT || 27017;
const appname = process.env.APPNAME || "messaging-app";
const uri = `mongodb://localhost:${dbport}/${appname}`;

const options: mongoose.ConnectOptions = {
  autoIndex: false, // Don't build indexes
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  family: 4, // Use IPv4, skip trying IPv6
  dbName: "data",
  
};

mongoose
  .connect(uri, options)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB", error));

export default mongoose;
