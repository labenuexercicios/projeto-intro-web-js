const students = window.labenu.students;

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

function renderNotFound() {
  const list = document.querySelector("#report");

  if (!list) {
    return;
  }

  list.innerHTML = '<p class="not-found">Aluno não encontrado!</p>';
}

const buscarEstudante = document.querySelector("#btn-search");

buscarEstudante.addEventListener("click", function (e) {
  
  const input = document.querySelector("#report-input").value;
  
  const found = students.filter((item) =>
    item.estudante.toLowerCase().startsWith(input.toLowerCase())
  );

  document.querySelector("#report").innerHTML = found
    .map((item) => reportTemplate(item))
    .join(""); 


    if (found.length > 0) {
      renderCards(found);
      return
    }
  
    renderNotFound();
});
