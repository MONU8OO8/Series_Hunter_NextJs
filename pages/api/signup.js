import users from "../../models/users"
import connectDb from "../../middlehunt/mongoose"

const handler = async (req, res)=>{
    if(req.method == 'POST'){
        console.log(req.body)
        let u = new users(req.body);
        await u.save();

        res.status(200).json({success: "success"})
    }
    else{
        res.status(400).json({error: "this method is not allowd"})
    } 
}
export default connectDb(handler);