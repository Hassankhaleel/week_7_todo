const mongoose = require("mongoose")
let db_connection = mongoose.connect('mongodb+srv://Hassan:Hassan@todocluster.kavva.mongodb.net/')
    .then((RESOLVE) => console.log("db connected"))
    .catch((err) => console.log("erro via connecting db", err))


module.exports = db_connection 