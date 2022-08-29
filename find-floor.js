function findFloor(arr,val) {
    let answer = 0
  for(let i =0; i<arr.length; i++){
      if(arr[i] <= val){
          answer = arr[i]
      } else if(val < Math.min(...arr)){
          return -1
      }
  }
  return answer
}
console.log(findFloor([-2,1,2,8,10,10,12,19], -1))
module.exports = findFloor
