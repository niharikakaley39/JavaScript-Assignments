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
     









  
