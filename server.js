const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const MONGO_USR = process.env.MONGO_USR;
const MONGO_PSWD = process.env.MONGO_PSWD;
console.log("mongo user " + MONGO_USR);
console.log("mongo pass " + MONGO_PSWD);
const MONGODB_URL = "mongodb://"+MONGO_USR+":"+MONGO_PSWD+"@ds059135.mongolab.com:59135/bbleds-test-database";

const mySchema = mongoose.Schema({
	name: String,
	species: String
})
const speciesModel = mongoose.model("test", mySchema)



app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.set("view engine", "jade")

app.get("/", (req, res)=>
{
	res.send("<h1>HALLO, this is thy index page</h1>")
})


app.get("/contact", (req, res)=>
{
	res.send("<h1>HALLO, this is thy contact page</h1>")
})

app.get("/postit", (req, res)=>
{
	res.render("postit")
})

app.post("/postit", (req, res)=>
{
	console.log(req.body);

	const formSubmit = new speciesModel({name: req.body.name, species: req.body.species})
	formSubmit.save(function (err, object) {
    if (err) return console.error(err);
    console.log("saved that junk boyyyyyy");
  });
	res.send("THANKS GUY!!!")
})

const dbase = mongoose.connection;
mongoose.connect(MONGODB_URL);
mongoose.connection.on("open", () =>
{
    app.listen(PORT, ()=> console.log(`server listening on port ${PORT}, ya filthy animal`));
})
