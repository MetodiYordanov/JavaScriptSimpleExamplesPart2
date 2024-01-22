function solve(startNum, endNum) {
    let allNums = '';
    let sum = 0;
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
        allNums += i.toString() + ' ';
    }
    console.log(allNums.trim());
    console.log(`Sum: ${sum}`);
}

// example input:
solve(5, 10);
solve(0, 26);
solve(50, 60);