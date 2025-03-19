const Pacientes = ({paciente, setPaciente, eliminarPaciente}) => {
   
    const {nombre, propietario, email, fecha, sintomas, id} = paciente
     

    const  handleEliminar = ( ) => {
      const respuesta  = confirm(' deseas eleminar este paciente?')
      
      if (respuesta){
        eliminarPaciente(id)
      }
    }
  
   return (
    
    <div className="m-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {''}
            <span className="font-normal nomral-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-grat-700 uppercase">
            Propietario: {''}
            <span className="font-ormal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Email: {''}
            <span className="font-normal nomral-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha Alta: {''}
            <span className="font-normal nomral-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Sintomas: {''}
            <span className="font-normal nomral-case">{sintomas}</span>
        </p>

        <div className="flex justify-between mt-10">
            <button
                type= "button"
                className="py-2 px-10 bg-indigo-600 hoover:bg-indigo-700 text-white font-bold uppercase rounded-lg "
                onClick={() => setPaciente(paciente)}
                >Editar</button>
            
                <button
                type= "button"
                className="py-2 px-10 bg-red-600 hoover:bg-red-700 text-white font-bold uppercase rounded-lg "
                onClick={handleEliminar}
                >Eliminar</button>
                
        </div>
    </div>
  )
}

export default Pacientes