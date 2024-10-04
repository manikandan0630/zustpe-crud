const express=require("express")
const cors=require("cors")
const DBConnection=require("./DatabaseConnection/connection")
const route=require("./routes/crudRoutes")
const app=express();
app.use(cors())
app.use(express.json())
app.use(route)
DBConnection(); 

app.listen(4000,()=>{
    console.log("server running")
})