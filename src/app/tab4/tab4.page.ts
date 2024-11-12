import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importando Router

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private router: Router) { } // Injeta o Router

  ngOnInit() {
  }

  // Função para navegar para a página FirebasePage
  goToFirebasePage() {
    this.router.navigate(['/tabs/firebase']); // Navega para a página firebase
  }
}
