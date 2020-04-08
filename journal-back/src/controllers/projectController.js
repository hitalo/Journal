const express = require('express');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();
router.use(authMiddleware);

router.post('/', (req, res) => {
    res.send({ok: "ok", id: req.userId});
});


module.exports = app => app.use('/projects', router);