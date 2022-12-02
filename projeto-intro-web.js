//começando o projeto introduzindo Arrays.

//Array Objeto dos cursos.
const cursos = [
    {
        //Primeiro curso contendo só uma turma.
        curso: "HTML e CSS",
        descricao: "Aprenda a criar websites com HTML e CSS!",
        duracao: "1 mês",
        valor: 500
    },
    {
        //Segundo curso contendo duas turmas.
        curso: "JavaScript",
        descricao: "Aprenda a linguagem de progamação mais utilizada no mundo!",
        duracao: "2 meses",
        valor: 900
    },
    {
        //Terceiro curso contendo duas turmas.
        curso: "APIs REST",
        descricao: "Quer aprender arquitetura de software? temos um curso para você!",
        duracao: "6 meses",
        valor: 2000
    }
];

//Array Objeto das turmas.
const turmas = [
    {
        //Primeira turma HTML e CSS.
        turma: "Curie",
        curso: "HTML e CSS",
        inicio: "15/09/2022",
        termino: "15/10/2022",
        numAlunos: 180,
        periodo: "Noturno",
        conclusao: true
    },
    {
        //Segunda turma HTML e CSS.
        turma: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "01/11/2022",
        termino: "01/01/2023",
        numAlunos: 80,
        periodo: "Integral",
        conclusao: false
    },
    {   
        //Terceira turma HTML e CSS.
        turma: "Clarke",
        curso: "HTML e CSS",
        inicio: "04/07/2022",
        termino: "04/09/2023",
        numAlunos: 200,
        periodo: "Noturno",
        conclusao: true
    },
    {
        //Primeira turma JavaScript.
        turma: "Hipátia",
        curso: "JavaScript",
        inicio: "30/11/2022",
        termino: "30/01/2023",
        numAlunos: 150,
        periodo: "Noturno",
        conclusao: false
    },
    {
        //Segunda turma JavaScript.
        turma: "Sibyla",
        curso: "JavaScript",
        inicio: "30/10/2022",
        termino: "30/12/2022",
        numAlunos: 200,
        periodo: "Integral",
        conclusao: false
    },
    {
        //Primeira turma API's REST.
        turma: "Blackwell",
        curso: "APIs REST",
        inicio: "20/03/2022",
        termino: "20/06/2023",
        numAlunos: 100,
        periodo: "Integral",
        conclusao: true
    },
    {
        //Segunda turma APIs REST.
        turma: "Burnell",
        curso: "APIs REST",
        inicio: "18/10/2022",
        termino: "18/04/2023",
        numAlunos: 90,
        periodo: "Integral",
        conclusao: false
    },
    {
        //Terceira turma API's REST.
        turma: "Elion",
        curso: "APIs REST",
        inicio: "12/01/2022",
        termino: "12/06/2022",
        numAlunos: 200,
        periodo: "Noturno",
        conclusao: true
    }
];

