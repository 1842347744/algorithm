function findNumberOf1(num) {
	var count = 0;
	var n = num;
	while(n!==0) {
		count++;
		n = (n-1)&n;
	}
	console.log(count)
}
 
findNumberOf1(7)// 3
console.log(5 & 3);