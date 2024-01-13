import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Division} from "../../../shared/types/division.type";
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-division-list-item',
  templateUrl: './division-list-item.component.html',
  styleUrls: ['./division-list-item.component.scss'],
  imports: [
    IonicModule,
    RouterLink
  ],
  standalone: true
})
export class DivisionListItemComponent  implements OnInit {
  @Input() division: Division = {} as Division;
  @Output() selectDivision: EventEmitter<Division> = new EventEmitter<Division>();
  constructor() { }

  onSelect() {
    this.selectDivision.emit(this.division);
  }

  ngOnInit() {}

}
