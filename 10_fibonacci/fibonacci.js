//1, 1, 2, 3, 5, 8, etc.


const fibonacci = function(target) {
    if (target < 0) {
        return "OOPS"
    }
    
    if (target < 1){
        return 0
    }

    let fibonacciArray = []
    let fibonacciSum = 0
    
    for (let i = 0 ; i <= target ; i++){
        if(i === 0){
            fibonacciSum = 0
        } else if (i === 1) {
            fibonacciSum = 1
        } else {
            console.log('current sum =', fibonacciArray[i - 1], '+', fibonacciArray[i - 2])
            fibonacciSum = (fibonacciArray[i - 1] + fibonacciArray[i - 2])
            console.log('this is the sum done', fibonacciSum) 
        }
        fibonacciArray.push(fibonacciSum)

    }
    console.log('this is the array', fibonacciArray)
    console.log('this is the target ', fibonacciArray[target])
    return fibonacciArray[target]
};

//fibonacci(4)

// Do not edit below this line
module.exports = fibonacci;
