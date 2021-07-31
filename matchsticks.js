###### Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step.
#### Examples
###### matchHouses(1) ➞ 6

###### matchHouses(4) ➞ 21

###### matchHouses(87) ➞ 436

##### Solution


function matchHouses(step) {
	if(step === 0){
		return 0;
	}else{
		return (step * 6) - (step - 1);
	}
}
