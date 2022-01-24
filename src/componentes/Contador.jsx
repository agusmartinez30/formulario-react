import { useState } from "react";

const Contador = () => {


    const [contador, setContador] = useState(0)

    const numberRandom = () => {
        let min = 0;
        let max = 20;
        let rand = Math.round(min + Math.random() * (max - min))

        if(rand === 10){
            setContador(contador + 1)
        }
        console.log(rand);
    } 


    return(
    <>
        <h1>Contador</h1>
        <h3>{contador}</h3>
        
        <button onClick={numberRandom}>
            Random
        </button>
    </>
    )
    

}

export default Contador