require('dotenv').config
const express = require('express')
const app = express();
const cors = require('cors')

// const stripe = require('stripe')

//importing routes
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")
const subscriptionRoutes = require("./routes/subscriptions")

//database
const connectDB = require('./db')


//middlewares
app.use(express.json())
app.use(cors());


//routes
app.use("/api/users",userRoutes)
app.use("/api/auth",authRoutes)
app.use("api/subscriptions",subscriptionRoutes)



//STRIPE
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const [vulnerability_assessment, compliance, soc, brand_monitoring] = ["price_1OCagYSEXM5jy36zh3EwELNm","price_1OCafzSEXM5jy36zeIwAP1UX","price_1OCafPSEXM5jy36zhHp90Ne3","price_1OCaeESEXM5jy36zkc0ESMTi"];


const stripeSession = async(plan) => {
    try{
        const session = await stripe.checkout.sessions.create({
            mode: "subscriptions",
            payment_method_types: ["card"],
            line_items: [
                {
                    price: plan,
                    quantity: 1
                },
            ],
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel",
        });
        return session;
    } catch (e){
        return e;
    }
}


app.post('/api/v1/create-subscription-checkout-session', async (req, res) => {

    const {plan, customerId} = req.body;

    let planId = null;
    if(plan == 20000) planID = vulnerability_assessment;
    else if(plan == 20000) planId = compliance;
    else if(plan == 1000) planId = soc
    else if(plan == 1000) planId = brand_monitoring;

    try{
        const session = await stripeSession(planId)
    } catch (error){
        res.send(error)
    }
});

const port = process.env.PORT || 3000;
const server = () => {
    connectDB();
    app.listen(port,()=>console.log(`Listening on port ${port}...`))
}

server()