const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');

const {Adress} = require('../model/Adress');

router.get("/", async (request, response) => {

    const adress = await Adress.find({});
    response.send(adress);

});

router.post("/", async (request, response) => {

    const adress = new Adress({
        country   : request.body.country,
        region    : request.body.region,
        postalCode: request.body.postalCode
    });

    await adress.save();

    response.send(adress);

});

module.exports = router;