import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  setToken(token: string){
    localStorage.setItem('auth-token', token);

  }
  getToken(){
    return localStorage.getItem('auth-token');

  }
  clearToken(){
    localStorage.removeItem('auth-token');
  }
}
