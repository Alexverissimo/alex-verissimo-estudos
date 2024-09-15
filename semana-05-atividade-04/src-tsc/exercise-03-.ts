function Datas<T>(input:T[]) {
    let takeInputs:T[] = input.map((elements)=>{
        return elements
    })
    
    return (takeInputs.reverse());
}

console.log(Datas(['jorge','erick','zé'])) 