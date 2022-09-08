const express = require("express")
const router = express.Router()

router.get("/imovel", (req, res) => {
    res.render('./screens/imovel')
})

exports.routerImovel = router