import { Estabelecimento } from './../../../model/estabelecimento.model';
import { Component, OnInit } from '@angular/core';
import { EstabelecimentoService } from 'src/app/service/estabelecimento.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estabelecimento-delete',
  templateUrl: './estabelecimento-delete.component.html',
  styleUrls: ['./estabelecimento-delete.component.css']
})
export class EstabelecimentoDeleteComponent implements OnInit {
  
  estabelecimento: Estabelecimento

  constructor(private service: EstabelecimentoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.findById(id).subscribe((res) => {
      this.estabelecimento = res.object
    });
  }

  deleteEstabelecimento(): void {
    this.service.delete(this.estabelecimento.id).subscribe(() => {
      this.service.showMessage("Estabelecimento excluido com sucesso!");
      this.router.navigate(["/estabelecimento"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/estabelecimento"]);
  }
}
