const Post = require('../models/Post')

module.exports = {
    getPosts: async(req, res) => {
        // res.render('feed.ejs')
        try {
            const postItems = await Post.find().sort({ postDate: "desc" }).lean();
            res.render('feed.ejs', { posts: postItems, user: req.user })
        } catch (err) {
            console.log(err)
        }
    },
    
}