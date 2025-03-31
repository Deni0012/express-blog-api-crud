const express = require("express");
const postRouter = require("./router/post.js");
const posts = require("./data/posts.js");
const app = express();
const port = 5500;

app.use(express.static('public'));

app.use("/posts", postRouter);

app.listen(port, function(){
    console.log("Server attivo");
});
