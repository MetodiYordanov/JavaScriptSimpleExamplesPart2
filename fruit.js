function calculateNeededMoney(fruit, weightInGrams, pricePerKg) {
    let weightInKg = weightInGrams / 1000;
    let neededMoney = weightInKg * pricePerKg;

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

// example input:
calculateNeededMoney('orange', 2500, 1.80);
calculateNeededMoney('apple', 1563, 2.35);