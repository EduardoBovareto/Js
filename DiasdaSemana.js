var datas =  new Date();
var dias = datas.getDay();
var hora = datas.getHours();

switch(dias){
    case 0:
        console.log('Hoje e Domingo');
        break;
    
    case 1:
        console.log('Hoje e Segunda');
        break;
    
    case 2:
        console.log('Hoje e Terca');
        break;

    case 3:
        console.log('Hoje e Quarta');
        break;

    case 4:
        console.log('Hoje e Quinta');
        break;

    case 5:
        console.log('Hoje e Sexta');
        break;
    
    case 6:
        console.log('Hoje e sabado');
        break;
    
    default:
        console.log('Valor Invalido ou Dia nao reconhecido!');
        break;

};

    if (hora >= 0 && hora <= 5){
        console.log(`${hora} horas da madrugada`);
        
    }
    else if( hora >= 6 && hora < 12){
        console.log(`${hora} horas da manha`);

    }

    else if(hora >= 12 && hora <= 17) {
        console.log(`${hora} horas da tarde`);

    }

    else if(hora >= 18 && hora <= 23){
        console.log(`${hora} horas da noite`);
    }   

    else{
        console.log('Horario Invalido');
};