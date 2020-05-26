import { Estabelecimento } from './../../model/estabelecimento.model';
import { Component, OnInit } from '@angular/core';
import { EstabelecimentoService } from 'src/app/service/estabelecimento.service';

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.css']
})
export class EstabelecimentoComponent implements OnInit {

  estabelecimentos: Estabelecimento[]
  displayedColumns = ['id', 'nome', 'endereco', 'action']
  
  constructor(private service: EstabelecimentoService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(res => {
      this.estabelecimentos = res.object
    })
  }
}
