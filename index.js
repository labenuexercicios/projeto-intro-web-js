//Assunto array e objetos
//Declarando objetos

const cursos = [
  {
    curso: "HTML e CSS",
    descricao: "Do básico ao avançado de HTML e CSS",
    duracao: "1 mês",
    valor: 500,
  },
  {
    curso: "JavaScript",
    descricao: "Do básico ao avançado de JavaScript",
    duracao: "2 meses",
    valor: 900,
  },
  {
    curso: "APIsRest",
    descricao: "Do básico ao avançado de APIs Rest",
    duracao: "6 meses",
    valor: 2000,
  },
];
const turmas = [
  {
    turma: "Hipátia",
    curso: "Javascript",
    inicio: "30/11/2022",
    termino: "30/01/2023",
    numAlunos: 150,
    periodo: "Noturno",
    concluido: false,
  },
  {
    turma: "Sibyla",
    curso: "Javascript",
    inicio: "30/10/2022",
    termino: "30/12/2022",
    numAlunos: 200,
    periodo: "Integral",
    concluido: false,
  },
  {
    turma: "Curie",
    curso: "HTML e CSS",
    inicio: "15/09/2022",
    termino: "15/10/2022",
    numAlunos: 180,
    periodo: "Noturno",
    concluido: true,
  },
  {
    turma: "Zhenyi",
    curso: "HTML e CSS",
    inicio: "01/11/2022",
    termino: "01/01/2023",
    numAlunos: 80,
    periodo: "Integral",
    concluido: false,
  },
  {
    turma: "Clarke",
    curso: "HTML e CSS",
    inicio: "04/07/2022",
    termino: "04/09/2022",
    numAlunos: 200,
    periodo: "Noturno",
    concluido: true,
  },
  {
    turma: "Blackwell",
    curso: "APIsRest",
    inicio: "20/03/2022",
    termino: "20/06/2022",
    numAlunos: 100,
    periodo: "Integral",
    concluido: true,
  },
  {
    turma: "elion",
    curso: "APIsRest",
    inicio: "12/01/2022",
    termino: "12/06/2022",
    numAlunos: 200,
    periodo: "Noturno",
    concluido: true,
  },
  {
    turma: "Burnell",
    curso: "APIsRest",
    inicio: "18/10/2022",
    termino: "18/04/2023",
    numAlunos: 150,
    periodo: "Integral",
    concluido: false,
  },
];
const estudantes = [
  {
    estudante: "Chris Evans",
    turma: "Hipátia",
    curso: "JavaScript",
    valor: "900",
    nParcelas: 9,
    desconto: false,
    parcelas: 100,
  },
  {
    estudante: "Halle Berry",
    turma: "Burnell",
    curso: "APIsRest",
    valor: "2000",
    nParcelas: 4,
    desconto: false,
    parcelas: 500,
  },
  {
    estudante: "Lashana Lynch",
    turma: "Zhenyi",
    curso: "HTML e CSS",
    valor: "500",
    nParcelas: 1,
    desconto: true,
    parcelas: 500,
  },
];
//********************************************************************************************************/

//Assubto condicionais
//Calculando descontos

// Função para buscar os cursos de acordo com a pesquisa feita e retornando o objeto do mesmo
let carrinhoCursos = [];

const buscarCurso = (nomeCurso) => {
  //     for(i in cursos){
  //         if(cursos[i].curso.toLowerCase() === nomeCurso.toLowerCase()){
  //             return cursos[i];
  //        }
  //     }
  const foundCourse = cursos.find(
    (course) => course.curso.toLowerCase() === nomeCurso.toLowerCase()
  );
  if (foundCourse) {
    return foundCourse;
  }
  return `O Curso ${nomeCurso} não encontrado`;
};
// foundCourse ? console.log(foundCourse) : null

//
// console.log(buscarCurso("python"))

//********************************************************************************************************/

//Função para inserir o valor do carrinho para ser usado para retornar apenas o valor do curso, seguido do BuscarCurso

const inserirCurso = (nomeCurso) => {
  let curso = buscarCurso(nomeCurso);
  let valor = curso.valor;

  carrinhoCursos.push(valor);
  /* console.log(carrinhoCursos) */
};
/* inserirCurso('html e css') */
/* inserirCurso('javascript') */
// inserirCurso('apisrest')
//*******************************************************************************************************/

//Função para colocar os descontos de acordo com quantidade de cursos adquiridos e numeros de parcelas

