//for loop//
//1 qs//
 for(let i=1;1<=10;i++){
    console.log(i)
 }
//2qs//
for(let i=2;i<=20;i++){
    console.log(i)
}

//3qs//
let i;
let a=5;
for(i=1;i<=10;i++){
    console.log(`{i}*{a}={i*a}`)
}
//qs4//
let sum=0;
for(i=1;i<=100;i++) sum+=i;

//qs 5//
const arr = ["apple", "banana", "cherry"];
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

// qs6//
function factorialFor(n) {
  if (n < 0) return undefined;
  let f = 1;
  for (let i = 2; i <= n; i++) f *= i;
  return f;
}
console.log("5! =", factorialFor(5)); 

// qs7//
for (let i = 1; i <= 50; i += 2) console.log(i);

// qs8.//
function reverseStringFor(s) {
  let rev = "";
  for (let i = s.length - 1; i >= 0; i--) rev += s[i];
  return rev;
}
console.log(reverseStringFor("hello")); 

// qs9//
function countVowels(s) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < s.length; i++) if (vowels.includes(s[i])) count++;
  return count;
}
console.log(countVowels("I love JavaScript"));

// qs10//
for (let i = 1; i <= 10; i++)
     console.log(`${i}^2 = ${i * i}`);

//while loop//
// 1//
let z = 1;
while (i <= 10) {
  console.log(z);
  i++;
}

// 2.//
function sumOfDigits(num) {
  num = Math.abs(Math.floor(num));
  let s = 0;
  while (num > 0) {
    s += num % 10;
    num = Math.floor(num / 10);
  }
  return s;
}
console.log(sumOfDigits(12345));

// 3//
let j = 1;
while (j <= 100) {
  if (j % 3 === 0) console.log(j);
  j++;
}

// 4//
function factorialWhile(n) {
  if (n < 0) return undefined;
  let res = 1;
  let k = 2;
  while (k <= n) {
    res *= k;
    k++;
  }
  return res;
}
console.log(factorialWhile(6));

// 5//
function reverseNumber(num) {
  const sign = num < 0 ? -1 : 1;
  num = Math.abs(Math.floor(num));
  let rev = 0;
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return rev * sign;
}
console.log(reverseNumber(123));

// 6//
function fibTerms(nTerms) {
  const res = [];
  let a = 0, b = 1, count = 0;
  while (count < nTerms) {
    res.push(a);
    [a, b] = [b, a + b];
    count++;
  }
  return res;
}
console.log(fibTerms(10)); 

// 7//
function digitCount(num) {
  num = Math.abs(Math.floor(num));
  if (num === 0) return 1;
  let cnt = 0;
  while (num > 0) {
    cnt++;
    num = Math.floor(num / 10);
  }
  return cnt;
}
console.log(digitCount(98765)); 

// 8//
function largestDigit(num) {
  num = Math.abs(Math.floor(num));
  let maxD = 0;
  if (num === 0) return 0;
  while (num > 0) {
    const d = num % 10;
    if (d > maxD) maxD = d;
    num = Math.floor(num / 10);
  }
  return maxD;
}
console.log(largestDigit(50739)); 

// 9//
const arr2 = [10, 20, 30, 40];
let idx = 0;
while (idx < arr2.length) {
  console.log(arr2[idx]);
  idx++;
}

//do while//
//1//
let x = 1;
do {
  console.log(i);
  x++;
} while (x <= 10);
//2//
let choice = 1;

while(choice != 4){
    console.log("1. Start");
    console.log("2. Settings");
    console.log("3. Help");
    console.log("4. Exit");
    choice = 4;
    if(choice == 1){
        console.log("Starting...");
    } 
    else if(choice == 2){
        console.log("Opening Settings...");
    }
    else if(choice == 3){
        console.log("Help Menu...");
    }
    else {
        console.log("Exiting Program...");
    }
    console.log("------");
}
//qs3//
let num = 5; 
for(let i = 1; i <= 10; i++){
    console.log(num + " x " + i + " = " + (num * i));
}
//qs4//
let n = 10;
let s = 0;
for(let i = 1; i <= n; i++){
    sum += i;
}
console.log("Sum =", sum);
//5//
let password;
let correct = "1234";

while(password !== correct){
    password = "1234"; 
}
console.log("Access");
//6//
for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
//7//

let number = 12345;
let count = 0;

while(number > 0){
    number = Math.floor(number / 10);
    count++;
}
console.log("Digits =", count);
//8//
let str = "hello";
let y = str.length - 1;
let result = "";

do{
    result += str[i];
    i--;
}while(i >= 0);

console.log(result);
//9//
for(let i = 1; i <= 5; i++){
    console.log(i + " cube =", i * i * i);
}
//10//
let total = 0;
let addValue = 30; // same input each time

while(total <= 100){
    total += addValue;
}
console.log("Total =", total);




