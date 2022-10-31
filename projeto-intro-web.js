//começando o projeto introduzindo Arrays.

// const cursos = ["HTML e CSS", "JavaScript", "APIs REST"];
// const turmas = ["HC1", "JS1", "JS2", "REST1", "REST2"];
// const estudantes = ["João", "Ana", "Bruna"];

//Array Objeto dos cursos.
const cursos = [
{
    //Primeiro curso contendo só uma turma.
    nome: "HTML e CSS",
    descricao: "Aprenda a cria websites com HTML e CSS!",
    duracao: "6 meses",
    valor: 1000
},
{
    //Segundo curso contendo duas turmas.
    nome: "JavaScript",
    descricao: "Aprenda a linguagem de progamação mais utilizada no mundo!",
    duracao: "6 meses",
    valor: 1500
},
{
    //Terceiro curso contendo duas turmas.
    nome: "APIs REST",
    descricao: "Quer aprender arquitetura de software? temos um curso para você!",
    duracao: "6 meses",
    valor: 1500
}];

//Array Objeto das turmas.
const turmas = [
{
    //Turma HTML e CSS.
    nome: "Berners",
    curso: "HTML e CSS",
    inicio: "22/08/2022",
    termino: "22/02/2023",
    numalunos: 5,
    periodo: "6 meses",
    conclusao: false
},
{
    //Primeira turma JavaScript.
    nome: "Lee",
    curso: "JavaScript1",
    inicio: "22/08/2022",
    termino: "22/02/2023",
    numalunos: 5,
    periodo: "6 meses",
    conclusao: false
},
{
    //Segunda turma JavaScript.
    nome: "Eich",
    curso: "JavaScript2",
    inicio: "22/02/2022",
    termino: "22/08/2022",
    numalunos: 5,
    periodo: "6 meses",
    conclusao: true
},
{
    //Primeira turma API's REST.
    nome: "Rossun",
    curso: "APIs REST1",
    inicio: "22/12/2022",
    termino: "22/05/2023",
    numalunos: 5,
    periodo: "6 meses",
    conclusao: false
},
{
    //Segunda turma API's REST.
    nome: "King",
    curso: "APIs REST2",
    inicio: "22/01/2022",
    termino: "22/06/2023",
    numalunos: 5,
    periodo: "6 meses",
    conclusao: false
}];

//Array Objetos dos estudantes.
const estudantes = [
{
    //Turma de HTML e CSS
    nome: "João",
    turma: "Berners",
    curso: "HTML e CSS",
    valor: 1000,
    numParcelas: 4,
    desconto: 0,
    parcelas: 250
},
{
    nome: "Maria",
    turma: "Berners",
    curso: "HTML e CSS",
    valor: 1000,
    numParcelas: 2,
    desconto: 0.2,
    parcelas: 500
},
{
    nome: "Matheus",
    turma: "Berners",
    curso: "HTML e CSS",
    valor: 1000,
    numParcelas: 4,
    desconto: 0,
    parcelas: 250
},
{
    nome: "Bruna",
    turma: "Berners",
    curso: "HTML e CSS",
    valor: 1000,
    numParcelas: 4,
    desconto: 0,
    parcelas: 250
},
{
    nome: "Gilvan",
    turma: "Berners",
    curso: "HTML e CSS",
    valor: 1000,
    numParcelas: 4,
    desconto: 0,
    parcelas: 250
},
{
    //Primeira turma JavaScript
    nome: "Lucas",
    turma: "Lee",
    curso: "JavaScript1",
    valor: 1500,
    numParcelas: 6,
    desconto: 0,
    parcelas: 250
},
{
    nome: "Rosy",
    turma: "Lee",
    curso: "JavaScript1",
    valor: 1500,
    numParcelas: 2,
    desconto: 0.2,
    parcelas: 750
},
{
    nome: "Rodrigo",
    turma: "Lee",
    curso: "JavaScript1",
    valor: 1500,
    numParcelas: 6,
    desconto: 0,
    parcelas: 250
},
{
    nome: "Letíca",
    turma: "Lee",
    curso: "JavaScript",
    valor: 1500,
    numParcelas: 6,
    desconto: 0,
    parcelas: 250
},
{
    nome: "Roger",
    turma: "Lee",
    curso: "JavaScript1",
    valor: 1500,
    numParcelas: 6,
    desconto: 0,
    parcelas: 250
},
{
    //Segunda turma JavaScript.
    nome: "Miguel",
    turma: "Eich",
    curso: "JavaScript2",
    valor: 1500,
    numParcelas: 6,
    desconto: 0,
    parcelas: 250
},
{
    nome: "Nathan",
    turma: "Eich",
    curso: "JavaScript2",
    valor: 1500,
    numParcelas: 2,
    desconto: 0.2,
    parcelas: 750
},
{
    nome: "Josy",
    turma: "Eich",
    curso: "JavaScript2",
    valor: 1500,
    numParcelas: 6,
    desconto: 0,
    parcelas: 250
},
{
    nome: "Victor",
    turma: "Eich",
    curso: "JavaScript2",
    valor: 1500,
    numParcelas: 6,
    desconto: 0,
    parcelas: 250
},
{
    nome: "Luan",
    turma: "Eich",
    curso: "JavaScript2",
    valor: 1500,
    numParcelas: 6,
    desconto: 0,
    parcelas: 250
},
{
    //Primeira turma API's REST
    nome: "Jonathan",
    turma: "Rossun",
    curso: "APIs REST1",
    valor: 1500,
    numParcelas: 6,
    desconto: 0,
    parcelas: 250
},
{
    nome: "Tadeu",
    turma: "Rossun",
    curso: "APIs REST1",
    valor: 1500,
    numParcelas: 2,
    desconto: 0.2,
    parcelas: 750
},
{
    nome: "Miriam",
    turma: "Rossun",
    curso: "APIs REST1",
    valor: 1500,
    numParcelas: 6,
    desconto: 0,
    parcelas: 250
},
{
    nome: "Tatiana",
    turma: "Rossun",
    curso: "APIs REST1",
    valor: 1500,
    numParcelas: 6,
    desconto: 0,
    parcelas: 250
},
{
    nome: "Eduardo",
    turma: "Rossun",
    curso: "APIs REST1",
    valor: 1500,
    numParcelas: 6,
    desconto: 0,
    parcelas: 250
},
{
    //Segunda turma API's REST.
    nome: "Leonardo",
    turma: "King",
    curso: "APIS REST2",
    valor: 1500,
    numParcelas: 6,
    desconto: 0,
    parcelas: 250
},
{
    nome: "Mariana",
    turma: "King",
    curso: "APIs REST2",
    valor: 1500,
    numParcelas: 2,
    desconto: 0.2,
    parcelas: 750
},
{
    nome: "Aline",
    turma: "King",
    curso: "APIs REST2",
    valor: 1500,
    numParcelas: 6,
    desconto: 0,
    parcelas: 250
},
{
    nome: "Cinthia",
    turma: "King",
    curso: "APIs REST2",
    valor: 1500,
    numParcelas: 6,
    desconto: 0,
    parcelas: 250
},
{
    nome: "Joana",
    turma: "King",
    curso: "APIs REST2",
    valor: 1500,
    numParcelas: 6,
    desconto: 0,
    parcelas: 250
}];







