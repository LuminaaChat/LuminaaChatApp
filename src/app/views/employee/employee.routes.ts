import {Routes} from "@angular/router";

export const EMPLOYEE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./employee.page').then(m => m.EmployeePage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'divisions'
      },
      {
        path: 'groups',
        loadComponent: () => import('./groups/groups.page').then(m => m.GroupsPage),
      },
      {
        path: 'divisions',
        loadComponent: () => import('./divisions/divisions.page').then(m => m.DivisionsPage),
      },
    ]
  },
];
