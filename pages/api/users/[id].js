import User from "@/models/User";
import dbConnect from "@/util/dbConnect";
import bcrypt from "bcrypt"

const handler = async (req, res) => {
  await dbConnect();
  const {method,query: {id}} = req;

  if(method === "GET") {
    try {
     const user = await User.findById(id);   
     res.status(200).json(user)
    } catch (err) {
        console.log(err);
    }
  }
  if(method === "PUT") {
    try {  
    
        if(req.body.password){
          console.log(req.body.password);
          const dbuser = await User.findById(id);
          const isMatch = await bcrypt.compare(req.body.password, dbuser.password);
        if (isMatch) {
          throw new Error ("Password cannot be same as old password!");          
        }
          req.body.password = await bcrypt.hash(req.body.password, 10);
          req.body.confirmPassword=await bcrypt.hash(req.body.confirmPassword, 10);
        }
        const user = await User.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        res.status(200).json(user);
      
    } catch (err) {
        console.log(err);
    }
  }
};

export default handler;
