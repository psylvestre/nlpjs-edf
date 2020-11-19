## onIntent(agent.acquaintance)
// compiler=javascript
let options = {
    url: 'http://api.icndb.com/jokes/random',
    proxy: 'http://PSCB084N:Magritte1234$@10.129.42.140:3131'
};

const something = request.get(options);
if (something && something.value && something.value.joke) {
  input.answer = something.value.joke;
}
