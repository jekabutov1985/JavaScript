$(function(){
	function Human() {
		this.name = 'Jeka',
		this.age = 30,
		this.growth = 187,
		this.weigt = 90
	};
	
	Human.prototype.work = function Worker() {
		this.job = 'TAXI',
		this.money = 3000
	};
	
	Human.prototype.watchTV =  function Student() {
		this.study = 'FE-4',
		this.award = 1000
	}
	
	var newWorker = new Human();
	newWorker.work();
	console.log('newWorker.work()',newWorker);
	
	var newStudent = new Human();
	newStudent.watchTV();
	console.log('newStudent.watchTV()',newStudent);
	
	var oldWorker = new Human();
	console.log('oldWorker.age', oldWorker.age);
	
	var oldStudent = new Human();
	console.log('oldStudent.name', oldStudent.name);
});