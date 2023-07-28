const express = require("express");
const router = require("./routes/common_router");
const router2 = require("./routes/member/member_router");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", router);
app.use("/member", router2);

app.listen(3000, ()=>{console.log("3000 server")});