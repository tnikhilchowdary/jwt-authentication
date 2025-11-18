
import User from "../schema/userSchema.js";

export const getUsers = async (req, res) => {
    try{
        const users = await User.find({});
        res.json(users);
    }
    catch(error){
        console.log("Failed Fetching Users", error);
    }
}