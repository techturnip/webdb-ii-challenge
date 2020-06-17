// SERVER SETUP ===================================|
// ================================================|
// ------------------------------------------------|
// IMPORTS/INITIALIZATION =========================|
// ================================================|
// Bring in express -------------------------------|
const express = require('express')
// Bring in console logging for error handling ----|
const logger = require('morgan')
// Bring in header protection library -------------|
const helmet = require('helmet')
// Bring in cors for planned react front end ------|
const cors = require('cors')
// Intialize express server -----------------------|
const server = express()
// Bring in bodyParser module ---------------------|
const bodyParser = express.json()
// Bring in cars router ---------------------------|
const carsRouter = require('../cars/cars-router')
// ------------------------------------------------|
// GLOBAL MIDDLEWARE ==============================|
// ================================================|
// Use bodyParser middleware ----------------------|
server.use(bodyParser)
// Use morgan to log requests to the server console|
server.use(logger('combined'))
// Use helmet as middleware to protect req headers |
server.use(helmet())
// Bring in cors to allow front-end app setup -----|
server.use(cors())
// ------------------------------------------------|
// SETUP ROUTER(S) ================================|
// ================================================|
server.use('/api/cars', carsRouter)
// ------------------------------------------------|
// EXPORT SERVER ==================================|
// ================================================|
module.exports = server
