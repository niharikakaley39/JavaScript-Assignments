// Assignment 1
// Create a variable for each of the following: 
// your favorite color, your height in centimeters, 
// and whether you like pizza. Use appropriate variable declarations 
// (let, const, or var). Try logging it using console.log

let color = 'Blue';
const height = 151;
var userName = "Niharika";
console.log(color)
console.log(height)
console.log(userName)

//2. Write a function sum that finds the sum of two numbers. 
function sum(num1, num2) {
    const sum = num1 + num2;
    console.log(sum);
sum(10 , 20)                             
// output : 30

//3. // Write a function called canVote that returns true or false if the age of a user is > 18
function isLegal(age){
    if(age >= 18){
        console.log("Legal to vote")
    }
    else {
         console.log(" Can't vote")
    }
  isLegal(22)
  isLegal(17)
  
  //4. Write an if/else statement that checks if a number is even or odd. 
   function isoddEven(number){
        if(number % 2 == 0){
           console.log("Number is Even")
        }
        else(number % 2 == 1){
          console.log("Number is Odd")
        }
  isOddEven(8)
  isOddEven(17)

//5. Write a function called sum that finds the sum from 1 to a number
     function Sum(n){
       let total = 0
      for(let i = 0 ; i <= n; i++){
             total += i
      }
       return total
     }
     console.log(Sum(5))

  //6./ Write a function that takes a user as an input and greets them with their name and age
     function getUserAgeMessage(user) {
      return ` Hi ${user.name}'s age is ${user.age}`;
       }
       let user = {
                    name: "Niharika",
                     age: 22
                     };
console.log(getUserAgeMessage(user));

  //7.Write a function that takes a new object as input which has name,
// age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
// Also tell the user if they are legal to vote or not
  function greetUser(user){
    let title = user.gender === "male" ? "Mr " : "Mrs";
    let voteStatus = user.age >= 18 ? "elgible " : "not elgible";
    return " Hi " + title + " " + user.name + " ,your age is " + user.age + " .You are " voteStatus + " to vote.";
  }
     const user= {
       name: "Niharika"
       age : 22
       gender : "Female"
   };
  console.log(greetUser(user));

  //8. Write a function that takes an array of numbers as input, 
// and returns a new array with only even values. Read about filter in JS
  function getEvenValues(arr){
    const evenArr = []
for(let i = 0 ; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        evenArr.push(arr[i]);
    }
}
return evenArr;
}
const numbers = [1, 2, 3, 4, 5, 6  ,7 , 8 , 9, 10];
const evenValuesArr = getEvenValues(numbers);
console.log(evenValuesArr);

//9.  Write a function that takes an array of users as inputs and
// returns only the users who are more than 18 years old
  function getAdultUsers(users){
    const adultUsers = [];
    for(let i = 0 ; i < users.length;i++){
        if(users[i].age > 18){
            adultUsers.push(users[i]);
        }
    }
    return adultUsers;
}
const users = [
    {name :"Niya" , age : 22},
    {name :"sravya" ,age : 30},
    {name :"Priya" , age : 17},
    {name :"Anita" , age : 25},
]
const adults = getAdultUsers(users);
console.log(adults) 
  // output: [ { name: 'Niya', age: 22 }, { name: 'sravya', age: 30 }, { name: 'Anita', age: 25 }]

//10.Create a function that takes an array of objects as input,and returns the users whose age > 18 and are male
function getMaleUsers(users) {
  const newUsers = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18 && users[i].gender === 'male') {
      newUsers.push(users[i]);
    }
  }
  return newUsers;
}
const users = [
  { name: "Rohit", age: 23, gender: "male" },
  { name: "Amit", age: 17, gender: "male" },
  { name: "Priya", age: 21, gender: "female" },
  { name: "Rohit", age: 19, gender: "male" }
];
const newMaleUsers = getMaleUsers(users);
console.log(newMaleUsers);
  //output : [{ name: 'Rohit', age: 23, gender: 'male' },{ name: 'Rohit', age: 19, gender: 'male' }]

// object + arrays
    
