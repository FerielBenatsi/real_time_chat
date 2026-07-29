import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    clerkId :{
        type: String,
        required : true,
        unique : true,

    },
    email :{
        type : String, 
        required :  true,
        unique : true,
    },
     fullname :{
        type : String, 
        required :  true,
    },
     profilepic :{
        type : String, 
        default:"",
    },
    
}, {timestamp: true}, //createdAt & updatedAt
);

const User = mongoose.model("User", userSchema);
export default User;