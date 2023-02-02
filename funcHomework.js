//function Declaration

function multiply(x, y) {
    return x * y;
  } 
 console.log (multiply(10, 5));


function add(a, b) {         
    console.log(a + b);
}
add(5,4);

//xndir Ավտոմեքենան 60կմ/ժ արագությամբ գնաց 4ժամ, այնուհետև 70կմ/ժ արագությամբ գնաց 3ժամ, որքան ճանապարհ անցավ 
//ավտոմեքենան
function carPassWay(){
 let carSpeedFirst=60;
let passWayFirst=4 * carSpeedFirst;
let carSpeedSecond=70;
let passWaySecond=3 * carSpeedSecond;
let wholepassWay=passWayFirst+passWaySecond;
return wholepassWay;


}
console.log(carPassWay());




//960կգ խնձորը հավասարաչափ լցրին արկղերը և տեղադրեցին 2 ավտոմեքենա, 1-ին ՝ 25 արկղ, 2-րդ ՝15 արկղ
//քանի՞ կգ խնձոր բարձրացվեց երկրորդ ավտոմեքենան

function howMuch(){
    let apple=960;
    let eachBox= apple/(25+15);
    let firstCar=eachBox * 25;
    let secondCar =apple-firstCar;
    return secondCar;
}
  console.log(howMuch());



  function factorial(n){
    if(n==0 || n==1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
  }
  console.log(factorial(6));

  function fibonacci(num) {
    if (num <= 1)
     return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  console.log(fibonacci(11));



  
  // Function Expression
const sum = function(a, b) {
    console.log(a+b);
};
sum(2, 3);

//խնդիր ավտոմեքենան 3օրում անցավ 1240կմ ճանապարհ։Առաջին օրն անցավ 245կմ, որքան ճանապարհ անցավ մյուս երկու օրերին

const nextTwoDays=function(wholeThreeDays, firstDay){
    console.log(wholeThreeDays-firstDay);
};
nextTwoDays(1240,245);


//խնդիր Սոնան 6տուփ կարագի համար վճարել է 2700դրամ։Որքան նա պետք է վճարի 8տուփ կարագի համար



const howMuchPay =function(eightBoxButter){
let sixBoxButter=2700;
let oneBoxButter=sixBoxButter/6;
console.log(eightBoxButter=oneBoxButter* 8);

};
howMuchPay();

// Arrow function
const multiply = (x, y) => x * y;
console.log( multiply(20,3));

const great = (c, d) => {
    if (c > d) 
        return "c is greater";
    else
        return "d is greater";
};
  
console.log(great(10,5));


const pow=a=>b=>a**b;
  console.log(pow(7)(2));

  

  
 