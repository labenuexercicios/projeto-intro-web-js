const turmas = [
    {
        turma: "Hipatia",
        curso: "JavaScript",
        inicio: "30/11/2022",
        termino: "30/01/2023",
        numeroDeAlunos: 150,
        periodo: "Noturno",
        concluida: false
    },

    {
        turma: "Sibyla",
        curso: "JavaScript",
        inicio: "30/10/2022",
        termino: "30/12/2022",
        numeroDeAlunos: 200,
        periodo: "Integral",
        concluida: false
    },

    {
        turma: "Curie",
        curso: "HTML e CSS",
        inicio: "15/09/2022",
        termino: "15/10/2022",
        numeroDeAlunos: 180,
        periodo: "Noturno",
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
        termino: "01/09/2022",
        numeroDeAlunos: 200,
        periodo: "Noturno",
        concluida: true
    },

    {
        turma: "BlackWell",
        curso: "APIsREST",
        inicio: "20/03/2022",
        termino: "20/06/2022",
        numeroDeAlunos: 100,
        periodo: "Integral",
        concluida: true
    },

    {
        turma: "Elion",
        curso: "APIsREST",
        inicio: "12/01/2022",
        termino: "12/06/2022",
        numeroDeAlunos: 200,
        periodo: "Noturno",
        concluida: true
    },

    {
        turma: "Burnell",
        curso: "APIsREST",
        inicio: "18/10/2022",
        termino: "18/04/2022",
        numeroDeAlunos: 90,
        periodo: "Integral",
        concluida: false
    },

];

// ====================================================================================

const cursos = [
    {
        curso: "HTML e CSS",
        descricao: "Curso voltado para criacao e estilizacao de paginas Web para iniciantes",
        duracao: "1 Mes",
        valor: 500
    },

    {
        curso: "JavaScript",
        descricao: "Aprenda como desenvolver paginas aplicacoes Web com JavaScript completo para inicantes  ",
        duracao: "2 Meses",
        valor: 900
    },

    {
        curso: "API's REST",
        descricao: "Aprofunde ainda mais seus conhecimentos e conheca os principios do estilo arquitetonico REST e construa APIs de forma profissional",
        duracao: "6 Meses",
        valor: 2000
    },


];

// ====================================================================================

const estudantes = [
    {
        estudante: "Chris Evans",
        turma: "Hipatica",
        curso: "JavaScript",
        valor: 900,
        nParcelas: 9,
        desconto: false,
        parcelas: 100
    },

    {
        estudante: "Halle Barry",
        turma: "Burnell",
        curso: "APIsREST",
        valor: 2000,
        nParcelas: 4,
        desconto: false,
        parcelas: 500
    },

    {
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: 500,
        nParcelas: 1,
        desconto: true,
        parcelas: 500
    },
];

// ====================================================================================

// 1) Funções buscar
console.log("BUSCAR CURSOS: ")
const buscarCurso = (nomeCurso) => {

    const buscarNovoCurso = document.getElementById("curso").value.toLowerCase()

    nomeCurso = buscarNovoCurso;

    const findCurso = cursos.find((element) => element.curso.toLowerCase().includes(nomeCurso.toLowerCase()));

    return !findCurso ? "Curso nao encontrado" : findCurso;

};

// ====================================================================================

//b) Crie também uma função buscarTurma e buscarEstudante
console.log("\nBUSCAR TURMA: ")

const buscarTurma = (event) => {

    event.preventDefault();

    inputTurma = document.getElementById("buscar-turma").value.toLowerCase();

    const findTurma = turmas.filter(cadaTurma => {
        if (cadaTurma.turma.toLowerCase().includes(inputTurma)) {
            return cadaTurma;
        }
    });

    document.getElementById("buscar-turma").value = " ";

    return findTurma.length > 0 ? gerarCard(findTurma) : gerarCard(turmas);


};

// ====================================================================================

const gerarCard = (retornoTurma) => {

    if (document.getElementsByClassName('classes').length > 0) {
        while (document.getElementsByClassName('classes').length > 0) {
            const cards = document.querySelector('#bloco2-container2-cards')
            cards.parentNode.removeChild(cards)
            window.location.reload(true);
        };
    };

    const containerBuscarTurma = document.getElementById("bloco2-container2-cards");

    const geradorDeCards = retornoTurma.map((turmaMap) => {
        const addItem = document.createElement("article");

        addItem.innerHTML = `<div class="bloco2-item-card">
            <p class="bloco2-titulo">${turmaMap.turma}</p>
                <ul>
                    <li><b> Curso:</b>${turmaMap.curso}</li>
                    <li><b>Inicio:</b>${turmaMap.inicio}</li>
                    <li><b>Termino:</b>${turmaMap.termino}</li>
                    <li><b>Numero de Alunos:</b>${turmaMap.numeroDeAlunos}</li>
                    <li><b>Periodo:</b>${turmaMap.periodo}</li>
                    <li><b>Concluido:</b>${turmaMap.concluido}</li>
                </ul>
        </div>`;

        containerBuscarTurma.insertAdjacentElement(`beforeend`, addItem);
        addItem.setAttribute("class", "classes")

    });

    return geradorDeCards

};

