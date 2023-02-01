//TURMA
const turmas = [
    {
        turma: "Hipátia",
        curso: "JavaScript",
        inicio: "30/11/2022",
        termino: "30/01/2023",
        numeroalunos: 150,
        periodo: "noturno",
        concluida: false,
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
        concluida: true,
    },

    {
        turma: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "01/11/2022",
        termino: "01/01/2023",
        numeroalunos: 80,
        periodo: "integral",
        concluida: false,
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







const buscarCurso = (nomeCurso) => {
    const buscar = cursos.find(elementos => elementos.curso.toLocaleLowerCase() === nomeCurso)

    
    return buscar
}

/* for (let i = 0; i < cursos.length; i++) {
    const nome = cursos[i].curso
    if (nomeCurso === nome) {   
    return cursos[i]  
    }
}return nome */


const carrinho = []


const adicionarNoCarrinho = () => {

    

    const inputAdicionarCarrinho = document.getElementById("cursoEscolhido").value.toLocaleLowerCase()

    document.getElementById("cursoEscolhido").value=""

    console.log(inputAdicionarCarrinho)



    const curso = buscarCurso(inputAdicionarCarrinho)

    if (carrinho[0] != curso.valor && carrinho[1] != curso.valor && carrinho[2] != curso.valor){

    carrinho.push(curso.valor)

    let adicionado = `<p><b>Curso ${curso.curso} adicionado ao carrinho</p></b>`

    const adicionando = document.getElementById("financeiroMat")

    adicionando.innerHTML = adicionado

   


    
    return carrinho}

    else{
        let adicionado = `<p><b>O Curso ${curso.curso} já foi adicionado ao carrinho, escolha outro</p></b>`

    const adicionando = document.getElementById("financeiroMat")

    adicionando.innerHTML = adicionado
    
    }



   
    
    console.log(carrinho)
    
   
    
}



console.log(carrinho.valor)


const parcelarCurso = () => {

    const inputAdicionarParcelas= document.getElementById("parcelas").value

    const carrinhoCheio = carrinho
   
    console.log(carrinhoCheio)
    let soma = 0
    for (let i = 0; i < carrinhoCheio.length; i++)
        soma += carrinhoCheio[i]
    let descontoCursos = 0
    
    
    


    switch (Number(inputAdicionarParcelas)) {
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

    switch (carrinhoCheio.length) {
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
    
    console.log(descontoCursos)

   

    console.log(descontoParcela)
    console.log(inputAdicionarParcelas)

  
    let descontoTotal = descontoCursos + descontoParcela
    let descontoTexto = descontoTotal * 100
    let valorTotal = soma - (soma * descontoTotal)

    
    const adicionando = document.getElementById("financeiroMat")

    if (descontoTexto !== 0 && inputAdicionarParcelas>"0") {
        const textofinal = `<h1>Valor</h1><p>O valor do pagamento é de ${valorTotal}, desconto de ${descontoTexto}% parcelado em ${inputAdicionarParcelas}x de R$ ${valorTotal / inputAdicionarParcelas} </p>`
        adicionando.innerHTML = textofinal
    } else if(descontoTexto == 0 && inputAdicionarParcelas>"0") {
        const textofinal = `<h1>Valor</h1><p>O valor do pagamento é de R$${valorTotal}, parcelado em ${inputAdicionarParcelas}x de R$ ${valorTotal / inputAdicionarParcelas} </p>`
        adicionando.innerHTML = textofinal
    } else {
        const textofinal = `<b>Valor da parcela incorreta ou curso não adicionado</b>`
        adicionando.innerHTML = textofinal
    }

    document.getElementById("parcelas").value=""
    document.getElementById("cursoEscolhido").value=""

}


const gerarCard = (turmaEncontrada) => {



    const card = turmaEncontrada.map((turmasBuscadas) => {
        return (`<section class="sectionTurmas">
                <h1 class="h1Turmas">${turmasBuscadas.turma}</h1>
                <p><b>Curso:</b>${turmasBuscadas.curso}</p>
                <p><b>Início:</b>${turmasBuscadas.inicio}</p>
                <p><b>Término:</b>${turmasBuscadas.termino}</p>
                <p><b>Número de alunos:</b>${turmasBuscadas.numeroalunos}</p>
                <p><b>Período:</b>${turmasBuscadas.periodo}</p>
                <p><b>Concluído:</b>${turmasBuscadas.concluida}</p></section>`)
    }
    )
    const teste = document.getElementById("buscasDeTurma")
      teste.innerHTML = card.join("")

     

}


const buscarTurma = () => {
    
    const inputTurma = document.getElementById("busca").value.toLowerCase()
    console.log(inputTurma)
   
    const buscar = turmas.filter((elementos) => {
      
        return elementos.turma.toLowerCase().includes(inputTurma)
        
    })
    
    /*    return buscar.length > 0 ? buscar : "Não encontrado" */
    document.getElementById("busca").value=""
    return buscar.length > 0 ? gerarCard(buscar) : gerarCard(turmas)
    
    
}


const buscarTurma2 = (nomeTurma) => {
    
     
    const buscar = turmas.filter((elementos) => {
      
        return elementos.turma.toLowerCase().includes(nomeTurma)
        
    })
    
    return buscar.length > 0 ? buscar : "Não encontrado" 
   
    
    
}







const relatorioEstudante = (informacoes) => {

    const alunoEncontrado = informacoes.map((alunoBuscado) => {

        console.log(alunoBuscado.turma)
        return (`
        <section>               
        <p>Aluno Matriculado</p>
        <p>Aluno: ${alunoBuscado.estudante}</p>
        <p>Turma: ${alunoBuscado.turma} </p>
        <p>Curso: ${alunoBuscado.curso}</p>
        <p>Valor Total: ${alunoBuscado.valor} </p>
        <p>Valor Parcela: ${alunoBuscado.parcelas} </p>
        <p>Nº Parcelas: ${alunoBuscado.nParcelas} </p>
        
        </section>`)
    }
    )

    const teste = document.getElementById("financeiroMat2")
    teste.innerHTML = alunoEncontrado.join(" ")



}



const buscarEstudante = () => {

    const inputEstudantes = document.getElementById("buscaDeEstudantes").value.toLowerCase()

    console.log(inputEstudantes)

    const buscar = estudantes.filter((elementos) => {
        return elementos.estudante.toLowerCase().includes(inputEstudantes)

    })

    document.getElementById("buscaDeEstudantes").value = ""
    return buscar.length > 0 ? relatorioEstudante(buscar) : "Não encontrado"

}



/* const buscarTurma = (nomeTurma) => {
    
    
     for (let i = 0; i < turmas.length; i++) {
        nome = turmas[i].turma

        if (nomeTurma === nome) {
           // console.log(turmas[i])
        }
    } 
}buscarTurma("Zhenyi")*/



const matricular = () => {

    const inputNomeCadastro = document.getElementById("nomeMatricula").value

    const inputCursoMatricula = document.getElementById("cursoMatricula").value.toLowerCase()

    const inputTurmaMatricula = document.getElementById("turmaMatricula").value.toLowerCase()

    const nParcelas = document.getElementById("parcelasMatricula").value.toLowerCase()

    
    let valoresTurma= buscarTurma2(inputTurmaMatricula)
    console.log(valoresTurma)
    let valoresCurso = buscarCurso(inputCursoMatricula)
    console.log(valoresCurso)
    let valorTotal = 0
    let valorParcelas = 0
    let desconto = false
    let possuiDesconto = 0

    if (nParcelas > 0 && nParcelas <= 2) {
        desconto = true
        valorTotal = valoresCurso.valor - (valoresCurso.valor * 0, 2)
        valorParcelas = valorTotal / nParcelas
        possuiDesconto = "sim"
    } else {
        valorTotal = valoresCurso.valor
        valorParcelas = valorTotal / nParcelas
        possuiDesconto = "não"
    }
    console.log(estudantes)
    const novoAluno = 0
    
    if(valoresTurma[0].curso.toLowerCase() === inputCursoMatricula && valoresTurma[0].turma.toLowerCase() === inputTurmaMatricula && valoresTurma[0].concluida === false ){


    const novoAluno = {
        estudante: inputNomeCadastro,
        curso: valoresTurma[0].curso,
        turma: valoresTurma[0].turma,
        nParcelas: nParcelas,
        valor: valoresCurso.valor,
        desconto: desconto,
        parcelas: valorParcelas,


    }




    const novoAlunoMostrar =
        `<h1>Aluno matriculado<img class="imagemOk" src="../ProjetoWEB MEDIA/Vector (2).png"></img> </h1> 
                
    <p>Aluno Matriculado</p>
    <p>Nome: ${novoAluno.estudante}</p>
    <p>Curso: ${valoresTurma[0].curso}</p>
    <p>Turma: ${valoresTurma[0].turma}</p>
    <p>Quantidade de parcelas: ${nParcelas}  </p>
    <p>Valor do curso sem desconto: ${valoresCurso.valor}<p>
    <p>Possui desconto: ${possuiDesconto}`

    const adicionando = document.getElementById("matriculado")
    adicionando.innerHTML = novoAlunoMostrar
    
    return estudantes.push(novoAluno)
    

    } else {

        const Falha= `<h1>Aluno não cadastrado <img id="error" width="28" src="../ProjetoWEB MEDIA/Erro.png.png"></h1>
        <p id="textoErro">Verificar se o curso está aberto ou se</p> <p>existe o curso na turma selecionada</P>`

        const adicionando = document.getElementById("matriculado")
    adicionando.innerHTML = Falha
    }
    

    document.getElementById("nomeMatricula").value = ""
    document.getElementById("cursoMatricula").value =""
    document.getElementById("turmaMatricula").value =""
    document.getElementById("parcelasMatricula").value = ""

    
    console.log(estudantes)
    console.log(novoAluno)
    

    
    
    //console.log(estudantes)
    /* console.log(`Aluno matriculado \nNome: ${novoNome} \nCurso: ${novoCurso}\nTurma: ${novaTurma}`) */

}



// Laços Encontrar estudante

/* const relatorioEstudante = (informacoes) => {
    console.log(`Nome: ${informacoes.estudante}\nTurma: ${informacoes.turma}\nCurso: ${informacoes.curso}\nValor Total: ${informacoes.valor}\nValor Parcela: ${informacoes.parcelas}\nNº Parcelas: ${informacoes.nParcelas}`)
}
 */

/* const buscarEstudante = (nomeEstudante, cb) => {
    for (let i = 0; i < estudantes.length; i++) {
        nome = estudantes[i].estudante

        if (nome.includes(nomeEstudante)) {
            //console.log(estudantes[i].estudante)
          /*   console.log(estudantes[i]) 
          cb(estudantes[i]) 


        }
    }
}
//const nomeEstudante = prompt("Digite o nome do estudante")
buscarEstudante("Ch", relatorioEstudante)
 */




