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
    duracao: "1 mês",
    valor: 500
},
{
    //Segundo curso contendo duas turmas.
    nome: "JavaScript",
    descricao: "Aprenda a linguagem de progamação mais utilizada no mundo!",
    duracao: "2 meses",
    valor: 900
},
{
    //Terceiro curso contendo duas turmas.
    nome: "APIs REST",
    descricao: "Quer aprender arquitetura de software? temos um curso para você!",
    duracao: "6 meses",
    valor: 2000
}];

//Array Objeto das turmas.
const turmas = [
{
    //Primeira turma HTML e CSS.
    nome: "Curie",
    curso: "HTML e CSS",
    inicio: "15/09/2022",
    termino: "15/10/2022",
    numalunos: 180,
    periodo: "Noturno",
    conclusao: true
},
{
    //Segunda turma HTML e CSS.
    nome: "Zhenyi",
    curso: "HTML e CSS",
    inicio: "01/11/2022",
    termino: "01/01/2023",
    numalunos: 80,
    periodo: "Integral",
    conclusao: false
},
{
    //Terceira turma HTML e CSS.
    nome: "Clarke",
    curso: "HTML e CSS",
    inicio: "04/07/2022",
    termino: "04/09/2023",
    numalunos: 200,
    periodo: "Noturno",
    conclusao: true
},
{
    //Primeira turma JavaScript.
    nome: "Hipátia",
    curso: "JavaScript",
    inicio: "30/11/2022",
    termino: "30/01/2023",
    numalunos: 150,
    periodo: "Noturno",
    conclusao: false
},
{
    //Segunda turma JavaScript.
    nome: "Sibyla",
    curso: "JavaScript",
    inicio: "30/10/2022",
    termino: "30/12/2022",
    numalunos: 200,
    periodo: "Integral",
    conclusao: false
},
{
    //Primeira turma API's REST.
    nome: "Blackwell",
    curso: "APIs REST",
    inicio: "20/03/2022",
    termino: "20/06/2023",
    numalunos: 100,
    periodo: "Integral",
    conclusao: true
},
{
    //Segunda turma APIs REST.
    nome: "Burnell",
    curso: "APIs REST",
    inicio: "18/10/2022",
    termino: "18/04/2023",
    numalunos: 90,
    periodo: "Integral",
    conclusao: false
},
{
    //Terceira turma API's REST.
    nome: "Elion",
    curso: "APIs REST",
    inicio: "12/01/2022",
    termino: "12/06/2022",
    numalunos: 200,
    periodo: "Noturno",
    conclusao: true
}];

