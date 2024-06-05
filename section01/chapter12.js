// 1. 함수 표현식

function funcA() {
  console.log("funcA");
}

let varA = funcA;
varA();

let varB = function () { // 익명함수
  console.log("funcB");
  // 함수 표현식은 호이스팅의 대상이 되지 않는다
};

varB();

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
