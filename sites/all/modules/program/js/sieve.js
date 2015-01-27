window.sieve ={};
sieve.filters = {};

sieve.add = function(filterName, func){
	filter = {
		'name': filterName,
		'filter': func,
		'active': true
	}
	sieve.filters[filterName] = filter ;
};

sieve.remove = function(filterName){
	delete sieve.filters[filterName];
};

sieve.list = function(){
	console.dir(sieve.filters);
};

sieve.clear = function(){
	sieve.filters = {};
};

// testing
sieve.clear();

sieve.add('test', function(){
	console.log('test');
});



sieve.add('test', function(){
	console.log('test');
});

sieve.add('test2', function(){
	console.log('test');
});

