import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (state.url !== '/login' && !this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    if (state.url === '/login' && this.authService.isAuthenticated()){
      this.router.navigate(['home']);
    }
    return true;
  }

}
