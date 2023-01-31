const cursos = [
  {
    curso: "HTML e CSS",
    descricao:
      "Aprenda HTML5 e CSS3 com a melhor plataforma de ensino do país!",
    duracao: "1 mês",
    valor: 500,
  },
  {
    curso: "Javascript",
    descricao: "Aprenda Javascript com a melhor plataforma de ensino do país!",
    duracao: "2 meses",
    valor: 900,
  },
  {
    curso: "APIs REST",
    descricao: "Aprenda APIs REST com a melhor plataforma de ensino do país!",
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
    numeroAlunos: 150,
    periodo: "noturno",
    concluido: false,
  },
  {
    turma: "Sibyla",
    curso: "Javascript",
    inicio: "30/10/2022",
    termino: "30/12/2022",
    numeroAlunos: 200,
    periodo: "integral",
    concluido: false,
  },
  {
    turma: "Curie",
    curso: "HTML e CSS",
    inicio: "15/09/2022",
    termino: "15/10/2022",
    numeroAlunos: 180,
    periodo: "noturno",
    concluido: true,
  },
  {
    turma: "Zhenyi",
    curso: "HTML e CSS",
    inicio: "01/12/2022",
    termino: "01/01/2023",
    numeroAlunos: 180,
    periodo: "integral",
    concluido: false,
  },
  {
    turma: "Clarke",
    curso: "HTML e CSS",
    inicio: "04/07/2022",
    termino: "04/08/2022",
    numeroAlunos: 200,
    periodo: "noturno",
    concluido: true,
  },
  {
    turma: "Blackwell",
    curso: "APIsRest",
    inicio: "20/03/2022",
    termino: "20/09/2022",
    numeroAlunos: 100,
    periodo: "integral",
    concluido: true,
  },
  {
    turma: "Elion",
    curso: "APIsRest",
    inicio: "12/01/2022",
    termino: "12/07/2022",
    numeroAlunos: 200,
    periodo: "noturno",
    concluido: true,
  },
  {
    turma: "Burnell",
    curso: "APIsRest",
    inicio: "18/10/2022",
    termino: "18/04/2023",
    numeroAlunos: 90,
    periodo: "integral",
    concluido: false,
  },
];

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
    curso: "HTML e CSS",
    valor: 500,
    nParcelas: 1,
    desconto: true,
    parcelas: 500,
  },
];

const carrinhoCursos = [];

const parcelarCurso = (arr, nParcelas) => {
  let descontoCursos = 0;
  const descontoAVista = 0.2;

  let total = 0;
  for (let item of arr) {
    total += item.valor;
  }

  switch (arr.length) {
    case 3:
      descontoCursos = 0.15;
      break;
    case 2:
      descontoCursos = 0.1;
      break;
    default:
      descontoCursos = 0;
  }

  total -= total * descontoCursos;

  if (nParcelas <= 2) {
    total -= total * descontoAVista;

    document.getElementById("curso_valor").innerHTML = `
      <p><b>Valor</b></p>
      <p class="text">O valor do pagamento é de <b>R$ ${total.toFixed(
        2
      )}</b> com 20% desconto, parcelado em ${nParcelas}x de <b>R$ ${(
      total / nParcelas
    ).toFixed(2)}</b></p>
      `;
  } else {
    document.getElementById("curso_valor").innerHTML = `
    <p><b>Valor</b></p>
    <p class="text">O valor do pagamento é de <b>R$ ${total.toFixed(
      2
    )}</b>, parcelado em ${nParcelas}x de <b>R$ ${(total / nParcelas).toFixed(
      2
    )}</b></p>`;
  }
};

const buscaCurso = document.getElementById("buscaCurso");

const addCarrinhoCurso = (curso) => {
  const cursoBuscado = buscarCurso(curso);

  if (cursoBuscado === undefined) {
    sweetAlert("Curso não encontrado!", "error");
    return;
  }

  for (let item of carrinhoCursos) {
    if (item.curso === curso) {
      sweetAlert("Curso já adicionado!", "warning");
      return;
    }
  }

  carrinhoCursos.push(cursoBuscado);

  buscaCurso.innerHTML += `
    <span class="show_curso">
      <p>${curso === "HTML e CSS" ? "HTML" : curso}</p>
      <img src="../assets/cancel.png" alt="Cancel" onclick="removeCarrinhoCurso(this.parentElement, this.previousElementSibling.innerHTML)">
    </span>
  `;

  buscaCurso.style.borderColor = "black";
};

const removeCarrinhoCurso = (element, curso) => {
  if (curso === "HTML") curso = "HTML e CSS";
  const cursoBuscado = buscarCurso(curso);

  carrinhoCursos.pop(cursoBuscado);
  element.remove();

  if (carrinhoCursos.length === 0) {
    buscaCurso.style.borderColor = "transparent";
  }
};

const mostrarCursos = () => {
  document.getElementById("lista_cursos").style.display = "flex";
  document.getElementById("lista_cursos_body").innerHTML = "";

  for (let value of cursos) {
    document.getElementById("lista_cursos_body").innerHTML += `
      <div class="top">
        <p>Curso</p>
        <p>Duração</p>
        <p>Valor</p>
        <p>Opção</p>
      </div>
      <div class="body">
        <p>${value.curso}</p>
        <p>${value.duracao} </p>
        <p>R$ ${value.valor}</p>
        <p><button onclick="addCarrinhoCurso('${value.curso}')">Adicionar</button></p>
      </div>
    `;
  }
};

