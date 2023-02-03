const turmas = [
    {
        turma: "Hipatia",
        curso: "JavaScript",
        inicio: "30/11/2022",
        termino: "30/01/2023",
        numeroDeAlunos: 150,
        periodo: "noturno",
        concluido: false
    },
    {
        turma: "Sibyla",
        curso: "JavaScript",
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
        curso: "HTML e CSS",
        inicio: "01/11/2022",
        termino: "01/01/2023",
        numeroDeAlunos: 80,
        periodo: "integral",
        concluido: false
    },
    {
        turma: "Clarke",
        curso: "HTML e CSS",
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
];

const cursos = [
    {
        curso: "HTML e CSS",
        descrição: "Curso de HTML e CSS do básico ao avançado!",
        duração: "1 mês",
        valor: 500
    },
    {
        curso: "JavaScript",
        descrição: "Curso de Java Script do básico ao avançado!",
        duração: "2 mês",
        valor: 900
    },
    {
        curso: "APIsREST",
        descrição: "Curso de APIsREST do básico ao avançado!",
        duração: "6 mês",
        valor: 2000
    }
];

const estudantes = [
    {
        estudante: "Cris Evans",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: 900,
        nParcelas: 9,
        desconto: false,
        vParcelas: 100
    },
    {
        estudante: "Halle Berry",
        turma: "Burnell",
        curso: "APIsRest",
        valor: 2000,
        nParcelas: 4,
        desconto: false,
        vParcelas: 500
    },
    {
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: 500,
        nParcelas: 1,
        desconto: true,
        vParcelas: 500
    },
];

const conteiner = document.getElementById ("conteinerCards")

const buscarTurma = (turmaCard)=>{
    const turmasMapeadas = turmaCard.map((item)=>{
        return `<section class="conteinerCards">
        <p class = "tituloTurma">${item.turma}</p>
        <p>Curso: ${item.curso}</p>
        <p>Inicio: ${item.inicio}</p>
        <p>Termino: ${item.termino}</p>
        <p>Numero de Alunos: ${item.numeroDeAlunos}</p>
        <p>Periodo: ${item.periodo}</p>        
        </section>` 
        })
    return turmasMapeadas
}

const turmasFiltradas = ()=>{
    const inputTurma = document.getElementById("input-turmas").value.toLowerCase()
    document.getElementById("input-turmas").value= ""
    const turmaSelecionada = turmas.filter((item)=>{
        if( item.turma.toLowerCase().includes(inputTurma)){
            return item
        }
    })
    console.log(conteiner)
    return turmaSelecionada ? conteiner.innerHTML = buscarTurma(turmaSelecionada).join("")
    :conteiner.innerHTML = buscarTurma(turmas)       
}

const buscarCursos = (nomeDoCurso) => {  
    const busca = cursos.filter((cadaCurso) => cadaCurso.curso.toLowerCase().includes(nomeDoCurso.toLowerCase()))   
    return busca    
}

const conteinerNovoAluno = document.getElementById("novo-aluno")

const matricular = () => { 
    const newStudent = document.getElementById("nome").value.toLowerCase()  

    const newCourse =  document.getElementById("input-curso").value.toLowerCase()
   
    const newClass = document.getElementById("input-turmas").value.toLowerCase()   
    
    const newInstallments = document.getElementById("numero").value.toLowerCase()    
    
    document.getElementById("nome").value=""
    document.getElementById("input-curso").value=""
    document.getElementById("input-turmas").value=""
    document.getElementById("numero").value=""
    const novoAluno = {
        estudante: newStudent,
        turma: newClass,
        curso: newCourse,
        nParcelas: newInstallments,      
    }            
    
    document.getElementById("novo-aluno").innerHTML
     =
    `
    <div class = "matriculado">
    <h1>Aluno Matriculado</h1> 
    <img src="../imagens/check.png"/> 
    </div>
    <div class ="matriculado-inf">    
    <p>Nome: ${novoAluno.estudante}</p> 
    <p>Curso: ${novoAluno.curso}</p> 
    <p>Turma: ${novoAluno.turma}</p> 
    </div> 
    `
    estudantes.push(novoAluno)
}

const buscarEstudante = () => {
    let newStudent = document.getElementById("nome").value
    newStudent=newStudent.toLowerCase()

    document.getElementById("nome").value = ""

    const student = estudantes.find(c =>    c.estudante.toLowerCase().includes(newStudent))
        if(typeof student == "undefined"){
            alert("Aluno não encontrado!")
            return
        }
        document.getElementById("dados-aluno").innerHTML = `
        <div class="dados-aluno">
        <p>Nome:${student.estudante}</p>
        <p>Turma:${student.turma}</p>
        <p>Curso:${student.curso}</p>
        <p>Valor total:${student.valor}</p>
        <p>Valor da parcela:${student.vParcelas}</p>
        <p>nº de parcelas:${student.nParcelas}</p>
        </div>
        `
    }
 

const carrinhoCursos = []

const valoresCurso = () => {
    const addCurso = document.getElementById("cursos-input")
    const newCourse =  document.getElementById("input-curso")

    let infCurso = buscarCursos(newCourse.value.toLowerCase()) 
    
    newCourse.value=""
    if(infCurso.length>0){
        carrinhoCursos.push(infCurso[0].valor) 
        addCurso.innerHTML+= `         
         <p>${infCurso[0].curso}</p>`
    }else{
        alert ("Curso não encontrado!")
        return 
    }      
}

const parcelarCurso = () => {    
    let valorTotal = 0
    let valorParcela
    let desconto = 0
    const newInstallments = document.getElementById("numero-parcela").value.toLowerCase()    
    document.getElementById("numero-parcela").value=""
    console.log(carrinhoCursos)
    if (carrinhoCursos.length > 1) {
        switch (carrinhoCursos.length) {
            case 3:
                desconto = 0.85
                break;
            case 2:
                desconto = 0.9
                break;

            default:
                desconto = 0
                break;
        }
       
        for (let valor of carrinhoCursos) {
            valorTotal = valorTotal + valor
            console.log(valorTotal)
        }
        
        valorTotal = valorTotal * desconto
    } else {
        valorTotal = carrinhoCursos[0]
    }    

    if (newInstallments <= 2) {
        valorTotal = valorTotal * 0.8
        valorParcela = valorTotal / newInstallments

       document.getElementById("valores").innerHTML= (`<div id="valores"><p>Valor</p>O curso ficou no valor total de ${valorTotal} reais ou em ${newInstallments} de ${valorParcela.toFixed(2)} reais. Foi concedido desconto de 20% 
       </div>`)
    } else {
        valorTotal = valorTotal
        valorParcela = valorTotal / newInstallments

        document.getElementById("valores").innerHTML= ( `<b>Valor</b>O curso ficou no valor de ${valorTotal} ou em ${newInstallments} de ${valorParcela.toFixed(2)} reais`)
    }
    
}

