

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
console.log(buscarCurso("ap"))

//******Função que busca uma turma no array turmas */
const buscarTurma = (nomeTurma) => {
    nomeTurma = nomeTurma.toLowerCase()
    const turmaEncontrada = turmas.filter((turma) =>
        turma.turma.toLowerCase().includes(nomeTurma)
    )

    return turmaEncontrada.length !== 0
        ? turmaEncontrada
        : "Turma não encontrada!"

    /*  for (let tipoTurma of turmas) {
        if (tipoTurma.turma === nomeTurma) {
            return tipoTurma
        }
    } */
}
console.log(buscarTurma("hi"))

//***Função que busca um estudante no array estudantes */
const buscarEstudante = (nomeEstudante) => {
    //***COM FIND */
    nomeEstudante = nomeEstudante.toLowerCase()
    const estudanteEncontrado = estudantes.find((aluno) =>
        aluno.estudante.toLowerCase().includes(nomeEstudante)
    )

    return estudanteEncontrado.length !== 0
        ? estudanteEncontrado
        : "Aluno não encontrado"

    //***COM FOR
    /*  for (let tipoEstudante of estudantes) {
        if (tipoEstudante.estudante.includes(nomeEstudante)) {
            return tipoEstudante
        }
    } */
}

console.log(buscarEstudante("LA"))

//****** Função que matricula um aluno e o adiciona ao array estudantes */
const matricular = (nomeAluno, nomeCurso, nomeTurma, numeroDeParcelas) => {
    const novoAluno = {
        estudante: nomeAluno,
        turma: nomeTurma,
        curso: nomeCurso,
        numeroDeParcelas: numeroDeParcelas,
    }
    estudantes.push(novoAluno)

    console.log(estudantes)
    console.log(
        `Aluno Matriculado! \nNome: ${nomeAluno} \nCurso: ${nomeCurso} \nTurma: ${nomeTurma}`
    )
}

matricular("Maria Clara Dourado", "JavaScript", "Curie", 2)
matricular("Pérola Valadao ", "HTML e CSS", "Hipátia", 6)

console.log(buscarEstudante("Ma"))

//******Função que adiciona o valor dos cursos escolhidos no carrinho */
const adicionarNoCarrinho = (curso) => {
    const cursoEscolhido = buscarCurso(curso)
    carrinhoCursos.push(cursoEscolhido.valor)
    return carrinhoCursos
}

adicionarNoCarrinho("JavaScript")
adicionarNoCarrinho("html")
adicionarNoCarrinho("apis rest")
console.log(carrinhoCursos)

//***Função que gera um relatorio do estudante matriculado */
const relatorioEstudante = (estudante) => {
    const aluno = buscarEstudante(estudante)
    console.log(
        `Aluno: ${aluno.estudante} \nTurma: ${aluno.turma} \nCurso: ${aluno.curso} \nValor Total: R$${aluno.valor} \nValor Parcela: R$${aluno.valorDaParcela} \nNº Parcelas: ${aluno.numeroDeParcelas}`
    )
}

relatorioEstudante("H")

parcelaCurso(carrinhoCursos, 2)
