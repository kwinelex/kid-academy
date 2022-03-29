const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

// Help display json data in log
app.use(bodyParser.urlencoded({extended: true}))
// Using to allow the assets folder under public
app.use(express.static('public'))

app.listen(port, function(){
    console.log(`Server is starting with port ${port}`);
});


app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get('/tutorial', function(req, res){
    res.sendFile(__dirname + "/views/tutorial.html");
});

app.get('/about-us', function(req, res){
    res.sendFile(__dirname + "/views/about.html");
});