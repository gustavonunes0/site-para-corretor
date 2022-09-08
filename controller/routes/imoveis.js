const express = require('express')
const router = express.Router()

router.get("/imoveis", (req, res) => {
    res.render('./screens/imoveis')
})

exports.routerImoveis = router