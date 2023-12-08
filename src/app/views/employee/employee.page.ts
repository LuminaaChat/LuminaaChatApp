import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {ClientPage} from "../client/client.page";
import {RouterLink} from "@angular/router";
import {ChatListItemComponent} from "../../components/chat-list-item/chat-list-item.component";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, ChatListItemComponent]
})
export class EmployeePage implements OnInit {
  constructor() { }

  ngOnInit() {
    // this.component = ClientPage;
  }

}
