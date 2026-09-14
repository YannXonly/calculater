let frutis = ['orange' , 'banana' ,'apple'];
let numbers = [1,2,3];


frutis.forEach(CalcHandler);
frutis.forEach(element);



function CalcHandler(array,index,element){
array[index] = element.toUpperCase();
}

function display(element){
console.log(element);
}