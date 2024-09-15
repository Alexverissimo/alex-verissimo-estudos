"use strict";
function Datas(input) {
    let takeInputs = input.map((elements) => {
        return elements;
    });
    return (takeInputs.reverse());
}
console.log(Datas(['jorge', 'erick', 'zé']));
