const courses = window.labenu.courses;

const carrinhoCursos = [];

console.log(courses);

function optionTemplate({ curso, valor }) {
  return `<option value="${curso}" data-price="${valor}">${curso}</option>`;
}

function renderCoursesSelect(items) {
  const select = document.querySelector("#course");

  if (!select) {
    return;
  }

  const html =
    "<option value>Selecione o Curso</option>" +
    items.map((item) => optionTemplate(item)).join("");

  select.innerHTML = html;
}

renderCoursesSelect(courses);

const addCarrinho = document.querySelector("#include");

addCarrinho.addEventListener("click", function (event) {
  event.preventDefault();

  const course = document.querySelector("#course");
  const price = course.options[course.selectedIndex].dataset.price; // course.selectedIndex me da a opcao selecionada; dataset.price passa o valor dessa opcao selecionada.

  carrinhoCursos.push(Number(price));

  course.value = "";
});

const simulation = document.querySelector("#btn-value");

simulation.addEventListener("click", function (event) {
  event.preventDefault();

  const portion = Number(document.querySelector("#portion").value);

  parcelarCurso(portion, carrinhoCursos);
});

const parcelarCurso = (parcelas, carrinhoCursos) => {
  let soma = 0;
  let desconto = 0;
  let result = document.querySelector("#result") 

  for (i = 0; i < carrinhoCursos.length; i++) {
    soma += carrinhoCursos[i];
  }

  let valorComDesconto = soma;

  if (parcelas <= 2) {
    desconto = 0.2;
    valorComDesconto = soma - soma * desconto;
  }

  switch (carrinhoCursos.length) {
    case 3:
        result.innerHTML =
        `O valor do pagamento é de R$ ${(valorComDesconto * 0.85).toFixed(
          2
        )} com ${
          (desconto + 0.15) * 100
        }% de desconto, parcelado em ${parcelas}x de R$ ${(
          (valorComDesconto * 0.85) /
          parcelas
        ).toFixed(2)}`;
      break;
    case 2:
        result.innerHTML =
        `O valor do pagamento é de R$ ${(valorComDesconto * 0.9).toFixed(
          2
        )} com ${
          (desconto + 0.1) * 100
        }% de desconto, parcelado em ${parcelas}x de R$ ${(
          (valorComDesconto * 0.9) /
          parcelas
        ).toFixed(2)}`;
      break;
    default:
        result.innerHTML =
        `O valor do pagamento é de R$ ${valorComDesconto.toFixed(
          2
        )}, parcelado em ${parcelas}x de R$ ${(
          valorComDesconto / parcelas
        ).toFixed(2)}`;
  }
};

