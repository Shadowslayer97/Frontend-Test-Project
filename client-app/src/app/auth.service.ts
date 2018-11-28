import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    const token = localStorage.getItem('token');
    console.log(token);
    if(token)
      return true;
    else {
      this.router.navigate(['/login']);
      return false;
    }

  }
}
