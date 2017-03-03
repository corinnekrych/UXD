var test = require('tape');
var sinon = require('sinon');
// var remoteMathService = require('./question-2-original.js');
var remoteMathService = require('./question-2.js');

test('multiple callback are called before combining them', function(assert) {  
  assert.plan(1);
  // given
  function callback(err, value) {
    // then
    assert.equal(value, 3, 'callback should be called with value 3.');
  }
  // when
  remoteMathService(callback);
});
