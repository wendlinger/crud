import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './views/home/home.component';
import { NavComponent } from './components/template/nav/nav.component';
import { ProfissionalComponent } from './views/profissional/profissional.component';
import { EstabelecimentoComponent } from './views/estabelecimento/estabelecimento.component'
import { AppRoutingModule } from './app-routing.module';
import { EstabelecimentoSaveComponent } from './components/estabelecimento/estabelecimento-save/estabelecimento-save.component';
import { ProfissionalSaveComponent } from './components/profissional/profissional-save/profissional-save.component';
import { ProfissionalUpdateComponent } from './components/profissional/profissional-update/profissional-update.component';
import { ProfissionalDeleteComponent } from './components/profissional/profissional-delete/profissional-delete.component';
import { VinculoEstabelecimentoProfissionalComponent } from './components/vinculo-estabelecimento-profissional/vinculo-estabelecimento-profissional.component';
import { EstabelecimentoDeleteComponent } from './components/estabelecimento/estabelecimento-delete/estabelecimento-delete.component';
import { EstabelecimentoUpdateComponent } from './components/estabelecimento/estabelecimento-update/estabelecimento-update.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavComponent,
    ProfissionalComponent,
    ProfissionalSaveComponent,
    EstabelecimentoComponent,
    EstabelecimentoSaveComponent,
    ProfissionalUpdateComponent,
    ProfissionalDeleteComponent,
    VinculoEstabelecimentoProfissionalComponent,
    EstabelecimentoDeleteComponent,
    EstabelecimentoUpdateComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
