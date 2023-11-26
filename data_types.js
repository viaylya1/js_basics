// Number
const a = 5;
const b = 5.5;
console.log (a,b);
console.log (typeof a, typeof b);

// String
let Name = "Vika";
console.log (Name);
console.log (typeof Name);

// Boolean
let isTrue = true;
console.log (isTrue);
console.log (typeof isTrue);

// Undefined
let _unknown;
console.log (_unknown);
console.log (typeof _unknown);

// BigInt
let big_number = BigInt (123456789012345678901211112234445555555554567890);
console.log (big_number);
console.log (typeof big_number);

// Infinity
let divisionByZero = 5/0;
console.log (divisionByZero);

if (isFinite(divisionByZero)) {
  console.log("divisionByZero is a finite number");
} else {
  console.log("divisionByZero is Infinity");
}


// Object
const fullName = {firstName:"Viktoriia", lastName:"Bryzhak"};
console.log (fullName);
console.log (typeof fullName);

// Symbol
let unique_value = Symbol('id') ;
console.log (unique_value);
console.log (typeof unique_value);

// NaN
let nonsense = "name" / 2;
console.log (nonsense);

if (isNaN(nonsense)) {
    console.log ('This value is not Number!');
} else {
    console.log('This value is NUMBER!')
}


//NULL
let noValue = null;
console.log (noValue);

if (noValue === null) {
  console.log("noValue is null");
} else {
  console.log("noValue is not null");
}
