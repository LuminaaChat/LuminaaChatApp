import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {Router, RouterLink} from "@angular/router";
import {AppStoreService} from "../../../shared/services/app-store.service";
import {AuthApiService} from "../../../shared/services-api/auth-api.service";
import {User} from "../../../shared/types/user.type";
import {SocketService} from "../../../shared/services/socket.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  loadingState: boolean = false;
  errorState: boolean = false;

  constructor(private router: Router,
              private appStore: AppStoreService,
              private socketService: SocketService,
              private authApiService: AuthApiService) {
  }

  onClickLogin() {
    this.errorState = false;
    this.loadingState = true;

    this.authApiService.login(this.email, this.password).subscribe({
      next: async (user: { user: User, token: string }) => {
        this.appStore.setToken(user.token);
        this.appStore.setUser(user.user);
        this.socketService.start();

        if (this.appStore.hasUserRole('employee')) {
          await this.router.navigate(['../employee']);
        } else if (this.appStore.hasUserRole('client')) {
          await this.router.navigate(['../client']);
        } else {
          this.appStore.unsetToken();
          this.errorState = true;
        }
        this.loadingState = false;
        this.email = '';
        this.password = '';
      },
      error: (err) => {
        console.log(err);
        this.loadingState = false;
        this.errorState = true;
      }
    });
  }

  ngOnInit() {
    console.log(this.appStore.getServerUrl());
  }

}
