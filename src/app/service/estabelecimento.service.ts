import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Estabelecimento } from './../model/estabelecimento.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {
 
  baseUrl = "http://localhost:8080/app/estabelecimento";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  save(estabelecimento: Estabelecimento): Observable<Estabelecimento> {
    return this.http.post<Estabelecimento>(this.baseUrl, estabelecimento).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  findAll(): Observable<Estabelecimento[]> {
    return this.http.get<Estabelecimento[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  findById(id: number): Observable<Estabelecimento> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Estabelecimento>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(estabelecimento: Estabelecimento): Observable<Estabelecimento> {   
    return this.http.put<Estabelecimento>(this.baseUrl, estabelecimento).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Estabelecimento> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Estabelecimento>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
