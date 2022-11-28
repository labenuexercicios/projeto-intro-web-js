//PRIMEIRA SEMANA

//const turmas = ["HC1", "JS1", "JS2", "REST1", "REST2"]  //criado um array turmas
//const estudantes = ["Gabo", "Maurício", "Leonildo", "Anna Catarina"]  //criado um array estudantes
//const cursos = ["HTML e CSS", "JavaScript", "APIs REST" ]  //criado um array para os cursos


//------------------------//

const turmas = [
{
    turma: "Hipátia",
    curso: "JavaScript",
    inicio: "30/11/2022",  //ver como faz para usar o Date
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
    termino: "30/12/2022",
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
    concluida:false
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
    turma: "Blackwwell",
    curso: "APIsRest",
    inicio: "20/03/2022",
    termino: "20/06/2022",
    numeroDeAlunos: 100,
    periodo:"integral",
    concluida: true
},
{
    turma: "Elion",
    curso: "APIsRest",
    inicio: "12/01/2022",
    termino: "12/06/2022",
    numeroDeAlunos: 200,
    periodo:"noturno",
    concluida: true
},
{
    turma: "Burnell",
    curso: "APIsRest",
    inicio: "18/10/2022",
    periodo: "18/04/2023",
    numeroDeAlunos: 90,
    periodo: "integral",
    concluida: false
}
]

const cursos = [
{
    curso: "HTML e CSS",
    descricao: "Venha aprender HTML e CSS começando do zero!!!",
    duracao: "1 mês",
    valor: 500
},
{
    curso: "JavaScript",
    descricao: "Que tal um curso de JavaScript para começar a sua carreira de dev? Vem com a gente!!", 
    duracao: "2 meses",
    valor: 900
},
{
    curso: "APIsRest",
    descricao: "Vem aprender APIsRest para dar um up no seu currículo!", 
    duracao: "6 meses",
    valor: 2000
}
]
//pode ir adicionando mais estudantes
const estudantes = [
{
    estudante: "Chris Evans",
    turma: "Hipátia",
    curso: "JavaScript",
    valor: 900,
    nParcelas: 9,
    desconto: false, 
    parcelas: 100
},
{
    estudante: "Halle Berry",
    turma: "Burnell",
    curso: "APIsRest",
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
}
]

const buscarCurso=(nomeCurso)=>{
    const cursoSelecionado = []
    for(let strings of nomeCurso){
        for(let index in cursos){
            for(let element of cursos[index].curso){
                if(cursos[index].curso.toLowerCase() === strings.toLowerCase()){
                    cursoSelecionado.push(cursos[index])                             
                }
            }
        } 
    } 
    
    const cursoSelecionadoFiltrado = cursoSelecionado.filter((objeto, i)=> cursoSelecionado.indexOf(objeto)=== i);
    //console.log(cursoSelecionadoFiltrado) //--> pode apagar
    return cursoSelecionadoFiltrado 
    //na função cursoSelecionado.filter((objeto, i)=> cursoSelecionado.indexOf(objeto)=== i), o indexOf vai retornar o index do objeto no momento em que ele aparece pela primeira vez, na segunda vez pra frente em que ele aparece, ele retorna um resultado falso no valor de -1. O i é um contador, comaça no zero e vai seguindo, aí quando o valor desse contador for igual ao índice da primeira vez que o objeto aparece a condição indexOf() === i é satisfeita, então o objeto é salvo
}

//buscarCurso(["APIsRest", 'javascript', 'html e css'])


const acrescentaCurso=(nomeCurso, callback)=>{
    const carrinhoCursos = []
    const arrCursosSelecionados = callback(nomeCurso)
    for(let index in arrCursosSelecionados){
        carrinhoCursos.push(arrCursosSelecionados[index].valor)
    }
    console.log(carrinhoCursos)
    return carrinhoCursos
}


