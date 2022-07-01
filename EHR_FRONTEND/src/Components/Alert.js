import swal from 'sweetalert';

export const Alert = (title, text, icon, button, timer) =>{
  swal({
    title: `${title}`,
    text: `${text}`,
    icon: `${icon}`,
    button: `${button}`,
    timer: `${timer}`,
  });
}

export const AlertConfimation = (title, text, icon) => {
  swal({
    title: `${title}`,
    text: `${text}`,
    icon: `${icon}`,
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("El anuncio se ha eliminado correctamente", {
        icon: "success",
      });
    }
  });
}