const express = require("express")
const app = express()
const cors = require("cors")
const db_connection = require('./Database')
const Crud_apis = require('./Crud_apis')
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "PUT", "DELETE"]
}))
app.use('/Crud_apis', Crud_apis)
app.listen(3500, () => {
    console.log("server is running on port 3500");

})
