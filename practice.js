var express = require('expres')
var router = express.Router();

app.get('/birds/:birdId', function(req, res, next) {
  if (req.params.birdId === 0) next('route')
  else next()
},
function (req, res, next) {
  res.render('Normal')
}
)
app.get('/birds/:birdId', function( req, res, next ) {
  res.render('Special')
}); 
