/* const turmas = ["HC1", "JS1", "JS2", "REST1", "REST2"]

const cursos = ["HTML e CSS", "JavaScript", "APIs REST"]

const estudantes = ["Joao", "Ana", "Cris"] */

const turmas = [
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
]

const cursos = [
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
]

const estudantes = [
    {
        estudante: "Chris Evans",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: 900,
        nParcelas: 9,
        desconto: false,
        valorParcelas: 100
    },
    {
        estudante: "Halle Berry",
        turma: "Burnell",
        curso: "APIsRest",
        valor: 2000,
        nParcelas: 4,
        desconto: false,
        valorParcela: 500
    },
    {
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: " HTML e CSS",
        valor: 500,
        nParcelas: 1,
        desconto: true,
        valorParcela: 0
    }
]
let carrinhoCursos = [];
const buscarCursos = (nomeCurso) => {

    for (cadaCurso of cursos) {
        if (cadaCurso.curso.toLowerCase() === nomeCurso.toLowerCase()) {
            return cadaCurso
        }
    }
}


function adicionarCursosAoCarrinho(nomeCurso) {
    let valorCurso = buscarCursos(nomeCurso)
    carrinhoCursos.push(valorCurso)
    return carrinhoCursos
}
adicionarCursosAoCarrinho("JavaScript")
adicionarCursosAoCarrinho("HTML E CSS")
console.log(carrinhoCursos)


/* const parcelaCurso = (carrinhoCurso, parcelas) => {
    let valorTotal = 0
    let valorParcela = 0
    let desconto = 0
    let nomeCurso = []

    for (let i in carrinhoCursos) {
        valorTotal += carrinhoCursos[i].valor
        console.log(valorTotal)
    }

    for (let i in carrinhoCursos) {
        nomeCurso.push(carrinhoCursos[i].curso)
        console.log(nomeCurso)
    }

    if (carrinhoCursos.length > 1) {
        switch (carrinhoCursos.length) {
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
    } else {
        valorTotal = carrinhoCursos[0]
    }

    valorTotal = valorTotal - (valorTotal * desconto)
    console.log(valorTotal)

    if (parcelas < 3 && parcelas > 0) {
        valorTotal = valorTotal - (valorTotal * 0.2)
        valorParcela = valorTotal / parcelas
        console.log(`O pacote de ${nomeCurso} ficou no valor total de R$${valorTotal}. Em ${parcelas} parcelas de R$${valorParcela.toLocaleString({ minimumFractionDigits: 2 })}. Foi concedido um desconto de 20%`)

    } else if (parcelas >= 3) {
        valorTotal = valorTotal
        valorParcela = valorTotal / parcelas
        console.log(`O pacote de ${nomeCurso} ficou no valor total de R$${valorTotal}. Em ${parcelas} parcelas de R$${valorParcela.toLocaleString({ minimumFractionDigits: 2 })}`)
    }
}
parcelaCurso(carrinhoCurso, 4) */
/* 
const buscarTurma = (nomeTurma) => {
    const mostrarTurma = turmas.filter((cadaTurma) => {
        return cadaTurma.turma.toLowerCase() === nomeTurma.toLowerCase()
    })
    return mostrarTurma.length > 0 ? `turma encontrada ${mostrarTurma[0].turma}` : `turma nao encontrada`

}
console.log(buscarTurma("El")) */

/* 
const buscarTurma = (turmaCard) => {
    const turmasMapeadas = turmaCard.map((item) => {
        return `<section>
        <p>${item.turma}</p>
        <p>${item.curso}</p>
        <p>${item.inicio}</p>
        <p>${item.termino}</p>
        <p>${item.numeroDeAlunos}</p>
        <p>${item.periodo}</p>
        <p>${item.concluida}</p>
        </section`
    })
    return turmasMapeadas
}

const turmasFiltradas = () => {
    const inputTurma = document.getElementById("buscar").value.toLowerCase()

    const turmaSelecionada = turmas.filter((i) => {
        if (i.turma.toLocaleUpperCase().includes(inputTurma)) {
            return i
        }
    })
    return turmaSelecionada ? container.innerHTML = buscarTurma(turmaSelecionada) : container
}
 */

/* const container = document.getElementById("containerTurmas") */

/* function buscarTurma() {
    const input = document.getElementById("buscar").value;
    // Fazer chamada para a sua função de busca
    const turmas = buscaTurmas(input);

    // Limpar o containerTurmas
    document.querySelector(".containerTurmas").innerHTML = "";

    // Adicionar as turmas retornadas
    turmas.forEach(function (turma) {
        const element = document.createElement("div");
        element.innerHTML = turma.nome;
        document.querySelector(".containerTurmas").appendChild(element);
    });
} */


