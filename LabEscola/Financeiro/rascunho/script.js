const turma = [{
   turma: "Hipátia",

   curso: "JavaScript",

   inicio: "30/11/2022",

   termino: "30/01/2023",

   numeroAlunos: 150,

   período: "noturno ",

   concluida: false,
},

{
   turma: "Sibyla",

   curso: "JavaScript",

   inicio: "30/10/2022",

   termino: "30/12/2022",

   numeroAlunos: 200,

   período: "integral",

   concluida: false,
},

{
   turma: "Curie",

   curso: "HTML e CSS",

   inicio: "15/09/2022",

   termino: "15/10/2022",

   numeroAlunos: 180,

   período: "noturno",

   concluida: true,
},

{
   turma: "Zhenyi",

   curso: "HTML e CSS",

   inicio: "01/11/2022",

   termino: "01/01/2023",

   numeroAlunos: 80,

   período: "integral",

   concluida: false,
},

{
   turma: "Clarke",

   curso: "HTML e CSS",

   inicio: "04/07/2022",

   termino: "04/09/2022",

   numeroAlunos: 200,

   período: "noturno",

   concluida: false,
},

{
   turma: "Blackwell",

   curso: "APIsRest",

   inicio: "20/03/2022",

   termino: "20/06/2022",

   numeroAlunos: 100,

   período: "integral",

   concluida: true,
},

{
   turma: "Elion",

   curso: "APIsRest",

   inicio: "12/01/2022",

   termino: "12/06/2022",

   numeroAlunos: 200,

   período: "noturno",

   concluida: true,
},

{
   turma: "Burnell",

   curso: "APIsRest",

   inicio: "18/10/2022",

   termino: "18/04/2023",

   numeroAlunos: 90,

   período: "integral",

   concluida: false,
}
];

const cursos = [{
   curso: "HTML e CSS",
   descricao: "Aprenda como a estrutura de um site é feita",
   duracao: "1 mês",
   valor: 500
},

{
   curso: "JavaScript",
   descricao: "Aprenda como adicionar dinamismo ao seu site",
   duracao: "2 meses",
   valor: 900
},

{
   curso: "APIsRest",
   descricao: "Aprenda como estabelecer conexões no seu site",
   duracao: "6 meses",
   valor: 2000
}
]



const estudantes = [{
   estudante: "Chris Evans",
   turma: "Hipátia",
   curso: "JavaScript",
   valor: 900,
   nParcelas: 9,
   desconto: false,
   Parcelas: 100
},

{
   estudante: "Halle Berry",
   turma: "Burnell",
   curso: "APIsRest",
   valor: 2000,
   nParcelas: 4,
   desconto: false,
   Parcelas: 500
},

{
   estudante: "Lashana Lynch",
   turma: "Zhenyi",
   curso: "HTML e CSS",
   valor: 500,
   desconto: true,
},
]

console.log(turma)
console.log(cursos)
console.log(estudantes)


//array parametro para função parcelarCurso
const carrinhoCursos = []


//parametro parcela = argumento a ser preenchido
const parcelarCurso = (carrinhoCursos, parcela) => {

//variaveis declaradas fora de ifs e fors para serem alteradas
let valorTotal = 0
let valorParcela
let desconto = 0

//se o array de carrinhoCursos tiver tamanho maior que 1, o codigo dentro do if será executado(se mais de um curso for comprado)
if (carrinhoCursos.length > 1) {

   switch (carrinhoCursos.length) {
      case 3:
         desconto = 0.15
         break;
      case 2:
         desconto = 0.10
         break;

      default:
         desconto = 0
         break;
   }


   //valor = cada item do array carrinhoCursos, valorTotal foi alterada somando os itens do array/somente para add valor total a template string
   for (let valor of carrinhoCursos) {
      valorTotal = valorTotal + valor
      console.log(valorTotal)
   }

   //fora do for valorTotal foi alterado para o novo valor com desconto, usando o valorTotal acima e o desconto do switch case/SOMENTE PARA ADD VALOR TOTAL COM DESCONTO A TEMPLATE STRING
   valorTotal = valorTotal - (valorTotal * desconto)

   console.log(valorTotal)

   //parcela(parametro da função)
   if (parcela <= 2) {

      valorTotal = valorTotal - (valorTotal * 0.2)
      valorParcela = valorTotal / parcela

      console.log(`O curso ficou no valor total de R$ ${valorTotal}. Em 
      ${parcela} X de ${valorParcela} reais. Foi concedido desconto de 20%.`)

   } else {
      valorTotal = valorTotal.valor
      valorTotal = valorTotal / parcela

      console.log(`O curso ficou no valor total de R$ ${valorTotal}. Em 
      ${parcela} X de ${valorParcela} reais.`)
   }
}
}

