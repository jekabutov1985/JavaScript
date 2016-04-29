'use strict'
$(function(){

	var html = $('#resume').html();

	console.log(html);

	var myResume = [
			{	
				name: 'Бутов Евгений Александрович',
				img: './img/foto1.jpg',
				info: 'Студент курса GoFrontend GoFE 4'
			},
			{	
				reasons: ['Заборы строить не интересно',
				'Мало платят',
				'Приходится работать по ночам']
			},
			{
			
				tel: '050-050-50-50',
				vk: 'https://vk.com/id86291584'
			},
			{
			
				feedback:'Еслу нужно,могу построить вам забор'
			}
		];

	var content = tmpl(html,{
		data: myResume
	});

	$('body').append(content);

});