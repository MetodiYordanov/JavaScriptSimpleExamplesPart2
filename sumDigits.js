function sumOfDigits(num) {
    let numAsArray = Array.from(String(num), Number);
    let sum = 0;
    for (let i = 0; i < numAsArray.length; i++) {
        sum += numAsArray[i];
    }
    console.log(sum);
}

// example input:
sumOfDigits(245678);
sumOfDigits(97561);
sumOfDigits(543);