//1
let str = "hello world";
let count = 0;
for (let ch of str.toLowerCase()) {
  if ("aeiou".includes(ch)) count++;
}
console.log(count);
//2
let str1 = "javascript";
let rev = "";
for (let i = str1.length - 1; i >= 0; i--) {
  rev += str1[i];
}
console.log(rev);
//3
let str2 = "madam";
let rev2 = "";
for (let i = str2.length - 1; i >= 0; i--) rev2 += str2[i];
console.log(str === rev ? "Palindrome" : "Not Palindrome");
//4
let string = "hello world program";
let result = string.split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(result);
//5
let x= "hello world js";
console.log(x.replace(/ /g, "-"));
//6
let sentence = "this is a test this is javascript";
let word = "is";
let count1 = sentence.split(" ").filter(w => w === word).length;
console.log(count1);
//7
let string1 = "ab12cd34";
let digits = "";
for (let ch of string1) if (!isNaN(ch) && ch !== " ") digits += ch;
console.log(digits); 
//8
let y = "Hello JavaScript";
console.log(y.toLowerCase().includes("script"));
//9
let z = "   hello js   ";
console.log(z.trim());
//10
let xy = "sowww";
let obj = {};
for (let ch of xy) obj[ch] = (obj[ch] || 0) + 1;
console.log(obj);
//11 
let sent = "this is frontend";
let longest = "";
sent.split(" ").forEach(w => longest = w.length > longest.length ? w : longest);
console.log(longest);
//12
let a = "listen", b = "silent";
a = a.split("").sort().join("");
b = b.split("").sort().join("");
console.log(a === b ? "Anagram" : "Not Anagram");
//13
let s = "hello_welcome_program";
let res = s.split("_")
  .map(w => w[0].toUpperCase() + w.slice(1))
  .join(" ");
console.log(res);
//14
let js = "sowmyaa";
let char = "a";
let first = js.indexOf(char);
let second = js.indexOf(char, first + 1);
console.log(second);
//15
let strings = "anagram";
let results = "";
for (let ch of strings) if (!res.includes(ch)) results += ch;
console.log(results);
//math
//1
console.log(Math.floor(Math.random() * 100) + 1);
 //2
 let num = 5.1234;
console.log(Number(num.toFixed(2)));
//3
let arr = [5, 10, 2, 8];
console.log(Math.max(...arr), Math.min(...arr));
//4
let arr1 = [4, 9, 25];
console.log(arr1.map(x => Math.sqrt(x)));
//5
console.log(Math.floor(Math.random() * 151) + 50);
//6
let k = 20, l= 5;
console.log(Math.abs(k-l));
//7
console.log(Math.floor(Math.random() * 6) + 1);
//8
let P = 1000, r = 5, t = 2;
let CI = P * Math.pow((1 + r/100), t) - P;
console.log(CI);
//9
let radius = 5;
console.log(Math.PI * radius * radius);
//10
let number = 49;
let ss = Math.sqrt(number);
console.log(s === Math.floor(ss) ? "Perfect Square" : "Not Perfect");
//11
let no=2.5;
console.log("floor:",Math.floor(no));
console.log("ceil:",Math.ceil(no));
//12
let q=2,f=4;
console.log(Math.pow(q,f));
//13
let rad = Math.PI; 
let deg = rad * (180 / Math.PI);
console.log("Radians to Degrees:", deg);
let deg2 = 180;
let rad2 = deg2 * (Math.PI / 180);
console.log("Degrees to Radians:", rad2);
//15
let nu = 5, fact = 1;
for (let i = 1; i <= nu; i++) fact *= i;
console.log(fact);
//date fn
//1
let d = new Date();
console.log(d);
//2
let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1); 
console.log(date.getDate());
//3
let today = new Date();
let lastDay = new Date(today.getFullYear(), 11, 31);
let diff = (lastDay - today) / (1000 * 60 * 60 * 24);
console.log(Math.ceil(diff));
 //4
 let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(days[new Date().getDay()]);
//6
let d1 = new Date("2024-05-10");
let d2 = new Date("2023-12-20");
console.log(d1 < d2 ? "First is earlier" : "Second is earlier");
//7
let dob = new Date("2000-08-10");
let tday = new Date();
let age = tday.getFullYear() - dob.getFullYear();
console.log(age);
//8
let dt1 = new Date("2024-01-01");
let dt2 = new Date("2024-02-15");
let diffs = Math.abs(dt2 - dt1) / (1000 * 60 * 60 * 24);
console.log(diff);
//10
 let dates = new Date();
console.log(`${d.getHours()}:${dates.getMinutes()}:${dates.getSeconds()}`);
//11
let day = new Date().getDay();
console.log(day == 0 || day == 6 ? "Weekend" : "Weekday");
//12
let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
console.log(months[new Date().getMonth()]);
//13
let now = new Date();
let newYear = new Date(now.getFullYear()+1, 0, 1);
let dif = (newYear - now) / (1000*60*60*24);
console.log(Math.floor(dif));
//14
let dy = new Date();
dy.setHours(dy.getHours() + 1);
console.log(dy);













 


 



