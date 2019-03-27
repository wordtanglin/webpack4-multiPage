// import Vue from "vue";

// /**
//  * 时间格式化
//  */
// Vue.filter('timestampToFormat', function (timestamp, formatType) {
//   if (timestamp == '' || timestamp == undefined || timestamp == 'undefined' || timestamp == null) {
//     return '';
//   }
//   var dateTime = new Date(parseInt(timestamp));
//   var backTime = "";
//   var year = dateTime.getFullYear(); // 获取年
//   var month = dateTime.getMonth() + 1; // 获取月
//   var date = dateTime.getDate(); // 获取日
//   var hour = dateTime.getHours(); // 获取时
//   var minute = dateTime.getMinutes(); // 获取分
//   var second = dateTime.getSeconds(); // 获取秒
//   switch (formatType) {
//     case '1':
//       backTime = year + "年" + zeroFill(month) + "月" + zeroFill(date) + "日";
//       break;
//     case '2':
//       backTime = year + "-" + zeroFill(month) + "-" + zeroFill(date) + " " + zeroFill(hour) + ":" + zeroFill(minute) + ":" + zeroFill(second);
//       break;
//     case '3':
//       backTime = year + "-" + zeroFill(month) + "-" + zeroFill(date);
//       break;
//     case '4':
//       backTime = year + "-" + zeroFill(month) + "-" + zeroFill(date) + " " + zeroFill(hour) + ":" + zeroFill(minute);
//       break;
//     default:
//       backTime = year + "-" + month + "-" + date;
//       break;
//   }
//   return backTime;
// });


// Vue.filter('fileSplice', function (s) {
//   s = s.substring(2, s.length - 1);
//   return s;
// })

// /**
//  * 数字字符串补零
//  *
//  * @param num
//  * @returns {*}
//  */
// function zeroFill(num) {
//   if (num > 0 && num < 10 || num.toString().length == 1 && num == 0) {
//     return '0' + num;
//   }
//   return num;
// }

// /**
//  * 关键字
//  */
// Vue.filter('searchKey', function (name, key) {
//   let str = '<span style="color:#007AFF">' + key + '</span>';
//   return name.replace(key, str);
// });

// /**
//  * 输入计数器
//  */
// Vue.filter('inputCounter', function (inputContent) {

//   if (!inputContent) {
//     return 0;
//   }
//   let matchCounter = inputContent.match(/\r|\n/g) || [];
//   return inputContent.length + matchCounter.length;
// });

// /**
//  * 字符串截取
//  */
// Vue.filter('ellipsisStr', function (val, length) {
//   if (val.length > length) {
//     return val.substring(0, length) + '...';
//   } else {
//     return val;
//   }
// });