// ====================================================================================

// 2)Função Matricular

console.log("\nLISTA ATUALIZADA DE ALUNOS COM NOVOS MATRICULADOS: ")
const matricular = (nome, nomeCurso, turma, nParcelas) => {

    novoAluno = document.getElementById("nome").value
    nome = novoAluno
    console.log(nome)

    novoAlunoCurso = document.getElementById("curso").value
    nomeCurso = novoAlunoCurso
    console.log(nomeCurso)

    novoAlunoTurma = document.getElementById("turma").value
    turma = novoAlunoTurma
    console.log(turma)

    novoAlunoParcelas = document.getElementById("parcelas").value
    nParcelas = novoAlunoParcelas
    console.log(nParcelas)


    let valorCurso = buscarCurso(nomeCurso);
    let valorTotal = 0;
    let valorParcela = 0;

    if (nParcelas > 0 && nParcelas <= 2) {
        valorTotal = valorCurso.valor - (valorCurso.valor * 0.2)
        valorParcela = valorTotal / nParcelas
        valorParcela.toFixed(2)
        desconto = "Sim"
    } else {
        valorTotal = valorCurso.valor
        valorParcela = valorTotal / nParcelas
        valorParcela.toFixed(2)
        desconto = "Nao"
    };

    novaMatricula =
    {
        estudante: nome,
        turma: turma,
        curso: nomeCurso,
        valor: valorCurso.valor,
        nParcelas: nParcelas,
        desconto: desconto,
        valorParcela: valorParcela.toFixed(2)
    };

    estudantes.push(novaMatricula);

    // ====================================================================================

    const containerMatricula = document.getElementById("bloco2-container2");

    const addNovoAluno = document.createElement("div");
    addNovoAluno.setAttribute("class", "container2-item");
    addNovoAluno.innerHTML = `
                <div class="container2-titulo">
                <p>Aluno Matriculado</p>
                <img src="./assets/check.png" alt="aluno martriculado">
                </div>

                <div id="dados-nova-matricula">
                <ul>
                <li><b>Estudante:</b> ${nome}</li>
                <li><b>Turma:</b> ${turma}</li>
                <li><b>Curso:</b> ${nomeCurso}</li>
                <li><b>Valor: R$</b>${valorCurso.valor}</li>
                <li><b>nParcelas:</b>${nParcelas}X</li>
                <li><b>Desconto:</b> ${desconto}</li>
                <li><b>ValorParcelas: R$</b>${valorParcela.toFixed(2)}</li>
                </ul>
                </div>
                `;

    if (document.getElementsByClassName('container2-item').length > 0) {
        while (document.getElementsByClassName('container2-item').length > 0) {
            const novoMatriculado = document.querySelector('#bloco2-container2');
            novoMatriculado.parentNode.removeChild(novoMatriculado);
            window.location.reload(true);
        };

    } else if (nome.length && nomeCurso.length && turma.length && nParcelas.length > 0) {
        containerMatricula.insertAdjacentElement(`beforeend`, addNovoAluno);
        document.getElementById("btn-matricular").value = " Nova Matricula";
    } else {
        alert("CONFIRME OS DADOS");
    };


};

// ====================================================================================

// 3 -Função parcelarCurso
console.log(`CARRINHO DE COMPRAS E FORMAS DE PAGAMENTOS`);

//UTILIZANDO CALLBACK DA FUNCAO BUSCARCURSO
const carrinhoCursos = [];
const nomesCursos = [];
const arrayVerificador = [];
const valorCurso = () => {

    infoCurso = document.getElementById("curso").value

    const carrinho = document.querySelector(".itensCarrinho");

    if (infoCurso.length === 0) {

        window.alert("Por favor escolha um curso valido");

    }else{

            let dataCurso = buscarCurso();
            carrinhoCursos.push(dataCurso.valor);
            document.getElementById("curso").value = " "
            nomesCursos.push(dataCurso.curso);

        if(arrayVerificador.length <= 2){

            const mostrarCursos = document.createElement("p")
            mostrarCursos.innerHTML = `
            <p><b>Curso adicionado:</b> ${nomesCursos}</p>`
            nomesCursos.shift()
            carrinho.insertAdjacentElement("afterbegin", mostrarCursos);
            arrayVerificador.push("0");
        
        }else{

            window.alert("Numero de maximo de cursos escolhidos")
        };

    };
        return carrinhoCursos;
};

