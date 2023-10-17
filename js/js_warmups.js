
const findLargestNumber = (numbers) => {
        let largestNum = [0];
        if(Array.isArray(numbers) && numbers.length === 0){
            return false;
        }else {
            for(const number of numbers){
                if(largestNum < number) {
                    largestNum = number;
                }
            }
        }
        return largestNum;
};

(()=> {
    const numbers = [42,17,8,94,23,61,12,51,6];
    const result = findLargestNumber(numbers);
    console.log(result);
})();