const jwt = require('jsonwebtoken');
const User = require('../models/users.model');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
    console.log(req.body);
    bcrypt.hash(req.body.password, 10);
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        res.json({ status: "ok" });
    } catch (error) {
        res.json({ status: "error", error: "Invalid email/password" });
    }
}

exports.connectUser = async (req, res, next) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    })

    if(user){
        const valid = bcrypt.compare( req.body.password, user.password)
        if(!valid){
            res.json({ status: "error", error: "Invalid email/password" });
        } else {
            const token = jwt.sign({
                name: user.name,
                email: user.email,
            }, "Darkwall")
            return res.json({ status: "ok", user: token });
        }
    } else {
        return res.json({ status: "error", user: false });
    }
}