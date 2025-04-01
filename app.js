const express = require("express");
const postRouter = require("./router/post.js");
const posts = require("./data/posts.js");
const controller = require("./controller/postController.js");
const notFound = require("./middlewares/notFound.js");
const errorsHandler = require("./middlewares/error.js");
const app = express();
const port = 5500;

//rotta public
app.use(express.static('/public'));

//rotta json
app.use(express.json());

//rotta posts
app.use(express.static ('/posts.js' + posts));

//rotta Controller
app.use(express.static('/postController.js' + controller));

//rotta postRouter
app.use('/post.js', postRouter);

//rotta notFound
app.use(notFound);

//rotta errorsHandler
app.use(errorsHandler);

//rotta server
app.listen(port, function(){
    console.log("Server attivo");
});