const parcelarCurso = (numParcelas) => {
  let valorTotal = 0;
  let valorFinal = 0;

  for (let valor of carrinhoCursos) {
    valorTotal += valor;
  }

  if (carrinhoCursos.length === 3 && numParcelas <= 2) {
    valorDesconto = valorTotal - valorTotal * 0.15;
    valorFinal = valorDesconto - valorDesconto * 0.2;
    valorParcela = valorFinal / numParcelas;

    return `O valor do pagamento é de R$ ${valorDesconto.toFixed(
      2
    )} com 15% de desconto. Como será parcelado em ${numParcelas}x, foi concedido mais 20% de desconto, totalizando o valor de R$ ${valorFinal.toFixed(
      2
    )}, em ${numParcelas}x de R$ ${valorParcela.toFixed(2)}.`;
  } else if (carrinhoCursos.length === 3 && numParcelas > 2) {
    valorDesconto = valorTotal - valorTotal * 0.15;
    valorFinal = valorDesconto / numParcelas;

    return `O valor do pagamento é de R$ ${valorDesconto.toFixed(
      2
    )} com 15% de desconto, parcelado em ${numParcelas}x de R$ ${valorFinal.toFixed(
      2
    )}.`;
  } else if (carrinhoCursos.length === 2 && numParcelas <= 2) {
    valorDesconto = valorTotal - valorTotal * 0.1;
    valorFinal = valorDesconto - valorDesconto * 0.2;
    valorParcela = valorFinal / numParcelas;

    return `O valor do pagamento é de R$ ${valorDesconto.toFixed(
      2
    )} com 10% de desconto. Como será parcelado em ${numParcelas}x, foi concedido mais 20% de desconto, totalizando o valor de R$ ${valorFinal.toFixed(
      2
    )}, em ${numParcelas}x de R$ ${valorParcela.toFixed(2)}.`;
  } else if (carrinhoCursos.length === 2 && numParcelas > 2) {
    valorDesconto = valorTotal - valorTotal * 0.1;
    valorFinal = valorDesconto / numParcelas;

    return `O valor do pagamento é de R$ ${valorDesconto.toFixed(
      2
    )} com 10% de desconto, parcelado em ${numParcelas}x de R$ ${valorFinal.toFixed(
      2
    )}.`;
  } else {
    valorFinal = valorTotal / numParcelas;
    return `O valor do pagamento é de R$ ${valorTotal.toFixed(
      2
    )}, parcelado em ${numParcelas}x de R$ ${valorFinal.toFixed(2)}.`;
  }

  /* if(carrinhoCursos.length > 1){
        switch (carrinhoCursos.length) {
            case 3:
                desconto = 0.15
                break;

            case 2:
                desconto = 0.10;
                break;
        
            default:
                desconto = 0
                break;
        }

        for(let valor of carrinhoCursos){
            valorTotal += valor
            
        }

        valorTotal = valorTotal - (valorTotal * desconto);
    
    }else{
        valorTotal = carrinhoCursos[0]
    }

    if(numParcelas <= 2){
        valorTotal = valorTotal - (valorTotal * 0.2);
        valorParcela = valorTotal / numParcelas;

        return `O valor do pagamento é de R$ ${valorTotal.toFixed(2)} com 20% de desconto, parcelando em ${numParcelas}x de R$ ${valorParcela.toFixed(2)}`;
    
    }else{
        valorParcela = valorTotal / numParcelas;
        return `O valor do pagamento é de R$ ${valorTotal.toFixed(2)}, parcelando em ${numParcelas}x de R$ ${valorParcela.toFixed(1)}`;
    } */
};

/* console.log(parcelarCurso(3 )) */ //Chamando a função com a quantidade da parcela

//********************************************************************************************************/
//assunto laço
//Sistema de busca


//Função para buscar uma turma e retornar o objeto do mesmo se for encontrado
const inputTurma = document.getElementById("input-search-turma");
let htmlCode = "";  
const gallery = document.getElementById("allBoxes");

