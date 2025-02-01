// import { db_connection, todo_schema_model } from './Database'
const express = require('express')
const Crud_routers_api = express.Router()
const db_connection = require('./Database')
const todo_schema_model = require('./Shema')
Crud_routers_api.get('/get', async (req, res) => {
    try {
        let finder = await todo_schema_model.find()
        res.send(finder)
    }
    catch (err) {
        res.send(err)
    }
})
Crud_routers_api.post('/post', async (req, res) => {
    let { Task, Description, Time } = req.body
    console.log(req.body);

    try {
        let db_dispatcher = await todo_schema_model({ Description, Task, Time })
        let db_saver = await db_dispatcher.save();

        res.send(db_saver)
    }
    catch (err) {
        res.status(400).send({ schema_error: err.message })
    }


})
Crud_routers_api.delete('/delete', async (req, res) => {

    let deleting_id = req.body._id
    console.log(typeof deleting_id);

    try {
        let deleter_fn = await todo_schema_model.deleteMany({ _id: deleting_id })
        res.send({ "task deleted": deleter_fn, "Task deleted": deleter_fn.deletedCount })
    } catch (err) {
        res.send({ "err vai deleting task": err.message })
    }

})

module.exports = Crud_routers_api