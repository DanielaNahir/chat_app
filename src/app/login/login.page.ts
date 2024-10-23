import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../service/firebase.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  estadoForm: boolean = false;
  firebase = inject(FirebaseService);

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  async iniciarSesion() {
    this.estadoForm = true;

    if (this.form.valid) {
      try {
        const respuesta = await this.firebase.signIn(this.form.value as User);
        console.log('Respuesta login:', respuesta);
        this.form.reset();
        this.firebase.routerLink('home');
        this.estadoForm= false;
      } catch (error) {
        console.error('Error de inicio de sesión:', error);
      }
    }
  }

  onInput() {
    if (this.estadoForm) {
      this.estadoForm = false;
    }
  }

  clickAdmin() {
    this.form.get('correo')?.setValue('admin@admin.com');
    this.form.get('clave')?.setValue('123456');
  }

  clickGuest(){
    this.form.get('correo')?.setValue('correo@carlos.com');
    this.form.get('clave')?.setValue('123456');
  }

  clickGuest2(){
    this.form.get('correo')?.setValue('invitado@invitado.com');
    this.form.get('clave')?.setValue('123456');
  }
}
