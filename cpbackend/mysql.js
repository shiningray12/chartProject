var dbconfig = require("./config/db_info.js")
var mysql = require("mysql")
var dbconn = mysql.createConnection(dbconfig) //< DB Connection~!!

function getRandomData() {
  return Math.floor(Math.random() * (100 - 5 + 1)) + 5
}

dbconn.connect(function (err) {
  if (!err) {
    console.log("Database is connected!")
  } else {
    console.log("Error connecting database...nn :" + err)
  }

  var sql =
    "INSERT INTO myTable (ddate,data1,data2,data3) VALUES (" +
    Date.now() +
    "," +
    getRandomData() +
    "," +
    getRandomData() +
    "," +
    getRandomData() +
    ")"
  dbconn.query(sql, function (error, rows, fields) {
    if (error) {
      console.log(error)
    } else {
      console.log("rows", rows)
      //console.log('fields',fields);
    }
  })
  dbconn.end()
})
