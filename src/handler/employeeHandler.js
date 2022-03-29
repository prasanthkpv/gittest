const employeeService = require('../service/employeeService');
const csv = require('csvtojson');
const constants = require('../helper/constant');

module.exports.createEmployees = async (req, res) => {
    try{
        let result = await employeeService.createRecord(req.body);
        res.send(result);
    }
    catch(err) {
        res.send(err);
    }
};

module.exports.bulkEmployees = async (req, res) => {
    try{
        let result = await employeeService.bulkEmployees(req.body);
        res.send(result);
    }
    catch(err) {
        res.send(err);
    }
};
module.exports.uploadEmployees = async (req, res) => {
    let csvFilePath = constants.CSV_FILE_PATH;
    let jsonData = await csv().fromFile(csvFilePath);
    console.log("upload: ", jsonData);
    try {
      let result = await employeeService.bulkEmployee(jsonData);
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  };