//  1.Sum values in object arrays  { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }

   function sumValues(obj){
     let result ={}
  for(let key in obj){
      let sum = 0
  for(let i = 0 ; i < obj[key].length;i++){
           sum += obj[key][i]
  }
    result[key] = sum
  }
 console.log(result)
var expenses = {food: [10, 20, 30], travel: [5, 15], bills: [40, 60] };
sumValues(expenses)

// 2. Count word occurrences in array  , arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

  function countOcc(arr){
  let result ={}
  for(let i = 0 ; i < arr.length;i++){
   let word = arr[i]
  if(result[word]){
      result[word] = result[word] + 1
  }
  else {
      result[word] = 1
  }
  console.log(result)
  var arr = ["apple", "banana", "apple", "orange", "banana", "apple"]
countOcc(arr)


// 3. Swap keys and values of object - Input: { a: "x", b: "y", c: "z" }   output  { x: "a", y: "b", z: "c" }

    let obj = { a: "x", b: "y", c: "z" };
let pairs = Object.entries(obj);
let result = {};
for (let i = 0; i < pairs.length; i++) {
    let key = pairs[i][0];
    let value = pairs[i][1];
    result[value] = key;
}
console.log(result);


//4.4. **Find the largest value key**

    function findLargestKey(obj){
    let maxValue = -Infinity
    let maxKey = ""
    for(let key in obj){
        if(obj[key] > maxValue){
            maxValue = obj[key]
            maxKey = key
        }
    }
    console.log(maxKey)
}
var data = { a: 10, b: 50, c: 20 }
findLargestKey(data)


//5.Flatten object of arrays into one array var data = {fruits: ["apple", "banana"], veggies: ["carrot", "pea"] // output : [ 'apple', 'banana', 'carrot', 'pea' ]

function flattenObject(obj){
    let result = []
for (let  key in obj){
    for(let i = 0 ; i < obj[key].length; i++){
        result.push(obj[key][i]);
    }
}
console.log(result);
}
var data = {
    fruits: ["apple", "banana"],
    veggies: ["carrot", "pea"]
};


    //6. **Group people by city** - Input: [ { name: "A", city: "Delhi" }, { name: "B", city: "Mumbai" }, { name: "C", city: "Delhi" }]

function groupByCity(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        let city = arr[i].city;
        let name = arr[i].name;
        if (result[city]) {
            result[city].push(name);
        } else {
            result[city] = [name];
        }
    }
    console.log(result);
}
var people = [
    { name: "A", city: "Delhi" },
    { name: "B", city: "Mumbai" },
    { name: "C", city: "Delhi" }
];
groupByCity(people);        
// { Delhi: [ 'A', 'C' ], Mumbai: [ 'B' ] }


//7.Filter object by values > 50    input: var data = { a: 20 , b : 60 , c: 40 , d : 90};  output: { b: 60, d: 90 }

  function filterGreaterThan(obj){
    let result = {}
for (let key in obj){
    if(obj[key] > 50){
        result[key] = obj[key];
    }
}
 console.log(result)
}
 var data = { a: 20 , b : 60 , c: 40 , d : 90};
 filterGreaterThan(data)


//8. Find student with highest average mark  // { A: [80, 90], B: [70, 75, 85] }

    function highestAverage(obj){
    let highestAvg = 0
    let topStudent= ""
    for(let student in obj){
        let marks = obj[student]
        let sum = 0
    for(let i = 0 ; i < marks.length ;i++){
        sum += marks[i]
    }
    let avg = sum/ marks.length
    if(avg > highestAvg){
        highestAvg = avg
        topStudent = student;
    }
    }
    console.log(topStudent);
}
var student ={A: [80, 90],
    B: [70, 75, 85]
};
highestAverage(student);


//9.Unique values across all object arrays  ,  Input : { x: [1,2,3], y: [2,3,4], z: [4,5] }  - Output:  [1,2,3,4,5]

function uniqueValues(obj){
  let result = {}
    for(let key in obj) {
      let arr = obj[key]
      for(let i = 0 ; i < arr.length; i++){
        if(!result.includes(arr[i]));
      }
    }
}
    return result
  }
    const input = {
    x: [1, 2, 3] ,
    y :[2, 3, 4] , 
    z: [4, 5]
};
const output = getUniqueValues(input);
console.log(output);

    //10.Pick only given keys from object  Input :{ name: "Rahul", age: 23, city: "Noida" }, ["name","city"]      output : { name: "Rahul", city: "Noida" }

function pickKeys(obj, keys) {
  let result = {};
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] !== undefined) {
      result[keys[i]] = obj[keys[i]];
    }
  }
  return result;
}
const inputObj = { name: "Rahul", age: 23, city: "Noida" };
const keysArray = ["name", "city"];
const output = pickKeys(inputObj, keysArray);
console.log(output);

//11. Sort object entries by values (ascending)
     function highestAverage(obj) {
    let maxAvg = -Infinity;
    let topStudent = "";
    for (let student in obj) {
        let marks = obj[student];
        let sum = 0;
        for (let mark of marks) {
            sum += mark;
        }
        let avg = sum / marks.length;
        if (avg > maxAvg) {
            maxAvg = avg;
            topStudent = student;
        }
    }
    return topStudent;
} 
      
// 12 Count number of keys in object
const obj12 = { a: 1, b: 2, c: 3 };
function fun12(obj) {
  return Object.keys(obj).length;
}
      
//13) Capitalize string values inside object
      function fun13(obj){
     for (let key in obj){
        obj[key] = obj[key][0].toUpperCase()+ obj[key].slice(1);
     }
     return obj
}
 const obj13 = { name: "alice", city: "delhi" };
 console.log(fun13(obj13))

 //14. Convert Object Query into String
 function toQueryString(obj) {
  return new URLSearchParams(obj).toString();
 }
 const obj = { name: "Alice", age: 25 };
console.log(toQueryString(obj));

//15.Count even and odd numbers in array
      const array = [1,2,3,4,5,6];
function fun(array) {
  const countObj = {even: 0, odd: 0};
  for(let num in array) {
    if( num % 2 === 0) 
        countObj.even += 1;
    else 
        countObj.odd += 1;
  }
  return countObj;
}
console.log(fun(array))

//16. Find common keys between two objects
    const fun16 = (obj1, obj2) =>
    Object.keys(obj1).filter(key => Object.hasOwn(obj2, key));
   console.log(fun16({ a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 })
);

//17.Convert array of objects to lookup by id
const array = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];
const func = (array) => {
  const newObj = {};
  for (let item of array) {
    newObj[item.id] = item;
  }
  return newObj;
};
console.log(func(array));

//18.Check if all values in object are numbers
const obj18 = { a: 1, b: "hello", c: 3 }; 
function fun(obj) {
  for(let value of Object.values(obj)) {
    // console.log(typeof typeof value);
    if(typeof value !== "number") return false;
  }
  return true;
}

//19.Check if all values in object are numbers
function func(obj){
    for(let key in obj){
        if(typeof obj[key] != "number"){
            return false;
        }
        return true;
    }
}
console.log(func({ a: 1, b: "hello", c: 3 })); 

















      







  
