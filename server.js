require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoute = require('./route/contactRoute');
const app = express();
const router = express.Router();



//creating the middleware
app.use(express.json());
app.use(cors());

app.use("/", contactRoute);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) =>
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
  }

const port = process.env.PORT || 5001;
app.listen(port, console.log(`server listening to port ${port}`));

// Export for Vercel serverless function
module.exports = app;