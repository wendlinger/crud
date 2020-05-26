import { Profissional } from './../../../model/profissional.model';
import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from 'src/app/service/profissional.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profissional-delete',
  templateUrl: './profissional-delete.component.html',
  styleUrls: ['./profissional-delete.component.css']
})
export class ProfissionalDeleteComponent implements OnInit {

  profissional: Profissional

  constructor(private service: ProfissionalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.findById(id).subscribe((res) => {
      this.profissional = res.object
    });
  }

  deleteProfissional(): void {
    this.service.delete(this.profissional.id).subscribe(() => {
      this.service.showMessage("Profissional excluido com sucesso!");
      this.router.navigate(["/profissional"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/profissional"]);
  }
}
