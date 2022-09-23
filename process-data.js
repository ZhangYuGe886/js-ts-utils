//通过属性去重数组
export function delRepeatItemByPro(arr, pro) {
  let pros = [],newArr = []
  for (let i in arr) {
    if (pros.indexOf(arr[i][pro]) === -1) {
      pros.push(arr[i][pro])
      newArr.push(arr[i])
    }
  }
  return newArr
}
// 求和
export function getSum(arr) {
  return arr.reduce((pre, cur) => {
    return pre + cur
  }, 0)
}
