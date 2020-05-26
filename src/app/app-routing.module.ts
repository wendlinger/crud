import { ProfissionalSaveComponent } from './components/profissional/profissional-save/profissional-save.component';
import { ProfissionalComponent } from './views/profissional/profissional.component';

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './views/home/home.component';
import { EstabelecimentoComponent } from './views/estabelecimento/estabelecimento.component';
import { EstabelecimentoSaveComponent } from './components/estabelecimento/estabelecimento-save/estabelecimento-save.component';
import { ProfissionalUpdateComponent } from './components/profissional/profissional-update/profissional-update.component';
import { ProfissionalDeleteComponent } from './components/profissional/profissional-delete/profissional-delete.component';
import { VinculoEstabelecimentoProfissionalComponent } from './components/vinculo-estabelecimento-profissional/vinculo-estabelecimento-profissional.component';
import { EstabelecimentoDeleteComponent } from './components/estabelecimento/estabelecimento-delete/estabelecimento-delete.component';
import { EstabelecimentoUpdateComponent } from './components/estabelecimento/estabelecimento-update/estabelecimento-update.component';

const routes: Routes = [
    {
      path: "",
      component: HomeComponent
    },
    {
        path: "profissional",
        component: ProfissionalComponent
      },
      {
        path: "profissional/save",
        component: ProfissionalSaveComponent
      },
      {
        path: "profissional/update/:id",
        component: ProfissionalUpdateComponent
      },
      {
        path: "profissional/delete/:id",
        component: ProfissionalDeleteComponent
      },
      {
        path: "estabelecimento",
        component: EstabelecimentoComponent
      },
      {
        path: "estabelecimento/save",
        component: EstabelecimentoSaveComponent
      },
      {
        path: "estabelecimento/update/:id",
        component: EstabelecimentoUpdateComponent
      },
      {
        path: "estabelecimento/delete/:id",
        component: EstabelecimentoDeleteComponent
      },      
      {
        path: "vincularestabelecimentofuncionario",
        component: VinculoEstabelecimentoProfissionalComponent
      },
      
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}