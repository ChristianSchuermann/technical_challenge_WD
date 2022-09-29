const express = require("express");
const router = express.Router();
const Phone = require("../models/Phone.model");
const phoneData = require("../data/phones.json")

router.get('/', (req, res) => {
    if(!phoneData){
        res.status(400).json({ message: 'No phone data found' })
        return;
    }
	res.json(phoneData)
});

router.get('/:id', (req, res) => {
    const phoneId = Number(req.params.id)

    const phone = phoneData.find(phone => phone.id === phoneId) 
    if(!phone){
        res.status(400).json({ message: `Phone with id: ${phoneId} not found` })
        return;
    }
	res.json(phone)
});



module.exports = router;