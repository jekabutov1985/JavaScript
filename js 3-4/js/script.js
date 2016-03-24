
// QBase
var QBase=[
{
 question: '1. Вопрос №1',
 options: [ 'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3' ]
},
{
 question: '2. Вопрос №2',
 options: [ 'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3' ]
},
{
 question: '3. Вопрос №3',
 options: [ 'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3' ]
},
];

var test = {
	createForm: function () {
		var wrapper = document.createElement('div');
		wrapper.classList.add('wrapper');
		document.body.appendChild(wrapper);
		var testHeader = document.createElement('h1');
		testHeader.innerHTML = 'Тест по программированию';
		wrapper.appendChild(testHeader);
	},
	createQuestions: function() {
	        for (var i = 0; i < QBase.length; i++ ) {
                question = document.createElement('h3');
                question.innerHTML = QBase[i].question; 
                document.querySelector('.wrapper').appendChild(question);
                options= document.createElement('ul');
                document.querySelector('.wrapper').appendChild(options);
        
                for (var q = 0; q < QBase[i].options.length; q++) {
                option = document.createElement('li');
                option.innerHTML = '<label>' + '<input type="checkbox">' + QBase[i].options[q] + '</lable>';
                options.appendChild(option);
              }
	   }
	},
	createSubmit: function() {
		var button = document.createElement('button');
		button.innerHTML = 'Проверить мои результаты';
		button.type = 'submit';
		document.querySelector('.wrapper').appendChild(button);
	},

	init: function() {
		this.createForm();
		this.createQuestions();
		this.createSubmit();
	}
};
test.init();