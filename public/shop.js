const button_search= document.getElementById("input_search")

console.log(button_search);

// let array=["STORMTROOPER LIGHTSABER","LUKE","BOBBA FETT", "HARRY POTTER", "HERMIONE"]
// console.log(array.length)

let array2=[];

export const search2 = function search(button, array){
    button.addEventListener("keyup",(e)=>{
        const letra=e.target.value;
        console.log(letra)
    
        for(let i=0; i<array.length; i++){
         if(letra.toUpperCase().includes(array[i])){
                array2.push(array[i])
         }
            
        }
        console.log(array2)
    
        array2=[];
    })

}





