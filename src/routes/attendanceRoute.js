
const router = require('express').Router();
const handler = require('../handler/attendanceHandler');

//const handler = require('../handler/attendanceHandler');

router.post('/register/:id', handler.registerAttendance);
router.post('/bulk', handler.bulkAttendance);
router.get('/filter/:id', handler.filterAttendance);

module.exports = router;
