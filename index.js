// Environment variable setup
require('dotenv').config()

// Bring in server configurations
const server = require('./api/server.js')

// Define the port to listen on
const port = process.env.PORT || 5000

// Call the listen() method on the server
server.listen(port, () => {
  console.log(`\n*** Server Running on Port ${port} ***\n`)
})
