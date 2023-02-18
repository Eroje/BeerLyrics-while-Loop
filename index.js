var numberOfBottles = 99;
var bottleWord = "bottle";

function beerLyrics() {

  while (numberOfBottles >= 0) {
    
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    }  
    else if (numberOfBottles <= 0) {
      bottleWord = "No more bottles"
    } 
    else {
      bottleWord = "bottles"
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
    
	numberOfBottles--;
    
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall...");
  }
}
