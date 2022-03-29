const sql = require('./sqlServices');
const constants = require('../helper/constant');

let today = new Date().getFullYear() + "" + ("0" + (new Date().getMonth() + 1)).slice(-2) + "" + new Date().getDate();

module.exports.addAttendance = async (data) => {
  let queryString = "INSERT INTO " + constants.STUDNET_TABLE + " (id, date) VALUES (" + data + ", " + today + ");";
  return await sql.insertQuery(queryString);
}

module.exports.bulkRegister = async (data) => {
  let jsonData = [];
  data.forEach(item => {
    let date = item.date || today;
    jsonData.push("(" + item.id + ", '" + date + "')");
  });
  let queryString = "INSERT INTO " + constants.STUDNET_TABLE + " (id, date) VALUES " + jsonData.join() + ";"
  return await sql.insertQuery(queryString);
}

module.exports.filterDetails = async (data) => {
 // var _toDate = filterData.toDate || today;
 // var _fromDate = filterData.fromDate || new Date().getFullYear() - 1;
  let queryString = "SELECT * FROM " + constants.STUDNET_TABLE + " WHERE id= "+data+ ";";
  //console.log(queryString)
  return await sql.insertQuery(queryString);
}