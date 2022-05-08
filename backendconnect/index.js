const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.use(express.urlencoded());
app.use(cors());


mongoose.connect("mongodb://127.0.0.1:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    mobile: Number,
    password: String
})

const User = new mongoose.model("User", userSchema)



//Routes
app.post("/login", (req, res) => {
    const { mobile, password } = req.body

    User.findOne({ mobile: mobile }, (err, user) => {

        if (user) {
            if (password === user.password) {
                res.send({ message: "successfully", user: user })
            }
            else if (password !== user.password) {
                res.send({ message: "somethinng is wrong", user: user })
            }

            // else{
            //     res.send({message: "Password Incorrect"})
            // }
        }
        else {
            res.send({ message: "User not Registered" })
        }
    })
})

app.post("/register", (req, res) => {
    // res.send("My Api register")

    const generateOtp = () => {
        var digits = '0123456789';
        var otplength = 4;
        var otp = "";

        for (var i = 1; i < otplength; i++) {
            var index = Math.floor(Math.random() * (digits.length))
            otp = otp + digits[index];
        }
        return otp
    }

    const { name, mobile, password } = req.body;

    User.findOne({ mobile: mobile }, (err, user) => {
        if (user) {
            res.send({ message: "User already registered" })
        }
        else {
            const user = new User({
                name /*userScehma name */,
                mobile,
                password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send({ message: "Successfully Registered please login now" })
                }
            })
        }
    })

})

app.listen(2001, () => {
    console.log("started at port 2001")
})