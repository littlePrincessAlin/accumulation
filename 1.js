Promise.all = function (promisesArr) {
    return new Promise((resolve, reject) => {
      let result = [];
      let index = 0;
      let len = promisesArr.length;

      if(!len){
        resolve(result);
        return;
      }

      for(let i = 0; i < len; i++) {
        Promise.resolve(promisesArr[i]).then(data => {
            result[index] = data;
            index++;

            if(index === len) resolve(result);
        }).catch(err => reject(err));
      }
    })
}