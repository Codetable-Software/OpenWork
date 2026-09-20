const readline = require('node:readline');
const { createClient } = require('../../ai/client');
const { getConfig } = require('../../config/manager');
async function run(args) { const cfg = getConfig(); const i=args.indexOf('--model'); const model=i>=0?args[i+1]:cfg.model; const client=createClient({apiKey:cfg.apiKey,model}); const rl=readline.createInterface({input:process.stdin,output:process.stdout}); const history=[]; const ask=()=>new Promise(r=>rl.question('You: ',r)); console.log(`OpenWork chat — ${model}\nType /exit to leave.`); try { while(true){const text=(await ask()).trim(); if(text==='/exit'||text==='/quit') break; if(!text) continue; history.push({role:'user',parts:[{text}]}); try {const r=await client.generate(history); console.log(`\nAI: ${r.text}\n`); history.push({role:'model',parts:[{text:r.text}]});} catch(e){history.pop(); console.error(`Error: ${e.message}`);}}} finally{rl.close();} }
module.exports={run};
