function findRotationCount(arr) {
  let count = 0
  let min = Math.min(...arr)
  for(let i = 0; i<arr.length; i++){
    if(arr[i] > min){
        count ++
    } else if(arr[i] === min){
        return count
    }
  }

  return 0
}

console.log(findRotationCount([7, 9, 11, 12, 15]))
module.exports = findRotationCount
