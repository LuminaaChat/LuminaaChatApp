import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {RouterLink} from "@angular/router";
import {ChatListItemComponent} from "../../components/chat-list-item/chat-list-item.component";
import {AppStoreService} from "../../../shared/services/app-store.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, ChatListItemComponent]
})
export class EmployeePage implements OnInit {
  firstName: string = '';
  lastName: string = '';
  constructor(private appStore: AppStoreService) { }

  ngOnInit() {
    const names  = this.appStore.getUserName();
    this.firstName = names.firstName;
    this.lastName = names.lastName;
  }

}
