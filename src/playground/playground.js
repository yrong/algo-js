// Place your playground code here.

function getOneBits(n) {
    // Write your code here
    let msb = 0; current = n;indexs=[];total=0;
    while (current != 0) {
        current = Math.floor(current / 2);
        msb++;
    }
    for (let i = 0; i < msb; i++){
        var mask = 1 << i
        if ((n & mask) != 0) {
            total++
            indexs.push(msb-i)
        }
    }
    indexs.push(total)
    let result = indexs.reverse()
    return result
}

getOneBits(161)


function kDifference(arr, k) {
    let cnt=0
    for(let i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(Math.abs(arr[j]-arr[i])===k){
                cnt++
            }
        }
    }
    return cnt
}

kDifference([2,4,6,8,10,12],2)



function pivot(numbers) {

    // Find a pivot index by testing each index
    for (var i = 0; i < numbers.length; i++) {
        var leftSum = sum(numbers.slice(0, i));
        var rightSum = sum(numbers.slice(i + 1));

        if (leftSum === rightSum) {
            return i;
        }
    }

    // No pivot found
    return -1;
}

// More efficient, less readable version of pivot()
function pivotEfficient(numbers) {

    // Keep track of running sums as we iterate array
    var leftSum = 0, rightSum = sum(numbers);

    for (var i = 0; i < numbers.length; i++) {
        rightSum -= numbers[i];

        if (leftSum === rightSum) {
            return i;
        }

        leftSum += numbers[i];
    }

    // No pivot found
    return -1;
}


// Return the sum of the numbers in the given array
function sum(numbers) {
    return numbers.reduce(function(acc, current) {
        return acc + current;
    }, 0);
}

console.log(pivotEfficient([1, 4, 6, 3, 2]))



function pthFactor(n, p){
  const factors = number => Array
    .from(Array(number + 1), (_, i) => i)
    .filter(i => number % i === 0)
  let nums = factors(n)
  if(p>nums.length)
    return 0
  return nums[p-1]
}

console.log(pthFactor(49));
