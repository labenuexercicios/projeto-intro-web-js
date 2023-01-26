const students = window.labenu.students;

// criei um tamplet
const reportTemplate = (element) => {
  return `
    <div class="contact-dice">
        <p>Nome:${element.estudante}</p>
        <p>Turma:${element.turma}</p>
        <p>Curso:${element.curso}</p>
        <p>Valor total:${element.valor}</p>
        <p>Valor parcela:${element.parcelas}</p>
        <p>N.º parcelas:${element.nParcelas}</p>
    </div>`;
};

//peguei o id do botao
const buscarEstudante = document.querySelector("#btn-search");

//fiz um evento de click no botao buscar
buscarEstudante.addEventListener("click", function (e) {
  //peguei o valor digitado no input
  const input = document.querySelector("#report-input").value;
  // filtrei para pegar apenas o valor igual ao digitado no input
  const found = students.filter((item) =>
    item.estudante.toLowerCase().startsWith(input.toLowerCase())
  );

  // return `Estudande não encontrado`

  document.querySelector("#report").innerHTML = found
    .map((item) => reportTemplate(item))
    .join("");
});
