

const Express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname+"/date.js");

const App = Express();

//uses ejs as view engine
App.set("view engine","ejs");
const portNumber = 3000;

//static content all files

App.use(Express.static("public"));

let items = [];
let worklistItems = [];

App.use(bodyParser.urlencoded({'extended':'true'}));
App.get('/',function(req,res){


    let today = date();

    res.render("list",{listTitle:today,newListItem:items});



})


App.get('/work',function(req,res){
    res.render("list",{listTitle:"Work List",newListItem:worklistItems})
})


App.post('/',function(req,res){
    var i = req.body.Fa;
    if(req.body.list==="Work"){
        worklistItems.push(i);
        res.redirect("/work");
    }
    else{
    items.push(i);
    res.redirect('/');}
   
});

App.get('/about',function(req,res){
    res.render('About');
})


App.listen(portNumber,function(req,res){
    console.log('Server is started at port number : '+portNumber);
})
