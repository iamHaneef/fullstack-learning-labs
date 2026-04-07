// Practise code for Javascript

//variables

/*
let my_name = "haneef";
my_name =  "kanna";
var value = 5;
value=55;
const num = 10;
//num = 15;  // it show error because const can't assign same variable twice 

console.log("My name is "+ my_name);

console.log("The cost value of apple is  " + value);

console.log("const value is " + num);
console.log("The Number is in const = " + num + " so it can't change");

*/

//prompt

// let my_name = prompt("what is your name");

// console.log("my name is " + my_name);

// let cost = Number(prompt("what is cost of 1 apple"))+10;
// let amt = Number(prompt("what is cost of 1 orange"));
// alert("my cost is " + cost);
// alert(amt*100);


//String literals

// let str1 = "Honey";
// let str2 = "F";

// console.log("My full name is " + str1 + str2);
// console.log(`My full name is ${str1}${str2}`);
// let n = str1.length;
// console.log(str1[Math.floor(Math.random()*n)]);

// console.log(`
//   Hi
//   hello
//   welcome 
//   to 
//   party  
    
//     `)

// ARRAY COLLECTION

/*

let arr = [1,2,3];

//push
arr.push(4);
arr.push(5);
console.log(arr);


//pop
arr.pop();
console.log(arr);

//shift
arr.shift();
console.log(arr);

//unshift
arr.unshift(1);
console.log(arr);

//slice

console.log(arr.slice(1,3));
console.log(arr.slice(1));
console.log(arr.slice(2,3));

//splice

console.log(arr.splice(0,1));
console.log(arr);

console.log(arr.splice(0,0,1));
console.log(arr);

console.log(arr.splice(0,0,"start"));
console.log(arr);

console.log(arr.splice(5,0,"finish"));
console.log(arr);

console.log(arr.length);
console.log(arr.join());
console.log(arr.reverse());


//split 

let str = "men, women,others";

let arr2 = str.split(",");

console.log(arr2);

//filter collections 

let coll = [1,2,3,4,5,6,7,8,9,10];

let result = coll.filter(number => number % 2 == 0);
console.log(result);

let results = coll.filter(number => number % 3 == 0);
console.log(results);

*/

// if conditions

/*

let cost = 415;

if(cost <= 500 || cost >= 0)
{
    console.log("book the ticket")
}
else if (cost > 1000 || cost > 500)
{
    console.log("wait think");
}
else{
    console.log("No try to book ticket");
}


let details= {

    myname :  "haneef",
    age : 21,
    rollno : 310,
    hobby : ["Art" , "tennis" , "cricket"],

    addr : {
        no : 47,
        area : "urban",
        location : "chennai"
    }
};

console.log(details.hobby);
console.log(details.rollno);
console.log(details.addr.location);
console.log(details.addr);

console.log(details.myname);

*/

// loops

// //for loops

// for(let i = 1 ; i<=10 ; i++)
// {
//     console.log(i);
//     console.log("OLA");
// }

// //while

// let i = 1
// while(i<=10)
// {
//     console.log(i);
//     console.log("OLA");

//     i++
// }

//do while

// let i = 1
// do
// {
//     console.log(i);
//     console.log("OLA");
//     console.log(i);
//     console.log("OLA");


//     i++
// }while(i>10);


// while(true)
// {
//    let num =  Number(prompt("type a number only"));

//    if(!isNaN(num))
//    {
//     console.log("Number");
//     break;
//    }
// }


//for of , for in loops

/*

let arr = ["Apple","orange","grapes"];

for(let val of arr)
{
    console.log(val);
}

let details= {

    myname :  "haneef",
    age : 21,
    rollno : 310,
    hobby : ["Art" , "tennis" , "cricket"],

    addr : {
        no : 47,
        area : "urban",
        location : "chennai"
    }
};


for(let key in details)
{
    console.log(details[key]);
}

*/

//function working

/*

function fact(num)
{
    if(num == 0)
    {
        return 1;
    }
    return num*fact(num-1);
}
let result = fact(5);
console.log(result);

function fibo(num)
{
    if(num == 0 || num === 1)
    {
        return num;
    }
    return fibo(num-1) + fibo(num-2);
}
for(let i=0 ; i<10 ; i++)
{
    console.log(fibo(i));
}


*/

// function cuboid(l,b,h)
// {
//     return l*b*h;
// }

// console.log(cuboid(1,2,3));

// let cuboids = (l,b,h) => {return l*b*h;}

// console.log(cuboids(2,3,4));



// Higher order function

function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
    
}
function mul(a,b)
{
    return a*b;

}
function div(a,b)
{
    return a/b;
    
}
function Higher(a,b , callback)
{
    return callback(a,b);
    
}
console.log(Higher(3,6,add));
console.log(Higher(3,6,sub));
console.log(Higher(3,6,mul));
console.log(Higher(3,6,div));

function RoomBook(name , amount)
{
    this.name = name;
    this.amount = amount;
}

var boy1 = new RoomBook("Tom" , 2000);
var boy2 = new RoomBook("kom" , 3000);

console.log(boy1.amount);
console.log(boy2.name);

