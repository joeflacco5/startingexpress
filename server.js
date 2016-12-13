// Requests flow from Top to Bottom, going through middleware/routes as they go down.

// npm install --save express-handlebars
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();

JSON.stringify({})

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function( req, res ) {
  res.render('home')
});
app.listen(3000, function() {
    console.log('Working?')
  });

/* Verb Methods: HTTP requests !
Get -
Post -
Put -
Delete -
*/
