function sumNumbers(...numbers:number[]) {
    return numbers.reduce((accumulator,currentValue)=>{
        let newAcumulate = accumulator + currentValue;
        return newAcumulate;
    }) 
}

console.log(sumNumbers(1,2,3,4,5,6,7,8,9,10))