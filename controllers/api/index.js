const express = require('express');
const router = express.Router();

const driverRoutes = require('./driver-routes.js');
const truckRoutes = require('./truck-routes.js')
router.use('/drivers', driverRoutes);
router.use('/trucks', truckRoutes)
module.exports = router ;