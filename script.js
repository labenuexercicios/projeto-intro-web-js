const curso = [
  {
    curso: `HTML e CSS`,

    descricao: `HTML: esqueleto do site, CSS Parte visual do site`,

    duracao: `1 meses`,

    valor: 500,
  },

  {
    curso: `JavaScript`,

    descricao: `parte que contem a interação do site`,

    duracao: `2 meses`,

    valor: 900,
  },
  {
    curso: `APIs REST`,

    descricao: `Interação de APIs REST`,

    duracao: `6 meses`,

    valor: 2000,
  },
];

const turma = [
  {
    turma: `Curie`,

    curso: `HTML e CSS`,

    inicio: `15/09/2022`,

    termino: `15/10/2022`,

    numeroDeAlunos: 180,

    Periodo: `Noturno`,

    concluido: true,
  },
  {
    turma: `Zhenyi`,

    curso: `HTML e CSS`,

    inicio: `01/11/2022`,

    termino: `01/01/2023`,

    numeroDeAlunos: 80,

    Periodo: `Integral`,

    concluido: false,
  },
  {
    turma: `Clarke`,

    curso: `HTML e CSS`,

    inicio: ` 04/07/2022`,

    termino: `04/09/2022`,

    numeroDeAlunos: 200,

    Periodo: `Noturno`,

    concluido: true,
  },
  {
    turma: `Hipátia`,

    curso: `JavaScript`,

    inicio: `30/11/2022`,

    termino: `30/01/2023`,

    numeroDeAlunos: 150,

    Periodo: `Noturno`,

    concluido: true,
  },
  {
    turma: `Sibyla`,

    curso: `JavaScript`,

    inicio: `30/10/2022`,

    termino: `30/12/2022`,

    numeroDeAlunos: 200,

    Periodo: `Integral`,

    concluido: false,
  },
  {
    turma: `Blackwell`,

    curso: `APIs REST`,

    inicio: `20/03/2022`,

    termino: `20/06/2022`,

    numeroDeAlunos: 100,

    Periodo: `Integral`,

    concluido: true,
  },
  {
    turma: `Elion`,

    curso: `APIs REST`,

    inicio: `01/04/2023`,

    termino: `12/06/2022`,

    numeroDeAlunos: 200,

    Periodo: `Noturno`,

    concluido: true,
  },
  {
    turma: `Burnell`,

    curso: `APIs REST`,

    inicio: `18/10/2022`,

    termino: `18/04/2023`,

    numeroDeAlunos: 90,

    Periodo: `Integral`,

    concluido: false,
  },
];

const estudante = [
  {
    estudante: `Ruan`,

    turma: `Zhenyi`,

    curso: `HTML e CSS`,

    valor: 500,

    numeroDeParcelas: 1,

    desconto: true,

    parcelas: 500,
  },
  {
    estudante: `Italo`,

    turma: `Hipátia`,

    curso: `JavaScript`,

    valor: 900,

    numeroDeParcelas: 9,

    desconto: true,

    parcelas: 100,
  },
  {
    estudante: `Samuel`,

    turma: `Burnell`,

    curso: `APIs REST`,

    valor: 2000,

    numeroDeParcelas: 1,

    desconto: true,

    parcelas: 2000,
  },
];
/* let carrinhoCursos = [];

treCursos =
Number(curso[0].valor) + Number(curso[1].valor) + Number(curso[2].valor);
console.log(treCursos);
doisCursos = Number(curso[2].valor) + Number(curso[2].valor);
umCurso = Number(curso[0].valor); */

//const carrinhoCursos = [500, 900, 2000];
const carrinhoCursos = [];

const parcelarCurso = (carrinhoCurso, nParcelas) => {
  let valorTotal = 0;
  let desconto = 0;

  if (carrinhoCurso.length > 1) {
    switch (carrinhoCursos.length) {
      case 3:
        desconto = 0.85;

        break;

      case 2:
        desconto = 0.9;

        break;
      default:
        break;
    }

    for (i of carrinhoCursos) {
      valorTotal = valorTotal + i;
    }

    valorTotal = valorTotal * desconto;
  } else {
    valorTotal = carrinhoCursos[0];
  }

  if (nParcelas <= 2) {
    valorTotal = valorTotal * 0.8;

    console.log(
      `O valor do pagamento é de R$ ${valorTotal} com 20% de desconto, parcelado em ${nParcelas} de R$ ${
        valorTotal / nParcelas
      }`
    );
  } else {
    console.log(
      `O valor do pagamento é de R$ ${valorTotal}, parcelado em ${nParcelas} de R$ ${
        (valorTotal / nParcelas).toFixed(2)
      }`
    );
  }
};

function buscarCurso(nomeCurso) {
  const resultado = curso.find((i) => i.curso.toLowerCase() === nomeCurso.toLowerCase());

  return resultado ? resultado : "Turma não encontrada";
  }

console.log(buscarCurso("JavaScript"))

const buscarTurma = (buscTurma) => {
  const turmasResultado = turma.filter((i) => i.turma.toLowerCase() === buscTurma.toLowerCase());
  return turmasResultado.length > 0 ? turmasResultado : "turma não encontrada";
  };
console.log(buscarTurma("hipátia"));



const buscarEstudante = (buscaEstudante) => {
  const resultado = estudante.find((i) => i.estudante.toLowerCase() === buscaEstudante.toLowerCase());

  return resultado ? resultado : "estudante não encontrada";
  
};
console.log(buscarEstudante("ruan"))

const matricular = (novoEstudante, novoCurso, novoTurma, nParcelas) => {
  const valorCurso = buscarCurso(novoCurso);
  let valorPorParcela = valorCurso.valor / nParcelas;
  let desconto = nParcelas <= 2 ? true : false;

  let newEstudante = {
    estudante: novoEstudante,
    turma: novoTurma,
    curso: novoCurso,
    valor: valorCurso.valor,
    numeroDeParcelas: nParcelas,
    desconto: desconto,
    parcelas: valorPorParcela,
  };
  /*   estudante.push(newEstudante);
    console.log(`Aluno matriculado
    nome:${novoEstudante}
    curso: ${novoCurso}
    turma: ${novoTurma}`);
    console.log; */
};
//console.log(carrinhoCursos);
matricular("marcos", "JavaScript", "Hipátia", 3);

const adicionarCarrinho = (buscarCurso) => {
  return carrinhoCursos.push(buscarCurso.valor);
};

const relatorioEstudante = (buscaEstudante) => {
  const resultado = estudante.find((i) => i.estudante.toLowerCase() === buscaEstudante.toLowerCase());

  return resultado ? resultado : "estudante não encontrada";
};
console.log(relatorioEstudante("Ruan"))
console.log(buscarEstudante("Ruan"));

adicionarCarrinho(buscarCurso("JavaScript"));
adicionarCarrinho(buscarCurso("HTML e CSS"));
adicionarCarrinho(buscarCurso("APIs REST"));

parcelarCurso(carrinhoCursos, 3);

//"JavaScript","HTML e CSS","APIs REST"
