let number=7;
let count=0;

for(let i=1;i<=number;i++){
     if(number%i===0){
          console.log("prime number");
     }
     else{ 
          console.log("not prime number");
          count++;
     }
     console.log(i);
}
