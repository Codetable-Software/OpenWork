const c=n=>s=>process.stdout.isTTY?`\x1b[${n}m${s}\x1b[0m`:s; module.exports={bold:c(1),green:c(32),yellow:c(33),red:c(31),cyan:c(36)};
