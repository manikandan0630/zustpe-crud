const mongoose=require("mongoose")

//schema
const CrudSchema=new mongoose.Schema({
    rollnumber:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    dob:{
        type:String,
        required:true,
    },
    file:{
        type:String,
        required:true
    }
})

const CrudModel=mongoose.model("crud",CrudSchema);

module.exports=CrudModel;