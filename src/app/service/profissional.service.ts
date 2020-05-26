import { MatSnackBar } from '@angular/material/snack-bar';
import { Profissional } from './../model/profissional.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { ResponseTO } from '../model/response.model';

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

  save(profissional: Profissional): Observable<ResponseTO> {
    return this.http.post<ResponseTO>(this.baseUrl, profissional).pipe(      
      catchError((e) => this.errorHandler(e))
    );
  }

  findAll(): Observable<ResponseTO> {
    return this.http.get<ResponseTO>(this.baseUrl).pipe(      
      catchError((e) => this.errorHandler(e))
    );
  }

  findById(id: number): Observable<ResponseTO> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<ResponseTO>(url).pipe(      
      catchError((e) => this.errorHandler(e))
    );
  }

  update(profissional: Profissional): Observable<ResponseTO> {    
    return this.http.put<ResponseTO>(this.baseUrl, profissional).pipe(      
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<ResponseTO> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<ResponseTO>(url).pipe(      
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: ResponseTO): Observable<ResponseTO> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

}
