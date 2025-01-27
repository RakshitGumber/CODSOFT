import { server } from "./server";
import { config } from "dotenv";
import { connectDB } from "./db";

config();

Promise.all([connectDB()])
  .then(() => {
    console.log("Server connected to Database successfully");
  })
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log(`Server started on http://localhost:${process.env.PORT}`);
    });
  });
