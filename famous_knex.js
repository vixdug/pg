const pg = require("pg");
const settings = require("./settings"); // settings.json


var knex = require('knex')({
  client: 'pg',
  connection: {
    host :  settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database,
    ssl: settings.ssl
  }
});

var input = process.argv[2]


knex.select().from('famous_people').asCallback((error, results) => {
  console.log("searching....");
  console.log("found",results.length, "person(s) by the name",input+":");
  results.forEach(function(famousPeople, i) {
    console.log("-:"+famousPeople.id,famousPeople.first_name,famousPeople.last_name,"born:", famousPeople.birthdate);
    process.exit
  })
  .finally(function() {
    knex.destroy();
  });
});













// .then(function() {
//   return knex.insert({user_name: 'Tim'}).into('users');
// })
//
// .map(function(row) {
//   console.log(row);
// })
//
// .catch(function(e) {
//   console.error(e);
// });
