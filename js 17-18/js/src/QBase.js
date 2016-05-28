'use strict'
var QBase = {
	title: 'Белиберда',
	prompts: '(Кликаем правильный вариант)',
	question: [
		{
			text: 'Кто Сильнее?',
			answer: [
				{text: 'Брюс Ли', check: false},
				{text: 'Чак Норрис', check: true},
				{text: 'Человек паук', check: false},
			]
		},	
		
		{
			text: 'Что делать если хотел вытереть девушке слёзы, но случайно стёр брови?',
			answer: [
				{text: 'Сразу же оценить её красоту без бровей', check: false},
				{text: 'Рассказать анекдот', check: false},
				{text: 'Бежать', check: true},
			]
		},	
		
		{
			text: 'Как не привлекать внимание продавца-консультанта?',
			answer: [
				{text: 'Не заходить в магазин', check: false},
				{text: 'Не прикрываясь чихать и судорожно чесаться', check: false},
				{text: 'Это не возможно,они всегда спешат на помощь', check: true},
			]
		},	
	]	
};	

	localStorage.setItem('QBase',JSON.stringify(QBase));
	var QBase = localStorage.getItem('QBase');
	QBase = JSON.parse(QBase);
	
