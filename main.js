//1. Addition
let sum =0;
for( let i= 200; i <= 2700; i++){
  if(i % 3==0 && i % 5 == 0){

  }else if (i %3 == 0 || i % 5 ==0){
    sum = sum +i;
  }
}
console.log(`The total addition is: ${sum}`);

//2. Shift the Values
let x = [2,1,6,4,-7];
let y = [];// we had to put [] to define it as an array.
for(let i= 0, j = x.length-1 ; i<x.length; i++, j--){
   y[j] = x[i];
}
console.log(`The array before shifting the values ${x}`);
console.log(`The array after shifting the values ${y}`);

//3. FizzBuzz
let z =[];
for(let i = 0; i<135; i++){
  if(((i+1)% 3 == 0 )&& ((i+1)%5 == 0)){
    z[i] = 'true';
  } else if((i+1)%3 == 0){
    z[i]= 'Fizz';
  } else if ((i+1)%5 == 0){
    z[i] = 'Buzz';
  } else {
    z[i] = i+1;
  }
 
}
console.log(z);

//4. Fibonacci
let w =[0,1];
for(let i= 2; i<50; i++){
  w[i] = w[i-1] + w[i-2];
}
console.log(w);

//5. Remove the Negative
let o = [ 1,-2, 4, 1, -3, 7];
let n =[];
let j = 0;
for(let i=0; i<o.length; i++){
  if(o[i] >= 0){
    n[j] = o[i];
    j++;
  }
}
console.log(`The old array with negative values: ${o}`);
console.log(`The new array without negative values: ${n}`);

//6. Communist Censorship 
//Important note: characters in strings are immutable, so we have to declare an empty string ''
function star(arr, word){
  for(let i =0; i < arr.length; i++){
    if(arr[i] === word){let newWord ='';
      for(let j =0; j<word.length; j++){
        newWord +='*';
      }
      arr[i] = newWord; // we have assign the new value to the old value
    }
  }
  return arr;
}
let m = ['Man', 'I','Love','The','Matrix','Program'];
console.log(star(m, 'Program'));

