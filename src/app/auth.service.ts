import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private backendUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  signIn(credentials: { email: string, password: string }): Observable<any> {
    console.log('Datos de inicio de sesión:', credentials);
    const signInUrl = `${this.backendUrl}/usuarios/login`;
    return this.http.post(signInUrl, credentials).pipe(
        catchError(error => {
        console.error('Error al iniciar sesión:', error);
        throw error;
  })
  );
}
}
