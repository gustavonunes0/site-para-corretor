const express = require('express')
const router = express.Router()

router.get('/ihone', (req, res) => {
    res.render('./screens/admin')
})

exports.routerIhone = router