import { Routes } from '@angular/router';
import {authGuard} from "../shared/guards/auth.guard";
import {clientGuard} from "../shared/guards/client.guard";
import {employeeGuard} from "../shared/guards/employee.guard";
import {serverChosenGuard} from "../shared/guards/server-chosen.guard";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee',
    pathMatch: 'full',
  },
  {
    path: 'server-choose',
    loadComponent: () => import('./views/server-choose/server-choose.page').then( m => m.ServerChoosePage)
  },
  {
    path: 'forgot',
    loadComponent: () => import('./views/forgot-password/forgot-password.page').then(m => m.ForgotPasswordPage),
    canActivate: [serverChosenGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./views/login/login.page').then(m => m.LoginPage),
    canActivate: [serverChosenGuard]
  },
  {
    path: 'lock',
    loadComponent: () => import('./views/screen-lock/screen-lock.page').then(m => m.ScreenLockPage),
    canActivate: [serverChosenGuard]
  },
  {
    path: 'client',
    loadComponent: () => import('./views/client/client.page').then(m => m.ClientPage),
    canActivate: [serverChosenGuard, authGuard, clientGuard]
  },
  {
    path: 'employee',
    loadComponent: () => import('./views/employee/employee.page').then(m => m.EmployeePage),
    canActivate: [serverChosenGuard, authGuard, employeeGuard]
  },
  {
    path: 'chat',
    loadComponent: () => import('./views/chat/chat.page').then(m => m.ChatPage),
    canActivate: [serverChosenGuard, authGuard]
  },
  {
    path: 'config',
    loadComponent: () => import('./views/config/config.page').then(m => m.ConfigPage),
    canActivate: [serverChosenGuard, authGuard]
  },
  {
    path: 'config/imprint',
    loadComponent: () => import('./views/config/imprint/imprint.page').then(m => m.ImprintPage),
    canActivate: [serverChosenGuard, authGuard]
  },
  {
    path: 'config/privacy',
    loadComponent: () => import('./views/config/privacy/privacy.page').then(m => m.PrivacyPage),
    canActivate: [serverChosenGuard, authGuard]
  },
  {
    path: 'config/terms',
    loadComponent: () => import('./views/config/terms/terms.page').then(m => m.TermsPage),
    canActivate: [serverChosenGuard, authGuard]
  },
  {
    path: 'config/licences',
    loadComponent: () => import('./views/config/licences/licences.page').then(m => m.LicencesPage),
    canActivate: [serverChosenGuard, authGuard]
  },
  {
    path: 'config/foss',
    loadComponent: () => import('./views/config/foss/foss.page').then(m => m.FossPage),
    canActivate: [serverChosenGuard, authGuard]
  },
];
