// 想要
let url = "http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled";
parseParam(url);
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/

// 实现：
function parseParam(url, key) {
  const params = new URLSearchParams(url);
  return params.get(key);
}

function parseParam(url, key) {
  const paramsStr = url.search.slice(1); // 获取'?'后面的参数字符串
  const paramsArr = paramsStr.split("&"); // 分割'&'字符 获得参数数组

  const result = {};

  paramsArr.forEach((item) => {
    const query = item.split("=");

    result[query[0]] = query[1];
  });

  return result;
}
