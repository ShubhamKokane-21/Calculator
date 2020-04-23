const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/index", function(req,res){
    res.sendFile(__dirname + "/index.html");
    
});

app.post("/index", function(req,res){
    var num1=Number(req.body.n1);
    var num2=Number(req.body.n2);
    
    var result=num1+num2;
    
    res.send("The result of the calculation is:"+result);

});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
    
    
});

app.post("/bmicalculator", function(req,res){
    
    var weight=parseFloat(req.body.n1);
    var height=parseFloat(req.body.n2);
    
    var result1=weight/(height*height);
    
    res.send("Your BMI index is:"+result1);
    
})




app.listen(3000,function(req,res){
    console.log("Server is running on port 3000");
});