//Array Objetos dos estudantes.
const estudantes = [
    {
        //Primeira turma de HTML e CSS
        estudante: "Lucas Breia",
        turma: "Curie",
        curso: "HTML e CSS",
        valor: 500,
        numParcelas: 2,
        desconto: true,
        parcelas: 250
    },
    {
        estudante: "Maria Francisca",
        turma: "Curie",
        curso: "HTML e CSS",
        valor: 500,
        numParcelas: 0,
        desconto: true,
        parcelas: 500
    },
    {
        estudante: "Matheus Aguiar",
        turma: "Curie",
        curso: "HTML e CSS",
        valor: 500,
        numParcelas: 4,
        desconto: false,
        parcelas: 125
    },
    {
        estudante: "Bruna Lopes",
        turma: "Curie",
        curso: "HTML e CSS",
        valor: 500,
        numParcelas: 0,
        desconto: true,
        parcelas: 500
    },
    {
        estudante: "Gilvan Epitácio",
        turma: "Curie",
        curso: "HTML e CSS",
        valor: 500,
        numParcelas: 4,
        desconto: false,
        parcelas: 125
    },
    {
        //Segunda turma de HTML e CSS
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: 500,
        numParcelas: 0,
        desconto: true,
        parcelas: 500
    },
    {
        estudante: "Maria Antônia",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: 500,
        numParcelas: 2,
        desconto: true,
        parcelas: 250
    },
    {
        estudante: "Matheus Henrique",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: 500,
        numParcelas: 4,
        desconto: false,
        parcelas: 125
    },
    {
        estudante: "Bruna Lorena",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: 500,
        numParcelas: 4,
        desconto: false,
        parcelas: 125
    },
    {
        estudante: "Heleno Breia",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: 500,
        numParcelas: 4,
        desconto: false,
        parcelas: 125
    },
    {
        //Terceira turma de HTML e CSS
        estudante: "Tatiana Blaser",
        turma: "Clarke",
        curso: "HTML e CSS",
        valor: 500,
        numParcelas: 0,
        desconto: true,
        parcelas: 500
    },
    {
        estudante: "Julia Antônia",
        turma: "Clarke",
        curso: "HTML e CSS",
        valor: 500,
        numParcelas: 2,
        desconto: true,
        parcelas: 250
    },
    {
        estudante: "Marcos Henrique",
        turma: "Clarke",
        curso: "HTML e CSS",
        valor: 500,
        numParcelas: 4,
        desconto: false,
        parcelas: 125
    },
    {
        estudante: "Monique Lorena",
        turma: "Clarke",
        curso: "HTML e CSS",
        valor: 500,
        numParcelas: 4,
        desconto: false,
        parcelas: 125
    },
    {
        estudante: "Diego Breia",
        turma: "Clarke",
        curso: "HTML e CSS",
        valor: 500,
        numParcelas: 4,
        desconto: false,
        parcelas: 125
    },
    {
        //Primeira turma de JavaScript
        estudante: "Chris Evans",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: 900,
        numParcelas: 9,
        desconto: false,
        parcelas: 100
    },
    {
        estudante: "Janete Antônia",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: 900,
        numParcelas: 2,
        desconto: true,
        parcelas: 450
    },
    {
        estudante: "Lucas Henrique",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: 900,
        numParcelas: 3,
        desconto: false,
        parcelas: 300
    },
    {
        estudante: "Karen Lorena",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: 900,
        numParcelas: 4,
        desconto: false,
        parcelas: 225
    },
    {
        estudante: "Eliana Breia",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: 900,
        numParcelas: 4,
        desconto: false,
        parcelas: 225
    },
    {
        //Segunda turma de JavaScript
        estudante: "Tony Stark",
        turma: "Sibyla",
        curso: "JavaScript",
        valor: 900,
        numParcelas: 9,
        desconto: false,
        parcelas: 100
    },
    {
        estudante: "Soraya Antônia",
        turma: "Sibyla",
        curso: "JavaScript",
        valor: 900,
        numParcelas: 2,
        desconto: true,
        parcelas: 450
    },
    {
        estudante: "Thiago Henrique",
        turma: "Sibyla",
        curso: "JavaScript",
        valor: 900,
        numParcelas: 3,
        desconto: false,
        parcelas: 300
    },
    {
        estudante: "Manu Lorena",
        turma: "Sibyla",
        curso: "JavaScript",
        valor: 900,
        numParcelas: 4,
        desconto: false,
        parcelas: 225
    },
    {
        estudante: "Talita Breia",
        turma: "Sibyla",
        curso: "JavaScript",
        valor: 900,
        numParcelas: 4,
        desconto: false,
        parcelas: 225
    },
    {
        //Primeira turma de APIs REST
        estudante: "Halle Berry",
        turma: "Burnell",
        curso: "APIs REST",
        valor: 2000,
        numParcelas: 4,
        desconto: false,
        parcelas: 500
    },
    {
        estudante: "Luana Antônia",
        turma: "Burnell",
        curso: "APIs REST",
        valor: 2000,
        numParcelas: 2,
        desconto: true,
        parcelas: 1000
    },
    {
        estudante: "Luan Henrique",
        turma: "Burnell",
        curso: "APIs REST",
        valor: 2000,
        numParcelas: 4,
        desconto: false,
        parcelas: 500
    },
    {
        estudante: "Karen Lorena",
        turma: "Burnell",
        curso: "APIs REST",
        valor: 2000,
        numParcelas: 0,
        desconto: true,
        parcelas: 2000
    },
    {
        estudante: "Elisa Breia",
        turma: "Burnell",
        curso: "APIs REST",
        valor: 2000,
        numParcelas: 4,
        desconto: false,
        parcelas: 500
    },
    {   
        //Segunda turma de APIs REST
        estudante: "Ronaldo de Assis",
        turma: "Blackwell",
        curso: "APIs REST",
        valor: 2000,
        numParcelas: 4,
        desconto: false,
        parcelas: 500
    },
    {
        estudante: "Fred Mércury",
        turma: "Blackwell",
        curso: "APIs REST",
        valor: 2000,
        numParcelas: 2,
        desconto: true,
        parcelas: 1000
    },
    {
        estudante: "Luis Gustavo",
        turma: "Blackwell",
        curso: "APIs REST",
        valor: 2000,
        numParcelas: 4,
        desconto: false,
        parcelas: 500
    },
    {
        estudante: "Michael Jackson",
        turma: "Blackwell",
        curso: "APIs REST",
        valor: 2000,
        numParcelas: 0,
        desconto: true,
        parcelas: 2000
    },
    {   
        estudante: "Neymar Júnior",
        turma: "Blackwell",
        curso: "APIs REST",
        valor: 2000,
        numParcelas: 4,
        desconto: false,
        parcelas: 500
    },
    {
        //Terceira turma de APIs REST
        estudante: "Lionel Messi",
        turma: "Elion",
        curso: "APIs REST",
        valor: 2000,
        numParcelas: 4,
        desconto: false,
        parcelas: 500
    },
    {
        estudante: "Cristiano Ronaldo",
        turma: "Elion",
        curso: "APIs REST",
        valor: 2000,
        numParcelas: 2,
        desconto: true,
        parcelas: 1000
    },
    {
        estudante: "Tom Holland",
        turma: "Elion",
        curso: "APIs REST",
        valor: 2000,
        numParcelas: 4,
        desconto: false,
        parcelas: 500
    },
    {
        estudante: "Tom Cruise",
        turma: "Elion",
        curso: "APIs REST",
        valor: 2000,
        numParcelas: 0,
        desconto: true,
        parcelas: 2000
    },
    {
        estudante: "Billie Eilish",
        turma: "Elion",
        curso: "APIs REST",
        valor: 2000,
        numParcelas: 4,
        desconto: false,
        parcelas: 500
    }
];

