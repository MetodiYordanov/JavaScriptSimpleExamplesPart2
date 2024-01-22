function areAllDigitsSame(num) {
    let numberAsArray = Array.from(String(num), Number);
    let previousDigit;
    let areAllDigitsSame = true;
    let sumDigits = 0;

    for (let i = 0; i < numberAsArray.length; i++) {
        sumDigits += numberAsArray[i];
        if (i === 0) {
            previousDigit = numberAsArray[i];
            continue;
        }
        if (numberAsArray[i] !== previousDigit) {
            areAllDigitsSame = false;
        }
    }

    console.log(areAllDigitsSame);
    console.log(sumDigits);
}

// example input:
areAllDigitsSame(2222222);
areAllDigitsSame(1234);