// require("dotenv").config(); //package imports
const express = require("express");

//custom imports
const { PORT } = require("./config/envConfig");
const bookRouter = require("./routes/bookRouter");

//used packages
const app = express();

//application layer middleware
app.use(express.json());

app.use("/books", bookRouter);

app.listen(PORT, () => {
  console.log(`App has started on PORT ${PORT}`);
});
