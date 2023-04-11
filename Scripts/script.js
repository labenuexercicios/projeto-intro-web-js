const cursos = [
  {
    curso: "HTML e CSS",
    descricao:
      "Aprenda HTML5 e CSS3 com a melhor plataforma de ensino do país!",
    duracao: "1 mês",
    valor: 500,
  },{
    curso: "Javascript",
    descricao: "Aprenda Javascript com a melhor plataforma de ensino do país!",
    duracao: "2 meses",
    valor: 900,
  },{
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
  },{
    turma: "Sibyla",
    curso: "Javascript",
    inicio: "30/10/2022",
    termino: "30/12/2022",
    numeroAlunos: 200,
    periodo: "integral",
    concluido: false,
  },{
    turma: "Curie",
    curso: "HTML e CSS",
    inicio: "15/09/2022",
    termino: "15/10/2022",
    numeroAlunos: 180,
    periodo: "noturno",
    concluido: true,
  },{
    turma: "Zhenyi",
    curso: "HTML e CSS",
    inicio: "01/12/2022",
    termino: "01/01/2023",
    numeroAlunos: 180,
    periodo: "integral",
    concluido: false,
  },{
    turma: "Clarke",
    curso: "HTML e CSS",
    inicio: "04/07/2022",
    termino: "04/08/2022",
    numeroAlunos: 200,
    periodo: "noturno",
    concluido: true,
  },{
    turma: "Blackwell",
    curso: "APIsRest",
    inicio: "20/03/2022",
    termino: "20/09/2022",
    numeroAlunos: 100,
    periodo: "integral",
    concluido: true,
  },{
    turma: "Elion",
    curso: "APIsRest",
    inicio: "12/01/2022",
    termino: "12/07/2022",
    numeroAlunos: 200,
    periodo: "noturno",
    concluido: true,
  },{
    turma: "Burnell",
    curso: "APIsRest",
    inicio: "18/10/2022",
    termino: "18/04/2023",
    numeroAlunos: 90,
    periodo: "integral",
    concluido: false,
  },
];
let estudantes = [{
    estudante: "Chris Evans",
    turma: "Hipátia",
    curso: "JavaScript",
    valor: 900,
    nParcelas: 9,
    desconto: false,
    parcelas: 100,
  },{
    estudante: "Halle Berry",
    turma: "Burnell",
    curso: "APIsRest",
    valor: 2000,
    nParcelas: 4,
    desconto: false,
    parcelas: 500,
  },{
    estudante: "Lashana Lynch",
    turma: "Zhenyi",
    curso: "HTML e CSS",
    valor: 500,
    nParcelas: 1,
    desconto: true,
    parcelas: 500,
  },
];

const Carcursos = [];
let htmlCD = ``;

if (localStorage.getItem("cursos") === null) localStorage.setItem("cursos", JSON.stringify(cursos));
if (localStorage.getItem("turmas") === null) localStorage.setItem("turmas", JSON.stringify(turmas));

if (localStorage.getItem("estudantes") === null) {
  localStorage.setItem("estudantes", JSON.stringify(estudantes));
} else {
  estudantes = JSON.parse(localStorage.getItem("estudantes"));
}

const botões = document.getElementsByClassName("botao");
const procurarTurma = document.getElementById("procurarTurma");
const galeria = document.getElementById("galeria");
const procurarCurso = document.getElementById("procurarCurso");
const cursoValor = document.getElementById("curso_valor");
const listaCurso = document.getElementById("lista_cursos");
const cursoBody = document.getElementById("lista_cursos_body");
const matriculaMsg = document.getElementById("matricula-msg");
const matriculaMsgText = document.getElementById("matricula-msg-text");
const form = document.getElementById("form");
const procurarAluno = document.getElementById("procurarAluno");
const relatorioMsg = document.getElementById("relatorio-msg");

