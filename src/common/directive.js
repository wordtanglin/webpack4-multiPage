// import Vue from "vue";

// /**
//  * 只能输入数字(不包含小数点)
//  */
// Vue.directive('number', {
//   bind: function (el) {
//     el.handler = function () {
//       if (el.getAttribute("maxlength") && el.value.length > el.getAttribute("maxlength")) {
//         el.value = el.value.substring(0, parseInt(el.getAttribute("maxlength")))
//       }
//       el.value = el.value.replace(/\D+/, '')
//     };
//     el.addEventListener('input', el.handler)
//   },
//   unbind: function (el) {
//     el.removeEventListener('input', el.handler)
//   }
// });


// /**
//  * 只能输入中文
//  */
// Vue.directive('Chinese', {
//   bind: function (el) {
//     el.handler = function () {
//       if (el.getAttribute("maxlength") && el.value.length > el.getAttribute("maxlength")) {
//         el.value = el.value.substring(0, parseInt(el.getAttribute("maxlength")))
//       }
//       el.value = el.value.replace(/[^\u4e00-\u9fa5]/g, '')
//     };
//     el.addEventListener('input', el.handler)
//   },
//   unbind: function (el) {
//     el.removeEventListener('input', el.handler)
//   }
// });
