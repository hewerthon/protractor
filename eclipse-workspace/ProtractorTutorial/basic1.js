/**
 * 
 */
function add(a,b)
{
	return a+b;
}

console.log(add(2,3));
console.log(add(3,4));
console.log(add(4,5));

var a=4;
var c = ["hello", "world", 4, 5, "goodbye"];
console.log(c[0], c[1], c[4]);
console.log(c.length+ " is the size of the array");
for(var i = 0; i < c.length; i++)
	{
		console.log(c[i]);
	}

var d = new Array();
d[0] = "goodbye";
d[1] = "4";
d[2] = 6;
console.log(d[2]);
console.log(d.length + " is the size of the array called D");

for(var j = d.length-1; j >= 0; j--)
{
	console.log(d[j]);
}


var name = "Hewerthon"; // string literal declaration

console.log(name.charAt(3));
console.log(name.charAt(5));
var newname = name.concat(" Adalberto");
console.log(newname);

console.log(name.indexOf("t"));

console.log(name.slice(0, 7)+"...");

console.log(name.toUpperCase());

console.log(name.trim());

var name2 = new String ("Hewerthon"); // string object declaration

