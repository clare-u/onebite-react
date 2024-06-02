// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // 모듈러 연산

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; // not a number

console.log(1 * "hello");

// 2. String Type
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;

console.log(introduce);

let introduceText = `${myName}은 ${myLocation}에 거주합니다`; // 템플릿 리터럴 문법
console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
let none;
console.log(none);
