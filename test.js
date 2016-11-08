/* eslint-disable no-console */
var util = require("util");
var config = require("./index");

console.log(util.inspect(config, false, 4));
console.log("Config file properly loaded 👍");
