function howdy(person, greeting) {
	return person + ' says ' + greeting;
}
var greeting = howdy('Rebecca Schoenrock', 'hi there!');
console.log(greeting);

var numba = function (string) {
	if (string.length < 7) {
		console.log('What a short little word!');
	} else if (string.length > 7) {
		console.log("I’m sorry, but that's too many to count");
	} else {
		console.log('7, what a perfect choice!');
	}
};
numba('7');
numba('seventy');
numba('university');

function inception(display, favMovie) {
	display(favMovie);
}
var movie = 'Castaway';
favMovie(movie);
function favMovie(title) {
	console.log(title + ' is a fantastic movie.');
}
