//ARRAYS DAS 3 ENTIDADES
const cursos = [
    {
        curso: "HTML e CSS",
        descricao: "Aprenda HTML e CSS na prática",
        duracao: "1 mês",
        valor: 500,
    },
    {
        curso: "JavaScript",
        descricao:
            "Aprenda os principais fundamenrtos do JavaScript na prática",
        duracao: "2 meses",
        valor: 900,
    },
    {
        curso: "APIs REST",
        descricao: "Aprenda  tudo sobre APIs REST",
        duracao: "6 meses",
        valor: 2000,
    },
]

const turmas = [
    {
        turma: "Curie",
        curso: "HTML e CSS",
        inicio: "15/09/2022",
        termino: "15/10/2022",
        numeroDeAlunos: 180,
        periodo: "Noturno",
        concluida: true,
    },
    {
        turma: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "01/11/2022",
        termino: "01/01/2023",
        numeroDeAlunos: 80,
        periodo: "Integral",
        concluida: false,
    },
    {
        turma: "Clarke",
        curso: "HTML e CSS",
        inicio: "04/07/2022",
        termino: "04/09/2022",
        numeroDeAlunos: 200,
        periodo: "Noturno",
        concluida: true,
    },

    {
        turma: "Hipátia",
        curso: "JavaScript",
        inicio: "30/11/2022",
        termino: "30/01/2023",
        numeroDeAlunos: 150,
        periodo: "Noturno",
        concluida: false,
    },
    {
        turma: "Sibyla",
        curso: "JavaScript",
        inicio: "30/10/2022",
        termino: "30/12/2022",
        numeroDeAlunos: 200,
        periodo: "Integral",
        concluida: false,
    },
    {
        turma: "Blackwell",
        curso: "APIsRest",
        inicio: "20/03/2022",
        termino: "20/06/2022",
        numeroDeAlunos: 100,
        periodo: "Integral",
        concluida: true,
    },
    {
        turma: "Elion",
        curso: "APIsRest",
        inicio: "12/01/2022",
        termino: "12/06/2022",
        numeroDeAlunos: 200,
        periodo: "Noturno",
        concluida: true,
    },
    {
        turma: "Burnell",
        curso: "APIsRest",
        inicio: "18/10/2022",
        termino: "18/04/2023",
        numeroDeAlunos: 90,
        periodo: "Integral",
        concluida: false,
    },
]

const estudantes = [
    {
        estudante: "Chris Evans",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: 900,
        numeroDeParcelas: 9,
        desconto: false,
        valorDaParcela: 100,
    },

    {
        estudante: "Halle Berry",
        turma: "Burnell",
        curso: "APIsRest",
        valor: 2000,
        numeroDeParcelas: 4,
        desconto: false,
        valorDaParcela: 500,
    },

    {
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: 500,
        numeroDeParcelas: 1,
        desconto: true,
        valorDaParcela: 500,
    },
]

const carrinhoCursos = []
//******Função que calcula o numero de parcelas de um curso com e sem desconto
const parcelaCurso = (carrinhoCursos, numeroDeParcelas) => {
    let valorDaParcela = 0
    let descontoQtdCursos = 0
    let valorTotal = 0
    let descontoDe20 = 0.2

    switch (carrinhoCursos.length) {
        case 3:
            descontoQtdCursos = 0.15
            break
        case 2:
            descontoQtdCursos = 0.1
            break
        default:
            descontoQtdCursos = 0
    }

    for (valor of carrinhoCursos) {
        valorTotal += valor
    }

    if (numeroDeParcelas <= 2 && carrinhoCursos.length === 2) {
        valorTotal -= valorTotal * descontoQtdCursos
        valorTotal -= valorTotal * descontoDe20
        valorDaParcela = valorTotal / numeroDeParcelas

        console.log(
            `O valor do pagamento é de R$ ${valorTotal} com 20% de desconto, parcelado em ${numeroDeParcelas}x de R$${valorDaParcela}.`
        )
    } else if (numeroDeParcelas <= 2 && carrinhoCursos.length === 3) {
        valorTotal -= valorTotal * descontoQtdCursos
        valorTotal -= valorTotal * descontoDe20
        valorDaParcela = valorTotal / numeroDeParcelas

        console.log(
            `O valor do pagamento é de R$ ${valorTotal} com 20% de desconto, parcelado em ${numeroDeParcelas}x de R$${valorDaParcela}.`
        )
    } else if (numeroDeParcelas <= 2 && carrinhoCursos.length === 1) {
        valorTotal -= valorTotal * descontoDe20
        valorDaParcela = valorTotal / numeroDeParcelas

        console.log(
            `O valor do pagamento é de R$ ${valorTotal} com 20% de desconto, parcelado em ${numeroDeParcelas}x de R$${valorDaParcela}.`
        )
    } else {
        valorDaParcela = valorTotal / numeroDeParcelas

        console.log(
            `O valor do pagamento é de R$${valorTotal}, parcelado em ${numeroDeParcelas}X de R$${valorDaParcela}.`
        )
    }
}

//parcelaCurso(carrinhoCursos, 2)

//******Função que busca um curso no array cursos */
const buscarCurso = (nomeCurso) => {

    /* const inputCurso = document.getElementById("").value.toLowerCase() */
    nomeCurso = nomeCurso.toLowerCase()

    const cursoEncontrado = cursos.find((curso) =>
        curso.curso.toLowerCase().includes(nomeCurso)
    )

    return cursoEncontrado.length !== 0
        ? cursoEncontrado
        : "Curso não encontrado!"

    /*   for (let tipoCurso of cursos) {
        if (tipoCurso.curso === nomeCurso) {
            return tipoCurso
        }
    } */
}
/* console.log(buscarCurso("ap")) */

