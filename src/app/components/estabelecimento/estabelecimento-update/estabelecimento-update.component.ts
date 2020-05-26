import { Estabelecimento } from './../../../model/estabelecimento.model';
import { Component, OnInit } from '@angular/core';
import { EstabelecimentoService } from 'src/app/service/estabelecimento.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estabelecimento-update',
  templateUrl: './estabelecimento-update.component.html',
  styleUrls: ['./estabelecimento-update.component.css']
})
export class EstabelecimentoUpdateComponent implements OnInit {

  estabelecimento: Estabelecimento

  constructor(private service: EstabelecimentoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.service.findById(id).subscribe((res) => {
      this.estabelecimento = res    
    });
  }

  updateEstabelecimento(): void {
    this.service.update(this.estabelecimento).subscribe(() => {
      this.service.showMessage("Estabelecimento atualizado com sucesso!");
      this.router.navigate(["/estabelecimento"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/estabelecimento"]);
  }

}
