exports.up = knex => {
  // create and define cars table/schema
  return knex.schema.createTable('cars', table => {
    // primary key
    table.increments()
    // vin field - unique - 17 chars - not nullable
    table
      .string('VIN', 17)
      .unique()
      .notNullable()
    // make field
    table.string('make').notNullable()
    // model field
    table.string('model').notNullable()
    // mileage field
    table.decimal('mileage').notNullable()
    // transmissionType field
    table.string('transmissionType')
    // title field
    table.string('titleStatus')
  })
}

exports.down = knex => {
  // drop the cars table
  return knex.schema.dropTableIfExists('cars')
}
