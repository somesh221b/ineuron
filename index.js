const bodyParser = require("body-parser");
const express=require("express");
const mongoose=require("mongoose");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi=require("swagger-ui-express");
const swaggerDoc=require("./swagger.json");
const app=express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb+srv://somesh:Somesh123@devstree.3wv5fxx.mongodb.net/ineuron");

const con=mongoose.connection;

con.on("open",()=>{
    console.log("DB Connected...");
})
const router=require("./router/CRUD.router")
app.use("/",router);

app.use("/api-doc",swaggerUi.serve,swaggerUi.setup(swaggerDoc));


app.listen(3000,()=>{
    console.log("listening...");
});
module.exports=app