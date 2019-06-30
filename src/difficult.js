/**
 * # binarySearch
 * 
 * 이진 검색 알고리즘을 구현합니다.
 * 정답은 다양할 수 있으므로 다음 논리와 테스트케이스에 너무 의존하면 안 됩니다 :)
 * 1. 배열의 첫 번째 위치(0)를 하위 경계(lower bound)로 설정한다. 
 * 2. 배열의 마지막 요소의 위치(배열의 길이 -1)를 상위 경계(upper bound)로 설정한다. 
 * 3. 하위 경계가 상위 경계보다 작거나 같은 동안 다음 과정을 반복한다. 
 * 4. (상위 경계 - 하위 경계) / 2를 중간 값으로 설정한다 
 *  - 중간값이 검색하려는 값보다 작으면 하위 경계를 (중간값 + 1)로 설정한다 
 *  - 중간값이 검색하려는 값보다 크면 상위 경계를 중간값으로 설정한다 
 *  - 앞의 조건에 해당하지 않는 상황이라면 중간값을 검색 결과값으로 반환한다
 *
 * ### 제한사항
 * 1. 해당값이 존재하지 않는다면 null을 리턴한다.
*/

function binarySearch(x, arr) {

}

/**
 * Recursion
 * id 를 이용하여, 해당 객체를 찾아내는 문제가 나올 수 있습니다.
 * 
 * ex :
 * findObjectById(6) // { id: 6 }
 * findObjectById(7) // { id: 7, children: [{id:8}, {id:9}] }
 */

let data = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4, children: [
      { id: 6 },
      { id: 7, children: [
          { id: 8 },
          { id: 9 }
      ]}
  ]},
  { id: 5 }
]

function findObjectById(n) {
  // write code here
}

/**
 * repeatString
 * 
 * string으로 받은 문자열을 num만큼 반복합니다. 
 * 
 * 기존의 방식이 아닌 Recursion으로 작성해보세요.
 */

function repeatString(string, num) {
  // write code here
};