//acrescentaCurso(['javascript', 'html e css'], buscarCurso)

 
const parcelarCurso=(cursos, carrinhoCursos, nParcelas)=>{
    let valorTotal = 0 
    let valorDesconto = 0
    let valorComDesconto = 0
    let valorParcelasComDesconto = 0
    
    if(nParcelas === 1 || nParcelas === 2){
        switch (carrinhoCursos.length){
            case 1: 
                valorTotal = carrinhoCursos[0]
                valorDesconto = .2 * valorTotal;
                valorComDesconto = (valorTotal - valorDesconto).toFixed(2);
                valorParcelasComDesconto = (valorComDesconto / nParcelas).toFixed(2);
               
                console.log(`O curso de ${cursos} ficou no valor total de R$${valorComDesconto}. Em ${nParcelas}x de R$${valorParcelasComDesconto}. Foi concedido um desconto de 20%.`);
                break

            case 2:
                for(let index in carrinhoCursos){
                valorTotal += carrinhoCursos[index]
                };
 
                valorDesconto = valorTotal*.3;
                valorComDesconto = (valorTotal - valorDesconto).toFixed(2);
                valorParcelasComDesconto = (valorComDesconto / nParcelas).toFixed(2);
                
                console.log(`Os cursos de ${cursos} ficaram no valor total de R$${valorComDesconto}. Em ${nParcelas}x de R$${valorParcelasComDesconto}. Foi concedido um desconto de 20% e 10% sobre o valor total.`);
                break

            case 3:
                for(let index in carrinhoCursos){
                    valorTotal += carrinhoCursos[index]
                };
                valorDesconto = valorTotal*.3;
                valorComDesconto = (valorTotal - valorDesconto).toFixed(2);
                valorParcelasComDesconto = (valorComDesconto / nParcelas).toFixed(2);

                console.log(`Os cursos de ${cursos} ficaram no valor total de R$${valorComDesconto}. Em ${nParcelas}x de R$${valorParcelasComDesconto}. Foi concedido um desconto de 20% e 10% sobre o valor total.`);
                break

            default:
                console.log('Confira os cursos solicitados.');
                break           
        }
    }else{
        switch(carrinhoCursos.length){
            case 1:
                for(let index in carrinhoCursos){
                    valorTotal += carrinhoCursos[index]
                    };
                    console.log(`O curso de ${cursos} ficou no valor total de R$${valorTotal}. Não há desconto para ser aplicado.`);
                    break
                
        case 2:
            for(let index in carrinhoCursos){
                valorTotal += carrinhoCursos[index]
            };
            valorDesconto = valorTotal * .1;
            valorComDesconto = (valorTotal - valorDesconto).toFixed(2);
            valorParcelasComDesconto = (valorComDesconto / nParcelas).toFixed(2);

            console.log(`Os cursos de ${cursos} ficaram no valor total de R$${valorComDesconto}. Em ${nParcelas}x de R$${valorParcelasComDesconto}. Foi concedido um desconto de 10% sobre o valor total.`);
            break
                
        case 3:
            for(let index in carrinhoCursos){
                valorTotal += carrinhoCursos[index]
            };
            valorDesconto = valorTotal * .15;
            valorComDesconto = (valorTotal - valorDesconto).toFixed(2);
            valorParcelasComDesconto = (valorComDesconto / nParcelas).toFixed(2);

            console.log(`Os cursos de ${cursos} ficaram no valor total de R$${valorComDesconto}. Em ${nParcelas}x de R$${valorParcelasComDesconto}. Foi concedido um desconto de 20% sobre o valor total.`);
            break

            default:
                console.log('Confira os cursos solicitados.');
                break   
        }
    }
} 

/* 
const arrCursos = [900, 200]
parcelarCurso("JavaScript, APIsRest", arrCursos, 2)  

const arrCursos2 = [500, 900, 200]
parcelarCurso("HTML e CSS, JavaScript, APIsRest", arrCursos2, 1)
*/


const buscarTurma = (nomeTurma)=>{
    const retornaTurma =  turmas.filter((element)=> element.turma.toLowerCase() === nomeTurma.toLowerCase())

    retornaTurma.length > 0?
    console.log(retornaTurma):console.log('Turma não encontrada!')
}

/*
//Teste da função
buscarTurma('curie')
buscarTurma('currrie')
buscarTurma('Hipátia') 
buscarTurma('HIPÁTIA') 
*/

const buscarEstudante=(nomeEstudante)=>{
    for(let index in estudantes){
        for(let element of estudantes[index].estudante){
            if(estudantes[index].estudante.toLowerCase() === nomeEstudante.toLowerCase()){
                //console.log(estudantes[index]) //--> pode apagr
                return estudantes[index]
            }
        }
    }
}


const retornarEstudante=(nomeEstudante)=>{

    const retornoEstudante = estudantes.filter(element =>
        element.estudante.toLowerCase().indexOf(nomeEstudante.toLowerCase())> -1)

        retornoEstudante.length>0?
        console.log(retornoEstudante) : console.log('Aluno não encontrado')
}

/* 
//Teste para chamar função
retornarEstudante('ha')
*/

/* 
//Teste da função
buscarEstudante('Chris Evans') 
buscarEstudante('ChRis EVAns') 
buscarEstudante('halle berry')
 */
const relatorioEstudante=(nomeEstudante, callback)=>{
    const relatorio = {
        aluno: callback(nomeEstudante).estudante,
        turma: callback(nomeEstudante).turma,
        curso: callback(nomeEstudante).curso,
        valorTotal: callback(nomeEstudante).valor,
        valorParcelas: callback(nomeEstudante).parcelas,
        nParcelas: callback(nomeEstudante).nParcelas
    }
    console.log(`Aluno: ${relatorio.aluno}\nTurma: ${relatorio.turma}\nCurso: ${relatorio.curso}\nValor Toral: ${relatorio.valorTotal}\nValor Parcelas: ${relatorio.valorParcelas}\nNº Parcelas: ${relatorio.nParcelas}`)
    return 
}

relatorioEstudante('halle berry', buscarEstudante)




const matricular=(nomeAluno, turmaAluno, cursoAluno)=>{
    const novoAluno = {
        estudante: nomeAluno,
        turma: turmaAluno,
        curso: cursoAluno
    }
    estudantes.push(novoAluno)
    console.log(`Aluno Matriculado\nNome: ${nomeAluno}\nCurso: ${cursoAluno}\nTurma: ${turmaAluno}`)
}

/* 
//Teste da chamada da função
matricular('Júlia Borges', 'Hipátia', 'JavaScript')
*/


