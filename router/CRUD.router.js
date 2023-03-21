const express=require("express");

const router=express.Router();
const {createUser,getUsers, editUsers, deleteUsers}=require("../controllers/CRUD.controller")
router.post("/create-user",createUser);
router.get("/read-users",getUsers);
router.put("/edit-user/:id",editUsers);
router.delete("/delete-users/:id",deleteUsers);

module.exports=router;