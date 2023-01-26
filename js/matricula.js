const courses = window.labenu.courses;
const classes = window.labenu.classes;
const students = window.labenu.students;

function optionTemplate(name) {
  return `<option value="${name}">${name}</option>`;
}

function renderCoursesSelect(items) {
  const select = document.querySelector("#courses");

  if (!select) {
    return;
  }

  const html =
    "<option value>Selecione o Curso</option>" +
    items.map((item) => optionTemplate(item.curso)).join("");

  select.innerHTML = html;
}

document.querySelector("#courses").addEventListener("change", function (event) {
  event.preventDefault();

  const selectClasses = document.querySelector("#classes");

  if (!selectClasses) {
    return;
  }

  const items = classes.filter(
    (item) => !item.concluida && item.curso === event.target.value
  );

  const html =
    "<option value>Selecione a Turma</option>" +
    items.map((item) => optionTemplate(item.turma)).join("");

  selectClasses.innerHTML = html;
});

document
  .querySelector("#matricula")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const newStudent = {
      estudante: event.target.name.value,
      turma: event.target.classes.value,
      curso: event.target.courses.value,
      nParcelas: Number(event.target.portion.value),
    };

    students.push(newStudent);

    const register = document.querySelector("#register");

    if (!register) {
      return;
    }

    register.innerHTML = recordTemplate(newStudent);
  });

function recordTemplate({ estudante, curso, turma }) {
  return `
    <div class="contact-resgister">
        <h3 class="contact-title">Aluno matriculado</h3>
        <img class="contact-resgister__img" src="./mideas/Vector-check.png" alt="simbolo de check">
    </div>
    <div class="contact-dice">
        <p class="contact-dice__item">Aluno Matriculado</p>
        <p class="contact-dice__item">Nome: ${estudante}</p>
        <p class="contact-dice__item">Curso: ${curso}</p>
        <p class="contact-dice__item">Turma: ${turma}</p>
    </div>
    `;
}

renderCoursesSelect(courses);
