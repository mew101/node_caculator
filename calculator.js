

const express = require("express");
const bodyParser = require("body-parser");

const app = express(3000);

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req,res){
  let input1 = parseFloat(req.body.height);
  let input2 = parseFloat(req.body.weight);

  let result = input2 / (input1 * 2);
  res.send("your bmi is " + result);

})

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("total is " + result);
});


app.listen(3003, function(){
  console.log("port 3003 started");
});
