
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('milestone', function(table){
      table.increments('id')
      table.string('description');
      table.date('date_archived');
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestone')
  ])
};
