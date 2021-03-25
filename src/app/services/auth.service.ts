import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURl = environment.APP_BACKEND_URL;
  constructor(private http: HttpClient, private router: Router) { }

  public logIn(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiURl + '/login', {
      username, password
    }, {observe: 'response'} );
  }

  logOut() {
    localStorage.removeItem('auth-token');
    this.router.navigate(['login']);
  }

  isAuthenticated() {
    return localStorage.getItem('auth-token');
  }
}
