const cursos = [
    {
        curso: "HTML e CSS",
        descricao: "",
        duracao: "1",
        valor: 500.00
    },
    {
        curso: "JavaScript",
        descricao: "",
        duracao: "2",
        valor: 900.00
    },
    {
        curso: "APIsRest",
        descricao: "",
        duracao: "6",
        valor: 2000.00
    },
]

const turmas = [
    {
        turma: "Hipátia",
        curso: "JavaScript",
        inicio: "30/11/2022",
        termino: "30/01/2023",
        numeroDeAlunos: 150,
        periodo: "noturno",
        concluida: false
    },
    {
        turma: "Sibyla",
        curso: "JavaScript",
        inicio: "30/10/22",
        termino: "30/12/2022",
        numeroDeAlunos: 200,
        periodo: "integral",
        concluida: false
    },
    {
        turma: "Curie",
        curso: "HTML e CSS",
        inicio: "15/09/2022",
        termino: "15/10/2022",
        numeroDeAlunos: 180,
        periodo: "noturno",
        concluida: true
    },
    {
        turma: "Zhenyi",
        curso: "JavaScript",
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
        termino: "04/09/2022",
        numeroDeAlunos: 200,
        periodo: "noturno",
        concluida: true
    },
    {
        turma: "Blackwell",
        curso: "APIsRest",
        inicio: "20/03/2022",
        termino: "20/06/2022",
        numeroDeAlunos: 100,
        periodo: "integral",
        concluida: true
    },
    {
        turma: "Elion",
        curso: "APIsRest",
        inicio: "12/01/2022",
        termino: "12/06/2022",
        numeroDeAlunos: 2000,
        periodo: "noturno",
        concluida: true
    },
    {
        turma: "Burnell",
        curso: "APIsRest",
        inicio: "18/10/2022",
        termino: "18/04/2022",
        numeroDeAlunos: 90,
        periodo: "noturno",
        concluida: false
    },
]

const estudantes = [
    {
        estudante: "Chris Evans",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: "R$ 900,00",
        nParcelas: 9,
        desconto: false,
        parcelas: 100.00

    },
    {
        estudante: "Halle Berry",
        turma: "Burnell",
        curso: "APIsRest ",
        valor: "R$2000,00",
        nParcelas: 4,
        desconto: false,
        parcelas: 500.00

    },
    {
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: "R$500",
        nParcelas: 1,
        desconto: true,
        parcelas: 500.00

    }
]

// FUNÇÃO QUE BUSCA O OBJETO CURSO ATRAVÉS DO INPUT "CURSO" DA PÁGINA adm-financeiro.html
function buscaCurso() {
    nomeCurso = document.getElementById("curso-fin").value
    const objCurso = cursos.find(function(objCurso){
         return objCurso.curso === nomeCurso
    }) 
    return objCurso
 }


 
let carrinhoCursos = []

//FUNÇÃO QUE ADICIONA O VALOR DO CURSO NO ARRAY "carrinhoCursos" UTILIZANDO O RETORNO DA FUNÇÃO "buscaCurso" PARA ACESSAR O VALOR DO CURSO
function adicionarCurso() {
    carrinhoCursos.push(buscaCurso().valor)

}

//FUNÇÃO QUE RETORNA NA PÁGINA adm-financeiro.html O VALOR À SER PAGO PELO ALUNO. É UTILIZADO CARRINHO DE CURSOS E O INPUT DO NÚMERO DE PARCELAS
function parcelarCurso() {
    let resposta = document.getElementById("res")
    resposta.innerHTML =""
    let parcelaFin = document.getElementById("parcelas-fin").value
    let totalCurso = 0

    let somaCursos = carrinhoCursos.reduce(function(total, numero){
        return total + numero
    }, 0)  

    let vParcela = somaCursos/parcelaFin     

    if(parcelaFin > 0 && parcelaFin <=2){
        totalCurso = somaCursos * 0.8
        vParcela = totalCurso/parcelaFin
        switch (carrinhoCursos.length) {
            case 1: 
                html =  `O valor do pagamento é de R$ ${totalCurso}, em ${parcelaFin}x de R$ ${vParcela} com 20% de desconto`
                break;
            case 2:
                html = `O valor do pagamento é de R$ ${totalCurso * 0.9} com 20% + 10% de desconto, parcelado em ${parcelaFin}x de R$ ${vParcela * 0.9}`
                break;
            default:
                html = `O valor do pagamento é de R$ ${totalCurso * 0.85} com 20% + 15% de desconto, parcelado em ${parcelaFin}x de R$ ${vParcela * 0.85}`
                break;
        }
    }else{
        switch (carrinhoCursos.length) {
            case 1: 
                html = `O valor do pagamento é de R$ ${somaCursos}, em ${parcelaFin}x de R$ ${vParcela}`   
                break;
            case 2:
                html = `O valor do pagamento é de R$ ${somaCursos * 0.9} com 10% de desconto, parcelado em ${parcelaFin}x de R$ ${vParcela * 0.9}`
                break;
            default:
                html =  `O valor do pagamento é de R$ ${somaCursos * 0.85} com 15% de desconto, parcelado em ${parcelaFin}x de R$ ${vParcela * 0.85}`
                break;
        }
    }

    if(carrinhoCursos.length == 0){
        alert("Adicione um curso no carrinho para calcular o valor")
    }else{
        resposta.innerHTML += `<h3>Valor</h3>${html}`
    }
    
}


