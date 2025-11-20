const express = require("express");
const app = express();
const path = require("path");
const aboutRouter = require("./routers/aboutRouter")
const contactRouter = require("./routers/contactRouter")
const indexRouter = require("./routers/indexRouter")

app.use("/", indexRouter);

app.use("/contact", contactRouter);

app.use("/about", aboutRouter );


app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public/404.html"));
});

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
