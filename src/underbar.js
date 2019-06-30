// 기존의 언더바와 동일합니다. 스펙을 확인하고 만족시키세요.
// 난이도가 꽤 높다고 생각하는 것만 가져왔습니다.

(function() {
  'use strict';

  window._ = {};

  // iterator(value, key, collection)를 collection의 각각의 key-value pair에 대해 호출하세요.
  // iterator는 함수로 전달되며, 쉽게 말해 반복해서 실행하는 함수입니다.
  // collection으로 배열과 객체를 다 받을 수 있어야 합니다.
  // 참고로 배열의 value는 element이며, key는 index입니다.
  //
  // Note: _.each 는 아무런 값도 리턴하지 않습니다.
  // 다만 단순히 iterator 함수를 전달되는 collection의 각 항목에 대해 실행할 뿐입니다.
  //
  // Note 2: 이 문제를 풀기 위해서는 여러분이 spec 디렉토리에 있는 테스트 케이스의 요구사항을 잘 살펴볼 필요가 있습니다.
  // 실제로 어떻게 사용되는지 각 테스트 케이스 항목에 잘 나와 있습니다.
  _.each = function (collection, iterator) {
    
  };

 // 테스트 함수를 통과하지 않는 모든 element를 담은 배열을 리턴하세요.
  _.reject = function (collection, test) {
    
  };

 // iterator를 각 element에 적용한 결과를 담은 새로운 array를 리턴하세요.
  _.map = function (collection, iterator) {
    
  }

  // 객체의 배열을 가져와서, 그 안에 있는 특정 속성의 값의 배열을 리턴하세요.
  // 예를 들어, people이라는 객체가 담긴 배열을 가져와서, 그들의 나이만 리턴할 수 있어야 합니다.
  _.pluck = function (collection, key) { 
  
  }

  // 각 항목에 대해 iterator(accumulator, item)를 반복적으로 호출하여, Reduces an array to a single value by repetitively calling
  // 하나의 값으로 줄입니다. accumulator는 누적값으로, 이전 iterator 호출의 반환값이어야 합니다.
  //
  // reduce에 대한 세번째 argument로 초기값을 전달 할 수 있습니다.
  // 만일 초기값이 전달되지 않으면, 첫번재 element가 accumulator로 사용되며, iterator에 전달되지 않습니다.
  // 즉, 초기값이 전달되지 않은 경우, iterator는 두번째 element로부터 시작합니다.
  //
  // 예제:
  //   const numbers = [1,2,3];
  //   const sum = _.reduce(numbers, function(total, number){
  //     return total + number;
  //   }, 0); // 6이 리턴됩니다
  //
  //   const identity = _.reduce([5], function(total, number){
  //     return total + number * number;
  //   }); // 5가 리턴됩니다, 전달한 iterator와 관계없이, 첫번째 element가 즉시 사용됩니다.
  _.reduce = function (collection, iterator, accumulator) {
    

  };

  // element가 하나라도 iterator에 의해 truthy한지 체크합니다.
  // iterator가 없다면, element 그 자체가 truthy한지 체크하세요.
  _.some = function (collection, iterator) {
    
  };

  // extend와 비슷하지만, 이번엔 이미 존재하는 key에 대해 값을 덮어쓰기 하지 않습니다.
  _.defaults = function (obj) {
    
  };

  // 최대 한번만 호출할 수 있는 함수를 리턴합니다. 이후의 호출은 이전에 한번 리턴된 값만을 리턴해야 합니다.
  _.once = function(func) {
    
  };

  // 다차원 배열을 가져와서, 1차원 배열로 변환합니다.
  // 새 배열에는 다차원 배열의 모든 요소가 포함되어야 합니다.
  //
  // Hint: Array.isArray 를 사용해 배열인지 아닌지를 체크하세요.
  _.flatten = function (nestedArray, res) {
    
  };

  // 배열 내용의 순서를 랜덤하게 변경합니다.
  //
  // TIP: 이 함수는 immutable해야 합니다.
  _.shuffle = function (array) {
    
  }
 
}());
