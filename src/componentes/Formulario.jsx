import { useState } from "react";
import './Form.css'


const Formulario = () => {

    const [todo, setTodo] = useState({
        todoName: '',
        todoDescripcion: '',
        todoCheck: false,
        todoEstado: 'pendiente'
    })

    const [error, setError] = useState(false) 

    const handleSubmit = (e) =>{
        e.preventDefault()

        const {todoName, todoDescripcion} = todo
        
         if(!todoName.trim() || !todoDescripcion.trim()){
             setError(true)
             return
         }

        setError(false)
        console.log('Valido!');
    }

    const handleChange = (e) =>{

        const {name,type, checked, value } = e.target

        setTodo({
            ...todo,
            [name] : 
                type === 'checkbox' 
                    ? checked : value
        })
        
    }

    const PintarError = () => (
        <div className="alerta-error">Campos Obligatorios</div>
    )

  return (
    <>
        <h1 className="titulo-form">Formulario Controlado</h1>
        
            <form className="formulario-contenedor" onSubmit={handleSubmit} >

            {
            error && <PintarError/> 
            }

                <input 
                    className="input-name"
                    type="text"
                    placeholder="Ingrese nueva tarea"
                    name="todoName"
                    onChange={handleChange}
                    value={todo.todoName}
                />
                <textarea
                    className="textarea-form"
                    name="todoDescripcion"
                    placeholder="Descripcion"
                    onChange={handleChange}
                    value={todo.todoDescripcion}
                />
                <select 
                    className="select-form" 
                    name="todoEstado" 
                    onChange={handleChange}
                    value={todo.todoEstado}
                >
                    <option name="pendiente">Pendiente</option>
                    <option name="completada">Completada</option>
                </select>
                <div>
                <input 
                    className="input-checkbox"
                    type="checkbox"
                    name="todoCheck"
                    onChange={handleChange}
                    value={todo.todoCheck}
                    
                />
                <label
                >
                Dar prioridad
                </label>
                </div>
                
                <button className="btn-form-agregar" type="submit" >Agregar</button>
            </form>
    </>)
  
};

export default Formulario;
