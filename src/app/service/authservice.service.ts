import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
//   public isAuthentication = false;

//   constructor() { }
//   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     console.log("i am in canactivate function");
//     return this.isAuthentication;
// }
//   checkUser(u:string,p:string):boolean{
//     if(u=="admin@gmail.com"&& p=="admin" || u=="conrad@gmail.com" && p=="conrad"){
//       this.isAuthentication=true;
      
//       return true;
//     }
//     else{
//       this.isAuthentication=false;
//       return false;
//     }
//   }
// }
// export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
//   return inject(AuthserviceService).canActivate(next, state);
}
