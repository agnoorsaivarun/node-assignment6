const router = require('express').Router();
const Blog = require('../models/Blog')

const bodyparser = require("body-parser");
router.use(bodyparser.json());


// Your routing code goes here



router.get('/blog', async (req, res) => {
    try {
        console.log(req.query);
        const { page=1, search=new RegExp("[a-z]","i") } = req.query;
        // const users = await Blog.find({ topic: search }).limit(parseInt(page));
        // const users = await Blog.find({topic:new RegExp(search)}).skip((page-1)*5).limit(5)
const users=await Blog.find()
        res.json({
            ok: 'blog',
            status: "Success",
            users   
        })   .find({name:"abc"})
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: error.message
        })
    }
})
router.post('/blog', async (req, res) => {
    try {
        const user = await Blog.create(req.body)
        res.json({
            status: "Success",
            user
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        })
    }
})
router.put('/blog/:id', async (req, res) => {
    console.log(req.params)
    try {
        const user=await Blog.updateMany({"_id":req.params.id},req.body);
        console.log(user)
        res.json({
            status: "Success",
            user
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        })
    }
})

router.delete('/blog/:id', async (req, res) => {
    console.log(req.params)
    try {
        const user=await Blog.deleteOne({"_id":req.params.id});
        console.log(user)
        res.json({
            status: "Success",
            user
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        })
    }
})

module.exports = router;