const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://thoutuakshaya:8499064922@in-aws.d6qmg.mongodb.net/Max-Store?retryWrites=true&w=majority&appName=In-AWS")

const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')