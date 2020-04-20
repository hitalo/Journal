const express = require('express');
const pdf = require('html-pdf');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();
router.use(authMiddleware);

router.post('/', (req, res) => {
    res.send({ok: "ok", id: req.userId});
});

router.post('/logged-in', async (req, res) => {
    if(!req.userId) {
        return res.send({status: false});
    } else {
        return res.send({status: true});
    }

});

router.post('/create-pdf', (req, res) => {
    const options = { format: 'Letter' };
    pdf.create(req.body.html, options).toFile('./test.pdf', (err, file) => {
        if (err) return console.log(err);
        console.log(file);
        res.send({success: true});
    });
});

module.exports = app => app.use('/projects', router);