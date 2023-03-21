const user = require("../models/user");
const createUser = async (req, res, next) => {
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
    try {
        const users = await user.find();
        res.status(200).send(users)
    } catch (e) {
        res.send(e.message)
    }
}
const editUsers = async (req, res, next) => {
    try {
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
