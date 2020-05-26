import { Profissional } from './../../model/profissional.model';
import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from 'src/app/service/profissional.service';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalComponent implements OnInit {

  profissionais: Profissional[]
  displayedColumns = ['id', 'nome', 'endereco', 'action']

  constructor(private service: ProfissionalService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(res => {      
      this.profissionais = res
    })
  }
  
}
