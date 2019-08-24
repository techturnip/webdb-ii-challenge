// CUSTOM MIDDLEWARE ==============================|
// ================================================|
// Define a middleware to validate the POST request|
// object -----------------------------------------|
function validateCar(req, res, next) {
  console.log(req.body)
  // check for req.body
  if (req.body && Object.keys(req.body).length > 0) {
    const { VIN, make, model, mileage } = req.body

    // check if required fields exist
    if (VIN && make && model && mileage) {
      // make sure required VIN is formated correctly
      if (VIN.length === 17 && typeof VIN === 'string') {
        // check for mileage field is a number
        if (typeof mileage === 'number') {
          // make sure make, model and mileage are filled in
          if (
            make.length > 0 &&
            typeof make === 'string' &&
            model.length > 0 &&
            typeof model === 'string'
          ) {
            next()
          } else {
            res.status(400).json({
              message:
                'Make and model fields should not be empty and should be strings'
            })
          }
        } else {
          res.status(400).json({
            message: 'Mileage field should be a number'
          })
        }
      } else {
        res.status(400).json({
          message: 'VIN field should have 17 characters and should be a string'
        })
      }
    } else {
      res.status(400).json({
        message: 'Missing required vin, make, model or mileage fields'
      })
    }
  } else {
    res.status(400).json({ message: 'Missing car data' })
  }
}
// ------------------------------------------------|
// EXPORT MIDDLEWARE ==============================|
// ================================================|
module.exports = {
  validateCar
}
