import { Routes } from '@angular/router';
import {authGuard} from "../shared/guards/auth.guard";
import {clientGuard} from "../shared/guards/client.guard";
import {employeeGuard} from "../shared/guards/employee.guard";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'client',
    loadComponent: () => import('./views/client/client.page').then(m => m.ClientPage),
    canActivate: [authGuard, clientGuard]
  },
  {
    path: 'employee',
    loadComponent: () => import('./views/employee/employee.page').then(m => m.EmployeePage),
    canActivate: [authGuard, employeeGuard]
  },
  {
    path: 'chat',
    loadComponent: () => import('./views/chat/chat.page').then(m => m.ChatPage)
  },
  {
    path: 'config',
    loadComponent: () => import('./views/config/config.page').then(m => m.ConfigPage),
  },
  {
    path: 'config/imprint',
    loadComponent: () => import('./views/config/imprint/imprint.page').then(m => m.ImprintPage)
  },
  {
    path: 'config/privacy',
    loadComponent: () => import('./views/config/privacy/privacy.page').then(m => m.PrivacyPage)
  },
  {
    path: 'config/terms',
    loadComponent: () => import('./views/config/terms/terms.page').then(m => m.TermsPage)
  },
  {
    path: 'config/licences',
    loadComponent: () => import('./views/config/licences/licences.page').then(m => m.LicencesPage)
  },
  {
    path: 'config/foss',
    loadComponent: () => import('./views/config/foss/foss.page').then(m => m.FossPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./views/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'lock',
    loadComponent: () => import('./views/screen-lock/screen-lock.page').then(m => m.ScreenLockPage)
  },
  {
    path: 'forgot',
    loadComponent: () => import('./views/forgot-password/forgot-password.page').then(m => m.ForgotPasswordPage)
  },
];
