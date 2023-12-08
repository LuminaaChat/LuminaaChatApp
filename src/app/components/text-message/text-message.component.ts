import {Component, Input} from '@angular/core';
import {DatePipe, NgClass} from "@angular/common";
import {Message} from "../../../shared/types/message.type";

@Component({
  selector: 'app-text-message',
  standalone: true,
  imports: [
    NgClass,
    DatePipe
  ],
  templateUrl: './text-message.component.html',
  styleUrl: './text-message.component.css'
})
export class TextMessageComponent {
    @Input() message!: Message;
    @Input() isSender!: boolean;
    constructor() { }
}
