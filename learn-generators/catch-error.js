function *upper (items) {
	while(items.length) {
		try {
			yield items.shift().toUpperCase();
		} catch(err) {
			yield null;
		}
	}
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
  console.log(item);
}
// want to log: A, B, null, C