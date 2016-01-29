

var array = [7, 13, 11, 21, 42, 1880];

//CHALLENGE - create new array in which each value is 2* 
// the original value
console.log(_.map(array, function(num){return num*2}));

//REDUCE - takes data and returns a single value 

var string = 'Gym Tan Laundry'

console.log(_.reduce(
	string.split(' '), 
	function(memo, currentWord){
		return memo+currentWord[0]+'.'
	}, 
	''))
// FIND - searches an array for ONE matching item to criteria
var teddyBears = [
	{
		name		:'Steve',
		fluffiness	:1, 
		diet		:'souls',
		huggability	:5,
		ownedBySean	:true
	},
	{
		name		:'Teddy Ruxpin',
		fluffiness	:10, 
		diet		:'batteries',
		huggability	:5,
		ownedBySean	:false
	},
	{
		name		:'Ted',
		fluffiness	:10, 
		diet		:'child tears',
		huggability	:7,
		ownedBySean	:true
	},
	{
		name		:'Hulk',
		fluffiness	:1, 
		diet		:'batteries',
		huggability	:5,
		ownedBySean	:true
	},
]



console.log(_.find(teddyBears, function(bear){
	return bear.huggability === 5
}))
// PLUCK -  searches an array of objexts for property values
// UNIQ - accepts an array and checks for duplicates
var shoppingList = _.uniq(_.pluck(teddyBears, 'diet'))

console.log(shoppingList)

// CHAIN - links underscore methods together
		//start with _.chain and end with _.value()

 console.log(_.chain(teddyBears)
	.pluck('diet')
	.uniq()
	.value())
 

