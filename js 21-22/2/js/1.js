var a = 100000000000000000000000000000000;
var b = [];

for(var i = 0; i<a; i++){
	if(a%i==0){
		b.push(i);
	}
}
console.log(b);