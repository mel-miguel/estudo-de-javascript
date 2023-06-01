var nome = prompt('informe seu nome');
var ano = prompt('em que ano voce nasceu?');
var idade = 2023 - ano; 
if(idade >= 18 ){ 
    alert('ola ' + nome + ', voce tem ' + idade + ' anos e é maior de idade' );
}
else { 
    alert('ola ' + nome + ', voce tem ' + idade + ' anos e é menor de idade' );
 }