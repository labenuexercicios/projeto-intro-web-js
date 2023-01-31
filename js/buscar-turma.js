const classes = window.labenu.classes

function cardTemplate({
  turma,
  curso,
  inicio,
  termino,
  numAlunos,
  periodo,
  concluida,
}) {
  return `<div class="container-courses__cards">
        <h3 class="container-courses__title">${turma}</h3>
            <div class="container-courses__report">
                <p><strong>Curso: </strong>${curso}</p>
                <p><strong>Início: </strong>${inicio}</p>
                <p><strong>Término: </strong>${termino}</p>
                <p><strong>Número de alunos: </strong>${numAlunos}</p>
                <p><strong>Período: </strong>${periodo}</p>
                <p><strong>Concluído: </strong>${concluida ? "Sim" : "Não"}</p>
            </div>
        </div>`;
}

function renderCards(items) {
  const list = document.querySelector("#courses");

  if (!list) {
    return;
  }

  list.innerHTML = items.map((item) => cardTemplate(item)).join("");
}

function renderNotFound() {
  const list = document.querySelector("#courses");

  if (!list) {
    return;
  }

  list.innerHTML = '<p class="not-found">Nenhuma turma foi encontrada!</p>';
}

const buscarTurma = document.querySelector("#search");

buscarTurma.addEventListener("click", function (e) {
  e.preventDefault();

  const input = document.querySelector("#turma");

  if (!input.value) {
    renderCards(classes);
  }

  const found = classes.filter((item) =>
    item.turma.toLowerCase().startsWith(input.value.toLowerCase())
  );

  if (found.length > 0) {
    renderCards(found);
    return
  }

  renderNotFound();
});
