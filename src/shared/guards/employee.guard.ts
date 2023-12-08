import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AppStoreService} from "../services/app-store.service";

export const employeeGuard: CanActivateFn = (route, state): boolean => {
  const router = inject(Router);
  const result = inject(AppStoreService).hasUserRole('employee');

  if (!result) {
    console.log('[Employee Guard] User has no Employee Role. Redirect to client page. ', result)
    router.navigate(['../client']);
    return false;
  }

  console.log('[Employee Guard] User has Role! Redirect to employee page. ', result)
  return true;
};
