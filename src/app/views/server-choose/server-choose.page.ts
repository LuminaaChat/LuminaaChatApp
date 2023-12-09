import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {AppStoreService} from "../../../shared/services/app-store.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-server-choose',
  templateUrl: './server-choose.page.html',
  styleUrls: ['./server-choose.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ServerChoosePage implements OnInit {
  loadingState: boolean = false;
  serverUrl: string = '';
  success: boolean = false;

  constructor(private appStore: AppStoreService,
              private router: Router) { }

  async onClickChooseServer() {
    this.loadingState = true;
    this.appStore.setServerUrl(this.serverUrl);
    await this.router.navigate(['../login']);
  }

  ngOnInit() {
  }

}
