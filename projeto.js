const cursos = [{
    nome: "HTML e CSS",
    descrição: "",
    duração: "1 mês",
    valor: 500,
},
{
    nome: "JavaScript",
    descrição: "",
    duração: "2 meses",
    valor: 900,
},
{
    nome: "APIsRest",
    descrição: "",
    duração: "6 meses",
    valor: 2000,
}

]

const turmas = [{
    nome: "Hipatia",
    curso: "JavaScript",
    inicioCurso: ("2022/10/30"),
    finalDoCurso: ("2022/12/30"),
    quantiaAlunos: 150,
    periodo: "noturno",
    concluido: false,
},
{
    nome: "Sibyla",
    curso: "JavaScript",
    inicioCurso: ("2022/10/15"),
    finalDoCurso: ("2022/10/15"),
    quantiaAlunos: 200,
    periodo: "integral",
    concluido: false,
},
{
    nome: "Curie",
    curso: "HTML e CSS",
    inicioCurso: ("2022/11/01"),
    finalDoCurso: ("2022,01,01"),
    periodo: "Integral",
    quantiaAlunos: 80,
    concluido: false,
},
{
    nome: "Clarke",
    curso: "HTML e CSS",
    inicioCurso: ("2022, 07, 04"),
    finalDoCurso: ("2022, 09, 04"),
    quantiaAlunos: 200,
    periodo: "noturno",
    concluido: true,
},
{
    nome: "Blackwell",
    curso: "APIsRest",
    inicioCurso: ("2022,03,20"),
    finalDoCurso: ("2022,06,20"),
    quantiaAlunos: 100,
    periodo: "integral",
    concluido: true,
},
{
    nome: "Elion",
    curso: "APIsRest",
    incioCurso: ("2022, 06, 12"),
    quantiaAlunos: 200,
    periodo: "noturno",
    concluido: true,
}, {
    nome: "Burnell",
    curso: "APIsRest",
    inicioCurso: ("2022,10,18"),
    finalDoCurso: ("2023,04,18"),
    quantiaAlunos: 90,
    periodo: "integral",
    concluido: false,
}
]

const estudante = [{
    estudante: "Chris Evans",
    turma: "Hipática",
    curso: "JavaScrip",
    valor: "900",
    nParcela: 9,
    desconto: false,
    valorParcela: 100,
},
{
    estudante: "Halle Berry",
    turma: "Burnell",
    curso: "APIsRest",
    valor: "2000",
    nParcela: 4,
    desconto: false,
    valorParcela: 500,
},
{
    estudante: "Lashana Lynch",
    turma: "Zhenyi",
    curso: "HTML e CSS",
    valor: "500",
    nParcela: 1,
    desconto: true,
    valorParcela: 500,
},
]

console.log(turmas)
console.log(cursos)
console.log(estudante)

/*function parcelarCursos(numParcela) {
    const vintePorcentValor = 
}*/


const parcelarCurso = (parcela) => {
    let valorTotal
    let valorParcela

    if (parcela <= 2) {

        valorTotal = cursos[0].valor - (valorDoCurso * 0.2)
        valorParcela = valorTotal / parcela

        console.log(`O curso ${cursos[0].cursos} ficou no valor total de R$ ${valorTotal}. Em ${parcela} x de ${valorParcela} reais. Foi concedido desconto de 20%`)

    } else {

        valorTotal = cursos[0].valor
        valorParcela = valorTotal / valorParcela

        console.log(`O curso ${cursos[0].cursos} ficou no valor total de R$ ${valorTotal}. Em ${parcela} x de ${valorParcela} reais.`)

    }

}


const buscarCurso = (nomeCurso) => {

    for (cadaCurso of cursos) {
        if (cadaCurso.curso === nomeCurso) {
            return cadaCurso

        }
    }
}

const buscarTurma = (nomeTurma) => {
    for (cadaTurma of turmas) {
        if (cadaTurma.turma === nomeTurma) {
            return cadaTurma
        }
    }
}


const buscarEstudante = (nomeEstudante) => {
    for (cadaEstudante of estudante) {
        if (cadaEstudante.estudante === nomeEstudante) {
            return cadaEstudante
        }
    }
}


const matricular = (nome, curso, turma, numParcela) => {

    let valorCurso =  buscarCurso(curso)
    let valorTotal = 0
    let valorPorParcela = 0
    let desconto = false

    if(numParcela > 0 && numParcela <= 2){
        desconto = true
        valorTotal = valorCurso - (valorCurso.valor * 0.2)
        valorPorParcela = valorTotal / numParcela

    }else{
        valorTotal = valorCurso.valor
        valorPorParcela = valorTotal / numParcela
    }
        
    

    const novoAluno = {
        estudante: nome,
        turma: turma,
        curso: curso,
        valor: valorCurso.valor,
        nParcela: numParcela,
        desconto: desconto,
        valorParcela:  valorPorParcela
    }
    
    estudante.push(novoAluno)

    console.log(estudante)
    console.log(`Aluno Matriculado \n Nome:${nome} \n Curso:${curso}\n Turma:${turma}`)
}

matricular ("kalvin Clein", "javaScrip", "Hipatia", 5)




