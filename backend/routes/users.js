const router = require('express').Router();
const {User, validate} = require("../models/user")
const bcrypt = require("bcrypt")
const Token = require("../models/token")
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto")


router.post("/",async(req,res)=>{
    try{
        const {error} = validate(req.body)
        if(erro)
            return res.status(400).send({message: error.details[0].message})


        //checking if the email id already exists
        let user = await User.findOne({email:req.body.email})
        if(user)
            return res.send(409).send({message:"User with given email already exists"})

        const salt = await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword = await bcrypt.hash(req.body.password, salt)



        //save user to the database
        user = await new User({...req.body, password:hashPassword}).save()

        //send an email
        const token = await new Token({
            userId: user._id,
            token: crypto.randomBytes(32).toString("hex")
        }).save();

        const url = `${process.env.BASE_URL}users/${user.id}/verify/${token.token}`;
        await sendEmail(user.email, "Verify Email", url);


        res.status(201).send({message:"An email sent to your account please verify"})
    } catch(error){
        res.status(500).send({message:"Internal server error"})
    }
});

router.get("/:id/verify/:token", async(req,res)=>{
    try{
        const user = await User.findOne({_id: req.params.id});
        if(!user) return res.status(400).send({message: "Invalid Link"});

        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token
        });

        if(!token) return res.status(400).send({message: "Invalid link"})

        await User.updateOne({_id: user._id, verified: true})
        await token.remove()

        res.status(200).send({message:"Email verified sucessfully"})
    }catch(error){
        res.status(500).send({message:"Internal server error"})
    }
})

module.exports = router