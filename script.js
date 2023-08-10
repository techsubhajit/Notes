// let student={
//     name:'Subhajit',
//     age:25,
//     lang:['Bangali','Hindi','English']
// }
// console.table(student);


// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length)

// Slice
let text = "Apple, Banana, Kiwi";
let part = text.slice(7,13);
console.log(part);


// Substring
let text1 = "Apple, Banana, Kiwi";
let part1 = text1.substring(7,13);
console.log(part1);

// slice and substring both are similar

// Substr
let text2 = "Apple, Banana, Kiwi";
let part2 = text2.substr(-4);
console.log(part2);

// replace
let text3 = "Please Microsoft visit Microsoft!";
let newText3 = text3.replaceAll("Microsoft", "W3Schools");
console.log(newText3);

// trim
let text4="           He       ";
let newText4=text4.trimEnd();
console.log(newText4)

// pads
let text5 = "5";
let padded = text5.padEnd(4,"0");
console.log(typeof(padded))
console.log('Pads '+padded)

// padEnd
let numb = 5;
let text6 = numb.toString();
console.log(typeof(text6))
let padded1 = text6.padStart(4,"0");
console.log(padded1)
// charAt
let text7 = "HELLO WORLD";
let char1 = text7.charAt(0);
console.log(char1)

// charCodeAt
let text8 = "HELLO WORLD";
let char2 = text8.charCodeAt(0);
console.log(char2)

// text[]
let text9 = "HELLO WORLD";
let char3 = text9[0];
console.log(char3)

// 
let text10 = "HELLO WORLD";
text10[0] = "A";    // Gives no error, but does not work
console.log("No Update "+text10)

// text split
let txtSplit=text10.split(" ");
console.table(txtSplit);

// searching
let text11 = "Please locate where 'locate' occurs!";
let txtSearch= text11.search(/locate/);
console.log(txtSearch);

// match
let text12 = "The rain in SPAIN stays mainly in the plain";
let txtMatch= text12.match(/ain/gi);
console.log(txtMatch);

// matchAll
let text13 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator1 = text13.matchAll("Cats");
console.log("cat",iterator1)

// includes
let text14 = "Hello World, welcome to the universe.";
console.log(text14.includes("world"));

// String Literal
let firstName = "John";
let lastName = "Doe";
let text15 = `Welcome ${firstName}, ${lastName}!`;
console.log(text15);

// HTML Body Show You
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;
document.getElementById("demo").innerHTML = html;


let x=100/'Apple';
console.log('number can divided?', x);

let y='10'/'2';
console.log(y)

console.log(typeof NaN)
console.log(typeof Infinity);

// array Method
const numArr= new Array(40,100,56,86);
const numArr1=[40];
console.log(numArr1);
console.log(typeof '9s')

// scope
let xThis=this.location;
console.log(xThis)

// class in js
class car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
}
const car1=new car("Ford",2014);
console.log(car1.year)


// import message from './script1.js'

// console.log(message);

// JSON Javascript Object notaion
// let textEmployee = '{"employees":[' + '{"firstName":"John","lastName":"Doe" },' + '{"firstName":"Anna","lastName":"Smith" },' + '{"firstName":"Peter","lastName":"Jones" }]}';

const textEmployee={
    "name":"subhajit",
    "year":2023,
}
console.log(typeof textEmployee);
// const obj=JSON.parse(textEmployee);
// console.log(obj)


let yourName={
  firstname:"Subahjit",
  lastname:'Guchhait',
  fullname:function(hometown,country){
    return this.firstname+' '+this.lastname+' '+hometown+' '+country;
  }
}
let yourName1={
  firstname:"Bappa",
  lastname:'Da'
}

console.log("call testing ",yourName.fullname.apply(yourName1,['debra','west bengal','india']));

let Fname={
    firstname:"John",
    lastname:'Deo'
}
let printFulname=function(hometown, state){
    console.log(this.firstname+ " "+this.lastname+" from "+hometown+", "+state);
}
printFulname.call(Fname);

let Fname1={
    firstname:"Akshay",
    lastname:'Saini'
}
printFulname.call(Fname1);
let printMyName=printFulname.bind(Fname1,"Mumbai","Maharastra");
console.log(printMyName);
printMyName()

