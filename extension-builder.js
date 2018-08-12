#!/usr/bin/env node

var program = require('commander');
var config = require('./config/const.js');

program
    .version(config.VERSION);

program
    .parse(process.argv);