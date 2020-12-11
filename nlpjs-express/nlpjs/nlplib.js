const { dockStart } = require('@nlpjs/basic');

(async () => {
  console.log('Starting NLP...');
  const dock = await dockStart();
  nlp = dock.get('nlp');
  await nlp.train();
  console.log(nlp);
  console.log('NLP Started.');
  exports.nlp = nlp;
}) ();

exports.talking = async function(question) {
  console.log('I am talking with a bot...');
  const conversation = await nlp.process('fr', question);
  console.log(conversation);
  return conversation;
};
