//Assunto array e objetos
//Declarando objetos 

const cursos = [
    {
        curso: "HTML e CSS",
        descricao: "",
        duracao: "1 mês",
        valor: 500
    },
    {
        curso: "JavaScript",
        descricao: "",
        duracao: "2 mês",
        valor: 900
    },
    {
        curso: "APIsRest",
        descricao: "",
        duracao: "6 mês",
        valor: 2000
    }
];
const turmas = [
    {
        turma: "Hipátia",
        curso: "Javascript",
        inicio: "30/11/2022",
        termino: "30/01/2023",
        numAlunos: 150,
        periodo: "Noturno",
        concluido: false
    },
    {
        turma: "Sibyla",
        curso: "Javascript",
        inicio: "30/10/2022",
        termino: "30/12/2022",
        numAlunos: 200,
        periodo: "Integral",
        concluido: false
    },
    {
        turma: "Curie",
        curso: "HTML e CSS",
        inicio: "15/09/2022",
        termino: "15/10/2022",
        numAlunos: 180,
        periodo: "Noturno",
        concluido: true
    },
    {
        turma: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "01/11/2022",
        termino: "01/01/2023",
        numAlunos: 80,
        periodo: "Integral",
        concluido: false
    },
    {
        turma: "Clarke",
        curso: "HTML e CSS",
        inicio: "04/07/2022",
        termino: "04/09/2022",
        numAlunos: 200,
        periodo: "Noturno",
        concluido: true
    },
    {
        turma: "Blackwell",
        curso: "APIsRest",
        inicio: "20/03/2022",
        termino: "20/06/2022",
        numAlunos: 100,
        periodo: "Integral",
        concluido: true
    },
    {
        turma: "elion",
        curso: "APIsRest",
        inicio: "12/01/2022",
        termino: "12/06/2022",
        numAlunos: 200,
        periodo: "Noturno",
        concluido: true
    },
    {
        turma: "Burnell",
        curso: "APIsRest",
        inicio: "18/10/2022",
        termino: "18/04/2023",
        numAlunos: 150,
        periodo: "Integral",
        concluido: false
    }
];
const estudantes = [
    {
        estudante: "Chris Evans",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: "900",
        nParcelas: 9,
        desconto: false,
        parcelas: 100
    },
    {
        estudante: "Halle Berry",
        turma: "Burnell",
        curso: "APIsRest",
        valor: "2000",
        nParcelas: 4,
        desconto: false,
        parcelas: 500
    },
    {
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: "500",
        nParcelas: 1,
        desconto: true,
        parcelas: 500
    }
];
//Assubto condicionais
//Calculando descontos


const parcelarCurso = (parcela) => {
    const desconto = 0.2;                                           //valor do desconto
    if (parcela <= 2){
        const valorDesconto = (cursos[2].valor - (cursos[1].valor * desconto));        //valor total subtraindo o valor do desconto
            return `O curso ${cursos[2].curso} ficou no valor total de R$ ${valorDesconto}. Em ${parcela}x de ${valorDesconto / parcela} reais. Foi concedido desconto de 20%.`;           
    }else{
        return `O curso ${cursos[2].curso} ficou no valor total de R$${cursos[2].valor}. Em ${parcela}x de ${cursos[2].valor / parcela} reais`
    };      
};
console.log(parcelarCurso(5));     //Chamando a função com a quantidade da parcela

//assunto laço
//Sistema de busca

