const express = require('express')
const router = new express.Router();
const employeeBaseUrl = '/api/employee';
const attendanceBaseUrl = '/api/attendance';
app = express();

//routers
router.use(employeeBaseUrl, require('./employeeRoute'));
router.use(attendanceBaseUrl, require('./attendanceRoute'));

module.exports = router;