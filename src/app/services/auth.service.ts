import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from } from 'rxjs'; // Importando o 'from' do RxJS

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // Método de login
  login(email: string, password: string) {
    // Usando 'from' para converter a Promise em Observable
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  // Método de logout
  logout() {
    return from(this.afAuth.signOut());
  }

  // Método para criar usuário
  register(email: string, password: string) {
    return from(this.afAuth.createUserWithEmailAndPassword(email, password));
  }

  // Método para obter o usuário autenticado
  getUser() {
    return this.afAuth.authState;  // Retorna um Observable do usuário
  }
}
