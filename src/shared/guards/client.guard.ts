import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AppStoreService} from "../services/app-store.service";

export const clientGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const result = inject(AppStoreService).hasUserRole('client');

  if (!result) {
    console.log('[Employee Guard] User has no Client Role. Redirect to employee page. ', result)
    router.navigate(['../employee']);
    return false;
  }

  console.log('[Client Guard] User has Role! Redirect to client page. ', result)
  return true;
};
