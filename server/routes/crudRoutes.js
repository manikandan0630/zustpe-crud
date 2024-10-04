const express = require("express");
const multer = require("multer"); 
const path = require("path"); 
const Controllers = require("../controllers/crudContoller"); 
const routes = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    },
});

const upload = multer({ storage: storage });

// Define your routes
routes.post("/create", upload.single('file'), Controllers.createRecord); 
routes.get("/data", Controllers.getAllRecords);
routes.delete("/delete/:id", Controllers.deleteRecord);
routes.get("/updateget/:id", Controllers.getRecordById);
routes.put("/update/:id", Controllers.updateRecord);

module.exports = routes;
