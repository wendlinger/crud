import { Estabelecimento } from './../../../model/estabelecimento.model';
import { Component, OnInit } from '@angular/core';
import { EstabelecimentoService } from 'src/app/service/estabelecimento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estabelecimento-save',
  templateUrl: './estabelecimento-save.component.html',
  styleUrls: ['./estabelecimento-save.component.css']
})
export class EstabelecimentoSaveComponent implements OnInit {

  estabelecimento: Estabelecimento

  constructor(private service: EstabelecimentoService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEstabelecimento(): void {
    this.service.save(this.estabelecimento).subscribe(() => {
      this.service.showMessage('Estabelecimento cadastrado!')
      this.router.navigate(['/estabelecimento'])
    })
  }

  cancel(): void {
    this.router.navigate(['/estabelecimento'])
  }

}