const buscarTurma = (event) => {
  // event.preventDefault()

    if(inputTurma.value === ""){
        htmlCode = `<p class="paragrafo">Campo inválido</p>`
        return gerarCards()
        
    }


  const findTurma = turmas.filter((e) =>
    e.turma.toLowerCase().includes(inputTurma.value.toLowerCase())
    
  );

  
 
  if (findTurma.length > 0) {
    gallery.innerHTML = `
        <div class="boxCourses" id="cardBuscado">
            <h2>${findTurma[0].turma}</h2>
            <p><b>Curso:</b> ${findTurma[0].curso}</p>   
            <p><b>Início:</b> ${findTurma[0].inicio}</p>
            <p><b>Término:</b> ${findTurma[0].termino}</p>
            <p><b>Números de alunos:</b> ${findTurma[0].numAlunos}</p>
            <p><b>Período:</b> ${findTurma[0].periodo}</p>
            <p><b>Concluído:</b> ${findTurma[0].concluido ? "Sim" : "Não"}</p>
            </div>`;
            inputTurma.value = ""
  } else {
    gallery.innerHTML = `
        <h2 id="mensagem">Turma não encontrada</h2>`;
        inputTurma.value = ""
  }
  
};



const gerarCards = () => {
  gallery.innerHTML = "";

  for (let e of turmas) {
    htmlCode += `
        <div class="boxCourses">
            <h2>${e.turma}</h2>
            <p><b>Curso:</b> ${e.curso}</p>   
            <p><b>Início:</b> ${e.inicio}</p>
            <p><b>Término:</b> ${e.termino}</p>
            <p><b>Números de alunos:</b> ${e.numAlunos}</p>
            <p><b>Período:</b> ${e.periodo}</p>
            <p><b>Concluído:</b> ${e.concluido ? "Sim" : "Não"}</p>
        </div>`;
  }

  document.getElementById("allBoxes").innerHTML = htmlCode;
  
};


gerarCards();
//********************************************************************************************************/
// htmlCode +=
//Função para buscar um estudante e retornar o objeto do mesmo se for encontrado



const buscarEstudante = (event) => {
  const inputName = getElementById("input-name").value.toLowerCase();
  console.log(inputName)
  const RelatorioAluno = getElementById("boxFinanceiro3");
  const respostaAluno = getElementById("boxFinanceiro4"); 
  // for (i in estudantes) {
  //   if (estudantes[i].estudante.toLowerCase() === nomeEstudante.toLowerCase()) {
  //     return estudantes[i];
  //   }
  // }
  // return `Aluno não encontrado`;

  if(inputName.value === ""){
    respostaAluno.innerHTML = `<div id="boxFinanceiro4">
    <p>Campo inválido</p>
    </div>`   
}

  const findEstudante = estudantes.filter((e) =>
    e.turma.toLowerCase().includes(inputName.value.toLowerCase()))
    console.log(findEstudante)
};

//********************************************************************************************************/

//Fazer um relatorio utilizando a função BuscarEstudante de cada estudante
const EncontrarAluno = (nomeEstudante) => {
  let aluno = buscarEstudante(nomeEstudante);

  return `Aluno: ${aluno.estudante} \nTurma: ${aluno.turma} \nCurso: ${aluno.curso} \nValor Total: R$ ${aluno.valor} \nValor Parcela: R$ ${aluno.parcelas} \nNº Parcelas: ${aluno.nParcelas}`;
};
// console.log(EncontrarAluno("Halle Berry"))

// ***********************************************************************************************************
//Matriculando novos alunos adicionando descontos se tiver
const matricular = (novoEstudante, novoCurso, novaTurma, nParcelas) => {
  let valorCurso = buscarCurso(novoCurso);
  let valorTotal = 0;
  let valorPorParcela = 0;
  let desconto;

  if (nParcelas > 0 && nParcelas <= 2) {
    desconto = true;
    valorTotal = valorCurso.valor - valorCurso.valor * 0.2;
    valorPorParcela = valorTotal / nParcelas;
  } else {
    desconto = false;
    valorTotal = valorCurso.valor;
    valorPorParcela = valorTotal / nParcelas;
  }

  estudantes.push({
    estudante: novoEstudante,
    turma: novaTurma,
    curso: novoCurso,
    valor: valorCurso.valor,
    nParcelas: nParcelas,
    desconto: desconto,
    parcelas: valorPorParcela.toFixed(2),
  });
  return `Aluno(a) Matriculado(a)  \nNome: ${novoEstudante}  \nCurso: ${novoCurso}  \nTurma: ${novaTurma} `;
};
// console.log(matricular("Vinicius", "JavaScript", "Sibyla", 2))
// console.log(matricular("Joyce", "HTML e CSS", "Zhenyi", 2   ))
// console.log(estudantes)

//********************************************************************************************************/

//