//Array Objetos dos estudantes.
const estudantes = [
{
    //Primeira turma de HTML e CSS
    nome: "Lucas Breia",
    turma: "Curie",
    curso: "HTML e CSS",
    valor: 500,
    numParcelas: 2,
    desconto: 0,
    parcelas: 250
},
{
    nome: "Maria Francisca",
    turma: "Curie",
    curso: "HTML e CSS",
    valor: 500,
    numParcelas: 0,
    desconto: 0.2,
    parcelas: 500
},
{
    nome: "Matheus Aguiar",
    turma: "Curie",
    curso: "HTML e CSS",
    valor: 500,
    numParcelas: 4,
    desconto: 0,
    parcelas: 125
},
{
    nome: "Bruna Lopes",
    turma: "Curie",
    curso: "HTML e CSS",
    valor: 500,
    numParcelas: 0,
    desconto: 0.2,
    parcelas: 500
},
{
    nome: "Gilvan Epitácio",
    turma: "Curie",
    curso: "HTML e CSS",
    valor: 500,
    numParcelas: 4,
    desconto: 0,
    parcelas: 125
},
{
    //Segunda turma de HTML e CSS
    nome: "Lashana Lynch",
    turma: "Zhenyi",
    curso: "HTML e CSS",
    valor: 500,
    numParcelas: 0,
    desconto: 0.2,
    parcelas: 500
},
{
    nome: "Maria Antônia",
    turma: "Zhenyi",
    curso: "HTML e CSS",
    valor: 500,
    numParcelas: 2,
    desconto: 0,
    parcelas: 250
},
{
    nome: "Matheus Henrique",
    turma: "Zhenyi",
    curso: "HTML e CSS",
    valor: 500,
    numParcelas: 4,
    desconto: 0,
    parcelas: 125
},
{
    nome: "Bruna Lorena",
    turma: "Zhenyi",
    curso: "HTML e CSS",
    valor: 500,
    numParcelas: 4,
    desconto: 0,
    parcelas: 125
},
{
    nome: "Heleno Breia",
    turma: "Zhenyi",
    curso: "HTML e CSS",
    valor: 500,
    numParcelas: 4,
    desconto: 0,
    parcelas: 125
},
{
    //Terceira turma de HTML e CSS
    nome: "Tatiana Blaser",
    turma: "Clarke",
    curso: "HTML e CSS",
    valor: 500,
    numParcelas: 0,
    desconto: 0.2,
    parcelas: 500
},
{
    nome: "Julia Antônia",
    turma: "Clarke",
    curso: "HTML e CSS",
    valor: 500,
    numParcelas: 2,
    desconto: 0,
    parcelas: 250
},
{
    nome: "Marcos Henrique",
    turma: "Clarke",
    curso: "HTML e CSS",
    valor: 500,
    numParcelas: 4,
    desconto: 0,
    parcelas: 125
},
{
    nome: "Monique Lorena",
    turma: "Clarke",
    curso: "HTML e CSS",
    valor: 500,
    numParcelas: 4,
    desconto: 0,
    parcelas: 125
},
{
    nome: "Diego Breia",
    turma: "Clarke",
    curso: "HTML e CSS",
    valor: 500,
    numParcelas: 4,
    desconto: 0,
    parcelas: 125
},
{
    //Primeira turma de JavaScript
    nome: "Chris Evans",
    turma: "Hipátia",
    curso: "JavaScript",
    valor: 900,
    numParcelas: 9,
    desconto: 0,
    parcelas: 100
},
{
    nome: "Janete Antônia",
    turma: "Hipátia",
    curso: "JavaScript",
    valor: 900,
    numParcelas: 2,
    desconto: 0,
    parcelas: 450
},
{
    nome: "Lucas Henrique",
    turma: "Hipátia",
    curso: "JavaScript",
    valor: 900,
    numParcelas: 3,
    desconto: 0,
    parcelas: 300
},
{
    nome: "Karen Lorena",
    turma: "Hipátia",
    curso: "JavaScript",
    valor: 900,
    numParcelas: 4,
    desconto: 0,
    parcelas: 225
},
{
    nome: "Eliana Breia",
    turma: "Hipátia",
    curso: "JavaScript",
    valor: 900,
    numParcelas: 4,
    desconto: 0,
    parcelas: 225
},
{
    //Segunda turma de JavaScript
    nome: "Tony Stark",
    turma: "Sibyla",
    curso: "JavaScript",
    valor: 900,
    numParcelas: 9,
    desconto: 0,
    parcelas: 100
},
{
    nome: "Soraya Antônia",
    turma: "Sibyla",
    curso: "JavaScript",
    valor: 900,
    numParcelas: 2,
    desconto: 0,
    parcelas: 450
},
{
    nome: "Thiago Henrique",
    turma: "Sibyla",
    curso: "JavaScript",
    valor: 900,
    numParcelas: 3,
    desconto: 0,
    parcelas: 300
},
{
    nome: "Manu Lorena",
    turma: "Sibyla",
    curso: "JavaScript",
    valor: 900,
    numParcelas: 4,
    desconto: 0,
    parcelas: 225
},
{
    nome: "Talita Breia",
    turma: "Sibyla",
    curso: "JavaScript",
    valor: 900,
    numParcelas: 4,
    desconto: 0,
    parcelas: 225
},
{
    //Primeira turma de APIs REST
    nome: "Halle Berry",
    turma: "Burnell",
    curso: "APIs REST",
    valor: 2000,
    numParcelas: 4,
    desconto: 0,
    parcelas: 500
},
{
    nome: "Luana Antônia",
    turma: "Burnell",
    curso: "APIs REST",
    valor: 2000,
    numParcelas: 2,
    desconto: 0,
    parcelas: 1000
},
{
    nome: "Luan Henrique",
    turma: "Burnell",
    curso: "APIs REST",
    valor: 2000,
    numParcelas: 4,
    desconto: 0,
    parcelas: 500
},
{
    nome: "Karen Lorena",
    turma: "Burnell",
    curso: "APIs REST",
    valor: 2000,
    numParcelas: 0,
    desconto: 0.2,
    parcelas: 2000
},
{
    nome: "Elisa Breia",
    turma: "Burnell",
    curso: "APIs REST",
    valor: 2000,
    numParcelas: 4,
    desconto: 0,
    parcelas: 500
},
{
    //Segunda turma de APIs REST
    nome: "Ronaldo de Assis",
    turma: "Blackwell",
    curso: "APIs REST",
    valor: 2000,
    numParcelas: 4,
    desconto: 0,
    parcelas: 500
},
{
    nome: "Fred Mércury",
    turma: "Blackwell",
    curso: "APIs REST",
    valor: 2000,
    numParcelas: 2,
    desconto: 0,
    parcelas: 1000
},
{
    nome: "Luis Gustavo",
    turma: "Blackwell",
    curso: "APIs REST",
    valor: 2000,
    numParcelas: 4,
    desconto: 0,
    parcelas: 500
},
{
    nome: "Michael Jackson",
    turma: "Blackwell",
    curso: "APIs REST",
    valor: 2000,
    numParcelas: 0,
    desconto: 0.2,
    parcelas: 2000
},
{
    nome: "Neymar Júnior",
    turma: "Blackwell",
    curso: "APIs REST",
    valor: 2000,
    numParcelas: 4,
    desconto: 0,
    parcelas: 500
},
{
    //Terceira turma de APIs REST
    nome: "Lionel Messi",
    turma: "Elion",
    curso: "APIs REST",
    valor: 2000,
    numParcelas: 4,
    desconto: 0,
    parcelas: 500
},
{
    nome: "Cristiano Ronaldo",
    turma: "Elion",
    curso: "APIs REST",
    valor: 2000,
    numParcelas: 2,
    desconto: 0,
    parcelas: 1000
},
{
    nome: "Tom Holland",
    turma: "Elion",
    curso: "APIs REST",
    valor: 2000,
    numParcelas: 4,
    desconto: 0,
    parcelas: 500
},
{
    nome: "Tom Cruise",
    turma: "Elion",
    curso: "APIs REST",
    valor: 2000,
    numParcelas: 0,
    desconto: 0.2,
    parcelas: 2000
},
{
    nome: "Billie Eilish",
    turma: "Elion",
    curso: "APIs REST",
    valor: 2000,
    numParcelas: 4,
    desconto: 0,
    parcelas: 500
}];










