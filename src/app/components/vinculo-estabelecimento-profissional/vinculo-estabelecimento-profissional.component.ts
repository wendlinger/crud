import { EstabelecimentoService } from './../../service/estabelecimento.service';
import { Estabelecimento } from './../../model/estabelecimento.model';
import { Profissional } from './../../model/profissional.model';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProfissionalService } from 'src/app/service/profissional.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vinculo-estabelecimento-profissional',
  templateUrl: './vinculo-estabelecimento-profissional.component.html',
  styleUrls: ['./vinculo-estabelecimento-profissional.component.css']
})
export class VinculoEstabelecimentoProfissionalComponent implements OnInit {

  profissionais: Profissional[]
  estabelecimentos: Estabelecimento[] 

  constructor(
    private profissionalService: ProfissionalService,
    private estabelecimentoService: EstabelecimentoService,
    private router: Router
    ) { }

  ngOnInit(): void {     
  }

  findAllProfissionais(): void {
    this.profissionalService.findAll().subscribe(res => {
      this.profissionais = res
    })
  }

  findAllEstabelecimentos(): void {
    this.estabelecimentoService.findAll().subscribe(res => {
      this.profissionais = res
    })
  }

  cancel(): void {
    this.router.navigate(["/estabelecimento"]);
  }
}
