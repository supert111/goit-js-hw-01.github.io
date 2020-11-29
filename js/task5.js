let credits; 
let answerCountry;

const country = prompt('Введите имя страны доставки').toLowerCase();


switch (country) {
    
case 'китай':
    credits = 100;
    answerCountry = 'Китай';
    alert(`Доставка в [${answerCountry}] будет стоить [${credits}] кредитов`);
    break;

case 'чили':
    credits = 250;
    answerCountry = 'Чили';
    alert(`Доставка в [${answerCountry}] будет стоить [${credits}] кредитов`);
    break;

case 'австралия':
    credits = 170;
    answerCountry = 'Австралия';
    alert(`Доставка в [${answerCountry}] будет стоить [${credits}] кредитов`);
    break;

case 'индия':
    credits = 80;
    answerCountry = 'Индия';
    alert(`Доставка в [${answerCountry}] будет стоить [${credits}] кредитов`);
    break;

case 'ямайка':
    credits = 120;
    answerCountry = 'Ямайка';
    alert(`Доставка в [${answerCountry}] будет стоить [${credits}] кредитов`);
    break;

default:
    alert('В вашей стране доставка не доступна');
}