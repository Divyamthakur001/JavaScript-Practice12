// 27. Find First Divisible Number
// Loop from 10 to 100.
// Find the first number that is divisible by 7.
// Print it and stop the loop.

let count=0;
for(let i = 10; i <= 100; i++) {
    if(i%7 === 0) {
     count++;
        break;
    }
    
}
          console.log(count);