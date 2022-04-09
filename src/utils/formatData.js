const { Router } = require('express');
const router = Router();
require('date-utils');
require('dotenv').config();

router.post('/', async(req, res) => {
    console.log(req.body);
    logUpdate = new LogData(snapshot);
    //save device if not exists
    console.log("LOG DEVICE DATA HERE");

    //save ping to 
    console.log("LOG PING DATA HERE");
    res.send([req.body.lat, req.body.lng]);
});

module.exports = router;