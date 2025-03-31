const express = require("express");
const postRouter = require("./router/post.js");
const posts = require("./data/posts.js");
const controller = require("./controller/postController.js");
const app = express();
const port = 5500;

app.use(express.static('../public'));

app.use(express.static ('../posts.js' + posts));

app.use(express.static('../postController.js' + controller));

app.use('../post.js', postRouter);

app.listen(port, function(){
    console.log("Server attivo");
});