/* 
function findTurma(event) {
    event.preventDefault();
    const buscar = document.getElementById("buscar").value;
}
 */
/* 
const findTurma = () => {
    const inputTurma = document.getElementById("buscar").value.toLowerCase()

    const turmaSelecionada = turmas.filter((item) =>{
        if (item.turma.toLocaleLowerCase().includes(inputTurma)){
            return item
        }
    })
    return turmaSelecionada ? container.innerHTML = buscarTurma(turmaSelecionada) : container.innerHTML = buscarTurma(turmas)
} */

/* const turmasFiltradas = () => {
    const inputTurma = document.getElementById("buscar").value.toLowerCase()

    const turmaSelecionada = turmas.filter((i) => {
        if (i.turma.toLowerCase().includes(inputTurma)) {
            return true
        }
    })
    return false
}
 */
/* function findTurma(event) {
    event.preventDefault()
    const nomeTurma = document.getElementById("buscar").value
    if (validarTurma(nomeTurma)){   
        console.log(`verdadeiro`)
    } else {
        console.log(`falso`)
    }

    console.log(nomeTurma)
}

const validarTurma = (nomeTurma) => {
    const turmaSelecionada = turmas.filter((i) => {
        if (i.turma.toLowerCase().includes(nomeTurma)) {
            return true
        }
    })
    return false
}
/* console.log(nomeTurma) */


function getValue() {
    const inputValue = document.getElementById("buscar").value;
    const resultado = document.getElementById("containerTurmas")
    resultado.innerHTML = ""
    const turma = turmas.find(function (item) {
        return item.turma.toLowerCase() === inputValue.toLowerCase();
    });
    if (turma) {
        resultado.innerHTML = `<div class="turmas" id="turmas">
        <h1 class="titulo">${turma.turma}</h1>
        <p><b>Curso: </b>${turma.curso}</p>
        <p><b>Início: </b>${turma.inicio}</p>
        <p><b>Término: </b>${turma.termino}</p>
        <p><b>Numero de Alunos: </b>${turma.numeroDeAlunos}</p>
        <p><b>Período: </b>${turma.periodo}</p>
        <p><b>Concluído: </b>${(turma.concluida) ? `sim` : `nao`}</p>
        </div>`

    } else {
        turmas.forEach(function (turma) {
            resultado.innerHTML += `<div class="turmas" id="turmas">
            <h1 class="titulo">${turma.turma}</h1>
            <p><b>Curso: </b>${turma.curso}</p>
            <p><b>Início: </b>${turma.inicio}</p>
            <p><b>Término: </b>${turma.termino}</p>
            <p><b>Numero de Alunos: </b>${turma.numeroDeAlunos}</p>
            <p><b>Período: </b>${turma.periodo}</p>
            <p><b>Concluído: </b>${(turma.concluida) ? `sim` : `nao`}</p>
            </div>`
        });
    }
}

/*  function onLoad() {
    const test = document.getElementById("test")
    turmas.forEach(function (turma) {
            test.innerHTML += `<option value="${turma.turma}">${turma.turma}</option>`
    });
}
 */
function onLoad() {
    const test = document.getElementById("buscar")
    for (i = 0; i <= turmas.length; ++i)
        (test.innerHTML += `<option value="${turmas[i].turma}">${turmas[i].turma}</option>`)
};

function getAlunoValue() {
    const inputNome = document.getElementById("matricularNome").value;
    const inputCurso = document.getElementById("matricularCurso").value;
    const inputTurma = document.getElementById("matricularTurma").value;
    const inputParcelas = document.getElementById("matricularParcelas").value;
    const resultado2 = document.getElementById("alunoMatriculado");
    resultado2.innerHTML = "";
    resultado2.innerHTML = `<div class="label">
    <h1>Aluno matriculado</h1>
    <p><b>Nome: </b>${inputNome} </p>
    <p><b>Curso: </b>${inputCurso} </p>
    <p><b>Turma: </b>${inputTurma} </p>
    </div>`
    var matricularForm = {
        estudante: document.getElementById("matricularNome").value,
        curso: document.getElementById("matricularCurso").value,
        turma: document.getElementById("matricularTurma").value,
        nParcelas: document.getElementById("matricularParcelas").value,
        valor: 0,
        desconto: "",
        valorParcela: "",
    };
    console.log(matricularForm)
    /* if (matricularForm.curso === cursos.curso) {
        matricularForm.valor = 0
        const valorDoCurso = cursos.valor
        matricularForm.valor = valorDoCurso
    } */
    const cursoSelecionado = cursos.find(c => c.curso === matricularForm.curso);
    if (cursoSelecionado) {
        matricularForm.valor = cursoSelecionado.valor;
        matricularForm.valorParcela = cursoSelecionado.valor / matricularForm.nParcelas
    } else {
        matricularForm.valor = 0;
    }
    console.log(matricularForm)
    if (matricularForm.nParcelas < 3) {
        matricularForm.desconto = true
    } else {
        matricularForm.desconto = false
    }
    console.log(matricularForm)
    estudantes.push(matricularForm)
    console.log(estudantes)
}


