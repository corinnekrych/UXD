// doThing() defined elsewhere
module.exports = function(doThing) {
  function foo(callback) {
    doThing(function(err, res) {
      if (err) {
 	      callback(err);
 	      return;
      }
      callback(null, res);
    });
  }

  foo(function(err, res) {
    console.log('Done!. err=', err, ' : res = ', res);
  });

  return foo;
};
