import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  generarAlertCerrarSesion(): Promise<boolean> {
    return Swal.fire({
      title: '¿Estás seguro?',
      text: 'Cerrar sesión finalizará tu sesión actual.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Cerrar sesión',
      cancelButtonText: 'Cancelar',
      background: '#000000',
      color: 'white',
      heightAuto: false,
    }).then((result) => {
      return result.isConfirmed; // Devuelve true si se confirma, false si se cancela
    });
  }
}
