var test = require('tape');
var sinon = require('sinon');
// var foo = require('./question-1-original.js');
var foo = require('./question-1.js');

test('Foo should call callback with error only once', function(assert) {  
  // given
  var callback = sinon.spy();

  // when
  var fooOnError = foo(function(callback) {
    callback('err', null);
  });
  fooOnError(callback);

  // then
  assert.equal(callback.callCount, 1, 'callback should be called once.');
  assert.ok(callback.calledWith('err'));
  assert.end();
});

test('Foo should call callback with success only once', function(assert) {
  // given
  var callback = sinon.spy();

  // when
  var fooOnSuccess = foo(function(callback) {
    callback(null, 'success');
  });
  fooOnSuccess(callback);

  // then
  assert.equal(callback.callCount, 1, 'callback should be called once.');
  assert.ok(callback.calledWith(null, 'success'));
  assert.end();
});
