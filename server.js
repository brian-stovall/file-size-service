var express = require('express');
var path = require('path');
var multer = require('multer');
var upload = multer();

var app = express();
app.use('/', express.static(path.join(__dirname, 'public')));

app.post('/file-upload', upload.single('userFile'), function(req, res, next) {
    //set up response header
	res.setHeader('Content-Type', 'application/json'); 
	res.write(JSON.stringify({'size in bytes:' : req.file.size}),
				             (err) => { res.send();});
});

app.listen(process.env.PORT || '8080');
console.log('URL shortener service listening on port 8080');

