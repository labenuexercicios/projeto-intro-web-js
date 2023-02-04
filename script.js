// Projeto Intro-Web

// Criar um array de objetos

const cursosOfertados = [
  {
    curso: "HTML e CSS",
    descricao:
      "HTML (Linguagem de Marcação de Hipertexto) é o código que você usa para estruturar uma página web eseu conteúdo. CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML.",
    duracao: "Tem duração de 1 mês.",
    valor: 500,
  },
  {
    curso: "JavaScript",
    descricao:
      "JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web, toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática, mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc.",
    duracao: "Tem duração de 2 meses.",
    valor: 900,
  },
  {
    curso: "APIsRest",
    descricao:
      "A API REST é uma interface que dois sistemas de computador usam para trocar informações de forma segura pela internet. A maioria das aplicações de negócios precisa se comunicar com outras aplicações internas e de terceiros para executar várias tarefas.",
    duracao: "Tem duração de 6 meses.",
    valor: 2000,
  },
];

const turmasExistentes = [
  {
    turma: "Hipátia",
    curso: "JavaScript",
    inicio: "30/11/2022",
    termino: "30/01/2023",
    numeroDeAlunos: 150,
    periodo: "Noturno",
    concluida: false,
  },
  {
    turma: "Sibyla",
    curso: "JavaScript",
    inicio: "30/10/2022",
    termino: "30/12/2022",
    numeroDeAlunos: 200,
    periodo: "Interal",
    concluida: false,
  },
  {
    turma: "Curie",
    curso: "HTML e CSS",
    inicio: "15/09/2022",
    termino: "15/10/2022",
    numeroDeAlunos: 180,
    periodo: "Noturno",
    concluida: true,
  },
  {
    turma: "Zhenyi",
    curso: "HTML e CSS",
    inicio: "01/11/2022",
    termino: "01/12/2022",
    numeroDeAlunos: 80,
    periodo: "Integral",
    concluida: false,
  },
  {
    turma: "Clarke",
    curso: "HTML e CSS",
    inicio: "04/07/2022",
    termino: "04/08/2022",
    numeroDeAlunos: 200,
    periodo: "Noturno",
    concluida: true,
  },
  {
    turma: "Blackwell",
    curso: "APIs REST",
    inicio: "20/03/2022",
    termino: "20/09/2022",
    numeroDeAlunos: 100,
    periodo: "Integral",
    concluida: true,
  },
  {
    turma: "Elion",
    curso: "APIs REST",
    inicio: "12/01/2022",
    termino: "12/07/2022",
    numeroDeAlunos: 200,
    periodo: "Noturno",
    concluida: true,
  },
  {
    turma: "Burnell",
    curso: "APIs REST",
    inicio: "18/10/2022",
    termino: "18/04/2023",
    numeroDeAlunos: 90,
    periodo: "Integral",
    concluida: false,
  },
];

const estudantesMatriculados = [
  {
    estudante: "Chris Evans",
    turma: "Hipátia",
    curso: "JavaScript",
    valor: 900,
    nParcelas: 9,
    desconto: false,
    numParcelass: 100,
  },
  {
    estudante: "Halle Berry",
    turma: "Burnell",
    curso: "APIs REST",
    valor: 2000,
    nParcelas: 4,
    desconto: false,
    numParcelass: 500,
  },
  {
    estudante: "Lashana Lynch",
    turma: "Zhenyi",
    curso: "HTML e CSS",
    valor: 500,
    nParcelas: 1,
    desconto: true,
    numParcelass: 500,
  },
  {
    estudante: "Dhouglas Ornilo",
    turma: "Sibyla",
    curso: "JavaScript",
    valor: 900,
    nParcelas: 2,
    desconto: true,
    numParcelass: 450,
  },
];

// Funções

const buscarCurso = () => {
  const mostrarCurso = document.getElementById("input-add-cursos").value;
  console.log(mostrarCurso)
  const cadaCurso = cursosOfertados.find(function (cadaCurso) {
    return cadaCurso.curso === mostrarCurso;
  });
  console.log(cadaCurso)
  return cadaCurso;
};

const buscarTurma = () => {
  const inputTurma = document.getElementById("inputTurma").value.toLowerCase();

  const filtrarTurmas = turmasExistentes.filter((cadaTurma) =>
    cadaTurma.turma.toLowerCase().includes(inputTurma)
  );

  return filtrarTurmas.length > 0
    ? gerarCard(filtrarTurmas)
    : sweetAlertTurma();
};

const gerarCard = (turmasBuscadas) => {
  const cards = turmasBuscadas.map((cadaTurmaBuscada) => {
    return `<div class = "turmas">
        <h3> ${cadaTurmaBuscada.turma} </h3>
        <p> <b>Curso:</b>${cadaTurmaBuscada.curso} </p>
        <p> <b>Início:</b>${cadaTurmaBuscada.inicio} </p>
        <p> <b>Término:</b>${cadaTurmaBuscada.termino} </p>
        <p> <b>Número de Alunos:</b>${cadaTurmaBuscada.numeroDeAlunos} </p>
        <p> <b>Período:</b>${cadaTurmaBuscada.periodo} </p>
        <p> <b>Concluída:</b>${cadaTurmaBuscada.concluida ? "Sim" : "Não"} </p>
        </div>`;
  });

  document.getElementById("card-turmas").innerHTML = cards.join("");
  document.getElementById("inputTurma").value = "";
};

