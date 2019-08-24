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
// ------------------------------------------------|
// EXPORT ROUTER ==================================|
// ================================================|
module.exports = router
