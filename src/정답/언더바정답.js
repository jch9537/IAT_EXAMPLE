// 모든 정답은 화살표 함수로 작성되어 있습니다.
// 기존 푸신 정답과 다를 수 있고, 정답은 다양하므로 다양한 풀이방법으로 공부하시면 좋겠습니다.
// Ctrl-F 를 활용하세요.

// 1. identity
_.identity = val => val;

// 2. first & last
_.first = (array, n) => n === undefined ? array[0] : array.slice(0, n);

_.last = (array, n) => {
  return n === undefined ? array[array.length - 1] : array.reverse().slice(0, n).reverse();
};

// 3. each
_.each = (collection, iterator) => {
  if(Array.isArray(collection)) {
    for(let i = 0; i < collection.length; i += 1) {
      iterator(collection[i], i, collection);
    }
  } else {
    for(let k in collection) {
      iterator(collection[k], k, collection);
    }
  }
};

// 4. indexOf
_.indexOf = (array, target) => {
  let result = -1;
  _.each(array, (item, index) => {
    item === target && result === -1 && (result = index);
  });
  return result;
};

// 5. filter
_.filter = (collection, test) => {
  let res = [];
  _.each(collection, item => test(item) && (res = [...res, item]))
  return res;
};

// 6. reject
_.reject = (collection, test) => {
  let res = [];
  _.each(collection, item => !test(item) && (res = [...res, item]));
  return res;
};

// 7. uniq
_.uniq = array => {
  let res = [];
  _.each(array, item => !res.includes(item) && (res = [...res, item]));
  return res;
};

// 8. map
_.map = (collection, iterator) => {
  let res = [];
  _.each(collection, (item, i) => res = [...res, iterator(item, i, collection)]);
  return res;
}

// 9. pluck
_.pluck = (collection, key) => _.map(collection, obj => obj[key]);

// 10. reduce
_.reduce = (collection, iterator, accumulator) => {
  const iter = collection[Symbol.iterator]();
  if(accumulator === undefined){
    accumulator = iter.next().value;
  }
  for(const i of iter) {
    accumulator = iterator(accumulator, i);
  }
  return accumulator;
};

// 11 .contains
_.contains = (collection, target) => {
  let isTrue = false;
  _.each(collection, item => item === target && (isTrue = true))
  return isTrue;
};

// 12. every
_.every = (collection, iterator) => {
  let isTrue = true; 
  _.each(collection, item => (!iterator ? !item : !iterator(item)) && (isTrue = false))
  return isTrue; 
};

// 13. some
_.some = (collection, iterator) => {
  let isTrue = false;
  _.each(collection, item => (!iterator ? item : iterator(item)) && (isTrue = true))
  return isTrue;
};

// 14. extend
_.extend = (obj, ...rest) => Object.assign(obj, ...rest);

 // 15. defaults
_.defaults = (obj, ...rest) => {
  _.each(rest, item => {
    for(const key in item) {
      !obj.hasOwnProperty(key) && (obj[key] = item[key]);
  }})
  return obj;
};

// 16. once
_.once = func => {
  let isCalled = false;
  let result;
  return (...args) => {
    if(isCalled === false) {
      result = func(...args);
      isCalled = true;
    }
    return result;
  }
};

// 17. delay
_.delay = (func, wait, ...rest) => {
  setTimeout(func, wait, ...rest)
};

// 18. flatten
_.flatten = (nestedArray, res) => {
  res = res || [];
  _.each(nestedArray, item => Array.isArray(item) ? _.flatten(item, res) : res.push(item));
  return res;
};

// 19. shuffle
_.shuffle = array => {
  let res = [];
  let copiedArr = array.slice(); 
  while(copiedArr.length) {
    let randomIndex = Math.floor(Math.random() * copiedArr.length);
    // res.push(copiedArr.splice(randomIndex, 1)[0])
    res = [...res, copiedArr.splice(randomIndex, 1)[0]];
  }
  return res;
}