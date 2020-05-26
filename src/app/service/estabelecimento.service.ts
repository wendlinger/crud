import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Estabelecimento } from './../model/estabelecimento.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { ResponseTO } from '../model/response.model';

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

  save(estabelecimento: Estabelecimento): Observable<ResponseTO> {
    return this.http.post<ResponseTO>(this.baseUrl, estabelecimento).pipe(      
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

  update(estabelecimento: Estabelecimento): Observable<ResponseTO> {   
    return this.http.put<ResponseTO>(this.baseUrl, estabelecimento).pipe(      
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
    this.showMessage(e.messages, true);
    return EMPTY;
  }
}
