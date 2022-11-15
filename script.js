const cursos = [
    {
        nome: "HTML e CSS",
        descricao:"",
        duracao:"1 mês",
        valor: 500
    },
    {
        nome: "JavaScript",
        descricao:"",
        duracao: "2 meses",
        valor: 900
    },
    {
        nome:"APIs Rest",
        descricao:"",
        duracao: "6 meses",
        valor: 2000
    }
];
const turmas = [
    {
        turma:"Hipátia",
        curso: "JavaScript", 
        inicio: new Date("2022,11,30") ,
        termino: new Date ("2022,01,30") ,
        numeroDeAlunos: 150,
        periodo: "Noturno",
        concluida: false


    },
    {
        turma:"Sibyla",
        curso: "JavaScript", 
        inicio: new Date("2022-10-30") ,
        termino: new Date("2022-12-30") ,
        numeroDeAlunos: 200,
        periodo: "Integral",
        concluida: false
    },
    {
        turma:"Curie",
        curso: "HTML e CSS", 
        inicio: new Date ("2022-09-15") ,
        termino: new Date("2022-10-15") ,
        numeroDeAlunos: 180,
        periodo: "Noturno",
        concluida: true
    },
    {
        turma:"Zhenyi",
        curso: "HTML e CSS", 
        inicio: new Date("2022-11-01") ,
        termino: new Date("202-01-01") ,
        numeroDeAlunos: 80,
        periodo: "integral",
        concluida: false
    },
    {
        turma:"Clarke",
        curso: "HTML e CSS", 
        inicio: new Date("2022-07-04") ,
        termino: new Date("2022-09-04") ,
        numeroDeAlunos: 200,
        periodo: "Noturno",
        concluida: true
    },
    {
        turma:"Blackwell",
        curso: "APIsRes", 
        inicio: new Date("2022-03-20") ,
        termino: new Date("2023-06-20") ,
        numeroDeAlunos: 100,
        periodo: "integral",
        concluida: true
    },
    {
        turma:"Elion",
        curso: "APIsRes", 
        inicio: new Date ("2022-01-12") ,
        termino: new Date("2022-06-12") ,
        numeroDeAlunos: 200,
        periodo: "Noturno",
        concluida: true
    },
    {
        turma:"Burnell",
        curso: "APIsRes", 
        inicio: new Date("2022-10-18") ,
        termino: new Date("2023-04-18") ,
        numeroDeAlunos: 90,
        periodo: "integral",
        concluida: false
    }
    
];
const estudantes = [
    {
        estudante:  "Chris Evans",
        turma: "Hipátia",
        curso: "JavaScript",
        valor:  "900",
        nParcelas: 9,
        desconto:   false,
        parcelas: 100
    },
    {
        estudante:  "Halle Berry",
        turma: "Burnel",
        curso: "APIsRest",
        valor:  "2000",
        nParcelas: 4,
        desconto:   false,
        parcelas: 500
    },
    {
        estudante:  "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor:  "500",
        nParcelas: 1,
        desconto: true,
        parcelas: 500
    }
];
   function parcelarCursos(parcela){
    if(parcela <= 2){
        const desc = 0.2
       const par= cursos[2].valor * desc
        console.log(`O curso ${cursos[1].nome} ficou no valor total R$ ${par}. Em ${estudantes[2].nParcelas}x de R$ ${par}. Foi concedido desconto de 20% `) 
    }else{
        console.log(`O curso ${cursos[1].nome} ficou no valor total de R$ ${estudantes[0].valor}. Em ${estudantes[0].nParcelas}x de R$ ${estudantes[0].parcelas} `)
    }
}
console.log(turmas)
parcelarCursos(estudantes[0].nParcelas)
parcelarCursos(estudantes[2].nParcelas)




