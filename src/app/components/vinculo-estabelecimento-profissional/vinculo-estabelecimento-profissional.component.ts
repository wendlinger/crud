import { EstabelecimentoService } from './../../service/estabelecimento.service';
import { EstabelecimentoProfissionalService } from './../../service/estabelecimento-profissional.service';
import { Estabelecimento } from './../../model/estabelecimento.model';
import { Profissional } from './../../model/profissional.model';
import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from 'src/app/service/profissional.service';
import { Router } from '@angular/router';
import { EstabelecimentoProfissional } from 'src/app/model/estabelecimento-profissional';
import { ResponseTO } from 'src/app/model/response.model';

@Component({
  selector: 'app-vinculo-estabelecimento-profissional',
  templateUrl: './vinculo-estabelecimento-profissional.component.html',
  styleUrls: ['./vinculo-estabelecimento-profissional.component.css']
})
export class VinculoEstabelecimentoProfissionalComponent implements OnInit {

  profissionais: Profissional[]
  estabelecimentos: Estabelecimento[]
  vinculacao: EstabelecimentoProfissional = new EstabelecimentoProfissional()

  constructor(
    private profissionalService: ProfissionalService,
    private estabelecimentoService: EstabelecimentoService,
    private service: EstabelecimentoProfissionalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.profissionalService.findAll().subscribe(res => {
      this.profissionais = res.object
    })
    this.estabelecimentoService.findAll().subscribe(res => {
      this.estabelecimentos = res.object
    })

  }

  vincular(): void {
    this.service.vincular(this.vinculacao).subscribe(() => {
      this.service.showMessage("Profissional atualizado com sucesso!");
      this.router.navigate(["/profissional"]);
    })
  }

  cancel(): void {
    this.router.navigate(["/profissional"]);
  }
}
