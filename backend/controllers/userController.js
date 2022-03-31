const router = require('express').Router();
const userModel = require('../models/users/userModel');

// Registrera ny användare
router.post('/register', userModel.registerUser);

// //Logga in en användare
router.post('/login', userModel.loginUser);

//Hämta alla ordrar som är kopplade till en specifik person som också är inloggad
// router.get('');

module.exports = router;