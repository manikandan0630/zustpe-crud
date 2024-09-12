
const mongoose=require("mongoose")
require("dotenv").config()
//database url
const URL=process.env.DB_URL;

//database connection

const Connection=async()=>{
    try {
       await mongoose.connect(URL).then(()=>{
        console.log("DB Connected")
       })
        
    } catch (error) {
        console.log(error.message)
    }
}
module.exports=Connection;