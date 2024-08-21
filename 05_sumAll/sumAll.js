const sumAll = function(num1, num2) {
    //are the arguments positive integers?
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || num1 < 0 || num2 < 0) {
        console.log('error')
        return 'ERROR'
    }
    if ( !Number.isInteger(num1) || !Number.isInteger(num2)){
        return 'ERROR'
    }
    let sum = 0;
    //identify bigger number and set each one to correct point in array
    let smaller = 0;
    let bigger = 0;
    if (num1 < num2) {
        smaller = num1;
        bigger = num2;
    } else if (num1 > num2) {
        smaller = num2;
        bigger = num1;
    } else {
        smaller = num1;
        bigger = num2;
    }
    let counter = smaller;
    while (counter <= bigger) {
        sum += counter;
        // console.log(counter);

        counter++
    }
    console.log('sum', sum)
    return sum;
};

// sumAll(1, 3)
// Do not edit below this line
module.exports = sumAll;
