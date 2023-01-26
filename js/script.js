const cursos = [
    {
        curso: "HTML e CSS",
        descricao: "Curso de HTML e CSS do básico ao avançado",
        duracao: "1 mês",
        valor: 500
    },
    {
        curso: "JavaScript",
        descricao: "Curso de JavaScript do básico ao avançado",
        duracao: "2 meses",
        valor: 900
    },
    {
        curso: "APIsRest",
        descricao: "Curso de APIsRest do básico ao avançado",
        duracao: "6 meses",
        valor: 2000
    }
]

const estudantes = [
    {
        estudante: "Chris Evans",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: "900,00",
        nParcelas: 9,
        desconto: false,
        parcelas: 100
    },

    {
        estudante: "Halle Berry",
        turma: "Burnell",
        curso: "APIsRest",
        valor: "2.000,00",
        nParcelas: 4,
        desconto: false,
        parcelas: 500
    },

    {
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: "500,00",
        nParcelas: 0,
        desconto: true,
        parcelas: 0
    }
]
const carrinhoCursos = []

const parcelarCurso = (parcelas, carrinhoCursos) => {
    let soma = 0
    let desconto = 0

    for (i = 0; i < carrinhoCursos.length; i++) {
        soma += carrinhoCursos[i]
    }

    let valorComDesconto = soma

    if (parcelas <= 2) {
        desconto = 0.20
        valorComDesconto = soma - (soma * desconto)
    }

    switch (carrinhoCursos.length) {
        case 3:
            console.log(`O valor do pagamento é de R$ ${(valorComDesconto * 0.85).toFixed(2)} com ${(desconto + 0.15) * 100}% de desconto, parcelado em ${parcelas}x de R$ ${((valorComDesconto * 0.85) / parcelas).toFixed(2)}`)
            break
        case 2:
            console.log(`O valor do pagamento é de R$ ${(valorComDesconto * 0.90).toFixed(2)} com ${(desconto + 0.10) * 100}% de desconto, parcelado em ${parcelas}x de R$ ${((valorComDesconto * 0.90) / parcelas).toFixed(2)}`)
            break
        default:
            console.log(`O valor do pagamento é de R$ ${valorComDesconto.toFixed(2)}, parcelado em ${parcelas}x de R$ ${(valorComDesconto / parcelas).toFixed(2)}`)

    }
}

parcelarCurso(2, [500, 2000, 900])


const buscarCurso = (nomeCurso) => {
    const encontarCurso = cursos.find(curso => curso.curso.toLowerCase().startsWith(nomeCurso.toLowerCase()))
    return encontarCurso
}
// console.log(buscarCurso("jav"))


/* const buscarTurma = (nomeTurma) => {
    const encontarTurma = turmas.filter(item => item.turma.toLowerCase() === nomeTurma.toLowerCase())

    return encontarTurma.length > 0 ? encontarTurma[0] : 'Turma não encontrada'
} */


// console.log(buscarTurma("Elion"))
// console.log(buscarTurma("blablabla"))
// console.log(buscarTurma("Burnell"))



// buscarTurma("Elion")
// buscarTurma("blablabla")
// buscarTurma("Burnell")


// const buscarEstudante = (nomeEstudante) => {
//     for (i = 0; i < estudantes.length; i++) {
//         if (estudantes[i].estudante.toLowerCase().startsWith(nomeEstudante.toLowerCase())){
//             return estudantes[i]
//         }

//     }

//     return `Estudande não encontrado`
// }

// console.log(buscarEstudante("Las"))
// console.log(buscarEstudante("blablabla"))
// console.log(buscarEstudante("Hal"))

// const matricular = (nome, curso, turma, numParcelas) => {
//     let valorCurso = buscarCurso(curso)
//     let valorTotal = 0
//     let valorPorParcela = 0
//     let desconto = false


//     if(numParcelas > 0 && numParcelas <= 2){
//         desconto = true
//         valorTotal = valorCurso.valor - (valorCurso.valor * 0.2)
//         valorPorParcela = valorTotal / numParcelas
//     }else{
//         valorTotal = valorCurso.valor
//         valorPorParcela = valorTotal / numParcelas

//     }

//     const novoAluno = {
//         estudante: nome,
//         curso: curso,
//         turma: turma,
//         valor: valorCurso.valor,
//         nParcelas: numParcelas,
//         desconto: desconto,
//         valorParcelas: valorPorParcela
        
//     }

//     estudantes.push(novoAluno)
//     console.log(estudantes)
//     console.log(`Aluno Matriculado \nNome: ${nome} \nCurso: ${curso} \nTurma: ${turma}`)
//     // console.log("Aluno Matriculado", novoAluno)
// }
// matricular("regiane", "Javascript", "Ozemela", 2)

const adicionarAoCarrinho = (nomeCurso) => {
    const curso = buscarCurso(nomeCurso) // nao precisa do .toLowerCase pois a funcar buscarCurso já faz

    if (!curso) { // isso serve para nao colocar curso que nao existe no carrinho do curso
        return // quando o curso nao existe ele nao executa a linha de baixo, o push
    }

    carrinhoCursos.push(curso.valor)
}

adicionarAoCarrinho("JavaScript")
console.log(carrinhoCursos)

// const relatorioEstudante = (nomeEstudante) => {
//     const relatorio = buscarEstudante(nomeEstudante)

//     if (!relatorio) {
//         return
//     }

//     console.log(relatorio)
// }

// relatorioEstudante("Chris Evans")
// relatorioEstudante("Halle Berry")
// relatorioEstudante("blablabla")


// function menuOpen(){
//     let menuMobile = document.querySelector('.menu-mobile');
//     if(menuMobile.classList.contains('.open')){
//         menuMobile.classList.remove('.open')
//         /* document.querySelector('.menu-mobile__icon').src = "./mideas/icons8-cardápio-64.png" */
//     }else{
//         menuMobile.classList.add('.open')
//         /* document.querySelector('.menu-mobile__icon').src = "./mideas/icons8-cancelar-30" */
//     }
// }

function menuOpen(){
    alert("teste")
}
