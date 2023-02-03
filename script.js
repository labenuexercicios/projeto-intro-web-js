const turmas = [ //"HC1", "JS1", "REST1", "REST2",
    {
        turma: "Hipatia",
        curso: "JavaScript",
        inicio: "30/11/2022",
        termino: "30/01/2023",
        numeroDeAlunos: 150,
        periodo: "Noturno",
        concluida: false
    },

    {
        turma: "Sibyla",
        curso: "JavaScript",
        inicio: "30/10/2022",
        termino: "30/12/2022",
        numeroDeAlunos: 200,
        periodo: "Integral",
        concluida: false
    },

    {
        turma: "Curie",
        curso: "HTML e CSS",
        inicio: "15/09/2022",
        termino: "15/10/2022",
        numeroDeAlunos: 180,
        periodo: "Noturno",
        concluida: true
    },

    {
        turma: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "01/11/2022",
        termino: "01/01/2023",
        numeroDeAlunos: 80,
        periodo: "integral",
        concluida: false
    },

    {
        turma: "Clarke",
        curso: "HTML e CSS",
        inicio: "04/07/2022",
        termino: "01/09/2022",
        numeroDeAlunos: 200,
        periodo: "Noturno",
        concluida: true
    },

    {
        turma: "BlackWell",
        curso: "APIsREST",
        inicio: "20/03/2022",
        termino: "20/06/2022",
        numeroDeAlunos: 100,
        periodo: "Integral",
        concluida: true
    },

    {
        turma: "Elion",
        curso: "APIsREST",
        inicio: "12/01/2022",
        termino: "12/06/2022",
        numeroDeAlunos: 200,
        periodo: "Noturno",
        concluida: true
    },

    {
        turma: "Burnell",
        curso: "APIsREST",
        inicio: "18/10/2022",
        termino: "18/04/2022",
        numeroDeAlunos: 90,
        periodo: "Integral",
        concluida: false
    },

];

const cursos = [
    {
        curso: "HTML e CSS",
        descricao: "Curso voltado para criacao e estilizacao de paginas Web para iniciantes",
        duracao: "1 Mes",
        valor: 500
    },

    {
        curso: "JavaScript",
        descricao: "Aprenda como desenvolver paginas aplicacoes Web com JavaScript completo para inicantes  ",
        duracao: "2 Meses",
        valor: 900
    },

    {
        curso: "APIs REST",
        descricao: "Aprofunde ainda mais seus conhecimentos e conheca os principios do estilo arquitetonico REST e construa APIs de forma profissional",
        duracao: "6 Meses",
        valor: 2000
    },


];

const estudantes = [
    {
        estudante: "Chris Evans",
        turma: "Hipatica",
        curso: "JavaScript",
        valor: "900",
        nParcelas: 9,
        desconto: false,
        valorParcelas: 100
    },

    {
        estudante: "Halle Barry",
        turma: "Burnell",
        curso: "APIsREST",
        valor: "2000",
        nParcelas: 4,
        desconto: false,
        valorParcelas: 500
    },

    {
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: "500",
        nParcelas: 1,
        desconto: true,
        valorParcelas: 500
    },
];

