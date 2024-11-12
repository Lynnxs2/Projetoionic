import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  senha: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {}

  // Função de login
  async login() {
    // Exibe o alerta de sucesso
    const alert = await this.alertController.create({
      header: 'Sucesso!',
      message: 'Você está conectado com sucesso!',
      buttons: ['OK'],
    });

    await alert.present();

    // Espera o alerta ser fechado e redireciona após 3 segundos
    await alert.onDidDismiss();

    // Redireciona para a página Tab1 após 3 segundos
    setTimeout(() => {
      this.router.navigate(['/tabs/tab1']);
    }, 2000);
  }
}
