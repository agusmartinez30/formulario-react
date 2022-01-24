import { useRef } from "react"

const FormularioNoControlado = () => {

    const formulario = useRef(null)

    const handleSubmit = (e) =>{
            e.preventDefault()
        const datos = new FormData(formulario.current)

        // console.log(...datos.entries());

        const objetosDatos = Object.fromEntries(datos)
        // console.log(objetosDatos);
        const {todoName, todoDescripcion} = objetosDatos

        if(!todoName.trim() || !todoDescripcion.trim()){
            console.log('No valido');
            return
        }

        console.log('Valido!');
    }
    


    return(
        <>
            <h2>Formulario</h2>
            <form ref={formulario} onSubmit={handleSubmit} >
                <input 
                    type="text"
                    placeholder="Ingrese nueva tarea"
                    name="todoName"
                />
                <textarea
                    name="todoDescripcion"
                    placeholder="Descripcion"
                />
                <select name="todoEstado">
                    <option name="pendiente">Pendiente</option>
                    <option name="completada">Completada</option>
                </select>
                <button >Agregar</button>
            </form>
        </>
    )
    
} 

export default FormularioNoControlado