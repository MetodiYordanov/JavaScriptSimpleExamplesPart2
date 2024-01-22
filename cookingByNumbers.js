function manipulateNumber(numAsString, firstCommand, secondCommand, thirdCommand, fourthCommand, fifthCommand) {
    let num = parseInt(numAsString);
    let commands = [firstCommand, secondCommand, thirdCommand, fourthCommand, fifthCommand];
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'chop') {
            num /= 2;
            console.log(num);
        }
        else if (commands[i] === 'dice') {
            num = Math.sqrt(num);
            console.log(num);
        }
        else if (commands[i] === 'spice') {
            num += 1;
            console.log(num);
        }
        else if (commands[i] === 'bake') {
            num *= 3;
            console.log(num);
        }
        else if (commands[i] === 'fillet') {
            num -= num * 0.2;
            console.log(num);
        }
    }
}

// example input:
manipulateNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop');
manipulateNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet');