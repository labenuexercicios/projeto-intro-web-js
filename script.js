const turmas = [
    {
        turma: "Hipátia",
        curso: "JavaScript",
        inicio: "30/11/2023",
        termino: "30/01/2023",
        numeroDeAlunos: 150,
        periodo: "Noturno",
        concluida: false
    },{
        turma: "Sibyla",
        curso: "JavaScript",
        inicio: "30/10/2022",
        termino: "30/12/2022",
        numeroDeAlunos: 200,
        periodo: "Integral",
        concluida: false
    },{
        turma: "Curie",
        curso: "HTML e CSS",
        inicio: "15/09/2022",
        termino: "15/10/2022",
        numeroDeAlunos: 180,
        periodo: "Noturno",
        concluida: true
    },{
        turma: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "01/11/2022",
        termino: "01/01/2023",
        numeroDeAlunos: 80,
        periodo: "Integral",
        concluida: true
    },{
        turma: "Clarke",
        curso: "HTML e CSS",
        inicio: "04/07/2022",
        termino: "04/09/2022",
        numeroDeAlunos: 200,
        periodo: "Noturno",
        concluida: true
    },{
        turma: "Blackwell",
        curso: "APIsRest",
        inicio: "20/03/2022",
        termino: "20/06/2022",
        numeroDeAlunos: 100,
        periodo: "Integral",
        concluida: true
    },{
        turma: "Elion",
        curso: "APIsRest",
        inicio: "20/03/2022",
        termino: "20/06/2022",
        numeroDeAlunos: 100,
        periodo: "Integral",
        concluida: true
    },{
        turma: "Burnell",
        curso: "APIsRest",
        inicio: "18/10/2022",
        termino: "18/04/2023",
        numeroDeAlunos: 90,
        periodo: "Integral",
        concluida: false
    },
];

const cursos = [
    {
        curso: "HTML e CSS",
        descricao: "Veja HTML e CSS do básico ao avançado",
        duracao: "1 mês",
        valor: 500
    },
    {
        curso: "JavaScript",
        descricao: "Veja JavaScript do básico ao avançado",
        duracao: "2 mês",
        valor: 900
    },
    {
        curso: "APIsRest",
        descricao: "Veja APIsRest do básico ao avançado",
        duracao: "6 mês",
        valor: 2000
    }
];

const estudantes = [
    {
        estudante: "Chris Evans",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: "900",
        nParcelas: 9,
        desconto: false,
        parcelas: 100
    },{
        estudante: "Halle Berry",
        turma: "Burnell",
        curso: "APIsRest",
        valor: "2000",
        nParcelas: 4,
        desconto: false,
        parcelas: 500
    },{
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: "500",
        nParcelas: 1,
        desconto: true,
        parcelas: 5
    }
];

//Parcelar Curso (Condicional)

/* 
const parcelarCurso = (numeroDeParcelas) => {

    if (numeroDeParcelas <=2){
        const cursoComDesconto = cursos[0].valor*0.8
        const parcelasComDesconto = cursoComDesconto/numeroDeParcelas
        console.log(`O curso ${cursos[0].curso} ficou no valor de R$ ${cursoComDesconto}. Em ${numeroDeParcelas}x de ${parcelasComDesconto} reais. Foi concedido desconto de 20%`)
    }else{
        const parcelasSemDesconto = cursos[0].valor/numeroDeParcelas
        console.log(`O curso ${cursos[0].curso} ficou no valor de R$ ${cursos[0].valor}. Em ${numeroDeParcelas}x de ${parcelasSemDesconto} reais.`)
    }
} 
*/

//Buscar Curso

let valorCursoPesquisado = 0

const buscarCurso = (busca) => {

    for (let i=0; i<cursos.length; i++){
       if (busca === cursos[i].curso){

        resultadoCurso = cursos[i]
        valorCursoPesquisado = cursos[i].valor
        
        console.log(cursos[i])
        }

    }
}

//Buscar Turma

const buscarTurma = (busca) => {

    for (let i=0; i<turmas.length; i++){
       if (busca === turmas[i].turma){

        console.log(turmas[i])
        }
    }
}

//Buscar Estudante

const buscarEstudante = (busca) => {

    for (let i=0; i<estudantes.length; i++){
       if (busca === estudantes[i].estudante){

        console.log(estudantes[i])
        }
    }
}


// Função Matricular

const matricular = (nomeAluno, nomeCurso, nomeTurma, numParcela) => {

    buscarCurso (nomeCurso)

    let temDesconto = true

    if (numParcela <= 2) {
         temDesconto = true
    } else {
        temDesconto = false
    }

    let parcelasNovoAluno = 0

    if (numParcela <=2){
        const cursoComDesconto = resultadoCurso.valor*0.8
        const parcelasComDesconto = cursoComDesconto/numParcela
        parcelasNovoAluno = parcelasComDesconto        
        }else{
        const parcelasSemDesconto = resultadoCurso.valor/numParcela
        parcelasNovoAluno = parcelasSemDesconto
    }

    const alunoNovo = {
        estudante: nomeAluno,
        turma: nomeTurma,
        curso: nomeCurso,
        valor: resultadoCurso.valor,
        nParcelas: numParcela,
        desconto: temDesconto,
        parcelas: parcelasNovoAluno
    }

    estudantes.push(alunoNovo)

    console.log(`O Aluno ${nomeAluno} foi matriculado com sucesso na turma ${nomeTurma} do curso de ${nomeCurso}`)

}

//Parcelar Curso (Laços)

/* const parcelarCurso = (carrinhoCursos, numeroDeParcelas) => {
let = valorTotal = 0

if (carrinhoCursos.length == 1) {
    valorTotal = carrinhoCursos[0]
} else if (carrinhoCursos.length == 2) {
    valorTotal = carrinhoCursos[0] + carrinhoCursos[1]
} else if (carrinhoCursos.length == 3) {
    valorTotal = carrinhoCursos[0] + carrinhoCursos[1] + carrinhoCursos[2]
}

if (numeroDeParcelas <=2){
    const cursoComDesconto = valorTotal*0.8
    const parcelasComDesconto = cursoComDesconto/numeroDeParcelas
    console.log(`O valor do pagamento é de R$ ${cursoComDesconto} com 20% de desconto, parcelado em ${numeroDeParcelas}x de R$ ${parcelasComDesconto}.`)
}else{
    const parcelasSemDesconto = valorTotal/numeroDeParcelas
    console.log(`O valor do pagamento é de R$ ${valorTotal}, parcelado em ${numeroDeParcelas}x de R$ ${parcelasSemDesconto}.`)
}

}

parcelarCurso ([500, 900, 400], 3) */

//Parcelar Cursos (Função de array)

let carrinhoCursosArray = []

const carrinhoCursos = (cursos) => {

    buscarCurso (cursos)

    carrinhoCursosArray.push(valorCursoPesquisado)
}

const parcelarCurso = (carrinhoCursos, numeroDeParcelas) => {
    let = valorTotal = 0
    
    if (carrinhoCursosArray.length == 1) {
        valorTotal = carrinhoCursosArray[0]
    } else if (carrinhoCursosArray.length == 2) {
        valorTotal = Number(carrinhoCursosArray[0] + carrinhoCursosArray[1])
    } else if (carrinhoCursosArray.length == 3) {
        valorTotal = Number(carrinhoCursosArray[0] + carrinhoCursosArray[1] + carrinhoCursosArray[2])
        console.log(valorTotal)
    }
    
    if (numeroDeParcelas <=2){
        const cursoComDesconto = valorTotal*0.8
        const parcelasComDesconto = cursoComDesconto/numeroDeParcelas
        console.log(`O valor do pagamento é de R$ ${cursoComDesconto} com 20% de desconto, parcelado em ${numeroDeParcelas}x de R$ ${parcelasComDesconto}.`)
    }else{
        const parcelasSemDesconto = valorTotal/numeroDeParcelas
        console.log(`O valor do pagamento é de R$ ${valorTotal}, parcelado em ${numeroDeParcelas}x de R$ ${parcelasSemDesconto}.`)
    }
    
}

parcelarCurso (carrinhoCursos, 2)

let alunoPesquisado = ""

const relatorioEstudante = (alunoPesquisado) => {

    for (let i=0; i<estudantes.length; i++){
        if (estudantes[i].estudante == alunoPesquisado) {
            console.log(`Aluno: ${estudantes[i].estudante} \nTurma: ${estudantes[i].turma} \nCurso: ${estudantes[i].curso} \nValor Total: ${estudantes[i].valor} \nValorParcelado: ${estudantes[i].parcelas} \nNº Parcelas: ${estudantes[i].nParcelas} \n`)
        }
    }

}

relatorioEstudante ("Calvin Klein")
