import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  cadastroData = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private router: Router, private alertController: AlertController) {}

  async register() {
    // Lógica para registrar o usuário
    console.log('Cadastro realizado:', this.cadastroData);

    // Exibir o alerta de sucesso
    const alert = await this.alertController.create({
      header: 'Sucesso!',
      message: 'O cadastro foi feito com sucesso!',
      buttons: ['OK'],
    });

    await alert.present();

    // Aguarda o fechamento do alerta e depois redireciona
    await alert.onDidDismiss();

    // Aguardar 3 segundos e redireciona para a página de login
    setTimeout(() => {
      this.router.navigate(['/tabs/login']);
    }, 2000);
  }
}
