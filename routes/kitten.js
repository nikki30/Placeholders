var express = require('express');
var router = express.Router();
const app = express();


/* GET page. */
router.get("/*", (req, res) => {
		var max = 500;
		var min = 100;
		var w = Math.round(Math.random() * (max - min) + min);
		var h = Math.round(Math.random() * (max - min) + min);
	    var url_val = "http://placekitten.com/"+ w + "/" + h;
	    res.render('preview', {'url' : url_val});
});


module.exports = router
