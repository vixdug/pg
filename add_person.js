
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


var args = process.argv.slice(2);

console.log()

knex('famous_people').insert({first_name: args[0], last_name: args[1], birthdate: args[2]})
     .then( function (result) {
       console.log(result);
 })
 .finally(function() {
   knex.destroy();
 });
