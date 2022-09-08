const express = require('express')
const router = express.Router()

router.get('/home', (req, res) => {
    res.render('./screens/home')
})

exports.routerHome = router