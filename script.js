

const cursos = [
    {
        curso: "HTMLeCSS",
        descricao: "Aprenda HTMLeCSS do zero",
        duracao: "1 mês",
        valor: 500,
    },
    {
        curso: "javascript",
        descricao: "Aprenda javascript do zero",
        duracao: "2 meses",
        valor: 900,
    },
    {
        curso: "APIsRest",
        descricao: "Aprenda APIsRest do zero",
        duracao: "6 meses",
        valor: 2000,
    }
]
const turmas = [
    {
        turma: "Hipátia",
        curso: "Javascript",
        inicio: "30/11/2022",
        termino: "30/01/2023",
        numeroDeAlunos: 150,
        periodo: "noturno",
        concluido: false
    },
    {
        turma: "Sibyla",
        curso: "Javascript",
        inicio: "30/10/2022",
        termino: "30/12/2022",
        numeroDeAlunos: 200,
        periodo: "integral",
        concluido: false
    },
    {
        turma: "Curie",
        curso: "HTML e CSS",
        inicio: "15/09/2022",
        termino: "15/10/2022",
        numeroDeAlunos: 180,
        periodo: "noturno",
        concluido: true
    },
    {
        turma: "Zhenyi",
        curso: "HTMLeCSS",
        inicio: "01/11/2022",
        termino: "01/01/2023",
        numeroDeAlunos: 80,
        periodo: "integral",
        concluido: false
    },
    {
        turma: "Clarke",
        curso: "HTMLeCSS",
        inicio: "04/07/2022",
        termino: "04/09/2022",
        numeroDeAlunos: 200,
        periodo: "noturno",
        concluido: true
    },
    {
        turma: "Blackwell",
        curso: "APIsRest",
        inicio: "20/03/2022",
        termino: "20/06/2022",
        numeroDeAlunos: 100,
        periodo: "integral",
        concluido: true
    },
    {
        turma: "Elion",
        curso: "APIsRest",
        inicio: "12/01/2022",
        termino: "12/06/2022",
        numeroDeAlunos: 200,
        periodo: "noturno",
        concluido: true
    },
    {
        turma: "Burnell",
        curso: "APIsRest",
        inicio: "18/10/2022",
        termino: "18/04/2023",
        numeroDeAlunos: 90,
        periodo: "integral",
        concluido: false
    }
]
const estudantes = [
    {
        aluno: "Chris Evans",
        turma: "Hipátia",
        curso: "Javascript",
        valor: 900,
        nParcelas: 9,
        desconto: false,
        parcelas: 100
    },
    {
        aluno: "Halle Berry",
        turma: "Burnell",
        curso: "APIsRest",
        valor: 2000,
        nParcelas: 4,
        desconto: false,
        parcelas: 500
    },
    {
        aluno: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTMLeCSS",
        valor: 500,
        nParcelas: 1,
        desconto: true,
        parcelas: 0
    },
    {
        aluno: "Maria das Graças",
        turma: "Zhenyi",
        curso: "HTMLeCSS",
        valor: 500,
        nParcelas: 1,
        desconto: true,
        parcelas: 0
    },
    {
        aluno: "Mariana",
        turma: "Zhenyi",
        curso: "HTMLeCSS",
        valor: 500,
        nParcelas: 1,
        desconto: true,
        parcelas: 0
    }
]


 // valor do desconto
const parcelarCurso = (parcela) => {
    let valorTotal
    let valorParcela

    if (parcela <= 2) {
        valorTotal = cursos[0].valor - (cursos[0].valor * 0.2)
        valorParcela = valorTotal / parcela

        console.log(`O ${cursos[0].curso} ficou no valor total de ${valorTotal}. Em x de ${valorParcela} reais. Foi consedido desconto de 20%.`)

    } else {
        console.log(`O curso ${cursos[0].curso} ficou no valor total de ${valorTotal} reais.`)
    }
}
parcelarCurso(1)
 



const buscarCurso = (nomeCurso) => {
    nomeCurso = nomeCurso.toLocaleLowerCase()

   const curso = cursos.find((element)=> {
        return element.curso.toLocaleLowerCase() == nomeCurso 
    } )

    if (curso) {return curso}
    
    return "Curso não encontrado!"


}
console.log(buscarCurso ("HTMLeCSS"))
 

