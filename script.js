
const turmas = [
    {
        turma: "Hipatia",
        curso: "JavaScript",
        inicio: "30/11/2022",
        termino: "30/01/2023",
        numeroDeAlunos: 150,
        periodo: "noturno",
        concluido: false
    },
    {
        turma: "Sibyla",
        curso: "JavaScript",
        inicio: "30/10/2022",
        termino: "30/12/2022",
        numeroDeAlunos: 200,
        periodo: "integral",
        concluido: false
    },
    {
        turma: "Curie",
        curso: "HTML e CSS",
        inicio: "15/09/2022",
        termino: "15/10/2022",
        numeroDeAlunos: 180,
        periodo: "noturno",
        concluido: true
    },
    {
        turma: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "01/11/2022",
        termino: "01/01/2023",
        numeroDeAlunos: 80,
        periodo: "integral",
        concluido: false
    },
    {
        turma: "Clarke",
        curso: "HTML e CSS",
        inicio: "04/07/2022",
        termino: "04/09/2022",
        numeroDeAlunos: 200,
        periodo: "noturno",
        concluido: true
    },
    {
        turma: "Blackwell",
        curso: "APIsRest",
        inicio: "20/03/2022",
        termino: "20/06/2022",
        numeroDeAlunos: 100,
        periodo: "integral",
        concluido: true
    },
    {
        turma: "Elion",
        curso: "APIsRest",
        inicio: "12/01/2022",
        termino: "12/06/2022",
        numeroDeAlunos: 200,
        periodo: "noturno",
        concluido: true
    },
    {
        turma: "Burnell",
        curso: "APIsRest",
        inicio: "18/10/2022",
        termino: "18/04/2023",
        numeroDeAlunos: 90,
        periodo: "integral",
        concluido: false
    }
];

const cursos = [
    {
        curso: "HTML e CSS",
        descrição: "Curso de HTML e CSS do básico ao avançado!",
        duração: "1 mês",
        valor: 500
    },
    {
        curso: "JavaScript",
        descrição: "Curso de Java Script do básico ao avançado!",
        duração: "2 mês",
        valor: 900
    },
    {
        curso: "APIsREST",
        descrição: "Curso de APIsREST do básico ao avançado!",
        duração: "6 mês",
        valor: 2000
    }
];

const estudantes = [
    {
        estudante: "Cris Evans",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: 900,
        nParcelas: 9,
        desconto: false,
        vParcelas: 100
    },
    {
        estudante: "Halle Berry",
        turma: "Burnell",
        curso: "APIsRest",
        valor: 2000,
        nParcelas: 4,
        desconto: false,
        vParcelas: 500
    },
    {
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: 500,
        nParcelas: 1,
        desconto: true,
        vParcelas: 500
    },
];

/* const parcelarCurso = (parcelas) => {
    
    if(parcelas<=1&&parcelas>=2){
        const valorComDesconto = (meusCursos[1].valor);
        
        return `O Valor do curso com desconto de 20%, será de R$ ${(valorComDesconto)*0.8} ou em duas parcelas de R$ ${((valorComDesconto)*0.8)/2}`

    }else if(parcelas<2&&parcelas<=10){
       const valorSemDesconto = (meusCursos[1].valor)
        
       return `O valor do curso é de R$ ${valorSemDesconto} podendo ser parcelado em ${parcelas} vezes de R$ ${(valorSemDesconto)/parcelas}`
    }else{
        console.log("Parcelas inválidas")
    }

}
 */

const buscarCursos = (nomeCurso) => {
    const busca = cursos.filter((cadaCurso) => cadaCurso.curso.toLowerCase().includes(nomeCurso.toLowerCase())) 
        return busca.length>0 ? busca : "Curso não encontrado"      
    
}
/* const buscarCursos = (nomeCurso) => {
    for (cadaCurso of cursos) {
        if (cadaCurso.curso === nomeCurso) {
            return cadaCurso
        }
    }
} */
console.log(buscarCursos("p"))
/* 
Modifique a função buscarTurma para que a busca ocorra utilizando o método filter() e mostre no console o resultado, caso a turma não seja encontrada mostre no console a mensagem "Turma não encontrada!". 

Dica: Tente utilizar o ternário nesta função */

const buscaTurma = (nomeTurma) => {
   const busca = turmas.filter((cadaTurma)=>
    cadaTurma.turma.toLowerCase().includes(nomeTurma.toLowerCase()))
    return busca.length>0 ? busca : "Turma não encontrada"    
}    
 /* const buscaTurma = (nomeTurma) => {
       for (cadaTurma of turmas) {
            if (cadaTurma.turma === nomeTurma) {
            return cadaTurma
        }
    } 
}   */
console.log (buscaTurma ("bur"))

