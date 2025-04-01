const posts = require("../data/posts.js");

//index
function index(req, res){
    let filterPosts = posts;
    
    if (req.query.tags) {
        const tagsArray = Array.isArray(req.query.tags) ? req.query.tags : [req.query.tags];
        console.log(tagsArray);
        filterPosts = posts.filter(post => {
            return tagsArray.every(queryTags => {

                const indexQueryTag = queryTags.toLowerCase().replace(/\s/g, '+');

                return post.tags.some(postTags => {
                    const indexPostTag = postTags.toLowerCase().replace(/\s/g, '+');

                    return indexPostTag.includes(indexQueryTag);
                });
            });
        });
    }
    res.json(filterPosts)
}

//show
function show(req, res){
   const id = parseInt(req.params.id);
   const posts = posts.find(posts => posts.id === id);

   if(posts){
    res.json(posts);
   } else {
    res.status(404).json({
        messaggio: "Error page not found"
    });
   }
}

//store
function store(req, res){
    const nuovoId = posts.length > 0 ? (posts[posts.length - 1].id + 1) : 1;
    const nuovoPost = {
        id: nuovoId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    posts.push(nuovoPost);

    console.log(posts);

    res.status(201);
    res.json(nuovoPost);


}

//update
function update(req, res){
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if(post){
        if(!req.body.title || req.body.content || req.body.image || req.body.tags) {
            res.status(404).json({message: "Not valid"});
        }else {
            post.title = req.body.title;
            post.content = req.body.content;
            post.image = req.body.image;
            post.tags = Array.isArray(req.body.tags) ? req.body.tags : [req.body.tags];

            res.status(200).json(post);
        }
    }else {
        res.status(404).json({
            message: "Page not found"
        })
    }

}

//patch
function patch(req, res){
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if(post) {
        if (req.body.title && req.body.title != post.title) {
            post.title = req.body.title;
        }
        if (req.body.content && req.body.content != post.content) {
            post.content = req.body.content;
        }
        if (req.body.image && req.body.image != post.image) {
            post.image = req.body.image;
        }
        if (req.body.tags && JSON.stringify(req.body.tags) !== JSON.stringify(post.tags)) {
            post.tags = Array.isArray(req.body.tags) ? req.body.tags : [req.body.tags];
        }
        res.status(200).json(post);
    }else {
        res.status(404).json({ message: "Page not found" });
    }
      
}

//destroy
function destroy(req, res){
    const id = parseInt(req.params.id);
    
    console.log(id);

    const postsIndex = posts.findIndex(posts => posts.id === id);

    if (postsIndex < 0){

        res.status(404).json({
            messaggio: "Error page not found"
        });
    }

}

module.exports = { index, show, store, update, patch, destroy }