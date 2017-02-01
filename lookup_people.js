const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});


var input = process.argv[2];

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  console.log("searching....");
  client.query("SELECT id, first_name, last_name, birthdate from famous_people WHERE first_name LIKE '"+input+"'"+ "or last_name LIKE '"+input+"'", (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    let rows = result.rows;
    console.log("found",result.rows.length, "person(s) by the name",input+":");

    rows.forEach(function(famousPeople, i) {
      console.log("-:"+famousPeople.id,famousPeople.first_name,famousPeople.last_name,"born:", famousPeople.birthdate);
  })
  client.end();
  });
});
