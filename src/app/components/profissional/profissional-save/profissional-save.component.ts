import { Profissional } from './../../../model/profissional.model';
import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from 'src/app/service/profissional.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profissional-save',
  templateUrl: './profissional-save.component.html',
  styleUrls: ['./profissional-save.component.css']
})
export class ProfissionalSaveComponent implements OnInit {

  profissional = {
    nome:'',
    endereco:''    
  }

  constructor(private service: ProfissionalService, private router: Router) { }

  ngOnInit(): void {
  }

  saveProfissional(): void {
    this.service.save(this.profissional).subscribe(() => {
      this.service.showMessage('Profissional cadastrado!')
      this.router.navigate(['/profissional'])
    })
  }

  cancel(): void {
    this.router.navigate(['/profissional'])
  }

}
