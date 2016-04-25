#! /usr/bin/env node

/**
Name : NodeJS Custom CLI Module - Project Generator Template
Author:  Dilusha Gonagala
License : MIT
Version : 1.0
**/

//Module Dependencies
var generator = require("./generator.js");

module.exports = {


  listen: function() {

    //Slice out the array
    var userArgs = process.argv.slice(2);

    //Read Argument Values and Assign
    var arg1 = userArgs[0],
      arg2 = userArgs[1];

    //Assign values received to the projecttype and projectname variables
    var projecttype = arg1,
      projectname = arg2;

    //Pass two parameters of cli to the generator for processing
    generator.generate(projecttype, projectname);


  }




}
