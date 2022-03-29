
const router = require('express').Router();
const handler = require('../handler/employeeHandler');


router.post('/create', handler.createEmployees);
router.post('/bulk', handler.bulkEmployees);
router.post('/upload', handler.uploadEmployees);

module.exports = router;