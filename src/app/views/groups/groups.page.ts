import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {RouterLink} from "@angular/router";
import {Group} from "../../../shared/types/group.type";
import {AppStoreService} from "../../../shared/services/app-store.service";
import {GroupsApiService} from "../../../shared/services-api/groups-api.service";
import {GroupListItemComponent} from "../../components/group-list-item/group-list-item.component";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, GroupListItemComponent, RouterLink]
})
export class GroupsPage implements OnInit {
  groups: WritableSignal<Group[]> = signal<Group[]>([]);
  constructor(private appStore: AppStoreService,
              private groupsApi: GroupsApiService) { }


  getFromApi() {
    this.groupsApi.list(this.appStore.getDivision()()?._id).subscribe({
      next: (groups: Group[]) => {
        this.groups.set(groups);
      }
    });
  }

  selectGroup(group: Group) {
    this.appStore.setGroup(group);
    console.log('Group selected: ', group);
  }

  ngOnInit() {
    this.getFromApi();
  }

}
