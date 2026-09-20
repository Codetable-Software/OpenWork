const { Agent } = require('../../agent/agent');
const { getConfig } = require('../../config/manager');
async function run(args){const mi=args.indexOf('--model'); let model=null; if(mi>=0){model=args[mi+1]; args.splice(mi,2);} const task=args.join(' ').trim(); if(!task) throw new Error('Agent task is required.'); const c=getConfig(); return new Agent({apiKey:c.apiKey,model:model||c.model,maxSteps:c.maxAgentSteps,permissions:c.permissions}).run(task);}
module.exports={run};
