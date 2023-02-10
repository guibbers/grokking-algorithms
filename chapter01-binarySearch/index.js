const arrayOfNumbers = [...Array(101).keys()];
const randomIndex = Math.floor(Math.random() * arrayOfNumbers.length);
const chosenNumber = arrayOfNumbers[randomIndex];
console.log(`Shhh! The chosen number is: ${chosenNumber}`);

function binarySearch(list, item) {
    low = 0;
    high = list.length - 1;

    while(low <= high) {
        let middle = Math.floor((low + high) / 2);
        let guess = (list[middle]);

        if( guess === item) {
            return item;
        }else if( guess > item) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    };
}

console.log(binarySearch(arrayOfNumbers, chosenNumber));