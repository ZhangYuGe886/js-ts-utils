/**匹配数字且小数位不超过六位*/
export function matchNum(value) {
  let filterValue = value.toString();
  filterValue = filterValue.replace(/^\./g, "");  //  不能以“.”开头
  filterValue = filterValue.replace(/[^\d.]/g, "");  //清除“数字”和“.”以外的字符  
  filterValue = filterValue.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的  
  filterValue = filterValue.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
  // eslint-disable-next-line no-useless-escape
  filterValue = filterValue.replace(/^(\-)*(\d+)\.(\d{1,6}).*$/, '$1$2.$3');//只能输入6个小数 
  if (filterValue.indexOf(".") < 0 && filterValue != "") {//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额 
    filterValue = parseFloat(filterValue);
  }
  // if (filterValue === '0.00') {
  //   filterValue = ''
  // }
  return filterValue;
}
/**计算百分比，并保留小数位6位 */
export function percentage(num, total) {
  if (num === 0 || total === 0) {
    return 0;
  }
  return (Math.round(num / total * 100000000) / 1000000);// 保留百分比小数点后六位
}
/**
 * 找到数组中字符串最长的值
 * @param {*} arr 
 * @returns 
 */
export function findMaxLengthStr(arr = []) {
  if (!arr.length) {
    return ''
  }
  let res = ''
  res = arr.reduce((acc, val) => {
    return acc.length >= val.length ? acc : val
  });
  return res
}
/**从字符串中提取出汉字方法 */
export function findChList(str) {
  if (!str) return
  const reg = /[\u4e00-\u9fa5]{2,}/g
  const list = str.match(reg)
  if (list) {
    return list.join("")
  }
}
