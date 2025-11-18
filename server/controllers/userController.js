
import User from "../schema/userSchema.js";

export const getUsers = async (req, res) => {
    try{
        const users = await User.find({});
        res.json(users);
    }
    catch(error){
        console.log("Failed Fetching Users", error);
        res.status(500).json({message:"Failed to Fetch Data"});
    }
}

export const addUser = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const user = new User({name, email, password});
        await user.save();
        return res.status(201).json({
            success:true,
            message:"User Added Succesfully",
            user
        })
    }
    catch(error){
        console.log("Error in Adding User Data", error);
        res.status(500).json({message:"Failed to Add User"});
    }
}

export const updateUser = async (req, res) => {
    try{
        const {id} = req.params;
        const updateData = req.body;

        const updatedUser = await User.findByIdAndUpdate(id, updateData,
            {new:true}
        )

        if(!updatedUser){
            return res.status(404).json({message:"User Not Found"});
        }


        return res.status(200).json({
            message:"User Updated Succesfully",
            updatedUser
        })
    }
    catch(error){
        console.error("Error in Updating Results", error);
        res.status(500).json({message:"Error in Updating!"});
    }
}

export const deleteUser = async(req, res) => {
    try{
        const {id} = req.params;
        const deleteUser = User.findByIdAndDelete(id,
            {new:true}
        )
        return res.status(201).json({
            message:"User Deleted Succesfully",
            user: deleteUser
        })
    }
    catch(error){
        console.error("Error", error);
        res.status(500).json({message:"User Deleted Succesfully"});
    }
}