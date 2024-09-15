"use strict";
function squared(numbers) {
    if (typeof numbers === "number") {
        return numbers ** 2;
    }
    else {
        let newNumbers = numbers.map((elements) => {
            return elements ** 2;
        });
        return newNumbers;
    }
}
console.log(squared(1));
console.log(squared([1, 2, 3, 4, 5, 6]));
