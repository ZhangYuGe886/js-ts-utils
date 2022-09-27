// 实现数组非零非负最小值index
export function FindPositiveIntegerIndex(arr) {
  let index = -1
  const minVal = arr.reduce((pre, cur) => {
    return pre > 0 && cur > 0 && pre < cur ? pre : cur
  }, -1)
  index = arr.findIndex(val => val === minVal)
  return index
}
