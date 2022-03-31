const User = require('./userSchema');
const bcrypt = require('bcryptjs');
const auth = require('../../authentication/auth');

exports.registerUser = (req, res) => {
    User.exists({ email: req.body.email }, (err, result) => {
        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Fel.',
                err
            })
        }
        if(result) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Emailadressen är redan registrerad.',
            })
        }

        const salt = bcrypt.genSaltSync(10);
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            if(err) {
                return res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Misslyckades att kryptera lösenord.',
                    err
                })
            }

        User.create({
            firstName:      req.body.firstName,
            lastName:       req.body.lastName,
            email:          req.body.email,
            passwordHash:   hash
        })
        .then(() => {
            res.status(201).json({
                statusCode: 201,
                status: true,
                message: 'Användaren har skapats.',
                token: auth.generateToken(User)
            })
        })
        .catch(err => {
            res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Misslyckadees att skapa en användare.'
            })
        })   
        })

    })
}

exports.loginUser = (req, res) => {

    User.findOne({ email: req.body.email }, (err, user) => {

        if(err) {
            return res.status(400),json({
                statusCode: 400,
                status: false,
                message: 'Går inte att hitta.',    
            })
        }

        if(!user) {
            return res.status(401).json({
                statusCode: 401,
                status: false,
                message: 'Fel emailadress eller lösenord.', 
            })
        }

        bcrypt.compare(req.body.password, user.passwordHash, (err, result) => {
            if(err) {
                return res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Någonting gick fel under lösenordsmatch.',    
                })
            }

            if(!result) {
                return res.status(401).json({
                    statusCode: 401,
                    status: false,
                    message: 'Fel emailadress eller lösenord.',
                })
            }

            res.status(200).json({
                statusCode: 200,
                status: true,
                message: 'Lösenordsmatch lyckades.',
                token: auth.generateToken(user)
            })
        })
    })
}
