const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res)=>
{
	res.send("<h1>HALLO, this is thy index page</h1>")
})


app.get("/contact", (req, res)=>
{
	res.send("<h1>HALLO, this is thy contact page</h1>")
})

app.listen(PORT, ()=>
{
	console.log("app listening on PORT 3000");
})