const turmas = [ //"HC1", "JS1", "REST1", "REST2",
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
        curso: "APIs REST",
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
// a) Crie uma função que faça uma busca pelo array de cursos, de forma a passar o nome do curso por parâmetro. A função deve ser capaz de retornar o objeto referente ao curso solicitado. Essa função deve se chamar buscarCurso.
console.log("BUSCAR CURSOS: ")
const buscarCurso = (nomeCurso) => {

    const buscarNovoCurso = document.getElementById("curso").value.toLowerCase()

    nomeCurso = buscarNovoCurso

    const findCurso = cursos.find((element) => element.curso.toLowerCase().includes(nomeCurso.toLowerCase()));

    return !findCurso ? "Curso nao encontrado" : findCurso;

};

// console.log(buscarCurso());

// ====================================================================================

//b) Crie também uma função buscarTurma e buscarEstudante
console.log("\nBUSCAR TURMA: ")

const buscarTurma = (event) => {

    event.preventDefault()

    inputTurma = document.getElementById("buscar-turma").value.toLowerCase();

    // usando FILTER 
    const findTurma = turmas.filter(cadaTurma => {
        if (cadaTurma.turma.toLowerCase().includes(inputTurma)) {
            return cadaTurma
        }
    });

    // ARRUMAR .VALUE E BOTAO PARA APARECER APENAS UMA VEZ OS CARDS
    document.getElementById("buscar-turma").value = " "
    console.log(inputTurma)

    return findTurma.length > 0 ? gerarCard(findTurma) : gerarCard(turmas);


};

// ====================================================================================

const gerarCard = (retornoTurma) => {

    const containerBuscarTurma = document.getElementById("bloco2-container2-cards");

    const geradorDeCards = retornoTurma.map((turmaMap) => {
         const addItem = document.createElement("article");

         addItem.innerHTML =   `<div class="bloco2-item-card">
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
    })

    return geradorDeCards
    
};


// ====================================================================================

removeItem = (event) => {
    event.target.remove();
};

// ====================================================================================

// 2)Função Matricular
// a) Crie uma função chamada matricular, essa função deve ser capaz de inserir um aluno no array de estudantes. 
//b) A função deve receber por parâmetro, as seguintes informações: nome, curso, turma e numero de parcelas
// c) Ao final a função deve mostrar:
//   i. O array de estudantes no console contendo o novo aluno matriculado
//     ii. E ainda no console emitir uma mensagem confirmação, informando que o aluno foi matriculado, essa mensagem deve conter o nome do aluno, o curso e a turma.

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
    console.log(valorCurso.valor)
    let valorTotal = 0;
    let valorParcela = 0;
    let desconto = false;

    if (nParcelas > 0 && nParcelas <= 2) {
        valorTotal = valorCurso.valor - (valorCurso.valor * 0.2)
        valorParcela = valorTotal / nParcelas
        desconto = true
    } else {
        valorTotal = valorCurso.valor
        valorParcela = valorTotal / nParcelas
    };


    novaMatricula =
    {
        estudante: nome,
        turma: turma,
        curso: nomeCurso,
        valor: valorCurso.valor,
        nParcelas: nParcelas,
        desconto: desconto,
        valorParcela: valorParcela
    };


    estudantes.push(novaMatricula);

    // const containerTitulo = document.getElementById("container2-item");

    // const addTituloMatricula = document.createElement(`div`);
    // addTituloMatricula.setAttribute("class", "container2-titulo")
    // addTituloMatricula.innerHTML=`
    // <p>Aluno Matriculado</p>
    // <img src="./assets/check.png" alt="aluno martriculado">`

    // containerTitulo.insertAdjacentElement(`afterbegin`, addTituloMatricula);

    const containerMatricula = document.getElementById("bloco2-container2");

    const addNovoAluno = document.createElement("div");
    addNovoAluno.setAttribute("class", "container2-item")

    addNovoAluno.innerHTML = `
    <div class="container2-titulo">
    <p>Aluno Matriculado</p>
    <img src="./assets/check.png" alt="aluno martriculado">
    </div>

    <div id="dados-nova-matricula">
    <ul>
    <li>Estudante:${nome}</li>
    <li>Turma:${turma}</li>
    <li>Curso:${nomeCurso}</li>
    <li>Valor:R$${valorCurso.valor}</li>
    <li>nParcelas:${nParcelas}</li>
    <li>Desconto:${desconto}</li>
    <li>ValorParcelas:${valorParcela}</li>
    </ul>
    </div>
          `

    

    containerMatricula.insertAdjacentElement(`beforeend`, addNovoAluno);

};




// ====================================================================================

// 3 -Função parcelarCurso
// A escola fornece 3 tipos de desconto:
/* * Na compra de 3 cursos: 15% de desconto
* Na compra de 2 cursos: 10% de desconto
* Para pagamentos a vista e parcelado em 2x, é concedido mais 20% de desconto. */

/* Altere a função parcelarCurso para que ela receba um array e o número de parcelas.

O array deve se chamar carrinhoCursos e receber apenas os valores dos cursos adquiridos. Neste ponto do projeto o array ainda não é incrementado automaticamente, por isso esse passo pode ser feito manualmente. */

console.log(`CARRINHO DE COMPRAS E FORMAS DE PAGAMENTOS`);

//UTILIZANDO CALLBACK DA FUNCAO BUSCARCURSO
const carrinhoCursos = [];
const parcelarCurso = (buscarCurso, parcela) => {
    let valorTotal = 0
    let valorParcela = 0
    let desconto = 0

    const valorCurso = buscarCurso.valor
    carrinhoCursos.push(valorCurso)
    //return carrinhoCursos  
    if (carrinhoCursos.length > 1) {
        switch (carrinhoCursos.length) {
            case 3:
                desconto = 0.15
                break;

            case 2:
                desconto = 0.10
                break;

            default:
                desconto: 0
                break;
        }

        for (let valor of carrinhoCursos) {
            valorTotal = valorTotal + valor
        }

        valorTotal = valorTotal - (valorTotal * desconto)
    } else {
        valorTotal = carrinhoCursos[0]
    }

    if (parcela <= 2) {

        valorTotal = valorTotal - (valorTotal * 0.2);
        valorParcela = valorTotal / parcela
        return `O valor do pagamento é de R$${valorTotal}.Em ${parcela} X de ${valorParcela} reais. Foi concedido desconto de 20%.`
    } else {
        valorTotal = valorTotal
        valorParcela = valorTotal / parcela

        /* return `O curso ${buscarCurso.curso} ficou no valor de R$ ${valorTotal}. Em ${parcela} X de ${valorParcela.toFixed(2)} reais.` */
        return `O valor do pagamento é de R$ ${valorTotal}. Em ${parcela} X de ${valorParcela.toFixed(2)} reais.`
    }
}
//console.log(parcelarCurso(buscarCurso("javascript",), 2))
// parcelarCurso(buscarCurso("html e css"))
// parcelarCurso(buscarCurso("javascript"))
// console.log(parcelarCurso(buscarCurso("APIs REST"), 1))
// console.log(`Valores individuais de cada curso adicionados no carrinho sem desconto: ${carrinhoCursos}`);

// ====================================================================================

console.log("\nBUSCAR ESTUDANTE: ")


const buscarEstudante = (event) => {

    event.preventDefault()

     getAluno = document.getElementById("inputRelatorioAluno").value.toLowerCase()

    // limpaDados = document.getElementById("inputRelatorioAluno").value = " "


    if (getAluno.length === 0) {
        
        console.log(getAluno)
        return alert("ALUNO NAO ENCONTRADO");
    }

    const findAluno = estudantes.filter(aluno => {
        if (aluno.estudante.toLowerCase().includes(getAluno)) {
            getAluno.value = " "
            return aluno
        }else{
            
        };
    });
    console.log(getAluno)
    console.log(findAluno.length)

    return findAluno.length > 0 ? relatorioEstudante(findAluno) : alert("ALUNO NAO ENCONTRADO");
};

// ====================================================================================

console.log(`\nRELATORIO ESTUDANTES`);

const relatorioEstudante = (retornaAluno) => {

    const containerBuscarAluno = document.getElementById("container2-item-relatorio");

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

        addAluno.setAttribute("id", "relatorio");
        containerBuscarAluno.insertAdjacentElement(`beforeend`, addAluno);

    });

    return gerarRelatorio

};






