const mongoose = require("mongoose")

let todo_schema = new mongoose.Schema({
    Task: { type: String, required: true },
    Description: { type: String, required: true },
    Time: mongoose.Schema.Types.Mixed,
})
let todo_schema_model = new mongoose.model("todo_full_fledge", todo_schema)

module.exports = todo_schema_model