const express = require('express')
const router = express.Router()

router.get("/financas", (req, res) => {
    res.render("screens/financas")
})

exports.routerFinancas = router