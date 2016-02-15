const express = require("express");
const app = express();


app.get("/", (req, res)=>
{
	res.send("HALLO, this is thy index page")
})

app.listen(3000, ()=>
{
	console.log("app listening on PORT 3000");
})