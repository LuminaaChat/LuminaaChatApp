import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {AppStoreService} from "../shared/services/app-store.service";
import {AuthApiService} from "../shared/services-api/auth-api.service";
import {User} from "../shared/types/user.type";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private appStore: AppStoreService,
              private authApiService: AuthApiService) {
    if (this.appStore.hasToken()) {
      this.authApiService.refreshToken().subscribe({
        next: (user: {user: User, token: string}) => {
          this.appStore.setToken(user.token);
          this.appStore.setUser(user.user);
        },
        error: (err) => {
          console.log(err);
          this.appStore.unsetToken();
        }
      });
    }
  }
}
