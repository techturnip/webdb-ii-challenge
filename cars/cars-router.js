// IMPORTS/INITIALIZATION =========================|
// ================================================|
// import express router --------------------------|
const router = require('express').Router()
// import cars model ------------------------------|
const Cars = require('./cars-model.js')
// ------------------------------------------------|
// REQ HANDLERS ===================================|
// ================================================|
// Base URL '/api/cars/' --------------------------|
// ------------------------------------------------|
// GET Request - returns all cars in db -----------|
router.get('/', async (req, res) => {
  try {
    const cars = await Cars.findAll()

    res.json(cars)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Failed to get cars' })
  }
})
// GET Request - returns car by id from db --------|
router.get('/:id', async (req, res) => {
  // pull id from url
  const { id } = req.params

  try {
    const car = await Cars.findBy({ id })

    if (car) {
      res.json(car)
    } else {
      res.status(404).json({ message: 'Invalid car ID' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Failed to get car' })
  }
})
// ------------------------------------------------|
// EXPORT ROUTER ==================================|
// ================================================|
module.exports = router