const procuraTurma = (nome) => {
  if (nome.length === 0) {
    return turmas;
  }
  const querys = turmas.filter((e) =>
    e.turma.toLowerCase().includes(nome.toLowerCase())
  );
  if (querys.length > 0) return querys;
};
const procuraCurso = (nome) => {
  return cursos.find((e) => e.curso.toLowerCase() === nome.toLowerCase());
};
const procuraEstudante = (nome) => {
  return estudantes.filter(
    (e) => e.estudante.toLowerCase() === nome.toLowerCase()
  );
};
const classCards = (nome) => {
  const turmaBuscada = procuraTurma(nome);
  procurarTurma.value = "";
  if (turmaBuscada === undefined) {
    alerta("Turma não encontrada!", "error");
    return;
  }
  htmlCD = ``;
  for (let value of turmaBuscada) {
    htmlCD += `
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
  galeria.innerHTML = htmlCD;
};

for (let value of turmas) {
  galeria.innerHTML += `
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
const matriculandoAluno = (nome, curso, turma, nParcelas) => {
  const estudanteBuscado = procuraEstudante(nome);
  const cursoBuscado = procuraCurso(curso);
  const turmaBuscada = procuraTurma(turma);
  matriculaMsg.style.visibility = "hidden";
  if (cursoBuscado === undefined) {
    alerta("Curso não encontrado!", "error");
    return;
  }
  if (turmaBuscada === undefined) {
    alerta("Turma não encontrada!", "error");
    return;
  }
  if (estudanteBuscado.length > 0) {
    alerta("Aluno já cadastrado!", "warning");
    return;
  }
  matriculaMsg.style.visibility = "visible";
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
  localStorage.setItem("estudantes", JSON.stringify(estudantes));
  matriculaMsgText.innerHTML = `
    <p><span>Nome:</span> ${nome}</p>
    <p><span>Curso:</span> ${curso}</p>
    <p><span>Turma:</span> ${turma}</p>
`;
  form.reset();
};
const mostrarCursos = () => {
  listaCurso.style.display = "flex";
  cursoBody.innerHTML = "";
  for (let value of cursos) {
    cursoBody.innerHTML += `
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
        <p><button onclick="addCarcurso('${value.curso}')">Adicionar</button></p>
      </div>
    `;
  }
};
const hideCurso = () => {
  listaCurso.style.display = "none";
};
const addCarcurso = (curso) => {
  const cursoBuscado = procuraCurso(curso);
  if (cursoBuscado === undefined) {
    alerta("Curso não encontrado!", "error");
    return;
  }
  for (let item of Carcursos) {
    if (item.curso === curso) {
      alerta("Curso já adicionado!", "warning");
      return;
    }
  }
  Carcursos.push(cursoBuscado);
  procurarCurso.innerHTML += `
    <span class="mostrar_curso">
      <p>${curso === "HTML e CSS" ? "HTML" : curso}</p>
      <img src="../assets/cancel.png" alt="Cancel" onclick="removeCarcurso(this.parentElement, this.previousElementSibling.innerHTML)">
    </span>
  `;
  procurarCurso.style.borderColor = "black";
};
const removeCarcurso = (element, curso) => {
  if (curso === "HTML") curso = "HTML e CSS";
  const cursoBuscado = procuraCurso(curso);
  Carcursos.pop(cursoBuscado);
  element.remove();
  if (Carcursos.length === 0) {
    procurarCurso.style.borderColor = "transparent";
  }
};
const parcelarCurso = (arr, nParcelas) => {
  nParcelas = parseInt(nParcelas);
  if (arr.length === 0) {
    alerta("Adicione um curso para prosseguir!", "error");
    return;
  } else if (isNaN(nParcelas)) {
    alerta("Adicione um valor válido!", "error");
    return;
  } else if (nParcelas === 0) {
    alerta("Adicione um valor acima de 0!", "error");
    return;
  }
  let descontoCursos = 0;
  const descontoAVista = 0.2;
  let total = 0;
  for (let item of arr) total += item.valor;
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
    cursoValor.innerHTML = `
      <p><b>Valor</b></p>
      <p class="text">O valor do pagamento é de <b>R$ ${total
        .toFixed(2)
        .replace(
          ".",
          ","
        )}</b> com 20% desconto, parcelado em ${nParcelas}x de <b>R$ ${(
      total / nParcelas
    )
      .toFixed(2)
      .replace(".", ",")}</b></p>
      `;
  } else {
    cursoValor.innerHTML = `
    <p><b>Valor</b></p>
    <p class="text">O valor do pagamento é de <b>R$ ${total.toFixed(
      2
    )}</b>, parcelado em ${nParcelas}x de <b>R$ ${(total / nParcelas).toFixed(
      2
    )}</b></p>`;
  }
};
const relatorioEstudante = (nome) => {
  const estudanteBuscado = procuraEstudante(nome);
  procurarAluno.value = "";
  if (estudanteBuscado.length === 0) {
    relatorioMsg.innerHTML = "";
    alerta("Aluno não encontrado!", "error");
    return;
  }
  for (let value of estudanteBuscado) {
    relatorioMsg.innerHTML = `
      <p><span>Aluno:</span> ${value.estudante} </p>
      <p><span>Turma:</span> ${value.turma} </p>
      <p><span>Curso:</span> ${value.curso} </p>
      <p><span>Valor Total:</span> R$ ${value.valor} </p>
      <p><span>Valor Parcela:</span> R$ ${value.parcelas} </p>
      <p><span>N° Parcelas:</span> ${value.nParcelas} </p>
    `;
  }
};
const alerta = (msg, icon) => {
  swal({
    title: msg,
    icon: icon,
  });
};
const disparo = (event, element) => {
  if (event.key === "Enter") {
    if (element === procurarTurma) classCards(element.value);
    else if (element === procurarAluno) relatorioEstudante(element.value);
  }
};
for (let i = 0; i < botões.length; i++) {
  botões[i].addEventListener("click", function () {
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