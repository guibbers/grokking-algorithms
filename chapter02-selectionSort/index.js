function getRandomNumber(){
    return Math.floor(Math.random() * 101);
};

// function that creates a random array
function createRandomArray(size){
    const randomArray = [];
    for (i = 1; i < size; i++) {
        let randomNumber = getRandomNumber();
        if(randomArray.includes(randomNumber)){
            randomNumber = getRandomNumber();
        } else {
            randomArray.push(randomNumber);
        }
    }
    return randomArray
}

// this will search for the smallest number of an array
function searchForSmallest(array){
    let smallest = array[0];
    let smallestIndex = 0;
    for (let i = 1; i < array.length; i++){
        if(array[i] < smallest) {
            smallest = array[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

function selectionSort(array) {
    const newArray = [];
    let originalArrayLength = array.length
    for (let i = 0; i < originalArrayLength; i++){
        let smallest = searchForSmallest(array);
        newArray.push(array.splice(smallest, 1)[0]);
    };
    return newArray;
}

console.log(selectionSort(createRandomArray(100)));