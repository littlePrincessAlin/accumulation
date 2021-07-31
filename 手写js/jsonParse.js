function jsonParse(opt) {
  return eval('(' + opt + ')');
}

// eval比较危险，你可以使用Function，它具有字符串参数的特性
var func = new Function(arg1, arg2, ...functionBody);

// 使用
var jsonStr = '{ "age": 20, "name": "jack" }'
var json = (new Function('return ' + jsonStr))();
