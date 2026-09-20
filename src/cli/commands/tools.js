const {listTools}=require('../../tools/registry'); function run(){listTools().forEach(t=>console.log(`- ${t.name}: ${t.description}`));} module.exports={run};
