const express = require('express');
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

module.exports = app => app.use('/projects', router);