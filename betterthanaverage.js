function betterThanAverage(arr) {
    var sum = 0;
    var count = 0
    for (var i=0; i<arr.length; i++ ){
        sum = sum + arr[i]
    }    
    sum = sum/arr.length 
    for (var i=0; i<arr.length; i++ ){
        if (arr[i]>sum){
        count = count + 1
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
