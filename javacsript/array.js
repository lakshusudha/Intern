// 1
let fruits = ["apple", "banana", "orange", "mango", "grape"];
fruits.push("pear");
console.log("1:", fruits);

// 2
let last = fruits.pop();
console.log("2:", last, "| after pop:", fruits);

// 3
fruits.unshift("kiwi");
console.log("3:", fruits);

// 4
let removedFirst = fruits.shift();
console.log("4:", removedFirst, "| after shift:", fruits);

// 5
console.log("5: length =", fruits.length);

// 6
let fruitString = fruits.join(", ");
console.log('6:', fruitString);

// 7
let colors = ["red", "green", "blue", "yellow"];
console.log("7: last color =", colors[colors.length - 1]);

// 8
let names = ["Ajay", "Bala", "Anu"];
names.push("Deepa", "Charan");
let removedName = names.shift();
console.log("8: names after operations:", names, "| removed:", removedName);

// 9
let arr9 = ["apple", "banana", "orange"];
console.log('9: I like ' + arr9.join(", "));

// 10
let queue = [];
queue.push("task1");
queue.push("task2");
console.log("10: after pushes:", queue);
let dequeued = queue.shift(); 
console.log("10: dequeued:", dequeued, "now:", queue);

// 11. 
let animals = ["cat", "lion", "elephant", "dog"];
console.log("11: has dog?", animals.includes("dog"));

// 12
console.log("12: index of cat =", animals.indexOf("cat"));

// 13
let merged = [1,2,3].concat([4,5,6]);
console.log("13:", merged);

// 14
let boys = ["Ravi", "Kumar"];
let girls = ["Meena", "Sita"];
let students = boys.concat(girls);
console.log("14: students =", students);

// 15
let animals2 = ["cat", "dog", "tiger"];
if (!animals2.includes("lion")) animals2.push("lion");
console.log("15:", animals2);

// 16
let cities = ["Mumbai", "Bangalore", "Chennai", "Delhi"];
console.log("16: index of Chennai =", cities.indexOf("Chennai"));

// 17
let a = ["a","b"], c = ["c","d"], e = ["e","f"];
let merged3 = a.concat(c, e);
console.log("17:", merged3);

// 18
let fruitsList = ["apple","banana","orange","watermelon"];
console.log("18: has watermelon?", fruitsList.includes("watermelon"));

// 19
let nums1 = [5, 2, 9];
let nums2 = [1, 6, 3];
let combined = nums1.concat(nums2).sort(function(a,b){ return a-b; });
console.log("19: sorted combined:", combined);

// 20
let s1 = ["Math", "Sci"];
let s2 = ["Eng"];
let s3 = ["History"];
let subjects = s1.concat(s2, s3);
console.log("20: subjects =", subjects);

// 21
let arr21 = [10,20,30,40,50];
console.log("21: slice(1,4) =>", arr21.slice(1,4)); 

// 22. 
let arr22 = ["apple","banana","cherry"];
let idxBan = arr22.indexOf("banana");
if (idxBan !== -1) arr22.splice(idxBan, 1);
console.log("22:", arr22);

// 23
let arr23 = ["apple","cherry"];
arr23.splice(1, 0, "grape"); 
console.log("23:", arr23);

// 24
let arr24 = [5,10,15,20,25];
console.log("24:", arr24.slice(0,3));

// 25. 
let arr25 = ["cat","dog","lion"];
let iDog = arr25.indexOf("dog");
if (iDog !== -1) arr25.splice(iDog, 1, "tiger");
console.log("25:", arr25);

// 26
let arr26 = [1,2,3,4,5];
arr26.splice(2-1, 2); 
console.log("26:", arr26);

// 27
let arr27 = ["red", "blue"];
arr27.splice(1, 0, "green", "yellow"); 
console.log("27:", arr27);

// 28
let arr28 = [1,2,3,4,5];
console.log("28: last 2 =", arr28.slice(-2));

// 29
let original = ["a","b","c"];
let clone = original.slice();
console.log("29: clone =", clone);

