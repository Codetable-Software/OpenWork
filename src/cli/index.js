const { showHelp } = require('./commands/help');
const commands = { chat: require('./commands/chat'), agent: require('./commands/agent'), config: require('./commands/config'), model: require('./commands/model'), tools: require('./commands/tools') };
async function main(argv = process.argv.slice(2)) { const [cmd, ...args] = argv; if (!cmd || cmd === 'help' || cmd === '--help' || cmd === '-h') return showHelp(); if (cmd === '--version' || cmd === '-v') return console.log('OpenWork 1.0.0'); if (!commands[cmd]) throw new Error(`Unknown command: ${cmd}`); return commands[cmd].run(args); }
module.exports = { main };
