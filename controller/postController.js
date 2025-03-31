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
    res.send("store function");
}

//update
function update(req, res){
    res.send("update function");

}

//patch
function patch(req, res){
    res.send("patch function")
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