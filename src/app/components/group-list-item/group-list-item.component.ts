import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Group} from "../../../shared/types/group.type";
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-group-list-item',
  templateUrl: './group-list-item.component.html',
  styleUrls: ['./group-list-item.component.scss'],
  imports: [
    IonicModule,
    RouterLink
  ],
  standalone: true
})
export class GroupListItemComponent  implements OnInit {
  @Input() group: Group = {} as Group;
  @Output() selectGroup: EventEmitter<Group> = new EventEmitter<Group>();
  constructor() { }

  onSelect() {
    this.selectGroup.emit(this.group);
  }

  ngOnInit() {}
}
