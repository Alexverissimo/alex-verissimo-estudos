let nome = prompt("Seja bem vindo(a),qual é o seu nome?");
let lugares = [];
let loop=true
while (loop) {

    let entrada = parseInt(prompt(`${nome} Escolha uma opção\n1- Adicionar um lugar na lista de lugares já visitados.\n2-Remova um lugar da lista de lugares já visitados.\n3-Listar todos os lugares.\n4-Mostrar todos os lugares no documento HTML.\n5-Sair`));

    switch(entrada) {
        case 1:
            let lugar = prompt("Digite um lugar");
            if (lugar) {
                let confirmacao = confirm("Deseja adicionar mesmo ?");
                if(confirmacao) {
                    lugares.push(lugar);
                }
                else {
                    alert('Voltando pro menu...');
                }
            }
            break
        case 2 :
            if (lugares.length > 0) {
                let remover = prompt(`Aqui estão os lugares a serem removidos\n${lugaresVisitados()}  \n Escolha um lugar no número.`);
                if (remover && remover >0 && remover <= lugares.length) {
                    let confRemover = confirm("Deseja realmente remover esse lugar ?");
                    if(confRemover) {
                        lugares.splice(remover-1,1);
                        alert("Lugar removido com sucesso!");
                    }
                }
                // se remover retonar falso e o tamanho digitado for 
                else if (remover || remover > lugares.length) {
                    alert('Digite uma opção valida!');
                }}
            // caso tamanho de lugares for 0
            else {
                alert('Lugares visitados\n0 Lugares adicionados');
            }
            break
        case 3 :
            if(lugares.length > 0) {
                alert(`Lugares visitados\n${lugaresVisitados()}`);
            }
            else {
                alert('0 Lugares visitados');
            }
            break
        case 4 :
            imprimirListaNaTela();
            break
        case 5 :
            loop = false;
            break
        default:
            if(entrada <=0 || entrada > 5 || isNaN(entrada)) {
                alert("Digite uma opção valida!");
            }
    }

}

 // transforma o array [lugares] em uma string ordenada de 1 ao length
function lugaresVisitados() {
    let resultado = '';
    for (let i =0; i < lugares.length;i++) {
        resultado+=`${i+1}-${lugares[i]}\n`;
    }
    return resultado
}

function imprimirListaNaTela() {
    if (lugares.length > 0){
        let listagem = document.querySelector("#listas");
        listagem.innerHTML="";

        for (let i in lugares){
            let novoElemento = document.createElement("li");
            novoElemento.innerText=`${lugares[i]}`;
            listagem.appendChild(novoElemento);
            
        }
        loop=false
        
    }
    else {
        alert("Você ainda não adicionou nenhum lugar a sua lista!");
    } 
}