/* function parcelarCurso(parcelas) {
    //const parcelas = estudantes[2].nParcelas 
    if(parcelas <= 2 && parcelas >= 1 ){
        desconto = cursos[1].valor - (cursos[1].valor * 0.2)
        return `O valor do curso ${cursos[1].curso} e de R$${cursos[1].valor}. A vista R$${desconto} ou em 2x de R$${desconto/2}. Foi concedido desconto de 20% `
        
        
    }else if(parcelas > 2 && parcelas < 9){
        return `O curso ${cursos[1].curso} ficou no valor de R$${cursos[1].valor}. Em ate 8x de R$${cursos[1].valor/8}`
    
    }else if(parcelas >= 9 ) {
        return `Parcelas maximas em 8x`
    
    }else{
        return `Digite um valor valido de parcelas !`
    }
};
console.log(parcelarCurso(4)); */
const carrinhoCursos = [500, 900, 400]
const parcelarCurso = (carrinhoCursos, parcela) => {
    let valorTotal = 0
    let valorParcela = 0
    let desconto = 0
    if (carrinhoCursos.length > 1) {
        switch (carrinhoCursos.length) {
            case 3:
                desconto = 0.15
                break;
            case 2:
                desconto = 0.10
                break;
            default:
                desconto = 0
                break;
        }

        for (let valor of carrinhoCursos) {
            valorTotal = valorTotal + valor

        }

        valorTotal = valorTotal - (valorTotal * desconto)
    } else {
        valorTotal = carrinhoCursos[0]
    }



    if (parcela <= 2 && parcela >= 1) {

        valorTotal = valorTotal - (valorTotal * 0.2)
        valorTotal = valorTotal / valorParcela

        console.log(`O curso ficou no valor total de R$ ${valorTotal} em ${parcela}x de ${valorParcela} reais. Foi concedido desconto de 20%.`);

    } else if (parcela > 2 && parcela <= 12) {
        valorTotal = valorTotal
        valorParcela = valorTotal / valorParcela

        console.log(`O curso ficou no valor total de R$ ${valorTotal} em ${parcela}x de ${valorParcela} reais.`)
    } else {
        console.log("Número inválido! Por favor digite um número válido.")
    }

}

parcelarCurso(carrinhoCursos, 2)

const buscarCurso = () => {
    const inputCurso = document.getElementById('curso').value.toLowerCase()
    
    const curso = cursos.find(cadaCurso => {
        if(cadaCurso.curso.toLowerCase().includes(inputCurso.toLowerCase())){
            return cadaCurso
        }
    })
    return curso
}

const buscarTurma = (event) => {
    const inputTurma = document.getElementById('input-buscar-turma').value.toLowerCase()

    const turmaFiltrada = turmas.filter(cadaTurma => {
        if(cadaTurma.turma.toLowerCase().includes(inputTurma.toLowerCase())){
            return cadaTurma
        }
    })
    return turmaFiltrada.length > 0 ? gerarCard(turmaFiltrada) : gerarCard(turmas)
    
}

const buscarEstudante = () => {
    const inputEstudante = document.getElementById('aluno').value.toLowerCase()

    for (cadaEstudante of estudantes) {
        if (cadaEstudante.estudantes === nomeEstudante)
            return cadaEstudante
    }
}

const matricular = (nome, nomeCurso, turma, nParcelas) => {
    
    let valorCurso = buscarCurso(nomeCurso)
    let valorTotal = 0
    let valorPorParcela = 0
    let desconto = false

    if (nParcelas > 0 && nParcelas <= 2) {
        valorTotal = valorCurso.valor - (valorCurso.valor * 0.2)
        valorPorParcela = valorTotal / nParcelas
        desconto = true
    } else {
        valorTotal = valorCurso.valor
        valorPorParcela = valorTotal / nParcelas
    }

    const novoAluno = {
        estudante: nome,
        turma: turma,
        curso: nomeCurso,
        valor: valorCurso.valor,
        nParcelas: nParcelas,
        desconto: desconto,
        valorParcelas: valorPorParcela,
    }

    estudante.push(novoAluno)

    console.log(`Aluno Matriculado \n Nome:${nome} \n Curso:${curso} \n Turma:${turma}`)
}



const gerarCard = (imprimirCard) => {
    let turmaBuscada = document.getElementById('div-grid')

    const cards = imprimirCard.map(objeto  => {
        const novoCard =document.createElement('div')
        novoCard.setAttribute('class', 'quadrado-curso')

        novoCard.innerHTML = `
            <h3>${objeto.turma}</h3>
            <li>
                <p><b>Curso:</b>${objeto.curso} </p>
                <p><b>Início:</b> ${objeto.inicio}</p>
                <p><b>Término:</b> ${objeto.termino}</p>
                <p><b>Número de alunos:</b> ${objeto.numeroDeAlunos}</p>
                <p><b>Período:</b> ${objeto.periodo}</p>
                <p><b>Concluída:</b>${objeto.concluida} </p>
             </li>
         ` 
         
        turmaBuscada.insertAdjacentElement('beforeend', cards)
        
    })
    console.log(cards)
    return cards
}