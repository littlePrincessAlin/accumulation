const deepClone = (obj) => {
  if(typeof obj !== 'object' || obj === null) return obj;

  let copy = {};

  if(Array.isArray(obj)){
    copy=[];
  }

  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      copy[key] = deepClone(obj[key]);
    }
  }

  return copy;
}