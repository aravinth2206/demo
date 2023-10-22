
//a)Print odd numbers in an array
var Numbers=[0,2,5,76,23,9,11];
function OddNumbers (data=[]){
for(i=0;i<Numbers.length;i++){
   if(data[i]%2!=0){
    console.log(data[i])
   }
   }
}
 OddNumbers(Numbers);

 //b)Convert all the strings to title caps in a string array
 var string=["ak", "aravinth", "kumar", "senthil"];
 function uppercase(data=[]){
     for(i=0;i<data.length;i++){
         console.log(data[i].toUpperCase());
     }
 }
 uppercase(string);

 //c)Sum of all numbers in an array
function sumNumbers (data=[]){
 var Sum=0;

for(i=0;i<data.length;i++){
   Sum+=data[i]
}
 console.log(Sum)
   }
sumNumbers(Numbers);

//d)Return all the prime numbers in an array
function PrimeNumber(Numbers){
    let Sort=[]
    Numbers.forEach((num)=>{
        let factor=0
       for(i=0;i<=num;i++){
           if(num%i===0){
               factor++
            }
       }
       if(factor==2){
           Sort.push(num)
       }
    }) 
        console.log(Sort)
    }
PrimeNumber(Numbers);

//e)Return all the palindromes in an array
var str=["racecar","abc","dad","mom","father"];
function Palindrome(str=[]){
    str.forEach((Pal)=>{
    if(Pal===(Pal.split('').reverse().join(''))){
        console.log(Pal);
    }
    })
    }

Palindrome(str);
//-------------------------------------------------------------------------------------------------------------------------------
//Arrow Function

//a)Print odd numbers in an array
var numbers=[0,2,5,76,23,9,11];
var output=""
const ArrowOdd = (numbers)=>{
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%2!=0){
            console.log(numbers[i]);
        }
    }
}
ArrowOdd(numbers);

//b)Convert all the strings to title caps in a string array
 var string=["ak", "aravinth", "kumar", "senthil"];
 const Capital = (string)=>{
     for(i=0;i<string.length;i++){
         console.log(string[i].toUpperCase());
     }
 }
Capital(string);

//c)Sum of all numbers in an array
const sum = (numbers)=>{
 var Sum=0;
for(i=0;i<numbers.length;i++){
   Sum+=numbers[i]
}
 console.log(Sum)
   }
sum(numbers);

//d)Return all the prime numbers in an array
const Prime = (numbers)=>{
    let Sort=[]
    numbers.forEach((num)=>{
        let factor=0
       for(i=0;i<=num;i++){
           if(num%i===0){
               factor++
            }
       }
       if(factor==2){
           Sort.push(num)
       }
    }) 
        console.log(Sort)
    }
Prime(numbers);

//e)Return all the palindromes in an array
var text=["racecar","abc","dad","mom","father"];
const Palindromes = (text)=>{
    text.forEach((Pal)=>{
    if(Pal===(Pal.split('').reverse().join(''))){
        console.log(Pal);
    }
    })
        //console.log(Sort)
    }

Palindromes(text);