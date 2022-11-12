//PRIMEIRA SEMANA

//const turmas = ["HC1", "JS1", "JS2", "REST1", "REST2"]  //criado um array turmas
//const estudantes = ["Gabo", "Maurício", "Leonildo", "Anna Catarina"]  //criado um array estudantes
//const cursos = ["HTML e CSS", "JavaScript", "APIs REST" ]  //criado um array para os cursos


//SEGUNDA SEMANA (OBJETOS)

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
    descricao: "Que tal um curso de JavaScript para começar a sua carreira de dev? Vem com a gente!!", //completar esse
    duracao: "2 meses",
    valor: 900
},
{
    curso: "APIsRest",
    descricao: "Vem aprender APIsRest para dar um up no seu currículo!", //completar esse
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
    desconto: false, //booleano
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

//TERCEIRA SEMANA (CONDICIONAIS)

function parcelarCurso(nParcelas, valor, curso){
if(nParcelas === 1 || nParcelas === 2){
    valorDesconto = .2 * valor
    valorComDesconto = valor - valorDesconto
    valorParcelasComDesconto = valorComDesconto / nParcelas
    
    console.log(`O curso de ${curso} tem um valor total de R$${valor.toFixed(2)}. Mas você ganhou um desconto de 20%, que equivale a R$${valorDesconto.toFixed(2)}. Então seu curso custará um total de R$${valorComDesconto.toFixed(2)}, em ${nParcelas}x de R${valorParcelasComDesconto.toFixed(2)}.`)
}else{
    valorParcelasSemDesconto = valor / nParcelas
    console.log(`Seu curso de ${curso} sairá em R$${valor.toFixed(2)}, pago em ${nParcelas}x de R$${valorParcelasSemDesconto.toFixed(2)}`)
}
}

parcelarCurso(2, cursos[1].valor, cursos[1].curso)
parcelarCurso(4, cursos[0].valor, cursos[0].curso)