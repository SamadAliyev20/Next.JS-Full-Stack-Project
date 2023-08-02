import Category from "@/models/Category";
import dbConnect from "@/util/dbConnect";


const handler = async (req, res) => {
  await dbConnect();
  const {method} = req;

  if(method === "GET") {
    try {
     const categories = await Category.find();   
     res.status(200).json(categories)
    } catch (err) {
        console.log(err);
    }
  }
  if(method === "POST") {
    try {
      const categories = await Category.find();
      if(categories.find(category => category.title === req.body.title) ){
        res.status(400).json({message:"Category already exists!"});
        return;
      }
     else{
      const newCategory = await Category.create(req.body);   
      res.status(200).json(newCategory)
     }
    } catch (err) {
        console.log(err);
    }
  }
};

export default handler;
