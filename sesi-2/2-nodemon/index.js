   //Destructuring object
   const getUser = () => {
    return{
    n : "Aristu Chahya",
    h : "@aristu",
    l : "Madiun, Jatim" 
    };
}
//extraction
const {n : nama, h : handle, l : lokasi } = getUser();
console.log(nama, handle, lokasi);

//Destructuring Array
const csv = "1997, Ford, F350, Must Sell";

const [year, make, model, description] =
csv.split(",");

//function declaration
console.log(add(1,5))
function add(a, b){
    return a + b;
}
//function expression
const add_const = function (a, b) {
    return a + b;
    console.log(add_const(1,5));
}

//arrow function
function person(){
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000);
}
const p = new person();

//filter
const animals = [
    {names : "Fluffy", species :"cat"},
    {names : "Carlo", species :"dog"},
    {names : "Nemo", species :"fish"},
    {names : "Hamilton", species :"dog"},
    {names : "Dory", species :"fish"},
    {names : "Ursa", species :"cat"},
]

let fish = animals.filter((animal) => animal.species === 'fish');

//map
let names = animals.map((animal) => animal.names);
console.log(names);

//reduce
let orders = [
    {total : 325 },
    {total : 512 },
    {total : 128 },
    {total : 32 },
];

let total = orders.reduce((total, order) => total
+ order.total, 0);
console.log(total);


