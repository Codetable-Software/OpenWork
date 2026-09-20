#!/usr/bin/env node
const { main } = require('../src/cli');
main().catch(e => { console.error(`OpenWork error: ${e.message}`); process.exitCode = 1; });
