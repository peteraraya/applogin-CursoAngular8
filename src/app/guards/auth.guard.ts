import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // Inyectamos el servicio
  constructor(
      private auth: AuthService,
      private router: Router
  ) { }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  
  canActivate(): boolean{
    // console.log('Guard');
    // return this.auth.estaAutotenticado();
    if (this.auth.estaAutotenticado()) {
        return true;
    }else{
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
