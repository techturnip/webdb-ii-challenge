// IMPORTS/INITIALIZATION =========================|
// ================================================|
// bring in db operations
const db = require('../data/dbConfig.js')
// ------------------------------------------------|
// DB HELPER METHODS ==============================|
// ================================================|
// Get all cars from db
const findAll = async () => await db('cars')
// Get car by id from db
const findBy = async filter =>
  await db('cars')
    .where(filter)
    .first()
// Add a car to the db
const add = async car => {
  const [id] = await db('cars').insert(car, 'id')
  return findBy({ id })
}
// ------------------------------------------------|
module.exports = {
  findAll,
  add
}
