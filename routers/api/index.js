const router = require('express').Router();

const ping = require('./ping');
const air = require('./airQuality');

router.use('/ping', ping); // Make basic auth if we have auth
router.use('/air', air);

module.exports = router;