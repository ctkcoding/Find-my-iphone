const { Router } = require('express');
const router = Router();
const icloud = require("find-my-iphone").findmyphone;
require('dotenv').config();

icloud.apple_id = process.env.APPLE_ID;
icloud.password = process.env.PASSWORD;
icloud.cookieFileStore = "icloud.cookie";
router.get('/', async(req, res) => {
    icloud.getDevices(function(error, response) {
        var snapshot;
        var array = [];
        if (error) {
            console.log(error);
        }else{
            response.forEach(function(dataCandidate) {
                if (snapshot == undefined && dataCandidate.location && dataCandidate.lostModeCapable) {
                    snapshot = dataCandidate;
                }
            });
            if (snapshot) {
                console.log(snapshot)
                array.push(snapshot);
            }
        }
        res.send(array);
    });
});

module.exports = router;