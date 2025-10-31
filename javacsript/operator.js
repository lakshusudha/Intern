
//qs1//
let x=15,y=5;
console.log("sum",x+y);
console.log("dff",x-y);
console.log("multiply",x*y);
console.log("divi",x/y);
//qs2//
let a=10,b=20,c=30;
let average=(a+b+c)/3;
console.log("avg",average);
//qs3//
let l=7,br=5;
let area=l*br;
console.log("area of rectangle",area);
//qs4//
let cel=20;
let fer=(cel*9/5)+32;
console.log("fer",fer);
//qs5//
let n1=10,n2=20;
console.log("rem",n1%n2);
//qs6//
let num1=30;
num1 += 10;
console.log("after",num1);
//qs7//
let n3=4;
n3 *=5;
console.log("after",n3);
//qs8//
let n5=15;
n5 -=3;
console.log("ans", n5);
//qs9//
let s=10;
s/=2;
console.log("div",s);
//qs10//
let nums=10;
nums+=2;
nums-=2;
nums*=2;
nums/=2;
console.log("operators",nums);
//qs11//
let z=7,w=5;
console.log("equal?",z==y);
//qs12//
let q=15,g=12;
console.log("is greater than",q>g);
//qs13//
 let str1="sow",str2="SOW";
 console.log("string,",str1===str2);
 //qs14//
 let no=50;
 console.log("no,",no<=100);
 //qs15//
 let v1=20;
 let v2="10";
 console.log("equal or not,",v1===v2);
 //qs16//
 let d=20;
 if(d>=10 && d<=50){
    console.log(d+"btwn 10 and 50");
 }else{
    console.log(d+"not btwn 10 and 50");
 }
 //qs18// 
  let israin=false;
  console.log("it is not raining",!israin);
  //qs19//
  let age=20;
  let id=true;
  if ((age>=18 && id)||age>60)
{
    console.log("allow");
}else {
    console.log("not allow");
}
//qs20//
let mark=45;
let ispass=mark>=35;
console.log("pass or not:",ispass); 
//qs21//
let count = 0;
count++;
console.log("Count:", count);

// 22//
let num = 5;
num--;
console.log("After decrement:", num);
//23//
let k= 5;
console.log("Pre-increment (++x):", ++x); 
let h= 5;
console.log("Post-increment (y++):", y++); 
console.log("y after post-increment:", y);

// 24//
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
//25//
let v = 5, t= 3;
let result = ++a + b--;
console.log("Result:", result, "a:", a, "b:", b);
// 26//
let number = 7;
console.log(n % 2 === 0 ? "Even" : "Odd");

// 27//
let r = 20, j = 10;
console.log(p > q ? p + " is greater" : q + " is greater");

// 28//
let ages = 19;
console.log(ages >= 18 ? "Can Vote" : "Cannot Vote");

// 29//
let value = -5;
console.log(val > 0 ? "Positive" : val < 0 ? "Negative" : "Zero");

// 30//
let string = "";
console.log(str === "" ? "String is empty" : "String is not empty");
// 26//
let n = 7;
console.log(n % 2 === 0 ? "Even" : "Odd");

// 29//
let val = -5;
console.log(val > 0 ? "Positive" : val < 0 ? "Negative" : "Zero");

// 30//
let str = "";
console.log(str === "" ? "String is empty" : "String is not empty");

//31//
let name = "John";    
let score = 95;       
let isPassed = true;   

console.log(name + " scored " + score);
console.log("Passed?", isPassed);
console.log("Score doubled:", score * 2);

//32//
let m = 10, no1 = 20;
m = m + n1;
n1 = m - n1;
m = m - n1;
console.log("m:", m, "n:", n1);
//33//
let marks = 80;
if (marks > 50 && marks + 10 >= 90) {
    console.log("High Performer");
} else {
    console.log("Normal Performance");
}
//34//
let score2 = 85;
let result2 = score2 >= 90 ? "Excellent"
            : score2 >= 35 ? "Pass"
            : "Fail";
console.log(result2);
//35//
let nA = 10, nB = 5;

console.log("Sum:", nA + nB);
console.log("Difference:", nA - nB);
console.log("Product:", nA * nB);
console.log("Quotient:", nA / nB);
console.log("Remainder:", nA % nB);

console.log("Is nA > nB?", nA > nB);
console.log("Logical AND test:", (nA > 0 && nB > 0));
console.log("Ternary:", nA > nB ? "nA bigger" : "nB bigger");






