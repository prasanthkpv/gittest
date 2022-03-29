const mysql = require('mysql');
const constants = require('../helper/constant');

const conn = mysql.createConnection( {
    host:constants.HOST,
    port:'3306',
    user:constants.USERNAME,
    password:constants.PASSWORD,
    database:constants.DB
});
conn.connect( function(err) {
   if(err) {
       throw err;}
   else {
       console.log("Database connected!!");
   }
   let employeeTable = "CREATE TABLE if not exists "+ constants.EMPLYOYEE_TABLE+ " (id INT PRIMARY KEY, Name VARCHAR(50), Age INT)";
   conn.query( employeeTable, function(err, results, fields) {
       if(err){ throw err;}
       else {
           console.log("Employee Table created!!");
       }
   });

   let studentTable = "CREATE TABLE if not exists "+ constants.STUDNET_TABLE+ " (id INT PRIMARY KEY, date DATE)";
   conn.query( studentTable, function(err, results, fields) {
       if(err){ throw err;}
       else {
           console.log("Attendance Table created!!");
       }
   });
}); 
module.exports = conn;