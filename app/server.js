var express = require("express");
//express for web API
var app = express();
//including color converter implementation
var converter = require("./converter");

//define routes for web API
app.get("/rgbToHex", function(req, res){
    //parse incoming parameters
    var red = parseInt(req.query.red, 10);
    var green = parseInt(req.query.green, 10);
    var blue = parseInt(req.query.green, 10);
    //pass parameters to the converter
    var hex = converter.rgbToHex(red, green, blue);
    //send the result to client
    res.send(hex);
});
app.get("/hesToRgb", function(req, res){
    var hex = req.query.hex;
    var rgb = converter.hexToRgb(hex);
    res.send(JSON.stringify(rgb));
});
//listen runs a web server on port 3000
app.listen(3000);