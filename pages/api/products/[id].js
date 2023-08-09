import Product from "@/models/Product";
import dbConnect from "@/util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  const {method,query: {id}} = req;
  if(method === "DELETE") {
    try {
     const product = await Product.findByIdAndDelete(id);   
     res.status(200).json(product)
    } catch (err) {
        console.log(err);
    }
  }
};

export default handler;