import { RouterLink } from "@angular/router";

export const navbarData = [
  {
    label: 'Gestión de laboratorios',
    icon: 'fal fa-desktop',
    routeLink: 'gestion-lab'
  },
  {
    label: 'Gestión de activos',
    icon: 'fal fa-tags',
    routeLink: 'gestion-activo'
  },
  {
    label: 'Gestión de profesores',
    icon: 'fal fa-users',
    routeLink: 'gestion-prof'
  },
  {
    label: 'Aprobación de operadores',
    icon: 'fal fa-user-plus',
    routeLink: 'aprobacion-op'
  },
  {
    label: 'Restablecimiento de contraseña',
    icon: 'fal fa-key',
    routeLink: 'rst-pwd'
  },
<<<<<<< Updated upstream

  {
    routeLink: '',
    icon: 'fa fa-sign-out-alt',
    label: 'Cerrar Sesión'
  }

=======
  {
    label: 'Logout',
    icon: 'fal fa-sign-out',
    routeLink: 'admin-login'
  },
>>>>>>> Stashed changes
]
