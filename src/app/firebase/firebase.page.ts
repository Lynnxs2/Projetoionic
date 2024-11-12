import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.page.html',
  styleUrls: ['./firebase.page.scss'],
})
export class FirebasePage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  // Função de login
  login() {
    this.authService.login(this.email, this.password).subscribe(
      (user) => {
        console.log('Login bem-sucedido', user);
        this.router.navigate(['/tabs/tab1']); // Navega para a aba principal
      },
      (error) => {
        console.error('Erro de login', error);
        alert('Erro ao fazer login!');
      }
    );
  }

  // Função de registrar novo usuário
  register() {
    this.authService.register(this.email, this.password).subscribe(
      (user) => {
        console.log('Cadastro bem-sucedido', user);
        this.router.navigate(['/tabs/tab1']); // Navega para a aba principal
      },
      (error) => {
        console.error('Erro no cadastro', error);
        alert('Erro ao cadastrar!');
      }
    );
  }
}