//Função de Parcelamento do curso.
const parcelarCurso = (parcela) =>{
    let cursoEscolhido = cursos[1];

    if(parcela <= 2 && parcela >= 1){
        let desconto = cursoEscolhido.valor - (cursoEscolhido.valor * 0.2)
        let descParcela = desconto / parcela

        console.log(`O curso ${cursos[1].curso} ficou num total de R$ ${desconto}. Em ${parcela}x de R$ ${descParcela.toFixed(2)}. Foi concedido um desconto de 20%.`)
    }else if(parcela > 2 && parcela <= 12){
        let valorBruto = cursoEscolhido.valor
        let valorParcela = valorBruto / parcela 

        console.log(`O curso ${cursos[1].curso} ficou no valor total de R$ ${valorBruto}. Em ${parcela}x de R$ ${valorParcela.toFixed(2)}`)
    }
}
parcelarCurso(1)

//Função de buscar cursos, turmas e estudantes.

//Função BUSCAR CURSOS.
const buscarCurso = (nomeCurso) =>{
    let buscar = cursos.find(buscar => buscar.curso.toLowerCase() === nomeCurso.toLowerCase())

    if(buscar){
        return buscar
    }else{
        return 'Curso não encontrado.'
    }
}
console.log(buscarCurso("javascript"))

//Função BUSCAR TURMAS.
const buscarTurma= (nomeTurma) =>{
    const filtrarTurma = turmas.filter(turmaProcurada => turmaProcurada.turma.toLocaleLowerCase() === nomeTurma.toLocaleLowerCase())

    filtrarTurma.length > 0 ? console.log(filtrarTurma) : console.log('Turma não encontrada.')
}
buscarTurma("sibyla")

//Função BUSCAR ESTUDANTES.
const buscarEstudantes = (nomeEstudantes) =>{
    
    for(i = 0; i < estudantes.length; i++){
        if(estudantes[i].estudante.toLowerCase().includes(nomeEstudantes.toLowerCase()) !== false){
            return estudantes[i]
        }
    }
    return 'Aluno não encontrado.'
}
console.log(buscarEstudantes("lu"))

//Função para matricula.
const matricular = (nome, curso, turma, nParcelas) =>{
     
    // let i = 0

    // while(curso !== cursos[i]['curso']){
    //     i++
    // }

    let valorCurso = buscarCurso(curso)

    if(nParcelas >= 1 && nParcelas <= 2){
        let valorTotal = valorCurso.valor - (valorCurso.valor * 2)
        let desconto = valorTotal / nParcelas
    }else{
        let valorBruto = valorCurso.valor
        desconto = valorBruto / nParcelas
    }

    const novoEstudante = {
        estudante: nome,
        turma: turma,
        curso: curso,
        valor: valorCurso.valor,
        numParcelas: nParcelas,
        desconto: (nParcelas <= 2 ? true : false),
        parcelas: (valorCurso.valor / nParcelas)
    }
    estudantes.push(novoEstudante)

    console.log(`Aluno Matriculado:\n Nome: ${nome}\n Curso: ${curso}\n Turma: ${turma}`)

}
matricular('Justin Bieber', 'JavaScript', 'Hipátia', 2)
console.log(estudantes)