//******Função que busca uma turma no array turmas */
/* */




const buscarTurma = () => {

    const inputTurma = document.getElementById("input").value.toLowerCase()

    const turmaBuscada = turmas.filter((nomeTurma) => {
        /*  console.log(cadaTurma.turma.toLowerCase().includes(inputTurma)) */
        if (nomeTurma.turma.toLowerCase().includes(inputTurma)) {
            return nomeTurma
        }
    })

    return (turmaBuscada.length > 0 ? gerarCard(turmaBuscada) : gerarCard(turmas))
}

//***Função que busca um estudante no array estudantes */

const buscarEstudante = (nomeEstudante) => {
    //*** COM FIND */
    nomeEstudante = nomeEstudante.toLowerCase()
    const estudanteEncontrado = estudantes.find((aluno) =>
        aluno.estudante.toLowerCase().includes(nomeEstudante)
    )

    return estudanteEncontrado.length !== 0
        ? estudanteEncontrado
        : "Aluno não encontrado"

}

console.log(buscarEstudante("la"))

const gerarCard = (turmasBuscadas) => {

    const turmaEncontrada = turmasBuscadas.map((item) => {
        return (
            `<section class="card-turma" >
            <p class="nome-turma">${item.turma}</p>
            <p><span class="info-turma">Curso: </span>
            <span>${item.curso}</span>
            </p>
             <p><span class="info-turma">Inicio: </span>
            <span>${item.inicio}</span>
            </p>
            <p><span class="info-turma">Término: </span>
            <span>${item.termino}</span>
            </p>
            <p><span class="info-turma">Número de alunos: </span>
            <span>${item.numeroDeAlunos}</span>
            </p>
            <p><span class="info-turma">Périodo: </span>
            <span>${item.periodo}</span>
            <p><span class="info-turma">Concluido: </span>
            <span>${item.concluida ? 'Sim' : 'Não'}</span>
            </p>
            </section>`
        )
    })

    document.getElementById("container-cards").innerHTML = turmaEncontrada.join("")

    //limpando o input
    document.getElementById("input").value = ""

    /* return turmaEncontrada */
}


//****** Função que matricula um aluno e o adiciona ao array estudantes */

//completinha (palminhas)
const relatorioMatricula = document.getElementById("mostrar-relatorio")

const matricular = () => {

    let nomeAlunoinput = document.getElementById("input-name").value.toLowerCase()
    let nomeTurmaInput = document.getElementById("input-turma").value.toLowerCase()
    let nomeCursoInput = document.getElementById("input-curso").value.toLowerCase()
    let numParcelasInput = document.getElementById("input-num-parcelas").value.toLowerCase()

    console.log(nomeAlunoinput)

    const novoAluno = {

        estudante: nomeAlunoinput,
        turma: nomeTurmaInput,
        curso: nomeCursoInput,
        numeroDeParcelas: numParcelasInput,
    }
    estudantes.push(novoAluno)

    relatorioMatricula.innerHTML = `
    <article>
    <h3 class="titulo">Aluno matriculado </h3>

    <div class="relatorio">

        <p><span>Nome: ${nomeAlunoinput} </span></p>
        <p><span>Curso: ${nomeCursoInput}</span></p>
        <p><span>Turma:${nomeTurmaInput}</span></p>

    </div>
    </article>`

    const limparInputs = document.getElementsByClassName('input-matricula');
    for (let x = 0; x < limparInputs.length; x++) {
        limparInputs[x].value = ""
    }

    console.log(novoAluno)
}



//******Função que adiciona o valor dos cursos escolhidos no carrinho */
const adicionarNoCarrinho = (curso) => {
    const cursoEscolhido = buscarCurso(curso)
    carrinhoCursos.push(cursoEscolhido.valor)
    return carrinhoCursos
}

adicionarNoCarrinho("JavaScript")
adicionarNoCarrinho("html")
adicionarNoCarrinho("apis rest")
/* console.log(carrinhoCursos) */

//***Função que gera um relatorio do estudante matriculado */



const relatorioStudent = document.getElementById("relatorio-mostrado")
console.log("aqui", relatorioStudent)

const relatorioEstudante = () => {

    const inputEstudante = document.getElementById("input-nome").value.toLowerCase()

    console.log(inputEstudante)

    const aluno = buscarEstudante(inputEstudante)
    console.log(aluno.estudante)

    if(aluno.estudante.includes(inputEstudante)){


        //resolver, não está entrando aqui
    relatorioStudent.innerHTML =
       `<article>
            <p><span>Aluno:
            </span><span>${aluno.estudante}</span></p>
            <p><span>Turma: </span><span>${aluno.turma}</span></p>
            <p><span>Curso: </span><span>${aluno.curso}s</span></p>
            <p><span>Valor total: </span><span>${aluno.valor}</span></p>
            <p><span>Valor Parcela: </span><span>${aluno.va$lorDaParcela}</span></p>
            <p><span>N.° Parcelas: </span><span>${aluno.numeroDeParcelas}</span></p>
        </article>`
    }else{
        console.log('oi')
    }
}
    

/* relatorioEstudante("H")

parcelaCurso(carrinhoCursos, 2) */
