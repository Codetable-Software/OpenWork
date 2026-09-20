const {createClient}=require('./client'); async function chat(o){return createClient(o).generate(o.messages);} module.exports={chat};
