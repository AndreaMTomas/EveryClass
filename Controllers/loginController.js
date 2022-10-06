"use script";

const loginModel = require("../Models/loginModel");
/* ----------------------------------------------------
        REQUIRE DATA FROM log_in.html
   ---------------------------------------------------- */
function loginControl(req, res){
    var email = req.query.email;
    var password = req.query.pswd;
    if(loginModel.login(email, password)){
        res.render("home", {"email": email});
    }else{
        res.render("log_in")
    }
    
}

module.exports = {
    loginControl
}