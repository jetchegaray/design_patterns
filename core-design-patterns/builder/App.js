"use strict";
exports.__esModule = true;
var Signup_1 = require("./Signup");
var SignupBuilder_1 = require("./SignupBuilder");
// old version of the object
var sigup = new Signup_1.Signup("javito", "javito@gmail.com", "sdfkajlsdlkajs", 23, "picture.jpg", "javito", ["nodejs", "javascript"], true, true);
//new builder version
var signup = new SignupBuilder_1.SignupBuilder("javito", "javito@gmail.com", "sdfkajlsdlkajs")
    .setAge(56)
    .setIsModerator(false)
    .setNickName("javito")
    .create();
console.log(signup);
