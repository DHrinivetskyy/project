//confirm оператор для вызова попапа с вопросом
const result = confirm('Are you herer?');
console.log(result);

//prompt оператор на получение пользовательского ввода 
const answer = prompt('Are you here?', 'Write your answer here');
console.log(typeof(answer));

//запись данных полученных от пользователя в 
//тип объекта массив
const answers = [];

answers[0] = prompt('What is your name?', '');
answers[1] = prompt('What is your gender?', '');
answers[2] = prompt('What is your age?', '');

//при вводе в консоль браузера заменяет контент страницы
document.write(answers);