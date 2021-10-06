const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const {AdressDetails} = require('../model/AdressDetails');

router.post("/", async (request, response) => {

    const adressdetails = new AdressDetails({
        street: request.body.street,
        number: JSON.parse(request.body.number),
        familyname: request.body.familyname,
        telephone: request.body.telephone,
        adress:request.body.adress_id
    });

    await adressdetails.save();

    response.send(adressdetails);

});

router.get("/:id", async (request, response) => {

    const adressdetails = await AdressDetails.find({adress: request.params.id});
    if (!adressdetails) response.status(404).send("AdressDetails not found !");
    response.send(adressdetails);

});

module.exports = router;