// Coletando os dados necessários para realização das funcionalidades.

// Coleta do número dígtado pelo usuário.
// Coleta do campo 'select' para inserção de dados.
// Coleta do campo 'footer' para inserção de dados.
let addNumber = window.document.querySelector('input#numbers');
let selectNumbers = window.document.querySelector('select#selectNumbers');
let result = window.document.querySelector('footer#result');

// Criação de um vetor vazio para inserção de dados.
let logNumber = []

// Função que verifica se um número está entre 0 e 100.
// Parâmetro: Número
let isNumber = n => {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Função que verifica se um número já está na lista. 
// Parâmetro: Número & Lista
let isList = (n, ln) => {
    if (ln.indexOf(Number(n)) != -1) {  // Se o número dentro da lista for diferente de -1, quer dizer que ele ainda não existe dentro da lista.
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumber(addNumber.value) && !isList(addNumber.value, logNumber)) {  // Chamando as funções á cima juntamente com os parâmetros.
        logNumber.push(Number(addNumber.value))

        let item = window.document.createElement('option')  // Criando um elemento 'option' que esá armazenado na minha váriavel 'item'.
        item.innerText = `Valor ${Number(addNumber.value)} adicionado...` // Adiocionando um dado a minha váriavel 'item'.
        selectNumbers.appendChild(item)  // Adicionando o elemento criado juntamente com seu valor no campo 'select'.
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo deu errado...!',
            footer: '<a href="">suporte</a>'
        })
    }
};

function check() {
    if (logNumber.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Você precisa dígitar pelo menos um número...!',
            footer: '<a href="">suporte</a>'
        })
    } else {
        let total = logNumber.length
        let maior = logNumber[0]
        let menor = logNumber[0]
        let soma = 0
        let media = 0

        for (let pos in logNumber) {
            soma += logNumber[pos]
            if (logNumber[pos] > maior) {
            maior = logNumber[pos]
            }
            if (logNumber[pos] < menor) {
                menor = logNumber[pos]
            }
        }
        media = soma / total

        result.innerHTML = ''
        result.innerHTML += `<p> O maior número adicionado é: ${maior} </p>`
        result.innerHTML += `<p> Total de números adicionados: ${total} </p>`
        result.innerHTML += `<p> O menor número adicionado é: ${menor} </p>`
        result.innerHTML += `<p> A média dos números adicionados: ${media} </p>`
        result.innerHTML += `<p> A soma dos números adicionado: ${soma} </p>`
    }
}
