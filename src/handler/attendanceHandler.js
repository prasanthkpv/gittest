const attendanceService = require('../service/attendanceServices');
const csv = require('csvtojson');

module.exports.registerAttendance = async (req, res) => {
  try {
    let result = await attendanceService.addAttendance(req.params.id);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

module.exports.bulkAttendance = async (req, res) => {
  try {
    let result = await attendanceService.bulkRegister(req.body);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

module.exports.filterAttendance = async (req, res) => {
 // let id = req.params.id;
  try {
    let result = await attendanceService.filterDetails(req.params.id);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};