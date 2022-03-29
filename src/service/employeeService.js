const sql = require('./sqlServices');
const constants = require('../helper/constant');

module.exports.createRecord = async (data) =>{
    let queryString = "INSERT INTO "+constants.EMPLYOYEE_TABLE+ " (id, Name, Age) VALUES("+ data.id +",'"+data.Name+"',"+data.Age+");"
    return await sql.insertQuery (queryString);
}

module.exports.bulkEmployee = async (data) => {
    let jsonData = [];
    data.forEach(item => {
      jsonData.push("(" +item.id+ ",'" +item.Name+ "'," + item.Age + ")");
    });
    let queryString = "INSERT INTO " + constants.EMPLYOYEE_TABLE + " (id, Name, Age) VALUES" + jsonData.join() + ";"
   // console.log(queryString);
  
    return await sql.insertQuery(queryString);
  
  }
/*
  module.exports.bulkEmployee = async (data) => {
    let jsonData = [];
    data.forEach(item => {
      jsonData.push("(" + item.id + ",'" + item.Name + "'," + item.Age + ")");
    });
    let queryString = "INSERT INTO " + constants.employeeTable + " (id, Name, Age) VALUES " + jsonData.join() + ";"
  
    return await sql.insertQuery(queryString);
  
  }
*/