const esconderCursos = () => {
  document.getElementById("lista_cursos").style.display = "none";
};

const buscarCurso = (nome) => {
  return cursos.find((e) => e.curso.toLowerCase() === nome.toLowerCase());
};

const buscarEstudante = (nome) => {
  const query = estudantes.filter(
    (e) => e.estudante.toLowerCase() === nome.toLowerCase()
  );

  if (query.length > 0) {
    return query;
  }
};

const buscarTurma = (nome) => {
  if (nome.length === 0) {
    return turmas;
  }

  const query = turmas.filter((e) =>
    e.turma.toLowerCase().includes(nome.toLowerCase())
  );

  if (query.length > 0) {
    return query;
  }
};

const matricular = (nome, curso, turma, nParcelas) => {
  const cursoBuscado = buscarCurso(curso);
  const turmaBuscada = buscarTurma(turma);
  document.getElementById("matricula-msg").style.visibility = "hidden";

  if (cursoBuscado === undefined) {
    sweetAlert("Curso não encontrado!", "error");
    return;
  }

  if (turmaBuscada === undefined) {
    sweetAlert("Turma não encontrada!", "error");
    return;
  }

  document.getElementById("matricula-msg").style.visibility = "visible";
  const valorCurso = cursoBuscado.valor;
  let valorTotal = 0;

  nParcelas > 0 && nParcelas <= 2
    ? (valorTotal = valorCurso - valorCurso * 0.2)
    : (valorTotal = valorCurso);

  const novoAluno = {
    estudante: nome,
    turma: turma,
    curso: curso,
    valor: valorCurso,
    nParcelas: nParcelas,
    desconto: nParcelas <= 2 ? true : false,
    parcelas: valorTotal / nParcelas,
  };

  estudantes.push(novoAluno);

  document.getElementById("matricula-msg-text").innerHTML = `
    <p><span>Nome:</span> ${nome}</p>
    <p><span>Curso:</span> ${curso}</p>
    <p><span>Turma:</span> ${turma}</p>
`;

  document.getElementById("form").reset();
};

const reloatorioMsg = document.getElementById("relatorio-msg");

const relatorioEstudante = (nome) => {
  const estudanteBuscado = buscarEstudante(nome);
  document.getElementById("buscaAluno").value = "";

  if (estudanteBuscado === undefined) {
    reloatorioMsg.innerHTML = "";
    sweetAlert("Aluno não encontrado!", "error");
    return;
  }

  for (let value of estudanteBuscado) {
    reloatorioMsg.innerHTML = `
      <p><span>Aluno:</span> ${value.estudante} </p>
      <p><span>Turma:</span> ${value.turma} </p>
      <p><span>Curso:</span> ${value.curso} </p>
      <p><span>Valor Total:</span> R$ ${value.valor} </p>
      <p><span>Valor Parcela:</span> R$ ${value.parcelas} </p>
      <p><span>N° Parcelas:</span> ${value.nParcelas} </p>
    `;
  }
};

let htmlCode = ``;
const card = document.getElementById("cards");

const gridCards = (nome) => {
  const turmaBuscada = buscarTurma(nome);
  document.getElementById("buscaTurma").value = "";

  if (turmaBuscada === undefined) {
    sweetAlert("Turma não encontrada!", "error");
    return;
  }

  htmlCode = ``;

  for (let value of turmaBuscada) {
    htmlCode += `
    <div class="card">
      <h4 class="title">${value.turma}</h4>
      <div class="body">
        <p><span>Curso:</span> ${value.curso} </p>
        <p><span>Início:</span> ${value.inicio} </p>
        <p><span>Término:</span> ${value.termino} </p>
        <p><span>Número de Alunos:</span> ${value.numeroAlunos} </p>
        <p><span>Período:</span> ${value.periodo} </p>
        <p><span>Concluído:</span> ${value.concluido ? "Sim" : "Não"} </p>
      </div>
    </div>
  `;
  }

  card.innerHTML = htmlCode;
};

for (let value of turmas) {
  card.innerHTML += `
  <div class="card">
    <h4 class="title">${value.turma}</h4>
    <div class="body">
      <p><span>Curso:</span> ${value.curso} </p>
      <p><span>Início:</span> ${value.inicio} </p>
      <p><span>Término:</span> ${value.termino} </p>
      <p><span>Número de Alunos:</span> ${value.numeroAlunos} </p>
      <p><span>Período:</span> ${value.periodo} </p>
      <p><span>Concluído:</span> ${value.concluido ? "Sim" : "Não"} </p>
    </div>
  </div>
`;
}

const sweetAlert = (msg, icon) => {
  swal({
    title: msg,
    icon: icon,
  });
};

//Menu ativo Area ADM
const btns = document.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");

    document.getElementById(
      current[0].innerHTML.toLowerCase().replace(" ", "")
    ).style.display = "none";
    current[0].className = current[0].className.replace(" active", "");

    this.className += " active";
    document.getElementById(
      this.innerHTML.toLowerCase().replace(" ", "")
    ).style.display = "block";
  });
}