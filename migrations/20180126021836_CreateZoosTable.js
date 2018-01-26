
exports.up = function(knex, Promise) {
  // this code executes when we run the migration
  // create the zoo table
  return knex.schema.createTable('zoos', function(tb1) {
    tb1.increments(); // by default it will be called id
    
    tb1
    .string('name', 255)
    .notNullable()
    .unique('name', 'uq_zoos_name');
    
    tb1
    .timestamp('created_at')
    .defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  // this code runs when rolling back the migration
  // delete the zoos table
  return knex.schema.dropTableIfExists('zoos');
};
