var term = require('prompt-sync')();
let n1, n2, ope;
var R = 0;
var variavel = ['km','hm','dam','m','dm', 'cm','mm'];

n1 = Number(term('Descreva um numero: '));
n2 = Number(term('Descreva outro numero: '));
ope = term('DESCREVA A OPERACAO: ');

function conversion(m1, m2, v) { //medida 1, medida 2;
    let p1 = variavel.indexOf(m1); // Acha a posicao da primeira medida;
    let p2 = variavel.indexOf(m2);// Acha a posicao da segunda medida;

    /* Na lista medidas de altas distancias tem indices menores que os de menores distancias, variavel[0] == km , variavel[3] == m. Quanto maior o indice, menor e a medida.

    Logo temos dois casos:
        se p1 == indice do m e p2 == indice do km, logo p1 > p2 sendo que km > m.
        Para p1 > p2 == fazer a divisao
        Para p1 < p2 == fazer multiplicacao
    */

    if (p1 < p2){ 

        return v * (10 ** (p2 - p1));
    }

    else if(p1 > p2){

        return v / (10 ** ( p1 - p2));
    }

    else{
        return 'MESMAS MEDIDAS!';
    }

};

function calc(N1, N2, op){
    switch(op){
        case '+': //Adicao
            R = (`${N1 + N2}`);
            break;
        
        case '-': //Subtracao
            R = (`${N1 - N2}`);
            break;
            
        case '*': //MUltiplicacao
            R = (`${N1 * N2}`);
            break;

        case '^'://Exponenciacao
            R = (`${N1 ** N2}`);
            break;

        case '/'://Divisao Real
            R = (`${N1 / N2}`);
            break;
        
        case 'mod'://Resto da Divisao Inteira}
            R = (`${N1 % N2}`);
            break;

        case 'conversao':

            console.log(conversion(term('Medida Origem:'), term('Medida destino:'), N1));
            break;

        default:
            break;
    
        /*Dentro de cada case, nao se tem a nessecidade de expor a expressao de igualdade ou de extrema igualdade, por exemplo = case op === '+'; Pois a palavra case ja faz essa parte de verificacao e so escrevemos o resultado.*/
    }
return R;
};

console.log(calc(n1, n2, ope));