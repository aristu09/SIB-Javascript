let score = 50
console.log("Hasil Variabel Score" + score);

let playerName = "Budi"
console.log("Hasil variable playerName" + playerName);
// alert(playerName)
playerName = "Andy"
console.log("Halo playername" + playerName);
//alert 

//bukan berupa object atau array tidak bisa diganti
const angkaKeberuntungan = 10;

//bisa dirubah bentuk object
const objectAngkaKeb = {id:1, name:'Aris', jenkel:'L' }
objectAngkaKeb.id = 2
objectAngkaKeb.name = "Aristu"
objectAngkaKeb.jenkel = "Laki-laki"
console.log(objectAngkaKeb);

//sample > array
const arrayNumber = [1,2,3,4,5]
arrayNumber.push(6)
arrayNumber.push(7)
console.log(arrayNumber);

//Tipe data number
let weight = 75;
alert(weight + 15);

// let original = 23;
// let newNum = originalNum + 7;
// alert(newNum);

let originalNum = 23;
let numberToBeAdded = 7;
let newNum = originalNum + numberToBeAdded;
alert(newNum)

//Tipe Data String
alert("Hello class Modern Javascript")

let message = 'Welcome';
alert(message);
message = 'Bye, Bye';
alert(message);

let htmlSnippet = '<h1 class="header"> this is a header </h1>';

//Menggabungkan String
let visitor = prompt ('Siapakah Namamu?');
let massage = 'Halo' + visitor;
alert(massage);

