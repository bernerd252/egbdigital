// Dependencies
// =============================================================
var path 		= require('path');


// Routes
// =============================================================
module.exports = function(app){

	// Each of the below routes just handles the HTML page that the user gets sent to.
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/index.html'));
	});


app.get('/js/materialize.js', function(req, res){
		res.sendFile(path.join(__dirname + '/js/materialize.js'));
	});

app.get('/js/tween.min.js', function(req, res){
		res.sendFile(path.join(__dirname + '/js/tween.min.js'));
	});

app.get('/js/TrackballControls.js', function(req, res){
		res.sendFile(path.join(__dirname + '/js/TrackballControls.js'));
	});

app.get('/js/CSS3DRenderer.js', function(req, res){
		res.sendFile(path.join(__dirname + '/js/CSS3DRenderer.js'));
	});

app.get('/textures/style.css', function(req, res){
		res.sendFile(path.join(__dirname + '//textures/style.css'));
	});

app.get('/textures/sprite1.png', function(req, res){
		res.sendFile(path.join(__dirname + '//textures/sprite1.png'));
	})
}

