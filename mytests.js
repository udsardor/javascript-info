// console.log("Garbage: " + garbage)
// console.log("Current: " + current_sum)

// function getMaxSubSum(arr) {
// let current_sum = 0,
//     maximum_sub = 0,
//     latest = 0;

// for(let item of arr){
//     if(item > 0){
//         latest = current_sum = maximum_sub;
//         current_sum = item;

//         console.log("st if Current: " + current_sum)
//         console.log("st if Latest: " + latest)
//         console.log("st if Maximu: " + maximum_sub)
//         if(current_sum < 0){
//             current_sum -= item
//             console.log("nd if Current: " + current_sum)
//             console.log("nd if Latest: " + latest)
//             console.log("nd if Maximu: " + maximum_sub)
//         }else if(item > 0) {
//             current_sum += item;
//             console.log("rd if Current: " + current_sum)
//             if(current_sum > latest){
//                 maximum_sub = current_sum
//                 console.log("th if Maximum: " + current_sum)
//             }else if(current_sum < latest){
//                 maximum_sub = latest
//                 console.log("latest if Maximum: " + maximum_sub)
//             }
//         }
//     }
// }
// return maximum_sub

// }
// console.log(getMaxSubSum([-1, 2, 3, -9]));

function getMaxSubSum(arr) {
  let maximum_sub = arr[0],
    current_sum = 0;

    for(let i of arr){
        current_sum += item;

        if(current_sum > 0){
            
        }
    }

  return current_sum
}
console.log(getMaxSubSum([-1, 2, 3, -9]));
