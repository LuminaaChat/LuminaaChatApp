import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {RouterLink} from "@angular/router";
import {ChatListItemComponent} from "../../components/chat-list-item/chat-list-item.component";
import {AppStoreService} from "../../../shared/services/app-store.service";
import {SocketService} from "../../../shared/services/socket.service";
import {DivisionsApiService} from "../../../shared/services-api/divisions-api.service";
import {Division} from "../../../shared/types/division.type";
import {DivisionListItemComponent} from "../../components/division-list-item/division-list-item.component";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, ChatListItemComponent, DivisionListItemComponent]
})
export class EmployeePage implements OnInit {
  firstName: string = '';
  lastName: string = '';
  divisions: WritableSignal<Division[]> = signal<Division[]>([]);
  constructor(private appStore: AppStoreService,
              private divisionsApi: DivisionsApiService) { }


  getFromApi() {
    this.divisionsApi.list().subscribe({
      next: (divisions: Division[]) => {
        this.divisions.set(divisions);
      }
    });
  }

  ngOnInit() {
    const names  = this.appStore.getUserName();
    this.firstName = names.firstName;
    this.lastName = names.lastName;

    this.getFromApi();
  }

}
