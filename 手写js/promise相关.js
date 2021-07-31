function myPromise(constructor){
  let self=this;
  self.status="pending" //定义状态改变前的初始状态
  self.value=undefined;//定义状态为resolved的时候的状态
  self.reason=undefined;//定义状态为rejected的时候的状态
  function resolve(value){
      //两个==="pending"，保证了状态的改变是不可逆的
     if(self.status==="pending"){
        self.value=value;
        self.status="resolved";
     }
  }
  function reject(reason){
      //两个==="pending"，保证了状态的改变是不可逆的
     if(self.status==="pending"){
        self.reason=reason;
        self.status="rejected";
     }
  }
  //捕获构造异常
  try{
     constructor(resolve,reject);
  }catch(e){
     reject(e);
  }
}
// 定义链式调用的then方法
myPromise.prototype.then=function(onFullfilled,onRejected){
 let self=this;
 switch(self.status){
    case "resolved":
      onFullfilled(self.value);
      break;
    case "rejected":
      onRejected(self.reason);
      break;
    default:       
 }
}




// promise.resolve()
// 传参是Promise则直接返回；传参是thenable对象，返回的Promise会跟随这个对象，采用它的最终状态作为自己的状态
// 其他情况，直接返回以该值为成功状态的Promise对象。
Promise.resolve = (param) => {
  if(param instanceof Promise) return param;
  return new Promise((resolve, reject) => {
    if(param && param.then && typeof param.then === 'function') {
      // param 状态变为成功会调用resolve，将新 Promise 的状态变为成功，反之亦然
      param.then(resolve, reject);
    }else {
      resolve(param);
    }
  })
}
// promise.reject()
Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
      reject(reason);
  });
}
// 实现 Promise.prototype.finally
Promise.prototype.finally = function(callback) {
  this.then(value => {
    return Promise.resolve(callback()).then(() => {
      return value;
    })
  }, error => {
    return Promise.resolve(callback()).then(() => {
      throw error;
    })
  })
}
// 实现 Promise.all
// 传入参数为一个空的可迭代对象，则直接进行resolve。
// 如果参数中有一个promise失败，那么Promise.all返回的promise对象失败。
// 在任何情况下，Promise.all 返回的 promise 的完成状态的结果都是一个数组
Promise.all = function(promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let index = 0;
    let len = promises.length;
    if(len === 0) {
      resolve(result);
      return;
    }
   
    for(let i = 0; i < len; i++) {
      // 为什么不直接 promise[i].then, 因为promise[i]可能不是一个promise
      Promise.resolve(promise[i]).then(data => {
        result[i] = data;
        index++;
        if(index === len) resolve(result);
      }).catch(err => {
        reject(err);
      })
    }
  })
}
// promise.allsettle()
