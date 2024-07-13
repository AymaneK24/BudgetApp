import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';


export const authGuard: CanActivateChildFn = (childRoute, state) => {

const localData = localStorage.getItem("theLogin");
const router = inject(Router);

if(localData != null ){
  return true ;


} else {
  router.navigateByUrl("login");
  return false;
}

};
