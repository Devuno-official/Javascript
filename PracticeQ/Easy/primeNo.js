// 2) Build a function that checks whether a number is a prime numbe
let check_prime = (num) => {
	num % 2 === 1
		? console.log(` ${num} the number is prime`)
		: console.log(`${num} the number not prime `);
};

var num = 24;
check_prime(num);
