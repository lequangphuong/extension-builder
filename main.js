#!/usr/bin/env node

let args = process.argv.slice(2);

for (let j = 0; j < args.length; j++) {
    let arg = args[j];
    if (arg === '-V' || arg === '-v' || arg === '--version' || arg === '-version') {
        console.log('1.0');
    }
}