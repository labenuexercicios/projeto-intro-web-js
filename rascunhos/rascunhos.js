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


/* for(i in cursos){
       if(cursos[i].curso.toLowerCase() === nomeCurso.toLowerCase()){
           return cursos[i]
       }
   }  */


    /* for(cadaCurso of cursos){
       if(cadaCurso.curso.toLowerCase() === nomeCurso.toLowerCase()){
           return cadaCurso
       }
   } 
   return "Curso nao encontrado" */


   
    // usando FIND
    // const findTurma = turmas.find((element) => {
    //     if (element.turma.toLowerCase().includes(inputTurma.toLowerCase())){ 
    //         return element
    //     }  

    // });
    //  return findTurma.length > 0 ? console.log(findTurma) : console.log(turmas);

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

     //console.log(`\nO aluno ${novaMatricula.nome} foi matriculado com sucesso, no curso de ${novaMatricula.curso} na turma ${novaMatricula.turma}.\n`)

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

/*
const buscarCurso=(nomeCurso)=>{
    const busca = cursos.find(element=> element.curso.toLowerCase()===nomeCurso);
    return busca
} */

// console.log(relatorioEstudante("Lashana Lynch"))
// return `Aluno:${buscarAluno.estudante}\nTurma:${buscarAluno.turma}\nCurso:${buscarAluno.curso}\nValor Total:${buscarAluno.valor}\nValor Parcelas:${buscarAluno.parcelas}\nNº Parcelas:${buscarAluno.nParcelas}`

// / ====================================================================================

// console.log("\nBUSCAR ESTUDANTE: ")

// const buscarEstudante = (aluno) => {
//     const findAluno = estudantes.find((element) => element.estudante.toLowerCase().includes(aluno.toLowerCase()));
//     return !findAluno ? "Aluno nao encontrado" : findAluno;

// };

// console.log(buscarEstudante("ha"));

// ====================================================================================


// console.log("\nLISTA ATUALIZADA DE ALUNOS COM NOVOS MATRICULADOS: ")
// const matricular = (nome, nomeCurso, turma, nParcelas) => {
//     let valorCurso = buscarCurso(nomeCurso);
//     let valorTotal = 0;
//     let valorParcela = 0;
//     let desconto = false;

//     if (nParcelas > 0 && nParcelas <= 2) {
//         valorTotal = valorCurso.valor - (valorCurso.valor * 0.2)
//         valorParcela = valorTotal / nParcelas
//         desconto = true
//     } else {
//         valorTotal = valorCurso.valor
//         valorParcela = valorTotal / nParcelas
//     };

//     novaMatricula =
//     {
//         estudante: nome,
//         turma: turma,
//         curso: nomeCurso,
//         valor: valorCurso.valor,
//         nParcelas: nParcelas,
//         desconto: desconto,
//         valorParcela: valorParcela
//     }


//     estudantes.push(novaMatricula)

//     return ` - O aluno(a) ${novaMatricula.estudante} foi matriculado(a) com sucesso, no curso de ${novaMatricula.curso} na turma ${novaMatricula.turma}.\n`
// }
// console.log(matricular("Anderson", "JavaScript", "Clarke", 8))
// //console.log(matricular("Josevaldo", "HTML e CSS", "Elion", 1));
// console.log(estudantes)


// const containerTitulo = document.getElementById("container2-item");

//     const addTituloMatricula = document.createElement(`div`);
//     addTituloMatricula.setAttribute("class", "container2-titulo")
//     addTituloMatricula.innerHTML=`
//     <p>Aluno Matriculado</p>
//     <img src="./assets/check.png" alt="aluno martriculado">`

//     containerTitulo.insertAdjacentElement(`afterbegin`, addTituloMatricula);

//     const containerMatricula = document.getElementById("dados-nova-matricula");

//     const addNovoAluno = document.createElement("ul");

//     addNovoAluno.innerHTML = `
//     <li>Estudante:${nome}</li>
//     <li>Turma:${turma}</li>
//     <li>Curso:${nomeCurso}</li>
//     <li>Valor${valorCurso.valor}</li>
//     <li>nParcelas:${nParcelas}</li>
//     <li>Desconto:${desconto}</li>
//     <li>ValorParcelas:${valorParcela}</li>`

//     containerMatricula.insertAdjacentElement(`beforeend`, addNovoAluno);