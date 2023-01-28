window.labenu = {};

window.labenu.classes = [
  {
    turma: "Hipátia",
    curso: "JavaScript",
    inicio: "30/11/2022",
    termino: "30/01/2023",
    numAlunos: 150,
    periodo: "Noturno",
    concluida: false,
  },
  {
    turma: "Sibyla",
    curso: "JavaScript",
    inicio: "30/11/2022",
    termino: "30/12/2022",
    numAlunos: 200,
    periodo: "Integral",
    concluida: false,
  },
  {
    turma: "Curie",
    curso: "HTML e CSS",
    inicio: "15/09/2022",
    termino: "15/10/2022",
    numAlunos: 180,
    periodo: "Noturno",
    concluida: true,
  },
  {
    turma: "Zhenyi",
    curso: "HTML e CSS",
    inicio: "01/11/2022",
    termino: "01/01/2023",
    numAlunos: 80,
    periodo: "Integral",
    concluida: false,
  },
  {
    turma: "Clarke",
    curso: "HTML e CSS",
    inicio: "04/07/2022",
    termino: "04/09/2022",
    numAlunos: 200,
    periodo: "Noturno",
    concluida: true,
  },
  {
    turma: "Blackwell",
    curso: "APIsRest",
    inicio: "20/03/2022",
    termino: "20/06/2022",
    numAlunos: 100,
    periodo: "Integral",
    concluida: true,
  },
  {
    turma: "Elion",
    curso: "APIsRest",
    inicio: "12/01/2022",
    termino: "12/06/2022",
    numAlunos: 200,
    periodo: "Noturno",
    concluida: true,
  },
  {
    turma: "Burnell",
    curso: "APIsRest",
    inicio: "18/10/2022",
    termino: "18/04/2023",
    numAlunos: 90,
    periodo: "Integral",
    concluida: false,
  },
];

window.labenu.courses = [
  {
    curso: "HTML e CSS",
    descricao: "Curso de HTML e CSS do básico ao avançado",
    duracao: "1 mês",
    valor: 500,
  },
  {
    curso: "JavaScript",
    descricao: "Curso de JavaScript do básico ao avançado",
    duracao: "2 meses",
    valor: 900,
  },
  {
    curso: "APIsRest",
    descricao: "Curso de APIsRest do básico ao avançado",
    duracao: "6 meses",
    valor: 2000,
  },
];

window.labenu.students = [
  {
    estudante: "Chris Evans",
    turma: "Hipátia",
    curso: "JavaScript",
    valor: "900,00",
    nParcelas: 9,
    desconto: false,
    parcelas: 100,
  },
  {
    estudante: "Halle Berry",
    turma: "Burnell",
    curso: "APIsRest",
    valor: "2.000,00",
    nParcelas: 4,
    desconto: false,
    parcelas: 500,
  },
  {
    estudante: "Lashana Lynch",
    turma: "Zhenyi",
    curso: "HTML e CSS",
    valor: "500,00",
    nParcelas: 0,
    desconto: true,
    parcelas: 0,
  },
];


function menuOpen(){
    let menuMobile = document.querySelector('.menu-mobile');
    if(menuMobile.classList.contains('.open')){
        menuMobile.classList.remove('.open')
         document.querySelector('.menu-mobile__icon').src = "./mideas/icons8-cardápio-64.png"
    }else{
        menuMobile.classList.add('.open')
        document.querySelector('.menu-mobile__icon').src = "./mideas/icons8-cancelar-30.png" 
    }
}