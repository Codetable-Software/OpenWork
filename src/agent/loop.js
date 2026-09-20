async function runLoop(step,maxSteps){for(let i=1;i<=maxSteps;i++)if(await step(i))return;throw new Error('Agent loop exceeded limit.');} module.exports={runLoop};
