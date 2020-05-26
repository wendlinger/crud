import { MatSnackBar } from '@angular/material/snack-bar';
import { Profissional } from './../model/profissional.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  baseUrl = "http://localhost:8080/app/profissional";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  save(profissional: Profissional): Observable<Profissional> {
    return this.http.post<Profissional>(this.baseUrl, profissional).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  findAll(): Observable<Profissional[]> {
    return this.http.get<Profissional[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  findById(id: number): Observable<Profissional> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Profissional>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(profissional: Profissional): Observable<Profissional> {    
    return this.http.put<Profissional>(this.baseUrl, profissional).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Profissional> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Profissional>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

}
