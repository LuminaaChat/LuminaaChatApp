import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AppStoreService} from "../services/app-store.service";

export const serverChosenGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const result = inject(AppStoreService).hasServerUrl();

  if (!result) {
    console.log('[Server Chosen] No Server is chosen. Redirect to server choose page. ', result)
    router.navigate(['../server-choose']);
    return false;
  }

  console.log('[Server Chosen Guard] Server is chosen! Redirect to Login Page. ', result)
  return true;
};
