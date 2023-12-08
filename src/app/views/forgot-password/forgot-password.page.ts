import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class ForgotPasswordPage implements OnInit {
  loadingState: boolean = false;

  success: boolean = false;

  constructor() {
  }

  onClickNewPassword() {
    this.loadingState = true;
    setTimeout(() => {
      this.loadingState = false;
      this.success = true;
    }, 3000);
  }

  ngOnInit() {
  }

}
