function sortedFrequency(arr,target) {
    let count = 0
    if(arr.indexOf(target) === -1){
        return -1
    }
    for(let i = 0; i <arr.length; i++){
        if (arr[i] === target){
            count ++
        }
    }
    return count
}
 console.log(sortedFrequency([1,1,2,2,2,2,3],2))

module.exports = sortedFrequency