const parcelarCurso = () => {

    parcela = Number(document.getElementById("parcelas").value);

    let valorTotal = 0;
    let valorParcela;
    let desconto = 0;
    let obs = " "

    if (carrinhoCursos.length > 1) {
        switch (carrinhoCursos.length) {
            case 3:
                desconto = 0.15
                obs = " plus 15% desconto."
                console.log("case 3", carrinhoCursos)
                break;

            case 2:
                desconto = 0.10
                obs = "plus 10% desconto."
                console.log("case 2", carrinhoCursos)
                break;

            default:
                desconto: 0
                obs = " "
                console.log("case 1", carrinhoCursos)
                break;
        };

        for (let valor of carrinhoCursos) {
            valorTotal = valorTotal + valor
        };

        valorTotal = valorTotal - (valorTotal * desconto)

    } else {
        valorTotal = carrinhoCursos[0]
    };

    infParcela = document.getElementById("parcelas").value;

    if (infParcela.length === 0) {
        window.alert("Numero de parcelas invalido")
        window.location.reload(true);
    } else {

        if (document.getElementsByClassName('inforCalCurso').length > 0) {
            while (document.getElementsByClassName('inforCalCurso').length > 0) {
                const relatorioValores = document.querySelector('#calcCurso');
                relatorioValores.parentNode.removeChild(relatorioValores);
                window.location.reload(true);
            };
        }; 

        if (parcela <= 2) {

            valorTotal = valorTotal - (valorTotal * 0.2);

            valorParcela = valorTotal / parcela;

            const containerCalculo = document.getElementById("calcCurso");

            const itemCalculo = document.createElement("div");
            itemCalculo.setAttribute("class", "inforCalCurso")

            itemCalculo.innerHTML = `
                <p id="tituloRelatorio">Relatorio Valores</p>
                <ul>
                    <li><b>Valor(es) do(s) Curso(s):</b>R$ ${carrinhoCursos}</li>
                    <li><b>Valor total com desconto:</b> R$ ${valorTotal.toFixed(2)} ${obs}</li>
                    <li><b>Parcelado em ${parcela}x de </b>R$ ${valorParcela.toFixed(2)} plus 20% desconto.</li>
                <ul>`;
            document.getElementById("parcelas").value = " "
            containerCalculo.insertAdjacentElement("beforeend", itemCalculo)

        } else {

            valorParcela = +valorTotal / parcela

            const containerCalculo = document.getElementById("calcCurso");

            const itemCalculo = document.createElement("div");
            itemCalculo.setAttribute("class", "inforCalCurso")

            itemCalculo.innerHTML = `
            <p id="tituloRelatorio">Relatorio Valores</p>
            <ul>
                <li><b>Valor(es) do(s) Curso(s):</b>R$ ${carrinhoCursos}</li>
                <li><b>Valor total:</b> R$${valorTotal} ${obs}</li>
                <li><b>Parcelado em ${parcela}x de </b>R$ ${valorParcela.toFixed(2)}</li>
            <ul>`;

            containerCalculo.insertAdjacentElement("beforeend", itemCalculo);

        };
    };
    
};

// ====================================================================================

console.log("\nBUSCAR ESTUDANTE: ")

const buscarEstudante = (event) => {

    event.preventDefault()

    getAluno = document.getElementById("inputRelatorioAluno").value.toLowerCase();

    if (getAluno.length === 0) {

        console.log(getAluno)
        return alert("DIGITE O NOME DO ALUNO"), window.location.reload(true);
    };

    const findAluno = estudantes.filter(aluno => {
        if (aluno.estudante.toLowerCase().includes(getAluno)) {
            document.getElementById("inputRelatorioAluno").value = " "
            return aluno
        };
    });

    if (findAluno.length === 0) {
        return alert("ALUNO NÃO ENCONTRADO"), window.location.reload(true);

    } else {
        return relatorioEstudante(findAluno);
    };

};

// ====================================================================================

console.log(`\nRELATORIO ESTUDANTES`);

const relatorioEstudante = (retornaAluno) => {

    const containerBuscarAluno = document.getElementById("container2-item-relatorio");

    if (document.getElementsByClassName('relatorio').length > 0) {
        while (document.getElementsByClassName('relatorio').length > 0) {
            const novaBusca = document.querySelector('#container2-item-relatorio');
            novaBusca.parentNode.removeChild(novaBusca);
            window.location.reload(true);
        };
    };

    const gerarRelatorio = retornaAluno.map((alunoBuscado) => {
        const addAluno = document.createElement("div");

        addAluno.innerHTML = `
         <ul>
            <li><b> Aluno:</b>${alunoBuscado.estudante}</li>
            <li><b>Turma:</b>${alunoBuscado.turma}</li>
             <li><b>Curso:</b>${alunoBuscado.curso}</li>
             <li><b>Valor:</b>R$${alunoBuscado.valor}</li>
            <li><b>Num. Parcelas:</b> x${alunoBuscado.nParcelas}</li>
            <li><b>Desconto:</b>${alunoBuscado.desconto}</li>
            <li><b>Valor parcelas:</b>R$${alunoBuscado.parcelas}</li>
         </ul>`;

        document.getElementById("btn-relatorio").value = "Nova Busca"
        addAluno.setAttribute("id", "relatorio");
        addAluno.setAttribute("class", "relatorio");
        containerBuscarAluno.insertAdjacentElement(`beforeend`, addAluno);
        console.log(addAluno.value)

    });

    return gerarRelatorio;
};
