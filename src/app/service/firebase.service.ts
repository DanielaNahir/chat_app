import { inject, Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {getFirestore, setDoc, doc} from "@angular/fire/firestore";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/user';
import { Mensaje } from '../models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  usuario: any = null;
  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  router = inject(Router);

  constructor() {
    this.auth.onAuthStateChanged((auth) =>{
      if(auth?.email){
        this.usuario = auth;
      }
    })
  }
  

  // autenticacion
  signIn(user: User){
    return signInWithEmailAndPassword(getAuth(), user.correo, user.clave )
  }

  // login
  logIn(user: User){
    return createUserWithEmailAndPassword(getAuth(), user.correo, user.clave )
  }

  // actualizar
  async update(displayName: string) {
    const user = getAuth().currentUser;
  
    if (user !== null) {
      try {
        await updateProfile(user, { displayName });
        console.log('DisplayName actualizado correctamente.');
      } catch (error) {
        console.error('Error al actualizar el DisplayName:', error);
        throw new Error('Error al actualizar el perfil del usuario.');
      }
    } else {
      throw new Error("No hay usuario autenticado");
    }
  }

  // setear documento
  setDoc(path: string, data:any){
    return setDoc(doc(getFirestore(), path), data);
  }


  routerLink(url: string){
    const audio = new Audio('assets/cambioPagAdmin.mp3');
    audio.play();
    return this.router.navigateByUrl(url);
  }

  saveLocalStorage(key: string, value: any){
    return localStorage.setItem(key, JSON.stringify(value))
  }

  singOut(){
    getAuth().signOut();
    localStorage.removeItem('adminUsuarios');
  }

  getUsuarios(): Observable<User[]> {
    const usuariosCol = this.firestore.collection<User>('adminUsuarios'); // Asegura que la colección sea de tipo User
    return usuariosCol.valueChanges();  // Retorna un Observable<User[]>
  }




  guardarMensaje(mensaje:Mensaje, collection:string){
    const usuariosCol = this.firestore.collection(collection);
    return usuariosCol.add({ ...mensaje });
  }

  cargarMensajes(collection:string): Observable<Mensaje[]> {
    return this.firestore.collection<Mensaje>(collection, ref => ref.orderBy('fecha', 'asc')).valueChanges();
  }

}
