const valueNum= document.getElementById("valueNum");
const restar=document.getElementById("button_subtract")
const sumar=document.getElementById("button_add")

console.log(restar)

console.log(valueNum)

console.log(sumar)

let contador=0;

restar.addEventListener("click", ()=>{
    if(valueNum.placeholder==0){
        contador=0;
    }
    else{
        contador--;
    }
    valueNum.placeholder=contador
})

sumar.addEventListener("click", ()=>{
    contador++;
    console.log(contador)
    valueNum.placeholder=contador
})



