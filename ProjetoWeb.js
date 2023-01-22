//TURMA
const turmas = [
    {
        turma: "Hipátia",
        curso: "JavaScript",
        inicio: "30/11/2022",
        termino: "30/01/2023",
        numeroalunos: 150,
        periodo: "noturno",
        concluida: false
    },

    {
        turma: "Sibyla",
        curso: "JavaScript",
        inicio: "30/10/2022",
        termino: "30/12/2022",
        numeroalunos: 200,
        periodo: "integral",
        concluida: false,
    },

    {
        turma: "Curie",
        curso: "HTML e CSS",
        inicio: "15/09/2022",
        termino: "15/10/2022",
        numeroalunos: 180,
        periodo: "noturno",
        concluida: true
    },

    {
        turma: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "01/11/2022",
        termino: "01/01/2023",
        numeroalunos: 80,
        periodo: "integral",
        concluida: false
    },

    {
        turma: "Clarke",
        curso: "HTML e CSS",
        inicio: "04/07/2022",
        termino: "04/09/2022",
        numeroalunos: 200,
        periodo: "noturno",
        concluida: true,
    },

    {
        turma: "Blackwell",
        curso: "APIsRest",
        inicio: "20/03/2022",
        termino: "20/06/2022",
        numeroalunos: 100,
        periodo: "integral",
        concluida: true,
    },

    {
        turma: "Elion",
        curso: "APIsRest",
        inicio: "12/01/2022",
        termino: "12/06/2022",
        numeroalunos: 200,
        periodo: "noturno",
        concluida: true,
    },

    {
        turma: "Burnell",
        curso: "APIsRest",
        inicio: "18/10/2022",
        termino: "18/04/2023",
        numeroalunos: 90,
        periodo: "integral",
        concluida: false,
    }
]

//CURSOS
const cursos = [
    {
        curso: "HTML e CSS",
        descricao: "Aprenda a fazer HTML e CSS",
        duracao: "1 mês",
        valor: 500,
    },

    {
        curso: "JavaScript",
        descricao: "Aprenda a codar com a linguagem JavaScript",
        duracao: "2 meses",
        valor: 900,
    },

    {
        curso: "APIsRest",
        descricao: "Aprenda APIsRest",
        duracao: "6 meses",
        valor: 2000,
    },
]


//const estudantes = ["Chris Evans", "Halle Berry", "Lashana Lynch"]

const estudantes = [
    {
        estudante: "Chris Evans",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: 900,
        nParcelas: 9,
        desconto: false,
        parcelas: 100,
    },

    {
        estudante: "Halle Berry",
        turma: "Burnell",
        curso: "APIsRest",
        valor: 2000,
        nParcelas: 4,
        desconto: false,
        parcelas: 500,
    },

    {
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "APIsRest",
        valor: 2000,
        nParcelas: 1,
        desconto: true,
        parcelas: 2000,
    }
]

const relatorioEstudante = (informacoes) => {
    console.log(`Nome: ${informacoes.estudante}\nTurma: ${informacoes.turma}\nCurso: ${informacoes.curso}\nValor Total: ${informacoes.valor}\nValor Parcela: ${informacoes.parcelas}\nNº Parcelas: ${informacoes.nParcelas}`)
}




const buscarCurso = (nomeCurso) => {
    const buscar = cursos.find(elementos => elementos.curso === nomeCurso)
    return buscar
}

/* for (let i = 0; i < cursos.length; i++) {
    const nome = cursos[i].curso
    if (nomeCurso === nome) {   
    return cursos[i]  
    }
}return nome */


console.log(buscarCurso("APIsRest"))

const carrinho = []
const adicionarNoCarrinho = (informacoes) => {
    const curso = buscarCurso(informacoes)
    carrinho.push(curso.valor)


    return carrinho
}
console.log(adicionarNoCarrinho("APIsRest"))



// Condicionais 


