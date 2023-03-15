import connectToMongo from '../../utils/db'
import Posts from '../../models/Posts'

// connectToMongo()

export default async function handler(req,res)
{
  try
  {
    if(req.method=='POST')
    {
      let p = new Posts({
        title: req.body.title,
        category: req.body.category,
        tags: req.body.tags,
        author: req.body.author,
        preview: req.body.preview,
        slug: req.body.slug,
        content: req.body.content,
      })
      await p.save()
      res.status(200).json({success : "success"})
    }
  }catch(err){
    res.status(500).json({error:"Internal Server Error"})
  }
}