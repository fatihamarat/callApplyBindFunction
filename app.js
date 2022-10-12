// CALL, APPLY, BIND

const obj1={
    number1:10,
    number2:20
}
const obj2={
    number1:30,
    number2:40
}

function addNumbers(number3,number4){
    console.log(this.number1+this.number2+number3+number4);
}

//addNumbers.(100,200); NaN döner. çünkü "this" constructor içinde kullanmadığımız için window objesine ait. window objesinde de number1 ve number2 mevcut değil.

//addNumbers.call(obj1,100,200);
//addNumbers.call(obj2,100,200);

//addNumbers.apply(obj1,[100,200]);
//addNumbers.apply(obj2,[100,200]);

// BIND

function getNumbers(number3,number4){
    return this.number1+this.number2+number3+number4;
}

//console.log(getNumbers(100,200)); NaN

const copyfunc1=getNumbers.bind(obj1);
const copyfunc2=getNumbers.bind(obj2);

console.log(copyfunc1(100,200));
console.log(copyfunc2(100,200));

