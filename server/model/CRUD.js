const mongoose=require("mongoose")

//schema
const CrudSchema=new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:String
    }
})

const CrudModel=mongoose.model("crud",CrudSchema);

module.exports=CrudModel;