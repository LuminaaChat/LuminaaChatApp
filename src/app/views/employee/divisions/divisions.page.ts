import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {DivisionListItemComponent} from "../../../components/division-list-item/division-list-item.component";
import {Division} from "../../../../shared/types/division.type";
import {AppStoreService} from "../../../../shared/services/app-store.service";
import {DivisionsApiService} from "../../../../shared/services-api/divisions-api.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-divisions',
  templateUrl: './divisions.page.html',
  styleUrls: ['./divisions.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, DivisionListItemComponent, RouterLink]
})
export class DivisionsPage implements OnInit {
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

  selectDivision(division: Division) {
    this.appStore.setDivision(division);
    console.log('Division selected: ', division);
  }

  ngOnInit() {
    const names  = this.appStore.getUserName();
    this.firstName = names.firstName;
    this.lastName = names.lastName;

    this.getFromApi();
  }

}
