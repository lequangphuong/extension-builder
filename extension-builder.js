#!/usr/bin/env node

/**
 * Import package
 */
const program = require('commander');
const config = require('./config/const.js');
const tool = require('./tool/tool');

/**
 * Configuration
 */
program
    .version(config.VERSION)
    .description('Extension builder');

/**
 * Build commands
 */
program
    .command('build <browser>')
    .usage('<browser>')
    .description('Build extension for browsers')
    .action(browser => {
        if (config.BROWSERS[browser]) {
            tool.build(browser);
        } else {
            console.log(`Not support browser ${browser} yet`);
            return;
        }
    })
    .on('--help', function () {
        console.log('  Examples:');
        console.log();
        Object.keys(config.BROWSERS).forEach(key => {
            console.log(`        $ build ${key}`);
        });
        console.log();
    });

/**
 * parse arguments
 */
program
    .parse(process.argv);