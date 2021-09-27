import Swal from "sweetalert2"

export const alertDeleteImage = (title: string, message: string) => {
    return Swal.fire({
        title: title,
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
        if (result.isConfirmed) {
            return true;
        }
        return false;
    })
}

export const alertLoading = (title: string, message: string) => {
    return Swal.fire({
        title: title,
        html: message,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        }
    })
}

export const alertSuccess = (title) => {
    return Swal.fire({
        title: title,
        icon: 'success',
        showConfirmButton: false
    })
}