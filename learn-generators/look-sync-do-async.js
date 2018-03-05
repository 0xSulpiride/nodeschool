var fs = require('fs');

function run (generator) {
  var it = generator(go);
  function go (err, result) {
  	if(err) {
  		return it.throw('No such dir');
  	}
    return it.next(result);
  }
  go();
}

run(function* (done) {
  // catch exception
  var firstFile;
  try {
  	var dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
  	firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined
	} catch(err) {
		firstFile = null;
	}

  console.log(firstFile);
});