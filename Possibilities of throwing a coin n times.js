/*
In this challenge you will be given an integer n, 
which is the number of times that is thown a coin. 
You will have to return an array of string for 
all the possibilities (heads[H] and tails[T]). 

Examples:
  coin(1) should return {"H", "T"}
  coin(2) should return {"HH", "HT", "TH", "TT"}
  coin(3) should return {"HHH", "HHT", "HTH", "HTT", "THH", "THT", "TTH", "TTT"}

When finished sort them alphabetically.

In C and C++ just return a char* with all elements separated by, (without space):
coin(2) should return "HH,HT,TH,TT"

INPUT:
  0 < n < 18
*/


// Solution

function coin(n, acc = '') {
  if (n === 0) {
    return [acc];
  }
  return [
    ...coin(n - 1, acc + 'H'), 
    ...coin(n - 1, acc + 'T')
  ];
}

// or

function coin(n) {
  let psbl = [];
  for(let i = 0; i < Math.pow(2, n); i++) {
    psbl.push(i.toString(2));
  }
  
  psbl.map((item, i, arr) => {
    if(item.length < n) {
      while(arr[i].length !== n) {
        arr[i] = '0' + arr[i];
      }
    }
    
    arr[i] = arr[i].replace(/0/g, 'H');
    arr[i] = arr[i].replace(/1/g, 'T');
  });
  return psbl;
}