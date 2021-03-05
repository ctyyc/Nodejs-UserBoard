const express = require('express');
const app = express();
const router = express.Router();

// main page는 login 상태만 접근 가능
router.get('/', (req, res) => {
    const id = req.user;
    if(!id) res.render('login.ejs');

    res.render('main.ejs', {'id': id});
});

module.exports = router;