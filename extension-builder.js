#!/usr/bin/env node

var program = require('commander');
var config = require('./config/const.js');

program
    .version(config.VERSION)
    .description('Build extension for multi browsers');

program
    .parse(process.argv);