const burcarEstudante = (nomeEstudante) => {
    const abrevNome = estudantes.filter((nome) => 
    nome.estudante.toLowerCase().includes(nomeEstudante.toLowerCase()))
    return abrevNome.length>0 ? abrevNome : "Aluno não encontrado"
} 

/*  const buscarEstudante = (nomeEstudante) => {
    for (cadaEstudante of estudantes) {        
        if (cadaEstudante.estudante === nomeEstudante) {
            return cadaEstudante
        }else{
            console.log("Aluno não encontrado!")
        }
    }
}  */
//console.log(burcarEstudante("Las")) //Cris Evans , Lashana Lynch , Halle Berry

/* Crie uma função para que os valores dos cursos sejam adicionados ao array carrinhoCursos, a função deve receber o nome do curso por parâmetro e adicionar o valor do curso no array carrinhoCursos.  */

const carrinhoCursos = []

const valoresCurso = (nomeCurso) => {
    let infCurso = buscarCursos(nomeCurso)
    carrinhoCursos.push(infCurso.valor)
    return carrinhoCursos
}

const parcelarCurso = (carrinhoCursos, parcelas) => {
    let valorTotal=0
    let valorParcela
    let desconto = 0

    if(carrinhoCursos.length>1){
     switch (carrinhoCursos.length) {
        case 3:
            desconto = 0.85
            break;
        case 2:
            desconto = 0.9
            break;
    
        default:
            desconto = 0
            break;
    }
    //console.log(desconto)
    for (let valor of carrinhoCursos){
        valorTotal = valorTotal + valor
        console.log(valorTotal)
    }
    //console.log(valorTotal)
    valorTotal = valorTotal*desconto
    }else {
        valorTotal = carrinhoCursos[0]
    }
//console.log(valorTotal)


    if (parcelas <= 2) {
        valorTotal = valorTotal*0.8
        valorParcela = valorTotal / parcelas

        console.log(`O curso ficou no valor total de ${valorTotal} reais ou em ${parcelas} de ${valorParcela.toFixed(2)} reais. Foi concedido desconto de 20% `)
    } else {
        valorTotal = valorTotal
        valorParcela = valorTotal / parcelas

        console.log(`O curso ficou no valor de ${valorTotal} ou em ${parcelas} de ${valorParcela.toFixed(2)} reais`)
    }
}
//console.log(valoresCurso('APIsREST'))//"HTML e CSS", "JavaScript"
/* console.log(valoresCurso('HTML e CSS'))
console.log(valoresCurso('JavaScript')) */
//parcelarCurso(carrinhoCursos, 2)

const matricular =(nome, curso, turma, numParcela) => {

    let valorCurso = buscarCursos(curso)
    //console.log(valorCurso)
    let valorTotal = 0
    let valorPorParcela = 0
    let desconto =false

    if(numParcela>0 && numParcela<=2){
        desconto=true
        valorTotal = valorCurso.valor *0.8 /* - (valorCurso.valor*0.2) */
        valorPorParcela = valorTotal / numParcela
    }else {
        valorTotal = valorCurso.valor
        valorPorParcela = valorTotal/numParcela
    }

    const novoAluno ={
        estudante: nome,
        turma: turma,
        curso: curso,
        valor: valorCurso.valor ,
        nParcelas: numParcela,
        desconto: desconto,
        valorComDesconto: valorTotal,
        vParcelas: valorPorParcela
    }
    estudantes.push(novoAluno)

    //console.log(estudantes)

    //console.log(`Aluno Mariculado \n nome: ${nome} \n Curso: ${curso} \n Turma: ${turma} \n Valor do curso = ${valorCurso.valor} \n Número de parcelas ${numParcela} \n Desconto concedido = ${desconto}\n valor total com desconto = ${valorTotal} \n Valor da parcela = ${valorPorParcela}`)


}

matricular("Bruno", "APIsREST", "Hipatica", 2)

//console.log(estudantes)

/* const carrinhoCursos = []

const valoresCurso = (nomeCurso) => {
    let infCurso = buscarCursos(nomeCurso)
    carrinhoCursos.push(infCurso.valor)
    return carrinhoCursos
} */

const relatorioEstudante = (nomeEstudante) =>{
    let infEstudante = buscarEstudante(nomeEstudante)
    return `Aluno: ${infEstudante.estudante}\nTurma: ${infEstudante.turma}.\nCurso: ${infEstudante.curso}.\nO valor total: ${infEstudante.valor}\nValor da parcela :${infEstudante.vParcelas}.\nNúmero de parcelas: ${infEstudante.nParcelas}.`
}
//console.log(relatorioEstudante("Lashana Lynch"))
//estudante: "Halle Berry",Lashana Lynch