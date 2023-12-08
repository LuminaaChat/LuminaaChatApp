import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {Router} from "@angular/router";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-chat-list-item',
  standalone: true,
  imports: [
    NgClass,
    IonicModule
  ],
  templateUrl: './chat-list-item.component.html',
  styleUrl: './chat-list-item.component.css'
})
export class ChatListItemComponent {
  @Input() sender: string = '';
  @Input() lastMessage: string = '';
  @Input() delivered: boolean = false;
  @Input() seen: boolean = false;
  @Input() date: string = '';
  @Input() link: string = '';
  @Input() type: string = 'internal'; // group, direct, internal

  constructor(private router: Router) {
  }

  async onChatListItemClick() {
    await this.router.navigate([this.link]);
  }
}
