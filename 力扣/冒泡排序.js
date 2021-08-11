var sortArray = function (nums) {
    if(nums.length<=1)return nums
    // 冒泡排序
    for(let i=0;i<nums.length-1;i++){
        for(let j=0;j<nums.length-i-1;j++){
            if(nums[j]>nums[j+1]){
                [nums[j],nums[j+1]]=[nums[j+1],nums[j]]
            }

        }
    }
    return nums
    
};