var express = require('express');
var app = express();
var router = express.Router();

router.get('/:id', function(req, res){
    res.sendFile("/Projects/FFC/Profile/html/"+ req.params.id +".html")
})
module.exports = router;
