// BOOTSTRAP
import Button from "react-bootstrap/Button";

// PAQUETE PARA ALERTAS
import Swal from 'sweetalert2'

const CerraCuenta = () => {

    // mostrar notificación a usuario
    const showAlert = () => {
        Swal.fire({
            title: 'Estás seguro?',
            text: "No puedes revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, borrar mi cuenta!'
          }).then((result) => {
            if (result.isConfirmed) {
                // TODO: borrar de la abse de datos la cuenta.
              Swal.fire(
                'Borrada!',
                'Tu cuenta ha sido borrada.',
                'success'
              )
              // TODO: Cerrar sesión
            }
          })
    };

    return ( 
        <>
            <Button className="m-5 p-3"size="lg" variant="dark" onClick = {showAlert}> Borrar cuenta permanentemente</Button>{' '}
        </>
     );
}
 
export default CerraCuenta;