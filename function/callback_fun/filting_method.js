const person = [
 {    id : 1,
        fname : "john",
        age : 13
 },
 {    id:2,
        fname: "wikee" ,
        age : 23
 },
 {        id : 3,
         fname :"sung jinno",
         age : 56 
    }
];


const filtmedthod = person.filter((person) => {
              person.age >= 18
});
           console.log(filtmedthod);

console.log(+true);
console.log(+false);