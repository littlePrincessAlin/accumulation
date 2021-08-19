// 防抖/截流

// const debounce = (func, wait) => {
//   let timer = 0;

//   return function(...args) {
//     if(timer){
//       clearTimeout(timer);
//     }

//     timer = setTimeout(function(){
//       func.call(this,...args);
//     }, wait);
//   }
// }

// 加载三张图片

// 图片加载
// const imgFunc = (uploadsArr) => {
//     uploadsArr.forEach(item => {
//         document.createElement('img').src = item;
//     })

//     return 'success';
// }

// const uploadFunc = async() => {
//   const res = await imgFunc();

//   if(res){
//     console.log('OK')
//   }
// }

const imgArr = ['', '', ''];

const promiseImg = (src) => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.onload = () => {
      resolve();
    }
    img.onError = () => {
      reject()
    }
    img.src = src;
  });
}

const promiseArr = imgArr.map(src => promiseImg(src));

promise.all(promiseArr).then(() => {
  console.log('完成')
})

