let Fibonacci = [0,1];
InputNumber = prompt("coloque o múmero")
numberToBeCheck= Number(InputNumber);

function buildFibonacci(){
while(Fibonacci[Fibonacci.length-1]<numberToBeCheck){
numberToBePush= Fibonacci[Fibonacci.length -2] + Fibonacci[Fibonacci.length-1];
Fibonacci.push(numberToBePush);


}
}
function checkNumber(){
    if(numberToBeCheck== Fibonacci[Fibonacci.length-1]){
        console.log(`O número ${numberToBeCheck} pertence a sequência`)
    }else{
        console.log(`o Número ${numberToBeCheck} não pertence a sequência`)
    }
}

buildFibonacci()
checkNumber()
