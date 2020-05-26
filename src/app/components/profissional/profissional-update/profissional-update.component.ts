import { Profissional } from './../../../model/profissional.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfissionalService } from 'src/app/service/profissional.service';

@Component({
  selector: 'app-profissional-update',
  templateUrl: './profissional-update.component.html',
  styleUrls: ['./profissional-update.component.css']
})
export class ProfissionalUpdateComponent implements OnInit {

  profissional: Profissional

  constructor(private service: ProfissionalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.service.findById(id).subscribe((res) => {
      this.profissional = res.object
      console.log(res)
    });
  }

  updateProfissional(): void {
    this.service.update(this.profissional).subscribe(() => {
      this.service.showMessage("Profissional atualizado com sucesso!");
      this.router.navigate(["/profissional"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/profissional"]);
  }

}
