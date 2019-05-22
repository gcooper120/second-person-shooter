var express = require('express')
var router = express.Router()

/**
 * Get method for homepage
 * @return: homepage
 */
router.get('/', function (req, res) {
    res.render('scene')
})

module.exports = router