//buscar turma
const buscarTurma = (nomeTurma) => {
   const turma = turmas.filter((elemento)=>{
   
        return elemento.turma === nomeTurma
      
    } )

    if (turma.length > 0) {return turma}
    
    return "Turma não encontrada!"

}
console.log(buscarTurma("Sibyla"))

 

// buscar estudantes
const buscarEstudante = (nomeEstudante) => {
    for (element in estudantes) {
        if (estudantes[element].aluno.includes(nomeEstudante)) {
            return estudantes[element]
        }

    }
}
console.log(buscarEstudante("Ch"))

 
    const matricularNovoAluno = (nome, curso, turma, numParcelas) => {
        let valorCurso = buscarCurso(curso)
        let valorTotal = 0
        let valorPorParcela = 0
    
        if (numParcelas > 0 && numParcelas <= 2) {
            valorTotal = valorCurso.valor(valorCurso.valor * 0.2)
            valorPorParcela = valorTotal / numParcelas
        } else {
            valorTotal = valorCurso.valor
            valorPorParcela = valorTotal / numParcelas
        }        

     const novoAluno = {

        estudante: nome, 
        turma: turma,
        curso: curso,
        valor: valorCurso.valor,
        nParcelas: numParcelas,
        desconto: false,
        Parcelas: valorPorParcela

    }

    estudantes.push(novoAluno)
    console.log(estudantes)

    console.log(`Aluno(a) matriculado(a): \n Nome:${nome} \n Curso:${curso} \n Turma: ${turma}`);
}

(matricularNovoAluno("Maria Rita", "JavaScript", "Hipatia", 5))


 
const parcelaCurso = (carrinhoCursos, parcela) => {
    let valorTotal = 0
    let valorComDesconto = 0
    let desconto20 = 0.2
    let valorParcela = 0

    console.log(carrinhoCursos.length)
    if (carrinhoCursos.length >= 1) {
        switch (carrinhoCursos.length) {
            case 3:
                valorComDesconto = 0.15
                break

            case 2:
                valorComDesconto = 0.10
                break

            default:
                valorComDesconto = 0
                break
        }
        for (let curso of carrinhoCursos) {
            valorTotal = valorTotal + curso.valor
            
        }
    }
    if (parcela <= 2 && carrinhoCursos.length === 3) {
        valorTotal -= valorTotal * (valorComDesconto + desconto20)
        valorParcela = valorTotal / parcela

       return (`O valor do pagamento é de R$: ${valorTotal}, obteve 15% de desconto por 3 crsos e mais 20% por pagaento avista ou parecelado em até 2x no total de 35%. o valor parcelado fica em  ${parcela} x de R${valorParcela.toFixed(2)}`)

    } else if (parcela <= 2 && carrinhoCursos.length === 2) {
        valorTotal -= valorTotal * (valorComDesconto + desconto20)
        valorParcela = valorTotal / parcela

       return (`O valor do pagamento é de R${valorTotal},, obteve 10% de descnto por 3 cursos e mais 20% por pagamento avista ou parcel em até 2x no total de 30%%. Valor parcelado fica em ${valorParcela.toFixed(2)}`)

    } else if (parcela >= 2 && carrinhoCursos.length === 1) {
        valorTotal -= valorTotal * desconto20
        valorParcela = valorTotal / parcela

       return (`O pagamento é de R${valorTotal},00 parcelado em R${parcela}x de R${valorParcela.toFixed(2)}`)

    } else {
        valorParcela = valorTotal / parcela
       return (`O pagamento é de R${valorTotal},00 parcelado em R${parcela}x de R${valorParcela.toFixed(2)}`)
    }

}



let teste = parcelaCurso (cursos, 2)
console.log (teste)

 let carrinhoCursos = []


const carrinho = (nomeCurso) => {

    let curso = buscarCurso(nomeCurso)
    carrinhoCursos.push(curso.valor)


    return carrinhoCursos

    

}

 
// relatorio estudante 

const relatorioEstudante = (nomeEstudante) => {
    const estudante = buscarEstudante(nomeEstudante)
    console.log(estudante)
    return `Aluno: ${estudante.aluno}\n Turma:${estudante.turma}\n Curso: ${estudante.curso}\n Valor Total: ${estudante.valor}\n valor parcela ${estudante.parcelas}\n N° Parcelas ${estudante.nParcelas}`

}
console.log(relatorioEstudante('Lashana Lynch')) 


