# Projeto de Introdução Web - JavaScript

- Link surge: https://ultra-pain.surge.sh
- Link github: https://github.com/Julia-slvbrg/projeto-intro-web-js/pull/1

## Javascript

- A parte de Javascript possui um array de objetos com as turmas oferecidas, um com os cursos e um com os estudantes.

- A função buscarCurso está linkada a adm-financeiro.html, ela busca o curso adicionado pelo input e devolve o nome do curso e o seu valor em dois arrays separados, carrinhoCursosNome e carrinhoCursosValor respectivamente. Foram também criadas condições para que o usuário não entre com um valor vazio ou com um curso repetido no input. Para que seja ativada é necessário clicar no link "Adicionar outro curso".

- A função parcelarCurso está linkada a adm-financeiro.html, ela faz o cálculo dos descontos oferecidos para a quantidade de cursos e o número de parcelas escolhido pelo usuário, assim como o valor das parcelas. Foram implementadas algumas condições iniciais, para que o usuário não entre com um valor vazio ou inválido para a quantidade de parcelas, foi também determinado que a função aceitaria no máximo 5 parcelas. Com essa função é possível acrescentar um curso, calcular o seu desconto e o valor de parcelas, acrescentar outro e recalcular os valores para a nova quantidade de cursos. No console é possível ver quais foram os cursos selecinados, a quntidade de parcelas, o desconto e o valor de cada parcela.

- As funções gerarCardValor e gerarCardValorSemDesconto geram os cards conforme o resultado da função parcelarCurso. A função removerCardValor remove o card da tela toda vez que o alert é ativado (quando o input é preenchido com algum valor inválido) e quando a função parcelarCurso é chamada, isso para que não haja acumulo de cards na tela.

- A função buscarTurma está linkada a adm-turmas.html, ela busca a turma que foi digitada no input no array turmas. Se apenas uma letra ou uma parte do nome da turma for escrita, a função vai retornar as turmas que tenham em seu nome o que foi digitado. Também, se nada for digitado no input o retorno será todas as turmas oferecidas pela escola. No console é impresso um array de objetos com o retorno da função.

- A função gerarCardTurmas  na tela o retorno da função buscarTurma, ela também confere se existem cards impressos e os deleta antes de retornar os resultados da nova busca. 

- A função buscarEstudante é callback da relatorioEstudante, ela recebe o input do nome do aluno como parâmetro. Se o estudante não estiver matriculado, a função buscarEstudante retorna uma mensagem de erro. Se o aluno estiver matriculado, a função retornará um array com os dados do estudante. Essa função busca a primeira vez que o parâmetro fornecido aparece no array de objetos com os estudantes, por exemplo, se o parâmetro fornecido for "c", ela mostrará no console todos os nomes que possuem a letra c e retornará o primeiro nome que aparecer.

- A função relatorioEstudante está linkada a adm-financeiro.html, ela chama a função buscarEstudante como callback sendo que o parâmetro é o input do nome. No console ela imprime os dados do estudante, ela também irá chamar a função gerarCardRelatorio.

- A função gerarCardRelatorio avalia se já foi impresso algum card, se sim ela irá apagar esse card e imprimirá o novo resultado, se não ela imprimirá o novo resultado de uma vez.

- A função matricular está linkada a adm-matriculas.html, ela primeiro faz uma série de conferências para determinar se o aluno já está matriculado na turma e curso que escolheu, se os dados inseridos são válidos e se a turma já foi concluída, se alguma dessas condições for verdadeira a matrícula não é efetuada e aparecerá uma mensagem de erro na tela do usuário.

- A função gerarCardMatricula gera um imprime na tela do usuário o retorno da função matricular. Já a função removerCardMatricula apaga o card já impresso na tela do usuário, se tiver algum.

- A função toggleMenu é referente ao menu hamburger que aparece quando o tamanho da tela está entre 481px e 800px.

## HTML

- Foi feito um arquivo HTML para cada página.

## CSS

- Cada arquivo HTML tem um respectivo arquivo de estilização CSS com o mesmo nome.

- Foi feito media query para telas entre 481px e 800px.


## Enunciado

Vamos começar nossa jornada no desenvolvimento web criando um sistema de escola de programação, porque aqui gostamos de metalinguagem!
Este projeto será dividido em duas partes: JavaScript, e HTML+CSS. Por enquanto, vamos focar na parte de JavaScript, e em breve veremos HTML e CSS.

## Requisitos

- [ ]  Possui array de estudantes
- [ ]  Possui array de cursos
- [ ]  Possui array de turmas
- [ ]  Todos os arrays são arrays de objeto
- [ ]  Possui função de parcelamento de curso
- [ ]  Função de parcelamento de curso valida desconto para múltiplos cursos
- [ ]  Possui função de reajuste de valores dos cursos
- [ ]  Possui busca de cursos
- [ ]  Possui busca de turmas
- [ ]  Possui busca de estudantes

### Extra:

- [ ]  Possui função de matrícula
- [ ]  Função de matrícula aceita múltiplos cursos



