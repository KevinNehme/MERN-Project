const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db.js");

require("dotenv").config(); //or
// const dotenv = require("dotenv");
// dotenv.config();

const products = require("./data/products");
// const fs = require("fs");
const { readdirSync } = require("fs");

//import routes
// const authRoutes = require("./routes/auth");

//app
const app = express();

//db

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log(`DB connected`))
  .catch((err) => console.log("DB Error => ", err));

// const connectdb = async () => {
//   try {
//     await mongoose.connect(process.env.Mongo_URI);
//     console.log("DB connected 1");
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

//routes middleware
// fs.readdirSync("./routes").map((r) =>
//   app.use("/api", require("./routes/" + r))
// );

readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));
//route
// app.get("/api", (req, res) => {
//   res.json({
//     data: "success!  you hit node api",
//   });
// });

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

// app.get("/", (req, res) => {
//   res.send("api running");
// });

//port
const port = process.env.PORT;
const env = process.env.NODE_ENV;
// app.listen(port, console.log("server is running on port ${port}"));
app.listen(port),
  console.log(`server is running in ${env}mode on port ${port}`);
// app.listen(port, () => console.log("server is running on port ${port}"));
// app.listen(8000, console.log("server is running on port 8000"));

/*
// mongoose
//   .connect(process.env.MONGO_URI, {})
//   .then(() => console.log("DB connected"))
//   .catch((err) => console.log("DB Error => ", err));

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.Mongo_URI);
    console.log("DB connected 1");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
  
};

*/
