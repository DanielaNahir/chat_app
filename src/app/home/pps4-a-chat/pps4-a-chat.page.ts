import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Mensaje } from 'src/app/models/mensaje';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-pps4-a-chat',
  templateUrl: './pps4-a-chat.page.html',
  styleUrls: ['./pps4-a-chat.page.scss'],
})
export class PPS4AChatPage implements OnInit {
  protected firebase = inject(FirebaseService);
  protected mensajes: Mensaje[] = [];
  subscribe: Subscription | null = null;
  protected msjNuevo = "";
  protected collection = "pps4a-chat"

  constructor(private datePipe: DatePipe) {
    
  }

  ngOnInit() {
    const mensajes = this.firebase.cargarMensajes(this.collection);
    this.subscribe = mensajes.subscribe((result) => {
      this.mensajes = result as Mensaje[];
      setTimeout(() => this.scrollToBottom(), 100); // Aseguramos el scroll después de que el DOM se actualice
    });
  }

  enviarMensaje() {
    if (this.msjNuevo.trim() !== "") {
      try {
        const user = this.firebase.usuario;

        if (user) {
          const nuevoMensaje: Mensaje = {
            usuario: user.displayName || 'Usuario Anónimo',
            email: user.email || 'correo@anonimo.com',
            texto: this.msjNuevo,
            fecha: this.formatDate(new Date)
          };

          this.firebase.guardarMensaje(nuevoMensaje, this.collection).then(() => {
            console.log("Mensaje enviado correctamente");
            this.msjNuevo = "";
            setTimeout(() => this.scrollToBottom(), 100);
          }).catch((error) => {
            console.error("Error al enviar el mensaje:", error);
          });
        } else {
          console.log("No hay usuario logueado.");
        }
      } catch (error) {
        console.error("Error en el envío del mensaje:", error);
      }
    } else {
      console.log("El mensaje no puede estar vacío");
    }
  }

  scrollToBottom() {
    const msgContainer = document.getElementById('msgContainer');
    if (msgContainer) {
      msgContainer.scrollTop = msgContainer.scrollHeight;
    }
  }

  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'dd/MM/yy HH:mm:ss') || '';
  }
  

  ngOnDestroy() {
    this.subscribe?.unsubscribe();
  }

  atras() {
    this.firebase.routerLink('/home');
  }
}