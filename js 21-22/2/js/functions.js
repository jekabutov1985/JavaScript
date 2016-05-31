// НОД
var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
};
//Факторизация
var factorization = function(a) {
  var nums = [];

  for(var i = 0; i<a; i++){
  	if(a%i==0){
  		nums.push(i);
  	}
  }
  return nums
}
// Сортировка
var someSort = function (array) {
  for (i = 0; i <= array.length-1; i++) {
      if (array[i] > array[i+1]){
          temp = array[i+1];
          array[i+1] = array[i];
          array[i] = temp;
          i = i-2;
        }
    }
    return array
}
