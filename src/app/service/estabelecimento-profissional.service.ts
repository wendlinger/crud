import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Estabelecimento } from './../model/estabelecimento.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { ResponseTO } from '../model/response.model';
import { EstabelecimentoProfissional } from '../model/estabelecimento-profissional';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoProfissionalService {
  
  baseUrl = "http://localhost:8080/app/estabecimento/";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  
  vincular(vincular: EstabelecimentoProfissional): Observable<ResponseTO> {
    const url = `${this.baseUrl}/${vincular.estabelecimentoId}/profissional/${vincular.profissionalId}`;
    return this.http.put<ResponseTO>(url, Response).pipe(
      catchError((e) => this.errorHandler(e))
    );
  }  

  errorHandler(e: ResponseTO): Observable<ResponseTO> {
    this.showMessage(e.messages, true);
    return EMPTY;
  }
}
