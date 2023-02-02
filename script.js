let turmas = [
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
    inicio: "30/10/2022",
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
    numeroDeAlunos: 200,
    periodo: "noturno",
    concluida: true
  },
  {
    turma: "Burnell",
    curso: "APIsRest",
    inicio: "18/10/2022",
    termino: "18/04/2023",
    numeroDeAlunos: 90,
    periodo: "integral",
    concluida: false
  }
];

let cursos = [
  {
    curso: "HTML e CSS",
    descricao: "",
    duracao: "1 mes",
    valor: 500
  },
  {
    curso: "JavaScript",
    descricao: "",
    duracao: "2 meses",
    valor: 900
  },
  {
    curso: "APIsRest",
    descricao: "",
    duracao: "6 meses",
    valor: 2000
  }
];

let estudantes = [
  //   {
  //     estudante: "Chris Evans",
  //     turma: "Hipátia",
  //     curso: "JavaScript",
  //     valor: "100",
  //     numeroDeParcelas: 9,
  //     desconto: false,
  //     valorDaParcela: 9
  //   },
  //   {
  //     estudante: "Halle Berry",
  //     turma: "Burnell",
  //     curso: "APIsRest",
  //     valor: "500",
  //     numeroDeParcelas: 4,
  //     desconto: false,
  //     valorDaParcela: 4
  //   },
  //   {
  //     estudante: "Lashana Lynch",
  //     turma: "Zhenyi",
  //     curso: " HTML e CSS",
  //     valor: "500",
  //     numeroDeParcelas: 1,
  //     desconto: true,
  //     valorDaParcela: 1
  //   }
];

// function parcelarCurso(estudante) {
//   let desconto = estudante.desconto;
//   let mensagemDesconto = "Foi concedido desconto de 20%";

//   let valorTotal = desconto ? estudante.valor * 0.8 : estudante.valor;
//   let valorPorParcela = valorTotal / estudante.numeroDeParcelas;

//   let mensagem = `O curso ${
//     estudante.curso
//   } ficou no valor total de R$ ${valorTotal}. Em ${
//     estudante.numeroDeParcelas
//   }x de ${valorPorParcela} reais. ${desconto ? mensagemDesconto : ""}`;

//   console.log(mensagem);
// }

function parcelarCurso(carrinhoCursos, numeroDeParcelas) {}

function buscarCurso(nomeCurso) {
  return cursos.filter((curso) => {
    return curso.curso === nomeCurso;
  })[0];
}

function buscarTurma(nomeTurma) {
  for (let cadaTurma of turmas) {
    if (cadaTurma.turma === nomeTurma) {
      return cadaTurma;
    }
  }
}

function buscarEstudante(nomeEstudante) {
  for (let cadaEstudante of estudantes) {
    if (cadaEstudante.estudante === nomeEstudante) {
      return cadaEstudante;
    }
  }
}

function matricular(nomeDoAluno, nomeDoCurso, nomeDaTurma, numeroDeParcelas) {
  let desconto = numeroDeParcelas <= 2;
  let cursoEscolhido = buscarCurso(nomeDoCurso);

  const novoEstudante = {
    estudante: nomeDoAluno,
    turma: nomeDaTurma,
    curso: nomeDoCurso,
    valor: cursoEscolhido.valor,
    numeroDeParcelas: numeroDeParcelas,
    desconto: desconto,
    valorDaParcela: cursoEscolhido.valor / numeroDeParcelas
  };
  estudantes.push(novoEstudante);

  console.log(estudantes);
  console.log(`
Aluno Matriculado
Nome: ${nomeDoAluno}
Curso: ${nomeDoCurso}
Turma: ${nomeDaTurma}
  `);
}

matricular("Chris Evans", "JavaScript", "Hipátia", 9);
matricular("Halle Berry", "APIsRest", "Burnell", 4);
matricular("Lashana Lynch", "HTML e CSS", "Zhenyi", 1);