// Json to object : JSON.parse()
// Object to json : JSON.stringify()
// {"name":"Subhajit"}  --JSON
// {name:"Subhajit"}    --Object

const emp={"employees":[
    { "firstName":"John", "lastName":"Doe" },
    { "firstName":"Anna", "lastName":"Smith" },
    { "firstName":"Peter", "lastName":"Jones" }
]}

console.log(emp.employees[1].lastName);

(function(){
    let x="hello";
    console.log(x)
})();


// function myFunction(a,b,c) {
//     return arguments.length;
// }
// console.log(myFunction(4,3,5));

function myFunction(a,b,...c){
    return arguments.length;
}
console.log(myFunction(3,2));



// Rest Opertaor 
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum *= arg;
    return sum;
  }
  
  let x1 = sum(4, 9, 16, 25, 29, 100, 66, 77);
  console.log(x1);




//Argumwent object
function findMax() {
    let max = 0; 
    for(let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
} 
console.log(findMax(648756,5678651,89786514,89785641,665,156456,531423,867864,5454,8787,123,56564,1521,8787123,5451154,54545,897897,2123123,89784154,5645151,5647561231,547561,521231,8978971,56456141,5645614231,54516))



function myFunction(a, b) {
    return a * b;
  }
  window.myFunction(10, 2);    // Will also return 20



  




//   call function
const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "John Doe":
  person.fullName.call(person1);

//   another call function
const person3 = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  const person4 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  const z= person3.fullName.call(person4, "Oslo", "Norway");
console.log(z)


// Function Apply
const person6 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person7 = {
    firstName: "Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe":
  const aa= person6.fullName.apply(person7);
  console.log(aa);



  const person8 = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  const person9 = {
    firstName:"John",
    lastName: "Doe"
  }
  console.log(person8.fullName.apply(person9, ["Oslo", "Norway"]));



  
// Bind
const person12 = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      let x = document.getElementById("demo");
      x.innerHTML = this.firstName + " " + this.lastName;
    }
  }
  
  let display = person12.display.bind(person12);
  setTimeout(display, 3000);

  // class in js
  class Car{
    constructor(name, year){
    this.name=name;
    this.year=year;
  }
  age(){
    const date=new Date();
    return date.getFullYear()-this.year;
  }
  }
  const myCar1= new Car('Ford',2014);
  console.log(myCar1.name);



  class Car1 {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car1 {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myCar = new Model("Ford", "Mustang");
  // document.getElementById("demo").innerHTML = myCar.show();
  console.log(myCar.show());
  

  // Callback function
  function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);

  // Asynchrous
  setTimeout(myFunction, 3000);

  function myFunction() {
    console.log("I love You !!");
  }


  // Promise
  let myPromise= new Promise(function(resolve, reject){
   setTimeout(function(){
      resolve("MissionJS")
   },3000)
  });
  myPromise.then(
    function(value){
      console.log(value);
    },
    function(error){
      console.log(error);
    }
  )


  // Async and Awit
  async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("Happy Coding");
    });
    let result = await myPromise;
    console.log(result)
  }
  myDisplay();


  //--------------------------------------------------------



  async function getFile() {
    let myPromise = new Promise(function(resolve) {
      let req = new XMLHttpRequest();
      req.open('GET', "mycar.html");
      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          resolve("File not Found");
        }
      };
      req.send();
    });
    let res= await myPromise;
    console.log(res);
  }
  
  getFile();


// Another Async and promise
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  // alert(result); // "done!"
}

f();








let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
  resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

  // wait until the promise resolves 
  let result = await promise; 

  console.log(result);
  console.log('hello');
}

// calling the async function
asyncFunc();


// Async and await with resolve and wit


// Storing data:
const myObj = {name: "John", age: 31, city: "New York"};
const myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
let text16 = localStorage.getItem("testJSON");
let obj = JSON.parse(text16);
document.getElementById("demo1").innerHTML = obj.name;



async function loadImages(){
  const response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data1=await response.json();
  console.log(data1)
}
loadImages()