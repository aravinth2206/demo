//JSON iterate over all for loops
let User = {
    name: "Aravinth", 
    age:25,
    locality:"Salem",
    Nationality:"India"
    }
//forloop
let key=Object.keys(User);
let Key = "";
for (let i=0; i<key.length;i++) {
Key += key[i] + ", ";
}console.log(Key);

//forinloop
let value=Object.values(User);
let Value="";
for (let j in value) {
Value += value[j] + ", ";
}console.log(Value);
//forofloop
let content=Object.entries(User);
for(let [k1,k2] of content){
console.log(`${k1}: ${k2}`);
}
//forEach loop
content.forEach(function(elem, index, arr){
console.log(elem)
})

//Create your own resume data in JSON format

let myResume={
    "basics": {
      "name": "ARAVINTH SENTHILKUMAR",
      "email": "aravinths2206@gmail.com",
      "phone": 8098981799,
      "degree": "Bca",
      "location": {
        "address": "194E/213,GANTHIPURAM",
        "postalCode": 636108,
        "city": "ATTUR",
        "state": "TAMILNADU",
        "country": "INDIA"
      },
    },
      "work": [
      {
        "company": "NTT DATA",
        "position": "SENIOR PROCESS EXECUTIVE",
        "startDate": "2023-10-16",
        "endDate": "NIL",
      },
    ],
    "education": [
      {
        "institution": "SNMV COLLEGE OF ARTS AND SCIENCE",
        "department": "BCA",
        "studyType": "FULL-TIME",
        "batch start year": 2016,
        "batch end year": 2019,
        "gpa": 70,
      }
    ],
    "skills": [
      {
        "name": "python,javascript",
        "level": "beginer",
        "project": "ONLINE SHOPPING",
      }
    ],
    "languages": [
      {
        "language": "TAMIL,ENGLISH",
      }
    ],
    "interests": [
      {
        "name": "script writter,youtuber,",
      }
    ]
  }
let data=Object.entries(myResume);
for(let K of data){
    console.log(K);
}
