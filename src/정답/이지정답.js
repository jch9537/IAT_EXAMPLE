
// 1. removeFromFrontOfNew
function removeFromFrontOfNew(arr) { 
  return arr.slice(1)
}

// 2. findLongestWordAmongMixedElements
function findLongestWordAmongMixedElements(arr) {
  const resArr = arr.filter((val) => typeof(val) === 'string').sort((a, b) => b.length - a.length);
  return resArr.length !== 0 ? resArr[0] : '';
}


// 3. convertObjectToArray
function convertObjectToArray(obj) {
  return Object.keys(obj).map(k => [k, obj[k]])
}

// 4. convertArrayToObject
function convertArrayToObject(array) {
  let obj = {};
  let res = [];
  array.forEach(item => {
    for(const a of item) {
      obj[a[0]] = a[1] 
    }
    res.push(obj);
    obj = {};
  })
  return res;
}

// 5. sumDigits
function sumDigits(num) {
  let str = num.toString();
  return num < 0 ? str.split('').splice(2).reduce((acc, i) => acc + +i, -str[1]) : str.split('').reduce((acc, i) => acc + +i, 0);
}

// 6. modulo
function modulo(num1, num2) {
  if(num2 === 0 || isNaN(num1) || isNaN(num2)) return NaN;
  return (
    num1 < 0 ? -modulo(-num1, num2) :
    num2 < 0 ? modulo(num1, -num2) :
    num1 < num2 ? num1 : modulo(num1 - num2, num2)
  );
}
