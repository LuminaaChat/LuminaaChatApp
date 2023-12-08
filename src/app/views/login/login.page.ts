import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {Router, RouterLink} from "@angular/router";
import {AppStoreService} from "../../../shared/services/app-store.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class LoginPage implements OnInit {

  loadingState: boolean = false;
  errorState: boolean = false;

  constructor(private router: Router,
              private appStore: AppStoreService) {
  }

  onClickLogin() {
    this.errorState = false;
    this.loadingState = true;
    setTimeout(() => {
      this.appStore.setToken('awsometoken');
      this.loadingState = false;
      this.errorState = true;
      this.router.navigate(['/lock'])
    }, 3000);
  }

  ngOnInit() {
  }

}
