const express = require('express');
const app = express();
const path = require('path');
const bp = require('body-parser');

app.use(express.static('webForm.htm'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'webForm.html'));
})

app.use(bp.urlencoded({extended: true}));
app.use(bp.json());

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("listening at http://%s:%s", host, port)
})

app.post('/backend', function (request, response) {
    content = request.body;
    verify(content, request.headers);
    response.sendFile(path.join(__dirname, 'webForm.html'));
})

function verify(postData, headers) {
    if(postData['phone-number']!="") {
        console.log("User is a bot");
        //console.log(headers)
    }
    else {
        console.log('User verified')
    }

}