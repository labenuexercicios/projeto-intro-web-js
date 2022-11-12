const turmas = [ //"HC1", "JS1", "REST1", "REST2",
    {
        turma:"Hipatia",
        curso:"JavaScript",
        inicio:"30/11/2022",
        termino:"30/01/2023",
        numeroDeAlunos: 150,
        periodo:"Noturno",
        concluida: false
    },

    {
        turma:"Sibyla",
        curso:"JavaScript",
        inicio:"30/10/2022",
        termino:"30/12/2022",
        numeroDeAlunos: 200,
        periodo:"Integral",
        concluida: false
    },

    {
        turma:"Curie",
        Curso:"HTML e CSS",
        inicio:"15/09/2022",
        termino:"15/10/2022",
        numeroDeAlunos: 180,
        periodo:"Noturno",
        concluida: true
    },

    {
        turma:"Zhenyi",
        curso:"HTML e CSS",
        inicio:"01/11/2022",
        termino:"01/01/2023",
        numeroDeAlunos: 80,
        periodo:"integral",
        concluida: false
    },

    {
        turma:"Clarke",
        curso:"HTML e CSS",
        inicio:"04/07/2022",
        termino:"01/09/2022",
        numeroDeAlunos: 200,
        periodo:"Noturno" ,
        concluida:true 
    },

    {
        turma:"BlackWell",
        curso:"APIsREST" ,
        inicio:"20/03/2022",
        termino:"20/06/2022",
        numeroDeAlunos: 100,
        periodo:"Integral" ,
        concluida: true
    },

    {
        turma:"Elion" ,
        curso:"APIsREST" ,
        inicio:"12/01/2022" ,
        termino:"12/06/2022" ,
        numeroDeAlunos: 200,
        periodo:"Noturno" ,
        concluida: true
    },

    {
        turma:"Burnell" ,
        curso:"APIsREST" ,
        inicio:"18/10/2022" ,
        termino:"18/04/2022" ,
        numeroDeAlunos: 90,
        periodo:"Integral",
        concluida: false
    },

];

const cursos = [
    {
        curso:"HTML e CSS",
        descricao:"Curso voltado para criacao e estilizacao de paginas Web para iniciantes" ,
        duracao:"1 Mes",
        valor: 500 
    },

    {
        curso:"JavaScript",
        descricao:"Aprenda como desenvolver paginas aplicacoes Web com JavaScript completo para inicantes  ",
        duracao:"2 Meses",
        valor: 900 
    },

    {
        curso:"APIs REST",
        descricao:"Aprofunde ainda mais seus conhecimentos e conheca os principios do estilo arquitetonico REST e construa APIs de forma profissional",
        duracao:"6 Meses" ,
        valor: 2000 
    },


];

const estudantes = [
    {
        estudante:"Chris Evans",
        turma:"Hipatica",
        curso:"JavaScript",
        valor:"900",
        nParcelas: 9,
        desconto: false ,
        parcelas: 100 
    },

    {
        estudante:"Halle Barry",
        turma:"Burnell",
        curso:"APIsREST" ,
        valor:"2000" ,
        nParcelas: 4,
        desconto: false,
        parcelas: 500 
    },

    {
        estudante:"Lashana Lynch",
        turma:"Zhenyi",
        curso:"HTML e CSS",
        valor:"500",
        nParcelas: 1 ,
        desconto: true,
        parcelas: 500 
    },
];

function parcelarCurso(parcelas) {
    //const parcelas = estudantes[2].nParcelas 
    if(parcelas <= 2 && parcelas >= 1 ){
        desconto = cursos[1].valor - (cursos[1].valor * 0.2)
        return `O valor do curso ${cursos[1].curso} e de R$${cursos[1].valor}. A vista R$${desconto} ou em 2x de R$${desconto/2}. Foi concedido desconto de 20% `
        
        
    }else if(parcelas > 2 && parcelas < 9){
        return `O curso ${cursos[1].curso} ficou no valor de R$${cursos[1].valor}. Em ate 8x de R$${cursos[1].valor/8}`
    
    }else if(parcelas >= 9 ) {
        return `Parcelas maximas em 8x`
    
    }else{
        return `Digite um valor valido de parcelas !`
    }
};
console.log(parcelarCurso(4));


