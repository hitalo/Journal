const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const users = require('../database'); //mock users

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400, //1 day
    });
}

router.post('/test', async (req, res) => {
    try {
        return res.send("test ok");
    } catch(err) {
        return res.status(400).send({error: 'test failed'});
    }
    
});

router.post('/authenticate', async (req, res) => {
    const {email, pass} = req.body;
    const user = users.find(user => user.email === email);

    if(!user) return res.status(400).send({error: 'user not found'});
    if(user.pass !== pass) return res.status(400).send({error: 'invalid password'}); //plain text as example    

    res.send({
        user, 
        token: generateToken({id: user.id})
    });
});

module.exports = app => app.use('/auth', router);