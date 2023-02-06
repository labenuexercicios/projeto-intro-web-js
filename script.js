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

const estudantes = [
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

const turma2 = [
  {
    curso: `HTML e CSS`,
    turma: `Curie`,
    turma: `Zhenyi`,
    turma: `Clarke`,
  },
  {
    curso: `JavaScript`,
    turma: `Hipátia`,
    turma: `Sibyla`,
    turma: `Blackwell`,
  },
  {
    curso: `APIs REST`,
    turma: `Elion`,
    turma: `Burnell`,
    turma: `Blackwell`,
  },
];

const parcelaDiv = document.getElementById("relatorio-parcela");

function buscarCurso(nomeCurso) {
  const resultado = curso.find(
    (i) => i.curso.toLowerCase() === nomeCurso.toLowerCase()
  );
  return resultado ? resultado : "Turma não encontrada";
}

const adicionaDiv = document.getElementById("organizar1");

function adicionaNaoEncontrado() {
  const adicionaDiv = document.getElementById("nTurma");

  const divFigure = document.createElement("h2");

  divFigure.setAttribute("class", "nEcontrada");
  adicionaDiv.appendChild(divFigure);
  divFigure.innerHTML = `
          Turma não encontrada
          `;
}
const adicionaCurso = document.getElementById("organizar1");

const buscarTurma = () => {
  const inputTurma = document.getElementById("input-buscar-curso");
  if (inputTurma.value === "") {
    adicionaItem();
    return;
  }
  const turmasResultado = turma.filter((i) =>
    i.turma.toLowerCase().includes(inputTurma.value.toLowerCase())
  );

  inputTurma.value = "";
  adicionaCurso.innerHTML = "";
  if (turmasResultado.length > 0) {
    adicionaCurso.innerHTML = `<div class="figTurmas">
            <h2>${turmasResultado[0].turma}</h2>
            <p><b>Curso:</b> ${turmasResultado[0].curso}</p>
            <p><b>Inicio: </b>${turmasResultado[0].inicio}</p>
            <p><b>Termino:</b> ${turmasResultado[0].termino}</p>
            <p><b>Numero de Alunos: </b>${
              turmasResultado[0].numeroDeAlunos
            } </p>
            <p><b>Periodo:</b> ${turmasResultado[0].Periodo}</p>
            <p><b>Concluido:</b> ${
              turmasResultado[0].concluido ? "Sim" : "Não"
            }</p>
            </div>
            `;
  } else {
    adicionaCurso.innerHTML = `<h2 class="nEncontrada">Turma não encontrada</2>`;
  }
};

const adicionaDiv2 = document.getElementById("cursoMatricula");

function adicionaItem() {
  adicionaDiv.innerHTML = "";

  for (i = 0; i < turma.length; i++) {
    adicionaDiv.innerHTML += `<div class="figTurmas">
            <h2>${turma[i].turma}</h2>
            <p><b>Curso:</b> ${turma[i].curso}</p>
            <p><b>Inicio: </b>${turma[i].inicio}</p>
            <p><b>Termino:</b> ${turma[i].termino}</p>
            <p><b>Numero de Alunos: </b>${turma[i].numeroDeAlunos} </p>
            <p><b>Periodo:</b> ${turma[i].Periodo}</p>
            <p><b>Concluido:</b> ${turma[i].concluido ? "Sim" : "Não"}</p>
            </div>
            `;
  }
}

const adicionaMatricula = document.getElementById("matricula");
const inputNome = document.getElementById("nomeMatricula");

const inputCurso = document.getElementById("cursoMatricula");

const inputTurma = document.getElementById("turmaMatricula");

const inputNParcelas = document.getElementById("nParcelasMatricula");

const matricula = () => {
  if (
    inputNome.value == "" ||
    inputCurso.value == "" ||
    inputTurma.value == "" ||
    inputNParcelas.value == ""
  ) {
    adicionaMatricula.innerHTML = `<h2>Preencha todas as informações do formulario </h2>`;
  } else {
    adicionaMatricula.innerHTML = `<div class="confirmaMatricula">
    <h2>
  <b> Aluno matriculado </b
><img  class="img-matricula" src="./midia/area adm/Vector.png" alt="" />
</h2></div>
<div class="confirmaMatricula">
<p>Aluno Matriculado</p>
<p>Nome: ${inputNome.value}</p>
<p>Curso: ${inputCurso.value}</p>
<p>Turma: ${inputTurma.value}</p> 
</div>
<button type="submit" id="submitMatricula" onclick="zerarMatricula()">Nova matricula?</button>`;
  }
};

const zerarMatricula = () => {
  inputCurso.value = "";
  inputNParcelas.value = "";
  inputNome.value = "";
  inputTurma.value = "";

};

const buscarEstudante = (buscaEstudante) => {
  const resultado = estudantes.find(
    (i) => i.estudante.toLowerCase() === buscaEstudante.toLowerCase()
  );
  return resultado ? resultado : "estudante não encontrada";
};

const relatorioDiv = document.getElementById("relatorio");

const relatorioEstudante = () => {
  const inputRelatorio = document.getElementById("nome-relatorio");

  if (inputRelatorio.value === "") {
    relatorioDiv.innerHTML = "";
    return;
  }

  const resultadoRelatorio = estudantes.filter((i) =>
    i.estudante.toLowerCase().includes(inputRelatorio.value.toLowerCase())
    );
    inputRelatorio.value = "";
    relatorioDiv.innerHTML = "";
  if (resultadoRelatorio.length > 0) {
    relatorioDiv.innerHTML = `<div id="relatorio "classe="relatorioS">
<p><b>Aluno:</b> ${resultadoRelatorio[0].estudante}</p>
  <p><b>Turma: </b>${resultadoRelatorio[0].turma}</p>
  <p><b>Curso:</b> ${resultadoRelatorio[0].curso}</p>
  <p><b>Valor total: </b>${resultadoRelatorio[0].valor} </p>
  <p><b>Valor parcela:</b> ${resultadoRelatorio[0].parcelas}</p>
  <p><b>N.º parcelas:</b> ${resultadoRelatorio[0].numeroDeParcelas}</p>
</div>
`;
  } else {
    relatorioDiv.innerHTML = `<h2 class="nEncontrada">Aluno não encontrada</2>`;
  }
};
let carrinhoCursos = [];

const adicionarCarrinho = (nomeCurso) => {
  const curso = buscarCurso(nomeCurso);
  curso.carrinhoCursos = true;
  carrinhoCursos.push(curso.valor);
  
};

const addButao = document.getElementById("botao-add-curso");

addButao.addEventListener("click", function () {
  const carrinhoDeCompras = document.getElementById("carrinho-de-compras");
  const inputFinanceiro = document.getElementById("curso-financeiro");

  for (let i of curso) {
    if (inputFinanceiro.value.includes(i.curso)) {
      for (let i of carrinhoCursos) {
        if (carrinhoCursos.includes(buscarCurso(inputFinanceiro.value).valor)) {
         inputFinanceiro.value = ""
       } 
      }
      const itemCarrinho = document.createElement("p");
      itemCarrinho.setAttribute("onclick", "excluirCurso(this)");
      adicionarCarrinho(inputFinanceiro.value);
      itemCarrinho.innerHTML = ` ${i.curso} <img src="./midia/area adm/Vector (2).png" alt=""> Clique para remover este curso`;
      carrinhoDeCompras.appendChild(itemCarrinho);
    }
  }
  inputFinanceiro.value = "";
});

const shopCartRemove = (courseName) => {
  const index = carrinhoCursos.findIndex(
    (course) => course.curso.toLowerCase() === courseName.toLowerCase()
  );
  carrinhoCursos.splice(index, 1);
  return carrinhoCursos;
};

const excluirCurso = (curso) => {
  for (let i of carrinhoCursos) {
    if (curso.outerHTML.includes(i.curso)) {
      i.carrinhoCursos = false;
      shopCartRemove(i.curso);
    }
  }
  curso.remove();
};

const valor = () => {
  const valorcarrinho = "";
  for (let i = 0; i < carrinhoCursos.length; i++) {
    valorcarrinho = carrinhoCursos[i].valor;
  }
  return valorcarrinho;
};

const parcelarCurso = () => {
  const nnParcelas = document.getElementById("nParcelas").value * 1;

  let valorTotal = 0;
  let desconto = 0;

  if (carrinhoCursos.length > 1) {
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
    for (let i of carrinhoCursos) {
      valorTotal = valorTotal + i;
    }

    valorTotal = valorTotal * desconto;
  } else {
    valorTotal = carrinhoCursos[0];
  }

  if (nnParcelas <= 2) {
    valorTotal = valorTotal * 0.8;

    parcelaDiv.innerHTML = `O valor do pagamento é de R$ ${valorTotal} com 20% de desconto, parcelado em ${nnParcelas} de R$ ${(
      valorTotal / nnParcelas
    ).toFixed(2)}`;
  } else {
    parcelaDiv.innerHTML = `O valor do pagamento é de R$ ${valorTotal}, parcelado em ${nnParcelas} de R$ ${(
      valorTotal / nnParcelas
    ).toFixed(2)}`;
  }
};
