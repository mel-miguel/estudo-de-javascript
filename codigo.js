var nomes_alunos = [];
nomes_alunos[0] = 'melissa';
nomes_alunos[1] = 'maria';
nomes_alunos[2] = 'joao';

var nome = prompt('qual o nome do aluno que voce deseja descobrir o numero?');
 if (nome == nomes_alunos[0]){
    alert('o nome que voce digitou esta na posiçao 0');
 }

 else if (nome == nomes_alunos[1]){
    alert('o nome que vc digitou esta na posiçao 1');
 }

 else if (nome == nomes_alunos[2]){
    alert('o nome que vc digitou esta na posiçao 2');
 }

 else { // 'else' no final depois de todos os testes 
    alert('o nome que voce digitou nao existe');
 }