const parcelarCurso = (parcela, carrinhoCursos) => {

    let soma = 0
    for (let i = 0; i < carrinhoCursos.length; i++)
        soma += carrinhoCursos[i]
    let descontoCursos = 0
    let descontoParcela = 0

    switch (carrinhoCursos.length) {
        case 1:
            //soma
            descontoCursos = 0
            texto = ""
            //console.log(`O valor do carrinho é ${soma}`)
            break

        case 2:
            // soma = soma - (soma*0.15)
            descontoCursos = 0.10
            texto = " com 10% de desconto,"
            //console.log(`O valor do carrinho é ${soma}`)
            break

        case 3:
            //soma - (soma*0.20)
            descontoCursos = 0.15
            texto = " com 15% de desconto,"
            //console.log(`O valor do carrinho é ${soma}`)
            break

        default:
            console.log("valor não encontrado")
    }

    switch (parcela) {
        case 1:
            descontoParcela = 0.20
            //valorTotal = soma - (soma*0.20)
            break

        case 2:
            descontoParcela = 0.20
            // valorTotal = soma - (soma*0.20)
            break

        default:
            descontoParcela = 0

    }

    let descontoTotal = descontoCursos + descontoParcela
    let descontoTexto = descontoTotal * 100
    const valorTotal = soma - (soma * descontoTotal)

    if (descontoTexto !== 0) {
        console.log(`O valor do pagamento é de ${valorTotal}, desconto de ${descontoTexto}% parcelado em ${parcela}x de R$ ${valorTotal / parcela} `)
    } else { console.log(`O valor do pagamento é de ${valorTotal}, parcelado em ${parcela}x de R$ ${valorTotal / parcela} `) }


}
parcelarCurso(1, carrinho)

const gerarCard = (turmaEncontrada)=>{

    
     
    const card = turmaEncontrada.map((turmasBuscadas)=>{
        return(`<section class="sectionTurmas">
                <h1 class="h1Turmas">${turmasBuscadas.turma}</h1>
                <p><b>Curso:</b>${turmasBuscadas.curso}</p>
                <p><b>Início:</b>${turmasBuscadas.inicio}</p>
                <p><b>Término:</b>${turmasBuscadas.termino}</p>
                <p><b>Número de alunos:</b>${turmasBuscadas.numeroalunos}</p>
                <p><b>Período:</b>${turmasBuscadas.periodo}</p>
                <p><b>Concluído:</b>${turmasBuscadas.concluida}</p>


         </section>`
       
     )}
     
    )
   
    const teste = document.getElementById("buscasDeTurma")

   teste.innerHTML = card
     
   

}


const buscarTurma = () => {

     const inputTurma = document.getElementById("busca").value.toLowerCase() 
     console.log(inputTurma)
    
     const buscar = turmas.filter((elementos) => {
         return elementos.turma.toLowerCase() === inputTurma 
        
       
    })

/*    return buscar.length > 0 ? buscar : "Não encontrado" */

    return buscar.length>0 ? gerarCard(buscar) : gerarCard(turmas)
 
}
buscarTurma()

/* const buscarTurma = (nomeTurma) => {
    
    
     for (let i = 0; i < turmas.length; i++) {
        nome = turmas[i].turma

        if (nomeTurma === nome) {
           // console.log(turmas[i])
        }
    } 
}buscarTurma("Zhenyi")*/



const matricular = (novoNome, novoCurso, novaTurma, nParcelas) => {



    let valoresCurso = buscarCurso(novoCurso)
    let valorTotal = 0
    let valorParcelas = 0
    let desconto = false

    if (nParcelas > 0 && nParcelas <= 2) {
        desconto = true
        valorTotal = valoresCurso.valor - (valoresCurso.valor * 0, 2)
        valorParcelas = valorTotal / nParcelas
    } else {
        valorTotal = valoresCurso.valor
        valorParcelas = valorTotal / nParcelas
    }


    //console.log(valoresCurso)
    const novoAluno = {
        estudante: novoNome,
        curso: novoCurso,
        turma: novaTurma,
        nParcelas: nParcelas,
        valor: valoresCurso.valor,
        nParcelas: nParcelas,
        desconto: desconto,
        parcelas: valorParcelas,


    }
    estudantes.push(novoAluno)
    //console.log(estudantes)
    console.log(`Aluno matriculado \nNome: ${novoNome} \nCurso: ${novoCurso}\nTurma: ${novaTurma}`)

}
matricular("Calvin Klein", "JavaScript", "Clarke", 5)

// Laços Encontrar estudante

const buscarEstudante = (nomeEstudante, cb) => {
    for (let i = 0; i < estudantes.length; i++) {
        nome = estudantes[i].estudante

        if (nome.includes(nomeEstudante)) {
            //console.log(estudantes[i].estudante)
            //console.log(estudantes[i])
            cb(estudantes[i])


        }
    }
}
//const nomeEstudante = prompt("Digite o nome do estudante")
buscarEstudante("Ch", relatorioEstudante)





