const mongoose=require("mongoose");

const user=new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type: Number
    },
    job:{
        type: String
    }
})
module.exports=mongoose.model("user",user);