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
        Curso: "HTML e CSS",
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

/* function parcelarCurso(parcelas) {
   let desconto
   if(parcelas >= 1 &&  parcelas <= 2){
       desconto = cursos[1].valor - (cursos[1].valor * 0.2)
       return `O valor do curso ${cursos[1].curso} e de R$${cursos[1].valor}. A vista R$${desconto} ou em 2x de R$${desconto/2}. Foi concedido desconto de 20% \n`
       
       
   }else if(parcelas > 2 && parcelas < 9){
       return `O curso ${cursos[1].curso} ficou no valor de R$${cursos[1].valor}. Em ate 8x de R$${cursos[1].valor/8}\n`
   
   }else if(parcelas >= 9 ) {
       return `Parcelas maximas em 8x\n`
   
   }else{
       return `Digite um valor valido de parcelas !\n`
   }
}; 
console.log(parcelarCurso(5)); */

// 1) Funções buscar
// a) Crie uma função que faça uma busca pelo array de cursos, de forma a passar o nome do curso por parâmetro. A função deve ser capaz de retornar o objeto referente ao curso solicitado. Essa função deve se chamar buscarCurso.
console.log("BUSCAR CURSOS: ")
const buscarCurso = (nomeCurso) => {
    /* for(i in cursos){
       if(cursos[i].curso.toLowerCase() === nomeCurso.toLowerCase()){
           return cursos[i]
       }
   }  */
    const findCurso = cursos.find((element) => element.curso.toLowerCase().includes(nomeCurso.toLowerCase()));
    return !findCurso ? "Curso nao encontrado" : findCurso;

    /* for(cadaCurso of cursos){
       if(cadaCurso.curso.toLowerCase() === nomeCurso.toLowerCase()){
           return cadaCurso
       }
   } 
   return "Curso nao encontrado" */
};

console.log(buscarCurso("api"));

//b) Crie também uma função buscarTurma e buscarEstudante
console.log("\nBUSCAR TURMA: ")
const buscarTurma = (turma) => {
    const findTurma = turmas.find((element) => element.turma.toLowerCase().includes(turma.toLowerCase()));
    return !findTurma ? "Turma nao Encontrada" : findTurma;

    /* for(i in turmas){3
        if(turmas[i].turma.toLowerCase() === turma.toLowerCase()){
            return turmas[i]
        }
    } */

    /* for(cadaTurma of turmas){
         if(cadaTurma.turma.toLowerCase() === turma){
            return cadaTurma
        } 
    }
    return "Turma nao encontrada" */

};

console.log(buscarTurma("eli"));
//console.log(buscarTurma("kkkkk"));

console.log("\nBUSCAR ESTUDANTE: ")
const buscarEstudante = (aluno) => {
    const findAluno = estudantes.find((element) => element.estudante.toLowerCase().includes(aluno.toLowerCase()));
    return !findAluno ? "Aluno nao encontrado" : findAluno;
    /*  for(i in estudantes){
         if(estudantes[i].estudante.toLowerCase() === aluno.toLowerCase()){
             return estudantes[i]
         }
     } */
    /*  for(cadaAluno of estudantes){
         if(cadaAluno.estudante === aluno){
             return cadaAluno
         }
     }
     return "Aluno nao encontrado" */
};

console.log(buscarEstudante("ha"));

// 2)Função Matricular
// a) Crie uma função chamada matricular, essa função deve ser capaz de inserir um aluno no array de estudantes. 
//b) A função deve receber por parâmetro, as seguintes informações: nome, curso, turma e numero de parcelas
// c) Ao final a função deve mostrar:
//   i. O array de estudantes no console contendo o novo aluno matriculado
//     ii. E ainda no console emitir uma mensagem confirmação, informando que o aluno foi matriculado, essa mensagem deve conter o nome do aluno, o curso e a turma.

console.log("\nLISTA ATUALIZADA DE ALUNOS COM NOVOS MATRICULADOS: ")
const matricular = (nome, nomeCurso, turma, nParcelas) => {
    let valorCurso = buscarCurso(nomeCurso);
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
    }


    estudantes.push(novaMatricula)
    //console.log(`\nO aluno ${novaMatricula.nome} foi matriculado com sucesso, no curso de ${novaMatricula.curso} na turma ${novaMatricula.turma}.\n`)
    return ` - O aluno(a) ${novaMatricula.estudante} foi matriculado(a) com sucesso, no curso de ${novaMatricula.curso} na turma ${novaMatricula.turma}.\n`
}
console.log(matricular("Anderson", "JavaScript", "Clarke", 8))
//console.log(matricular("Josevaldo", "HTML e CSS", "Elion", 1));
console.log(estudantes)



// 3 -Função parcelarCurso
// A escola fornece 3 tipos de desconto:
/* * Na compra de 3 cursos: 15% de desconto
* Na compra de 2 cursos: 10% de desconto
* Para pagamentos a vista e parcelado em 2x, é concedido mais 20% de desconto. */

/* Altere a função parcelarCurso para que ela receba um array e o número de parcelas.

O array deve se chamar carrinhoCursos e receber apenas os valores dos cursos adquiridos. Neste ponto do projeto o array ainda não é incrementado automaticamente, por isso esse passo pode ser feito manualmente. */

console.log(`CARRINHO DE COMPRAS E FORMAS DE PAGAMENTOS`);

// UTILIZANDO LACO, RETORNANDO O VALOR DO CURSO ATRAVEZ DO ARRAY 
/* const carrinhoCursos = [];
function parcelarCurso(arr) {
    for(i in cursos){
        if(cursos[i].curso.toLowerCase() === arr.toLowerCase()){
            return carrinhoCursos.push(cursos[i].valor)
        }
    }
};

parcelarCurso("javascript")
/* parcelarCurso("HTML e CSS");
parcelarCurso("APIs REST");

console.log(carrinhoCursos) */

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
parcelarCurso(buscarCurso("html e css"))
parcelarCurso(buscarCurso("javascript"))
console.log(parcelarCurso(buscarCurso("APIs REST"), 1))
console.log(`Valores individuais de cada curso adicionados no carrinho sem desconto: ${carrinhoCursos}`);


console.log(`\nRELATORIO ESTUDANTES`);

const relatorioEstudante = (nomeAluno) => {
    const buscarAluno = estudantes.find(element => element.estudante === nomeAluno)
    return `Aluno:${buscarAluno.estudante}\nTurma:${buscarAluno.turma}\nCurso:${buscarAluno.curso}\nValor Total:${buscarAluno.valor}\nValor Parcelas:${buscarAluno.parcelas}\nNº Parcelas:${buscarAluno.nParcelas}`
};

console.log(relatorioEstudante("Lashana Lynch"))

/*
const buscarCurso=(nomeCurso)=>{
    const busca = cursos.find(element=> element.curso.toLowerCase()===nomeCurso);
    return busca
} */













