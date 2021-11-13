const arr = [1,2,3,4,5,6];
const target = 8;

function findSums(arr, target) {
    const sum = (arr, target, conArr) => {
        const map = new Map();
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            const current = target - arr[i];
            if(map.has(current)) {
                result.push(conArr.concat([current, arr[i]]));
            }else {
                map.set(arr[i],i);
                if(!arr.includes(current)) {
                    const newarr = [].concat(arr);
                    newarr.splice(i,1);
                    sum(newarr,current,[arr[i]]);
                }
            }
        }
        // return result;
        console.log(result)
    }
    sum(arr, target, []);
}
// findSums(arr, target)
console.log(findSums(arr, target));