const user = require("../models/user");
const createUser = async (req, res, next) => {
    /**
     * @swagger
     * /create-user:
     *  post:
     *      summary: Create New User
     *      description: This is use to create new user
     *      response:
     *          200:
     *              description:A new user created
     */
    try {
        const obj = {
            name: req.body.name,
            age: req.body.age,
            job: req.body.job
        }
        const users = await user.create(obj);
        res.send(users)
    } catch (e) {
        res.send(e.message)
    }
}
const getUsers = async (req, res, next) => {
    /**
     * @swagger
     * /read-users:
     *  get:
     *      summary: Get all users
     *      description: This is use to get all users
     *      response:
     *          200:
     *              description:We got all the users
     */
    try {
        const users = await user.find();
        res.status(200).send(users)
    } catch (e) {
        res.send(e.message)
    }
}
const editUsers = async (req, res, next) => {
    try {
        /**
        * @swagger
        * /edit-user:
        *  put:
        *      summary: Update User Details
        *      description: This is use to update users details
        *      response:
        *          200:
        *              description:user successfully updated
        */
        const obj = {
            job: req.body.job
        }
        console.log(req.params.id);
        const users = await user.findOneAndUpdate({ _id: req.params.id }, obj)
        res.send(users)
    } catch (e) {
        res.send(e.message)
    }
}
const deleteUsers = async (req, res, next) => {
    /**
     * @swagger
     * /delete-users:
     *  delete:
     *      summary: delete User
     *      description: This is use to delete user
     *      response:
     *          200:
     *              description:user successfully deleted
     */
    try {
        const users = await user.deleteOne({
            _id: req.params.id
        })
        res.send(users)
    } catch (e) {
        res.send(e.message)
    }
}

module.exports = { createUser, getUsers, editUsers, deleteUsers }