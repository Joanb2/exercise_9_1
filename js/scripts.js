var triangle1Area = getTriangleArea(7, 5);
var triangle2Area = getTriangleArea(6, 0);
var triangle3Area = getTriangleArea(3, 6);


function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0)  {
		return ("Incorrect data");
	}

	return (a * h / 2);
}

console.log(getTriangleArea(10, 6));
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);
