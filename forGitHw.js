//Задание 1
function myFunction(a, b) {
    let sum = 0;
    let count = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            sum += i;
            count++;
        }
    }
    console.log('Сумма четных чисел в диапазоне равна:' + sum);
    console.log('Количество четных чисел в диапазоне равно:' + count);
}

//Задание 2
function isPrime(num) {
    if (num > 1) {
      for (let i = 2; i < num; i++) {
        if (num % i == 0) {
          console.log ('false');
        }
      }
}else {
    console.log ('true');
  } 
  }

//Задание 3
function getSqrtBySequentialSelection(number){
let guess = 1;
const error = 0.001;
const maxIterations = 100;
let iterations = 0;
let difference = Math.abs(guess * guess - number);
while (difference > error && iterations < maxIterations) {
guess = (guess + number / guess) / 2;
difference = Math.abs (guess * guess - number);
iterations++;
}
return (guess);
}

function getSqrtByBinarySearch(number) {
    let lowerBound = 0;
    let upperBound = number;
    const error = 0.001;
    while (upperBound - lowerBound > error){
        const midpoint = (upperBound + lowerBound) / 2;
        if (midpoint * midpoint > number) {
            upperBound = midpoint;
        }else {
            lowerBound = midpoint;
        }
    }
    return (upperBound + lowerBound) / 2;
}

//Задание 4
function getFactorial(n) {
    return (n != 1) ? n * getFactorial(n-1) : 1;
}

//Задание 4b
function digitSum (y) {
    let sum = 0;
    let str = String(y);
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    return sum;
}

