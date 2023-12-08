import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {AppStoreService} from "../../../shared/services/app-store.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink]
})
export class ConfigPage implements OnInit {
  constructor(public appStore: AppStoreService) { }

  ngOnInit() {
  }

}
