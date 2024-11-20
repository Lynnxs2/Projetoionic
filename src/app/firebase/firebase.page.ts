import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.page.html',
  styleUrls: ['./firebase.page.scss'],
})
export class FirebasePage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  // Função para exibir alertas
  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Sucesso',
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  // Função de login
  login() {
    this.authService.login(this.email, this.password).subscribe(
      async (user) => {
        console.log('Login bem-sucedido', user);
        await this.showAlert('Login feito com sucesso!');
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
      async (user) => {
        console.log('Cadastro bem-sucedido', user);
        await this.showAlert('Cadastro feito com sucesso!');
        this.router.navigate(['/tabs/tab1']); // Navega para a aba principal
      },
      (error) => {
        console.error('Erro no cadastro', error);
        alert('Erro ao cadastrar!');
      }
    );
  }
}
