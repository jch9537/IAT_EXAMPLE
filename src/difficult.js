/**
 * # binarySearch
 * 
 * 이진 검색 알고리즘을 구현합니다.
 * 정답은 다양할 수 있으므로 테스트케이스에 너무 의존하면 안 됩니다 :)
 * 1. 배열의 첫 번째 위치(0)를 하위 경계(lower bound)로 설정한다. 
 * 2. 배열의 마지막 요소의 위치(배열의 길이 -1)를 상위 경계(upper bound)로 설정한다. 
 * 3. 하위 경계가 상위 경계보다 작거나 같은 동안 다음 과정을 반복한다. 
 * 4. (상위 경계 - 하위 경계) / 2를 중간 값으로 설정한다 
 *  - 중간값이 검색하려는 값보다 작으면 하위 경계를 (중간값 + 1)로 설정한다 
 *  - 중간값이 검색하려는 값보다 크면 상위 경계를 (중간값 - 1)로 설정한다 
 *  - 앞의 조건에 해당하지 않는 상황이라면 중간값을 검색 결과값으로 반환한다
 *
 * ### 제한사항
 * 1. 해당값이 존재하지 않는다면 -1을 리턴한다.
*/

function binarySearch(x, arr) {
  let [lower, upper] = [0, arr.length - 1];
  while(lower < upper) {
    let mid = Math.floor((upper + lower) / 2);
    x < arr[mid] ? (upper = mid - 1) : (lower = mid + 1);
  }
  return lower === upper ? upper : null;
}

const array = [1,2,3,5,8,10,12,15,20,50,77,99];
console.log(binarySearch(8, array));  // 4
console.log(binarySearch(50, array)); // 9