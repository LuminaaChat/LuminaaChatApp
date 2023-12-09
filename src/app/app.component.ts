import {Component, OnInit} from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {AppStoreService} from "../shared/services/app-store.service";
import {AuthApiService} from "../shared/services-api/auth-api.service";
import {User} from "../shared/types/user.type";
import {SocketService} from "../shared/services/socket.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  constructor(private appStore: AppStoreService,
              private authApiService: AuthApiService,
              private socketService: SocketService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.appStore.hasToken()) {
      this.authApiService.refreshToken().subscribe({
        next: (user: {user: User, token: string}) => {
          this.appStore.setToken(user.token);
          this.appStore.setUser(user.user);
          this.socketService.start();
        },
        error: async (err) => {
          console.log(err);
          this.appStore.unsetToken();
          await this.router.navigate(['/login']);
        }
      });
    }
  }
}