//Função para parcelar curso.
//USANDO SWITCH CASE, FOR E IF
const parcelarTotalCursos = (nParcelas) =>{
    const carrinhoCursos = [500, 900, 2000]
    let valorTotalSoma = 0
    let desconto = 0

    for(valor of carrinhoCursos){
        valorTotalSoma = valorTotalSoma + valor
    };

    switch(carrinhoCursos.length){
        case 3:
            desconto = 0.15
            break;
        case 2:
            desconto = 0.1
            break;
        case 1:
            desconto = 0.2
            break;
        default:
            console.log('Quantidade de curso inválida.')
            break;
    }
    console.log(valorTotalSoma)

    if(carrinhoCursos.length === 3 && nParcelas <= 2){
        let somaTresCursos = cursos[0].valor + cursos[1].valor + cursos[2].valor
        let descTresCursos = somaTresCursos - (somaTresCursos * 0.2)
        let descTresParcelas = descTresCursos / nParcelas

        console.log(`O valor do pagamento é de: R$ ${descTresCursos} com 35% de desconto, parcelado em ${nParcelas}X de ${descTresParcelas.toFixed(2)}`)

    }else if(carrinhoCursos.length === 3 && nParcelas > 2) {
        let somaTresCursos = cursos[0].valor + cursos[1].valor + cursos[2].valor
        let descTresCursos = somaTresCursos - (somaTresCursos * desconto)
        let descTresParcelas = descTresCursos / nParcelas

        console.log(`O valor do pagamento é de: R$ ${descTresCursos} com 15% de desconto, parcelado em ${nParcelas}X de ${descTresParcelas.toFixed(2)}`)

    }else if(carrinhoCursos.length === 2 && nParcelas <= 2){
        let somaDoisCursos = cursos[0].valor + cursos[1].valor 
        let descDoisCursos = somaDoisCursos - (somaDoisCursos * 0.2)
        let descDoisParcelas = descDoisCursos / nParcelas

        console.log(`O valor do pagamento é de: R$ ${descDoisCursos} com 30% de desconto, parcelado em ${nParcelas}X de ${descDoisParcelas.toFixed(2)}`)
    }else if(carrinhoCursos.length === 2 && nParcelas > 2){
        let somaDoisCursos = cursos[0].valor + cursos[1].valor
        let descDoisCursos = somaDoisCursos - (somaDoisCursos * desconto)
        let descDoisParcelas = descDoisCursos / nParcelas

        console.log(`O valor do pagamento é de: R$ ${descDoisCursos} com 10% de desconto, parcelado em ${nParcelas}X de ${descDoisParcelas.toFixed(2)}`)
    }else if(carrinhoCursos.length > 0 && nParcelas > 0 && nParcelas < 3){
        let umCurso = valorTotalSoma
        let descUmCurso = umCurso - (umCurso * desconto)
        let valorParcelaSemDesc = descUmCurso / nParcelas

        console.log(`O valor do pagamento é de: R$ ${descUmCurso} com 20% de desconto, parcelado em ${nParcelas}X de ${valorParcelaSemDesc.toFixed(2)}`)
    }
}
parcelarTotalCursos(1)

//ADICONANDO VALORES NO ARRAY.
const carrinhoCursos = []

const adicionarValoresNoArray = (buscarCurso) =>{
    const valorCurso = buscarCurso.valor
    carrinhoCursos.push(valorCurso)

    return carrinhoCursos
}
adicionarValoresNoArray(buscarCurso('javascript'))
adicionarValoresNoArray(buscarCurso('html e css'))
adicionarValoresNoArray(buscarCurso('apis rest'))
console.log(carrinhoCursos)

//Relatório do aluno.
const relatorioEstudante = (estudante) =>{
    return `Relatório do Aluno:\n Aluno: ${estudante.estudante}\n Turma: ${estudante.turma}\n Curso: ${estudante.curso}\n Valor Total: ${estudante.valor}\n Valor Parcela: ${estudante.parcelas}\n Nº de Parcelas: ${estudante.numParcelas}`

}
console.log(relatorioEstudante(buscarEstudantes('chris evans')))