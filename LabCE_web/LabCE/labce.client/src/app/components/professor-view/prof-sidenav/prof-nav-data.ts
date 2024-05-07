import { RouterLink } from "@angular/router";

export const navbarData = [
  {
    routeLink: 'aprobar-prestamo',
    icon: 'fal fa-laptop-code',
    label: 'Aprobar préstamo'
  },

  {
    routeLink: 'reservar-lab-professor',
    icon: 'fal fal fa-server',
    label: 'Reservar Laboratorio'
  },
  {
    routeLink: '',
    icon: 'fal fa-key', // Aquí utilizo un icono de una llave
    label: 'Cambiar Contraseña'
 },

  {
    routeLink: '',
    icon: 'fa fa-sign-out-alt',
    label: 'Cerrar Sesión'
  }

]