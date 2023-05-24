const pg = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    port : 5432,
    user : 'lemoncare',
    password : 'P@ssw0rd',
    database : 'lmhcplus'
  },
  pool : {min: 0, max: 7}
});