const buscarEstudante = () => {
    const nomeRelatorio = document.getElementById("nomeRelatorio").value;
    const estudantesEncontrados = estudantes.filter(
        estudante => estudante.estudante.includes(nomeRelatorio)
    );
    console.log(estudantesEncontrados)
    if (estudantesEncontrados) {
        const relatorioRetornado = document.getElementById("relatorioRetornado")
        relatorioRetornado.innerHTML = `<p>Estudante: ${estudantesEncontrados[0].estudante}</p>
                                     <p>Turma: ${estudantesEncontrados[0].turma}</p>
                                     <p>Curso: ${estudantesEncontrados[0].curso}</p>
                                      <p>Valor: ${estudantesEncontrados[0].valor}</p>
                                      <p>Número de parcelas: ${estudantesEncontrados[0].nParcelas}</p>
                                      <p>Desconto: ${(estudantesEncontrados[0].desconto)?"sim":"não"}</p>
                                      <p>Valor das parcelas: ${estudantesEncontrados[0].valorParcelas}`;
    }
};
let carrinhoCurso = [];
let carrinhoString = [];
function adicionarCursoAoCarrinho() {
    const correcaoInput = document.getElementById("CursoFinanceiro")
    const inputCurso = document.getElementById("CursoFinanceiro").value;
    const result = document.getElementById("valorRetornado")
    let soma = 0
    let string = ""
    const cursoSelecionado = cursos.find(curso => curso.curso === inputCurso);

    if (cursoSelecionado) {
        string += cursoSelecionado.curso
        soma += cursoSelecionado.valor
        result.innerHTML += `<div class="result">Curso ${cursoSelecionado.curso} foi adicionado ao carrinho.</div>`
        carrinhoCurso.push(soma)
        carrinhoString.push(string)
    }


    var select = document.getElementById("CursoFinanceiro");
    var selectedOption = select.options[select.selectedIndex];
    if (selectedOption.value !== "adicioneUmCurso") {
        select.removeChild(selectedOption);
    }

    console.log(soma)
    console.log(carrinhoCurso)
    console.log(carrinhoString)

}

function verValor() {
    const inputCurso = document.getElementById("CursoFinanceiro").value;
    const nParcelas = document.getElementById("nParcelasFinanceiro").value;
    const result2 = document.getElementById("valorRetornado");
    result2.innerHTML = "";
    const stringCarrinho = carrinhoString.join(',/ ');
    const valores = carrinhoCurso;
    const valorTotal = valores.reduce((total, valor) => total + valor, 0);
    let desconto = 0;

    if (carrinhoCurso.length > 1) {
        switch (carrinhoCurso.length) {
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

    if (carrinhoCurso.length !== 0) {
        if (nParcelas < 3 && nParcelas > 0) {
            desconto += 0.2
        }
        const valorFinal = valorTotal - (valorTotal * desconto)
        const valorParcela = valorFinal / nParcelas;
        result2.innerHTML = `<div class="result">O pacote de ${carrinhoString} ficou em um valor total de ${valorFinal}, parcelado em ${nParcelas}x de R$${valorParcela.toFixed(2)}, com um desconto de ${(desconto * 100).toFixed(2)}%.</div>`

    } else {
        result2.innerHTML = `<div class="result"> adicione um curso </div>`
    }

}


const matricular = (nome, curso, turma, numParcelas) => {
    let valorTotal = buscarCursos(curso).valor
    let valorCurso = buscarCursos(curso).valor
    let valorPorParcela = 0
    let recebeDesconto = 0
    if (numParcelas > 0 && numParcelas < 3) {
        valorCurso = valorCurso * 0.8
        valorPorParcela = valorCurso / numParcelas
        recebeDesconto = true
    } else {
        valorPorParcela = valorCurso / numParcelas
        recebeDesconto = false
    }
    let novoAluno = {
        estudante: nome,
        turma: turma,
        curso: curso,
        valor: valorTotal,
        nParcelas: numParcelas,
        desconto: recebeDesconto,
        valorParcela: valorPorParcela
    }

    estudantes.push(novoAluno)

    console.log(estudantes)
    console.log(`Aluno Matriculado \nNome:${nome}\nCurso:${curso}\nTurma:${turma}`)
}
matricular(`mamae`, `JavaScript`, `Hipatia`, 2)



