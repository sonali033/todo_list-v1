const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
const listItems= [];
const workItems = [];
//app.set('views',Users\LENOVO\Desktop\web dev\todolist-v1.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
 let day=date.getDate();
  res.render("list", {
    listTitle: day,
    listItems:listItems
  });
});

app.get("/work", function(req, res){
res.render("list",{
listTitle: "Work List",
listItems: workItems

});

});


app.post("/", function(req, res){

if(req.body.listSubmit === "Work")
{
   workItems.push(req.body.newItem)
   res.redirect("/work");
}
else
{
  listItems.push(req.body.newItem)
  res.redirect("/");
}
// let item=req.body.newItem;
//    items.push(item);
//   res.redirect("/");
});
app.get("/about", function(req,res)
{
   res.render("about");
});


app.listen(3000, function() {
  console.log("server started on port 3000");
});
