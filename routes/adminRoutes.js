const express = require("express");
const adminController = require("../controllers/adminController");
const bodyParser = require('body-parser');
const adminRoute = express();
const multer = require('multer');
const path = require('path');

adminRoute.use(express.static('public'));

multer.diskStorage({
    destination:function(){},
    filename:function(){}
})


adminRoute.use(bodyParser.json());
adminRoute.use(bodyParser.urlencoded({extended:true}));

adminRoute.set("view engine","ejs");
adminRoute.set('views','./views');

adminRoute.get("/login", adminController.blogTwo);
adminRoute.get("/blogSetup", adminController.blogSetup);

module.exports = adminRoute;
