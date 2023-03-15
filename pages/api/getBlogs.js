import connectToMongo from '../../utils/db'
import Posts from '../../models/Posts'

connectToMongo()

export default async function handler(req,res)
{
  try{
    const blogs = await Posts.find()
    res.status(200).json(blogs)
  }
  catch(err){
    res.status(500).json({error:"Internal Server Error"})
  }
}