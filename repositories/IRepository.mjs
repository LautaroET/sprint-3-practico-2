class IRepository { 
    obtenerTodos() { 
        throw new Error("Método 'obtener Todos ()' no implementado"); 
    }
    crear(data) { 
        throw new Error("Método 'crear ()' no implementado"); 
    }
    actualizar(id, datosActualizados){
        throw new Error("Método 'actualizar ()' no implementado"); 
    }
}
export default IRepository;