import connectToMongo from '../../utils/db'
import Posts from '../../models/Posts'

connectToMongo()

export default async function handler(req, res) 
{
    let query
    if (req.body.category) 
    {
        query = { category: req.body.category };
    } 
    else if (req.body.tags) 
    {
        query = { tags: req.body.tags };
    } 
    else if (req.body.slug) 
    {
        query = { slug: req.body.slug };
    }

    try {
        const blogs = await Posts.find(query)
        res.status(200).json(blogs)
    }
    catch (err) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}