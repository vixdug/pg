exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestone', function(table){
      table.foreign('famous_person_id').references('id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestone', function(table){
      table.dropColumn('famous_person_id');
    })
  ])
};
