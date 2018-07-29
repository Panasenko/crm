const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config/dataConfig')

module.exports.login = async (req, res) => {
   const condidate = await User.findOne({
       email: req.body.email
   });

    if (condidate){
        const passwordResult = bcrypt.compareSync(req.body.password, condidate.password);
        if (passwordResult){

            const token = jwt.sign({
                email: condidate.email,
                userId: condidate._id
             }, config.jwt, {expiresIn: 60 * 60});

            res.status(200).json({
                massage: `Baerer ${token}`
            })

        } else {
            res.status(401).json({
                massage: "incorrect password"
            })
        }
    } else {
        res.status(404).json({
            massage: "User " + req.body.email + " not found"
        })
    }
};

module.exports.register = async (req, res) => {

    const candidate = await User.findOne({email: req.body.email})

    if (candidate){
        res.status(409).json({massage: "Such user already exists"})
    } else {
        const salt = bcrypt.genSaltSync(11);
        const password = req.body.password;
        const newUser = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        });

        try {
            await newUser.save();
            res.status(201).json(newUser)
        } catch (e) {
            res.status(504).json({massage: "Gateway Timeout " + e})
        }
    }
};
