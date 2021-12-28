import Swal from "sweetalert2"

export const validarDatos = (values) => {

    if(values.nombre.length < 4 ){
        Swal.fire({
            icon:'error',
            title:"Nombre Inválido"
        })
        return false
    }
    if(values.apellido.length < 4 ){
        Swal.fire({
            icon:'error',
            title:"Apellido Inválido"
        })
        return false
    }
    if(values.email.length < 7 ){
        Swal.fire({
            icon:'error',
            title:"Email Inválido"
        })
        return false
    }

    return true

}