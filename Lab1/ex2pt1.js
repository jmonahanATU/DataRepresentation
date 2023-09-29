function Hello(){
    console.log("Hello World");
    return;
}

Hello();

const Bye = () =>{
    console.log("Bye");
}
Bye();


const Value = (myValue) =>{
    console.log(myValue)
}

Value("Bye");


const DataRep = ()=>{
    return "Data Representation of Querying!"
}

console.log(DataRep());


const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]
