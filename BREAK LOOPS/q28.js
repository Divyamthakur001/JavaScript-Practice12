// 28. Find First Number Divisible by Both
// Loop from 1 to 100.
// Find the first number greater than 20 that is divisible by both 4 and 6.
// Print it and stop searching.

let count=0;
for(let i = 1; i <= 100; i++) {
     if(i>20 && i%4===0 && i%6===0) {
          console.log(i);
          break;
     }
     
}