const sweetAlertTurma = () => {
  Swal.fire({
    title: "Turma não encontrada!",
    imageUrl: "./imagens/sweet-alert-error.png",
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: "Custom image",
  });
  document.getElementById("inputTurma").value = "";
};

const buscarEstudante = () => {
  const relatorioAluno = document.getElementById("relatorioAluno").value.toLowerCase();
  if (relatorioAluno === "") {
    return sweetAlertRelatorio();
  }
  const filtrarAlunos = estudantesMatriculados.filter((cadaEstudante) => cadaEstudante.estudante.toLowerCase().includes(relatorioAluno)
  );

  return filtrarAlunos.length > 0 ? relatorioEstudante(filtrarAlunos) : sweetAlertRelatorio();
};

const relatorioEstudante = (buscarEstudante) => {
  const relatorioFinal = `<div id = "text-relatorio">
        <p> <b>Aluno:</b>${buscarEstudante[0].estudante} </p>
        <p> <b>Turma:</b>${buscarEstudante[0].turma} </p>
        <p> <b>Curso:</b>${buscarEstudante[0].curso} </p>
        <p> <b>Valor Total:</b>R$ ${buscarEstudante[0].valor} </p>
        <p> <b>Valor Parcela:</b>R$ ${buscarEstudante[0].numParcelass} </p>
        <p> <b>Nº parcelas:</b>${buscarEstudante[0].nParcelas} </p>
        </div>`;

  document.getElementById("text-relatorio").innerHTML = relatorioFinal;
  document.getElementById("relatorioAluno").value = "";
};

const sweetAlertRelatorio = () => {
  Swal.fire({
    title: "Aluno não encontrado!",
    imageUrl: "./imagens/sweet-alert-error.png",
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: "Custom image",
  });
  document.getElementById("relatorioAluno").value = "";
};

const matricular = () => {

  const inputNome = document.getElementById("nome").value;
  const selectCurso = document.getElementById("curso").value;
  const inputTurma = document.getElementById("turma").value;
  const alunoMatriculado = document.getElementById("adm-aluno-matriculado");
  if(inputNome.length > 0 && selectCurso.length > 0 && inputTurma.length > 0){
    alunoMatriculado.innerHTML = "";
    alunoMatriculado.innerHTML =
    `<div class="adm-title-container">
      <h2>Aluno Matriculado</h2>
      <img class="vzinho" src="./imagens/V-verde.svg" alt="">
    </div>
    <p><b>Nome: </b>${inputNome} </p>
    <p><b>Curso: </b>${selectCurso} </p>
    <p><b>Turma: </b>${inputTurma} </p>
    </div>`

    console.log(alunoMatriculado)
  }else{
    sweetAlertMatricular()
  }

}

const sweetAlertMatricular = () => {
  Swal.fire({
    title: "Por favor, preencha todos os campos!",
    imageUrl: "./imagens/sweet-alert-error.png",
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: "Custom image",
  });
  document.getElementById("nome").value = "";
};

let carrinhoCursoValor = [];
let carrinhoCursoNome = [];

const inserirNoCarrinho = () => {
    const selectCurso = document.getElementById("select-add-cursos").value;
    const valorRetornado = document.getElementById("valorCurso")
    let soma = 0
    let string = ""
    const cursoSelecionado = cursosOfertados.find(curso => curso.curso === selectCurso);

    if (cursoSelecionado) {
        string += cursoSelecionado.curso
        soma += cursoSelecionado.valor
        valorRetornado.innerHTML += `<div class="valorCurso">Curso ${cursoSelecionado.curso} foi adicionado ao carrinho.</div>`
        carrinhoCursoValor.push(soma)
        carrinhoCursoNome.push(string)
    }


    let select = document.getElementById("select-add-cursos");
    let selectedOption = select.options[select.selectedIndex];
    if (selectedOption.value !== "") {
        select.removeChild(selectedOption);
    }

}

const parcelarCurso = () =>{
    const nParcelas = document.getElementById("num-parcelas").value;
    const valorRetornado2 = document.getElementById("valorCurso");
    valorRetornado2.innerHTML = "";
    const valores = carrinhoCursoValor;
    const valorTotal = valores.reduce((total, valor) => total + valor, 0);
    let desconto = 0;

    if (carrinhoCursoValor.length > 1) {
        switch (carrinhoCursoValor.length) {
            case 3:
                desconto = 0.15
                break;
            case 2:
                desconto = 0.10
                break;
            default:
                desconto = 0
                break;
        }
    }

    if (carrinhoCursoValor.length !== 0) {
        if (nParcelas < 3 && nParcelas > 0) {
            desconto += 0.2
        }
        const valorFinal = valorTotal - (valorTotal * desconto)
        const valorParcela = valorFinal / nParcelas;
        valorRetornado2.innerHTML = `<div class="valorCurso">O pacote de ${carrinhoCursoNome} ficou em um valor total de ${valorFinal}, parcelado em ${nParcelas}x de R$${valorParcela.toFixed(2)}, com um desconto de ${(desconto * 100).toFixed(2)}%.</div>`

    } else {
        sweetAlertParcelarCurso()
    }

}

const sweetAlertParcelarCurso = () => {
  Swal.fire({
    title: "Por favor, preencha todos os campos!",
    imageUrl: "./imagens/sweet-alert-error.png",
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: "Custom image",
  });
  document.getElementById("valorCurso").value = "";
};