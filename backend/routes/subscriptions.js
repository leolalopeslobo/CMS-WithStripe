const express = require('express')
// import Stripe from "stripe"

const stripe = require('stripe')

const router = express.Router();

router.get("/prices", async(req,res)=>{
    res.send("prices")
})


module.exports = router;