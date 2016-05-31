require(
['jquery','templating','model','view','controller'],
function(){
	$(function(){
	var firstToDoList = ['сходить на кухню', 'посмотреть в окно 5 мин', 'опять садиться кодить'];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model, view);
	});
}
)