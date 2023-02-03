const cursos = [
    {
        nome: "html e css",
        descricao:"",
        duracao:"1 mês",
        valor: 500.0
    },
    {
        nome: "javascript",
        descricao:"",
        duracao: "2 meses",
        valor: 900.0
    },
    {
        nome:"apis e rest",
        descricao:"",
        duracao: "6 meses",
        valor: 2000.0
    }
];
const estudantes = [
    {
        estudante:  "Chris Evans",
        turma: "Hipátia",
        curso: "JavaScript",
        valor:  "900",
        nParcelas: 9,
        desconto:   false,
        parcelas: 100
    },
    {
        estudante:  "Halle Berry",
        turma: "Burnell",
        curso: "APIsRest",
        valor:  "2000",
        nParcelas: 4,
        desconto:   false,
        parcelas: 500
    },
    {
        estudante:  "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor:  "500",
        nParcelas: 1,
        desconto: true,
        parcelas: 500
    }
];


buscarCurso =nomeCurso =>{
    for(let i in cursos){
        if( cursos[i].nome.toLowerCase() === nomeCurso){
            console.log(cursos[i])
            return cursos[i]
        }

    }
    return
}

const novaMatricula = (aluno, curso, turma, numParcelas) => {
    let valorCurso = 0
    let desconto = false
    let valorTotal = 0
    let valorPorParcela = 0
   

    if(numParcelas > 0 && numParcelas <= 2){
        desconto = true
        
        valorTotal = valorCurso.valor - (valorCurso.valor * 0.2)
        valorPorParcela = valorTotal / numParcelas
    }else{
            valorTotal = valorCurso.valor
            valorPorParcela = valorTotal / numParcelas
    }
    
    const matricula = {
        nome: aluno,
        turma: turma,
        curso: curso,
        valor: valorCurso.valor,
        nParcela: numParcelas,
        desconto: desconto,
        valorParcelas: valorPorParcela
    
    }
    estudantes.push(matricula)
    console.log(estudantes)
 }
 const realizarMatricula  = document.getElementById("realizarMatricula");
 realizarMatricula.addEventListener("click",function(){
    const nomeInput = document.getElementById("nome").value;
    const turmaInput = document.getElementById("turmas").value;
    const cursoInput = document.getElementById("curso").value;
    const numParcelasInput = document.getElementById("numParcelas").value;
    novaMatricula(nomeInput, cursoInput.toLowerCase(), turmaInput,Number(numParcelasInput))
    if(realizarMatricula){
        const cardmatricula = document.getElementById("alunomatriculado");
        const alunomatriculado = document.getElementById("estiloaluno")
        alunomatriculado.innerHTML = `
        <div>
        <h2>Aluno Matriculado <img src="../imgs/confirm.png" alt=""><h2>
        </div>
        `
        cardmatricula.innerHTML = `
        <h3>${nomeInput}</h3>
        <p>Turma: ${turmaInput}</p>
        <p>Curso: ${cursoInput}</p>
        <p>Número de Parcelas: ${numParcelasInput}<p/>
        `
        cardmatricula.classList.add("card");
         
    }
    
})