parcelarCurso(carrinhoCursos, 2)




const buscarCurso = (nomeCurso) => {

   const buscarNovoCurso = document.getElementById("curso").value.toLowerCase()

   nomeCurso = buscarNovoCurso

   const findCurso = cursos.find((element) => element.curso.toLowerCase().includes(nomeCurso.toLowerCase()));

   return !findCurso ? "Curso nao encontrado" : findCurso;

/* const findCurso = cursos.find(curso => curso.curso.toLowerCase().startsWith(nomeCurso.toLowerCase()))

return findCurso
 */
}


/* console.log(buscarCurso(prompt("curso"))) */


let totalTurma = 0
inputTurma = document.getElementById('busca-turma')

const buscarTurma = (event) => {


   if (totalTurma >= 8) {
      alert("Recarregue a página.")
      cardTurma.innerHTML = ""
   }

   const cardTurma = document.getElementById('info')

   nomeTurma = inputTurma.value

   const returning = turma.filter((e) => {
      if (e.turma.toLowerCase() === nomeTurma.toLowerCase()) {
         return e.turma.toLowerCase() === nomeTurma.toLowerCase()
      } else {
         return false
      }
   })

   if (returning == false) {
      alert("Turma não encontrada.")
   }

   if (returning[0].concluida == true) {
      returning[0].concluida = 'sim'
   } else {
      returning[0].concluida = 'não'
   }

   const cardHtml = `<div class="card" > 
   <h3>${returning[0].turma}</h3> 
   <p><b>Curso: </b>${returning[0].curso}</p>
   <p><b>Início:</b>${returning[0].inicio}</p>
   <p><b>Término: </b>${returning[0].termino}</p>
   <p><b>Número de alunos: </b>${returning[0].numeroAlunos}</p>
   <p><b>Período: </b>${returning[0].período}</p>
   <p><b>Concluído: </b>${returning[0].concluida}</p>
   </div>`

   cardTurma.innerHTML += cardHtml

   inputTurma.value = ""
   totalTurma++

   /*    const findTurma = turma.filter(item => item.turma.toLowerCase() === nomeTurma.toLowerCase())


      return findTurma.length > 0 ? findTurma[0] : 'turma não encontrada' */

}



const buscarEstudante = (nomeEstudante) => {
for (i = 0; i < estudantes.length; i++) {

   if (estudantes[i].estudante.toLowerCase().startsWith(nomeEstudante.toLowerCase())) {
      return estudantes[i]

   }


}

return `estudante não encontrado`

}
console.log(buscarEstudante("ch"))

const matricular = (nome, nomeCurso, turma, nParcelas) => {


   novoAluno = document.getElementById("nome").value
   nome = novoAluno



   parcelasNovoAluno = document.getElementById("parcelas").value
   nParcelas = parcelasNovoAluno

   let valorCurso = buscarCurso(nomeCurso);
   console.log(valorCurso.valor)
   let valorTotal = 0;
   let valorParcela = 0;
   let desconto = false;

   
   if (nParcelas > 0 && nParcelas <= 2) {
       valorTotal = valorCurso.valor - (valorCurso.valor * 0.2)
       valorParcela = valorTotal / nParcelas
       desconto = true
       porcDesc = desconto 
   } else {
       valorTotal = valorCurso.valor
       valorParcela = valorTotal / nParcelas
   };


   novaMatricula =
   {
       estudante: nome,
       turma: turma,
       curso: nomeCurso,
       valor: valorCurso.valor,
       nParcelas: nParcelas,
       desconto: desconto,
       valorParcela: valorParcela
   };


   estudantes.push(novaMatricula);



   const containerMatricula = document.getElementById("container-texto2");

   const addAluno = document.createElement("div");
   addAluno.setAttribute("id", "container2-item")
   
   addAluno.innerHTML = `
   <div 

   <p> Desconto de ${'20%'}, ${nParcelas}x parcelas de R$${valorParcela}

   </div>
      `

   containerMatricula.insertAdjacentElement(`beforeend`, addAluno);



};








const addAoCarrinho = (nomeCurso) => {
const curso = buscarCurso(nomeCurso)

carrinhoCursos.push(curso.valor)
}

addAoCarrinho("JavaScript")
console.log(carrinhoCursos)

const relatorioEstudante = (nomeEstudante) => {
const relatorio = buscarEstudante(nomeEstudante)

return relatorio

}

console.log(relatorioEstudante("Hal"))