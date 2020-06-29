const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

//load the environment variable file
require('dotenv').config({path:"./config/keys.env"});

const app = express();

// Handlebars middleware (This tells Express to set handlebars as the template engine)
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

//parser application/ x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

//load controllers
const generalController = require("./controllers/general");
const productController = require("./controllers/product");


/*
    localhost:3000/
    localhost:3000/contact-us
    localhost:3000/product/list

    localhost:3000/room/add
    localhost:3000/room/edit
    localhost:3000/room/delete
    localhost:3000/room/10330/
    localhost:3000/room/list
*/
// Map each controller to the app object
app.use("/",generalController);
app.use("/product",productController);





// Sets up server
const PORT = process.env.SEND_GRID_API_KEY;
app.listen(PORT,()=>{
    console.log("Web Server is up and running");
})