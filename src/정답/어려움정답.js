
// 1. binarySearch
const binarySearch = (x, arr) => {
  let [lhs, rhs] = [0, arr.length - 1];
  while(lhs < rhs) {
    let center = Math.floor((lhs + rhs) / 2);
    x <= arr[center] ? (rhs = center) : (lhs = center + 1)
  }
  return x === arr[rhs] ? rhs : null;
}

// 2. findObjectById 
function recur(data, id) {
  for(const prop in data) {
    if (data.id === id) {
      return data;
    } else {
      if (typeof data[prop] === 'object') {
        const obj = recur(data[prop], id);
        if(obj) return obj;
      }
    }
  }
}

function findObjectById(n) {
  return recur(data, n)
}

// 3. repeatString
const repeatString = (string, num) => {
  return num === 0 ? "" : num === 1 ? string : (string += repeatString(string, num - 1))
};