(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{465:function(n,t,a){"use strict";a.r(t);var s=a(4),e=Object(s.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"匿名函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匿名函数"}},[n._v("#")]),n._v(" 匿名函数")]),n._v(" "),a("hr"),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("function () {\n    //coding\n}\n")])])]),a("hr"),n._v(" "),a("h3",{attrs:{id:"_1-函数声明与函数表达式的不同在于："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-函数声明与函数表达式的不同在于："}},[n._v("#")]),n._v(" 1. 函数声明与函数表达式的不同在于：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("函数声明能够提前运行(原理和 “ var ”的机制相似)\n而函数表达式则需要按照代码顺序运行\nfunction setFn() {\n    // coding  \n}\n\n// 正常，函数声明可提前调用\n\nsetFn()\n    var setFn = function() {\n    // coding\n} \n")])])]),a("hr"),n._v(" "),a("h3",{attrs:{id:"_2-函数声明与函数表达式的不同在于："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-函数声明与函数表达式的不同在于："}},[n._v("#")]),n._v(" 2. 函数声明与函数表达式的不同在于：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("var setFn = function() {\n //coding\n}()\n\n// 可直接执行调用\n")])])]),a("h3",{attrs:{id:"而立即执行函数与函数表达式立刻调用的对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#而立即执行函数与函数表达式立刻调用的对比"}},[n._v("#")]),n._v(" 而立即执行函数与函数表达式立刻调用的对比")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("//立即执行函数\n(function（）{\n    console.log(1)\n}())\n//可以运行\n\n//不带函数表达式(匿名函数)\nfunction(){\n    console.log(1)\n}()\n//报错  //解析： 虽然匿名函数属于函数表达式，但未进行赋值，所以\njavascript解析时将开头的function当做函数声明，故报错提示需要函数名\n\n//带函数名的函数表达式\nvar test = function(){\n    console.log(1)\n}()\n//可以运行\n")])])]),a("h3",{attrs:{id:"立即执行函数里面的函数必须是函数表达式，所以由var-setfn-function-可以理解为在匿名函数前加了-运算符后，将函数声明转化为函数表达式，所以拿！，-，-，（）…等运算符来测试下是否如此。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#立即执行函数里面的函数必须是函数表达式，所以由var-setfn-function-可以理解为在匿名函数前加了-运算符后，将函数声明转化为函数表达式，所以拿！，-，-，（）…等运算符来测试下是否如此。"}},[n._v("#")]),n._v(" 立即执行函数里面的函数必须是函数表达式，所以由var setFn = function() {}()可以理解为在匿名函数前加了 = 运算符后，将函数声明转化为函数表达式，所以拿！，+，-，（）…等运算符来测试下是否如此。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("!function(){\n    console.log(1)\n}()\n// 1\n\n+function(){\n    console.log(2)\n}()\n// 2\n\n-function(){\n    console.log(3)\n}()\n// 3\n\n(function(){\n    console.log(4)\n})()\n// 4\n由此可见，加运算符确实可将函数声明转化为函数表达式，而之所以使用括号，是因为括号相对其他运算符会更安全，可以减少不必要的麻烦。\n立即执行函数与正常函数传参形式是一致的。\n\nfunction(a, b){\n    console.log(a + b);\n})(1, 2)\n// 3\n")])])]),a("h2",{attrs:{id:"结论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[n._v("#")]),n._v(" 结论")]),n._v(" "),a("p",[n._v("(function(){}())这样写的好处是在内部定义的变\n量不会跟外部的变量有冲突，达到保护内部变量的作用。")])])}),[],!1,null,null,null);t.default=e.exports}}]);