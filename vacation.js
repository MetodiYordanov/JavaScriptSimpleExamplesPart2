function calculateTotal(numberOfPeople, groupType, day) {
    let pricePerPerson;
    let result;
    switch (day) {
        case 'Friday':
            switch (groupType) {
                case 'Students':
                    pricePerPerson = 8.45;
                break;
                case 'Business':
                    pricePerPerson = 10.90;
                break;
                case 'Regular':
                    pricePerPerson = 15;
                break;
            }
        break;
        case 'Saturday':
            switch (groupType) {
                case 'Students':
                    pricePerPerson = 9.80;
                break;
                case 'Business':
                    pricePerPerson = 15.60;
                break;
                case 'Regular':
                    pricePerPerson = 20;
                break;
            }
        break;
        case 'Sunday':
            switch (groupType) {
                case 'Students':
                    pricePerPerson = 10.46;
                break;
                case 'Business':
                    pricePerPerson = 16;
                break;
                case 'Regular':
                    pricePerPerson = 22.50;
                break;
            }
        break;
    }

    result = pricePerPerson * numberOfPeople;
    if (groupType === 'Students' && numberOfPeople >= 30) {
        result -= result * 0.15;
    }
    else if (groupType === 'Business' && numberOfPeople >= 100) {
        let freeForTenPeople = pricePerPerson * 10;
        result -= freeForTenPeople;
    }
    else if (groupType === 'Regular' && numberOfPeople >= 10 && numberOfPeople <= 20) {
        result -= result * 0.05;
    }

    console.log(`Total price: ${result.toFixed(2)}`);
}

// example input:
calculateTotal(30, 'Students', 'Sunday');
calculateTotal(40, 'Regular', 'Saturday');