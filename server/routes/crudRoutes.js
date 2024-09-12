const Create=require("../controllers/crudContoller")
const express=require("express")
const routes=express.Router()

routes.post("/create",Create.Create);
routes.get("/data",Create.read);
routes.delete("/delete/:id",Create.Delete)
routes.get("/updateget/:id",Create.UpdateRead)
routes.put("/update/:id",Create.Update)

module.exports=routes;
