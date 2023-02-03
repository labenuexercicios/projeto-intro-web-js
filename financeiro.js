const cursos = [
    {
        id: 1,
        nome: "html e css",
        descricao:"",
        duracao:"1 mês",
        valor: 500
    },
    {
        id:2,
        nome: "javascript",
        descricao:"",
        duracao: "2 meses",
        valor: 900
    },
    {
        id:3,
        nome:"apis rest",
        descricao:"",
        duracao: "6 meses",
        valor: 2000
    }
];
const turmas = [
    {
        turma:"Hipatia",  
        curso: "javascript", 
        inicio: "30/11/2022" ,
        termino: "30/01/2022" ,
        numeroDeAlunos: 150,
        periodo: "Noturno",
        concluida: false


    },
    {
        turma:"Sibyla",
        curso: "JavaScript", 
        inicio: "30/10/2022",
        termino: "30/12/2022" ,
        numeroDeAlunos: 200,
        periodo: "Integral",
        concluida: false
    },
    {
        turma:"Curie",
        curso: "HTML e CSS", 
        inicio: "15/09/2022",
        termino: "15/10/2022" ,
        numeroDeAlunos: 180,
        periodo: "Noturno",
        concluida: true
    },
    {
        turma:"Zhenyi",
        curso: "HTML e CSS", 
        inicio: "01/11/2022" ,
        termino: "01/01/2023" ,
        numeroDeAlunos: 80,
        periodo: "integral",
        concluida: false
    },
    {
        turma:"Clarke",
        curso: "HTML e CSS", 
        inicio: "04/07/2022",
        termino: "04/09/2022",
        numeroDeAlunos: 200,
        periodo: "Noturno",
        concluida: true
    },
    {
        turma:"Blackwell",
        curso: "APIsRes", 
        inicio: "20/03/2022" ,
        termino:"20/06/2023" ,
        numeroDeAlunos: 100,
        periodo: "integral",
        concluida: true
    },
    {
        turma:"Elion",
        curso: "APIsRes", 
        inicio: "12/01/2022" ,
        termino: "12/06/2022" ,
        numeroDeAlunos: 200,
        periodo: "Noturno",
        concluida: true
    },
    {
        turma:"Burnell",
        curso: "APIsRes", 
        inicio: "18/10/2022" ,
        termino: "18/04/2023" ,
        numeroDeAlunos: 90,
        periodo: "integral",
        concluida: false
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
        if( cursos[i].nome === nomeCurso){
        console.log(cursos[i])}

 }
}
const modal = document.getElementById("modal")
const modalContent = document.getElementById("modalContent");
const btnSelecionarCursos = document.getElementById("btnSelecionarCursos");
btnSelecionarCursos.onclick = function() {
    modal.style.display = "block";
    modalContent.innerHTML = `
  <form>
    ${cursos.map(curso => `
      <input type="checkbox" id="curso${curso.id}">
      <label for="curso${curso.id}">${curso.nome}</label><br>
    `).join('')}
    <input type="button" value="Adicionar Cursos" onclick="addCursos()">
  </form>
`

  }
  const carrinhoCursos = []
  function addCursos() {
    cursos.forEach(curso => {
      if (document.getElementById(`curso${curso.id}`).checked) {
        carrinhoCursos.push(curso.valor);
        const cursoTela = document.getElementById("cursoTela")
        cursoTela.innerHTML = curso.nome
        modal.style.display = "none"
        console.log(carrinhoCursos);
      }
    });
const parcelarCurso = (carrinhoCursos, parcela) => {
    let valorTotal = 0
    let valorParcelas = 0
    let desconto = 0 
    console.log(carrinhoCursos)
        if(carrinhoCursos.length > 1){
    switch(carrinhoCursos.length){
        case 3:
            desconto = 0.15
            break
        case 2: 
            desconto = 0.10
            break
        default:
            desconto = 0
    }
    
        for(let valor of carrinhoCursos){
            valorTotal = valorTotal + valor

        }
    valorTotal = valorTotal - (valorTotal * desconto)
    }else{
    valorTotal = carrinhoCursos[0]
}
    if( parcela <= 2){
       valorTotal = valorTotal - (valorTotal * 0.2)
        valorParcelas = valorTotal/parcela
        const resultado = document.getElementById("resultado")
        resultado.innerHTML = `O curso ficou no valor total R$ ${valorTotal}. Em ${parcela} x de R$ ${valorParcelas}. Foi concedido desconto de ${desconto} ` 
    }else{
        
        valorTotal = valorTotal
        valorParcelas = valorTotal / parcela
        const resultado = document.getElementById("resultado")
        resultado.innerHTML = `O curso ficou no valor total de R$ ${valorTotal}. Em ${parcela}x de R$ ${valorParcelas} `
         
    } 
}

const verValor  = document.getElementById("verValor");
verValor.addEventListener("click",function(){
   const numParcelasInput = document.getElementById("numParcelas").value;
    parcelarCurso(carrinhoCursos, Number(numParcelasInput))
   
})}
document.getElementById("buscarBotao").addEventListener("click", function(event) {
    event.preventDefault();
    const buscarAluno = document.getElementById("buscarInputNome").value;
    const alunoEncontrado = estudantes.find(function(aluno) {
      return aluno.estudante === buscarAluno;
    });
    if (alunoEncontrado) {
      const cardAluno = document.getElementById("cardTurma");
      cardTurma.innerHTML = "";
      const nomeAluno = document.createElement("h3");
      nomeAluno.innerHTML = alunoEncontrado.estudante;
      const nomeTurma = document.createElement("p");
      nomeTurma.innerHTML = "Turma: " + alunoEncontrado.turma;
      const nomeCurso = document.createElement("p");
      nomeCurso.innerHTML = "Curso: " + alunoEncontrado.curso;
      const valor = document.createElement("p");
      valor.innerHTML = "Valor: " + alunoEncontrado.valor;
      const nParcela = document.createElement("p");
      nParcela.innerHTML = "Numero de Parcelas: " + alunoEncontrado.nParcelas;
      const desconto = document.createElement("p");
      desconto.innerHTML = "Numero de Parcelas: " + alunoEncontrado.desconto;
      const parcelas = document.createElement("p");
      parcelas.innerHTML = "Numero de Parcelas: " + alunoEncontrado.parcelas;
      cardAluno.appendChild(nomeAluno);
      cardAluno.appendChild(nomeTurma);
      cardAluno.appendChild(nomeCurso);
      cardAluno.appendChild(valor);
      cardAluno.appendChild(nParcela);
      cardAluno.appendChild(desconto);
      cardAluno.classList.add("cardAluno");
    } else {
      console.log("Nenhuma aluno encontrada.");
    }
  });
