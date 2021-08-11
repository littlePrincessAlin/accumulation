// 找出字符串中第n个重复的数字：
var firstUniqChar = function(s) {
    let map=new Map();
   for(let i=0;i<s.length;i++){
       if(map.has(s[i])){
           map.set(s[i],map.get(s[i])+1) 
       }
      else{
       map.set(s[i],1)
      }
   }
   console.log(map);

  for(let i=0;i<s.length;i++){
      if(map.get(s[i])===1){
          return i
      }
  }
  return-1

};