// 30.
let arr30 = [1,2,3];
let copy30 = arr30.slice();
copy30.push(4);
console.log("30: original =", arr30, "| copy changed =", copy30);

// 31.
let arr31 = [10,20,30,40];
console.log("31:");
arr31.forEach(n => console.log("  ", n));

// 32
let doubled = [1,2,3,4,5].map(n => n*2);
console.log("32:", doubled);

// 33.
let names33 = ["ajay","bala","anu"];
console.log("33:", names33.map(n => n.toUpperCase()));

// 34
let evens = [10,15,20,25,30].filter(n => n % 2 === 0);
console.log("34:", evens);

// 35
let names35 = ["sow","jan","laks"].filter(n => !n.startsWith("A"));
console.log("35:", names35);

// 36
let stud36 = ["Rani","Karan"];
stud36.forEach(s => console.log("36: Student:", s));

// 37.
let squares = [2,4,6,8].map(n => n*n);
console.log("37:", squares);

// 38.
let positives = [10,-5,8,-3,12].filter(n => n >= 0);
console.log("38:", positives);

// 39. 
let people = ["Suresh","Meena"];
let titled = people.map((n, i) => (i%2===0 ? "Mr. " : "Ms. ") + n); 
console.log("39:", titled);

// 40.
let marks = [40,55,75,90,35].filter(m => m >= 50);
console.log("40: pass marks =", marks);

// 41.
let sum41 = [5,10,15,20].reduce((acc, v) => acc + v, 0);
console.log("41: sum =", sum41);

// 42
let product42 = [2,3,4,5].reduce((acc, v) => acc * v, 1);
console.log("42: product =", product42);

// 43. 
let arr43 = [30,10,50,20,40].sort((a,b) => a - b);
console.log("43: sorted ascending =", arr43);

// 44. 
let arr44 = [1,2,3,4,5].slice().reverse();
console.log("44: reversed =", arr44);

// 45
let firstGt50 = [10,60,30,80,40].find(n => n > 50);
console.log("45: first > 50 =", firstGt50);

// 46
let anyAbove100 = [10,50,80,30].some(n => n > 100);
console.log("46: any > 100?", anyAbove100);

// 47.
let allPositive = [2,4,6,8].every(n => n > 0);
console.log("47: all positive?", allPositive);

// 48
let names48 = ["Zara","Anu","Bala"].slice().sort();
console.log("48: alphabetically sorted:", names48);

// 49. 
let revNames = names48.slice().reverse();
console.log("49: reverse alphabetical:", revNames);

// 50
let sumEven = [1,2,3,4,5,6,7,8].filter(n => n % 2 === 0).reduce((a,b) => a + b, 0);
console.log("50: sum of evens =", sumEven);

// Mini 1: 
let studentMarks = [ {name:"A", marks:75}, {name:"B", marks:82}, {name:"C", marks:48} ];
let total = studentMarks.reduce((acc,s) => acc + s.marks, 0);
let avg = total / studentMarks.length;
let topScore = Math.max(...studentMarks.map(s=>s.marks));
let toppers = studentMarks.filter(s => s.marks === topScore).map(s => s.name);
console.log("Mini1: total=", total, "avg=", avg, "toppers=", toppers);

// Mini 2: 
let todo = [];
function addTask(t){ todo.push(t); }
function removeTask(index){ return todo.splice(index,1)[0]; }
function viewTasks(){ return todo.slice(); }
addTask("Buy milk");
addTask("Call mom");
console.log("Mini2: tasks:", viewTasks());
removeTask(0);
console.log("Mini2 after removal:", viewTasks());

// Mini 3: 
let cart = [];
function addToCart(item){ cart.push(item); } // item: {name, price, qty}
function removeFromCart(name){ let i = cart.findIndex(it=>it.name===name); if(i>-1) cart.splice(i,1); }
function totalCost(){ return cart.reduce((s,it)=> s + it.price * (it.qty || 1), 0); }
addToCart({name:"apple", price:30, qty:2});
addToCart({name:"bread", price:40, qty:1});
console.log("Mini3: cart:", cart, "total:", totalCost());

