// SpecRunner를 활용하여서 조건을 만족시키세요.

/** 
 * # removeFromFrontOfNew
 * 
 * 기존의 removeFromBackOfNew 와의 차이는 하나입니다.
 * 배열에서 가장 앞의 수를 제거하고 리턴하세요.
 * 단, 원본 배열을 변경해서는 안 됩니다.
*/
function removeFromFrontOfNew(arr) { 
  
}

/** 
 * 
 * # findLongestWordAmongMixedElements
 * 
 * 아래는 기존의 배열에서 가장 짧은 문자를 리턴하는 설명입니다.
 * Write a function called "findShortestWordAmongMixedElements".
 * Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.
 * Notes:
  If there are ties, it should return the first element to appear in the given array.
  Expect the given array to have values other than strings.
  If the given array is empty, it should return an empty string.
  If the given array contains no strings, it should return an empty string.

  위 조건에서 다른 조건은 만족시키되 가장 긴 문자를 리턴하십시오.
*/
function findLongestWordAmongMixedElements(arr) {
  
}

/** 
 * # convertObjectToArray
 * 기존의 문제와 동일합니다.
 * 
 * Write a function called "convertObjectToList" which converts an object literal into an array of arrays, like this:
  {
    name: 'Holly',
    age: 35,
    role: 'producer'
  }

  Return : [['name', 'Holly'], ['age', 35], ['role', 'producer']]
*/
function convertObjectToArray(obj) {
  
}

/** 
 * # convertArrayToObject
 * 
 * 기존의 문제와 동일합니다.
 * Write a function called "transformEmployeeData" that transforms some employee data from one format to another.
 * The argument will look something like this:
 * [
    [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
      [
        ['firstName', 'Mary'],
        ['lastName', 'Jenkins'],
        ['age', 36],
        ['role', 'manager']
      ]
    ];
  * Given that input, the return value should look like this:
  [
    { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
    { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }
  ];

  * Note that the input may have a different number of rows or different keys than the given sample.
*/

function convertArrayToObject(array) {
  
}


/** 
 * # sumDigits
 * 
 * 기존의 문제와 동일합니다.
 * 
 * Write a function called "sumDigits".
 * Given a number, "sumDigits" returns the sum of all its digits.
 * 
 * var output = sumDigits(1148);
 * console.log(output); // --> 14
 * 
 * If the number is negative, the first digit should count as negative.
 * 
 * var output = sumDigits(-316);
 * console.log(output); // --> 4
 * 
 * Notes:
 * In order to use some of the methods that will be most helpful to you, 
 * you will most likely want to do some string to number conversion and vice versa.
 * Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.
*/

function sumDigits(num) {
  
}


/** 
 * # modulo
 * 
 * 기존의 문제와 동일합니다. Recursion으로 푸시면 조금 더 간단하게 풀이 하실 수 있습니다.
 * 
 * Write a function called "modulo".
 * Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.
 * It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator: 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/ArithmeticOperators#Remainder()
 * Notes:
  - Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
  - 0 % ANYNUMBER = 0.
  - ANYNUMBER % 0 = NaN.
  - If either operand is NaN, then the result is NaN.
  - Modulo always returns the sign of the first number.

  var output = modulo(25, 4);
  console.log(output); // --> 1
*/

function modulo(num1, num2) {

}
