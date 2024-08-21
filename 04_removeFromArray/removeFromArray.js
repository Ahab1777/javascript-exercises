
//receives array and target
//identify value to be removed
//loop over target array and remove every instance of the value to be removed
//repeat last two steps for each target
//return final array


const removeFromArray = function(targetGroup, ...valuesToBeRemoved) {
    console.log('targetGroup:', targetGroup, 'valuesToBeRemoved:', valuesToBeRemoved)
    let counter = 0;
    //current value to be removed
    while (counter < valuesToBeRemoved.length) {
        let counter2 = 0;
        //loop over target group to remove each item matching the current value to be removed
        while (counter2 < targetGroup.length) {
            if (targetGroup[counter2] === valuesToBeRemoved[counter]) {
                targetGroup.splice(counter2, 1)
            } else {
                counter2++
            }
        }
        counter++
    }
    console.log(targetGroup)
    return targetGroup;
};

removeFromArray([1, 2, 2, 3], 2)

// Do not edit below this line
module.exports = removeFromArray;
