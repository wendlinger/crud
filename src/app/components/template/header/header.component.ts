import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProfissional(): void{
    this.router.navigate(['/profissional'])
  }

  navigateToProfissionalSave(): void{
    this.router.navigate(['/profissional/save'])
  }

  navigateToEstabelecimento(): void{
    this.router.navigate(['/estabelecimento'])
  }

  navigateToEstabelecimentoSave(): void{
    this.router.navigate(['/estabelecimento/save'])
  }

  navigateToVincularEstabelecimentoProfissional(): void{
    this.router.navigate(['/vincularestabelecimentofuncionario'])
  }
}
