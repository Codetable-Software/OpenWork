async function execute(fn){if(typeof fn!=='function')throw new TypeError('Expected function');return fn();} module.exports={execute};
