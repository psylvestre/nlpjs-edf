var qqq = require('@nlpjs/request');

let options = {
  url: 'http://api.icndb.com/jokes/random',
  proxy: 'http://PSCB084N:Magritte1234$@10.129.42.140:3131'
};

console.log('Test');
async function runQuery() {
  console.log('Text');
  console.log(qqq);
  console.log(qqq.request);
  const something = await qqq.request(options);
  console.log(something);
};

runQuery();