let contaTurma = 0
inputTurma = document.getElementById("input-turma")
function buscaTurma(event) {
    if(contaTurma >= 8){
        alert("Recarregue a página!")
        cardTurma.innerHTML = "" 
    }
    const cardTurma = document.getElementById("info-turmas")

    nomeTurma = inputTurma.value
    
    const retorno = turmas.filter((e) => {
        if(e.turma.toLowerCase() === nomeTurma.toLowerCase()){
            return e.turma.toLowerCase() === nomeTurma.toLowerCase()
        }else{
            return false
        }   
    })
    
    if(retorno == false){
        alert("Turma não encontrada")
    }

    if(retorno[0].concluida == true){
        retorno[0].concluida = "Sim"
    }else{
        retorno[0].concluida ="Não"
    }

    const html = `<div class="card" > 
                <h3>${retorno[0].turma}</h3> 
                <p><b>Curso: </b>${retorno[0].curso}</p>
                <p><b>Início :</b>${retorno[0].inicio}</p>
                <p><b>Término: </b>${retorno[0].termino}</p>
                <p><b>Número de alunos: </b>${retorno[0].numeroDeAlunos}</p>
                <p><b>Período: </b>${retorno[0].periodo}</p>
                <p><b>Concluído: </b>${retorno[0].concluida}</p>
                </div>`

    cardTurma.innerHTML +=  html
     
    inputTurma.value = ""
    contaTurma ++
    console.log(contaTurma);
}




function buscaEstudantes() {

    let nomeEstudante = document.getElementById("nome-aluno").value
    
    const relatorioEstudante = document.getElementById("relatorio-estudante")
    relatorioEstudante.innerHTML = ""

    const result = estudantes.filter(element => element.estudante.toLowerCase().includes(nomeEstudante.toLowerCase()))

    const html = `<div class="relatorio">
    <p>Aluno: ${result[0].estudante}</p>
    <p>Turma: ${result[0].turma}</p> 
    <p>Curso: ${result[0].curso}</p> 
    <p>Valor Total: ${result[0].valor}</p>
    <p>Valor Parcela: R$${result[0].parcelas}</p>   
    <p>Nº parcelas:${result[0].nParcelas}</p>   
    <div/>`

    relatorioEstudante.innerHTML += html

    inputAluno.value=""
}


function buscaCursoMatricula(nomeCurso) {
    const objCurso = cursos.find(function(objCurso){
         return objCurso.curso === nomeCurso
    }) 
    return objCurso
 }

let nomeMat = document.getElementById("nome-mat")
let cursoMat = document.getElementById("curso-mat")
let turmaMat = document.getElementById("turma-mat")
let parcelaMat = document.getElementById("parcelas-mat")


function matricular() {
    nomeAluno = nomeMat.value
    cursoAluno = cursoMat.value
    turmaAluno = turmaMat.value
    parcelaAluno = parcelaMat.value

    const retornoTurma = turmas.filter((e) => {
        if(e.turma.toLowerCase() === turmaAluno.toLowerCase()){
            return e.turma.toLowerCase() === turmaAluno.toLowerCase()
        }else{
            return false
        }   
    })

    const retornoCurso = cursos.filter((e) => {
        if(e.curso.toLowerCase() === cursoAluno.toLowerCase()){
            return e.curso.toLowerCase() === cursoAluno.toLowerCase()
        }else{
            return false
        }
    })

    if(retornoTurma == false){
        return alert("Turma não encontrada")
    }

    if(retornoCurso == false){
        return alert("Curso não encontrado")
    }

    if(nomeAluno.length < 8){
        return alert("Informe o nome completo")
    }

    let confirmaMatricula = document.getElementById("div-2")
    let check = document.getElementById("div-3")

    confirmaMatricula.innerHTML = ""
    check.innerHTML= ""
    let valorCurso = buscaCursoMatricula(cursoAluno)
    let valorTotal = 0
    let valorParcela = 0

    if(parcelaAluno > 0 && parcelaAluno <= 2){
        valorTotal = valorCurso.valor - (valorCurso.valor * 0.2)
        valorParcela = valorTotal / parcelaAluno
    }else{
        valorTotal = valorCurso.valor
        valorParcela = valorTotal / parcelaAluno
    }

    const novoAluno = {
        estudante: nomeAluno,
        turma: turmaAluno,
        curso: cursoAluno,
        valor: valorCurso.valor,
        nParcelas: parcelaAluno,
        desconto: false,
        parcelas: valorParcela
    }
    
    estudantes.push(novoAluno)

    const html = `<h2>Aluno Matriculado </h2>
                
                <p>Aluno Matriculado</p>
                <p>Nome: ${nomeAluno}</p>
                <p>Curso: ${cursoAluno}</p>
                <p>Turma: ${turmaAluno}</p>`

    check.innerHTML = '<img src="./imagens/check.png" alt="" id="check"></img>'
    confirmaMatricula.innerHTML += html
    nomeMat.value =""
    cursoMat.value=""
    turmaMat.value=""
    parcelaMat.value=""
}


// FUNÇÃO DA PÁGINA DE CONTATO QUE CAPTURA OS DADOS DOS INPUTS E EXIBE NO CONSOLE, SIMULANDO O ENVIO DA MENSAGEM PARA O BANCO DE DADOS
function mostrarForm(){
    console.log(document.getElementById("nome-contato").value);
    console.log(document.getElementById("email").value); 
    console.log(document.getElementById("mensagem").value);

    swal({
        title: "Mensagem enviada com sucesso",
        icon: "success"
    })
}
