import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {Message} from "../../../shared/types/message.type";
import {AppStoreService} from "../../../shared/services/app-store.service";
import {TextMessageComponent} from "../../components/text-message/text-message.component";
import {addIcons} from "ionicons";
import {ellipsisHorizontal, ellipsisVertical} from "ionicons/icons";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TextMessageComponent]
})
export class ChatPage implements OnInit, AfterViewChecked {
  @ViewChild('chatBox') private myScrollContainer!: ElementRef;

  newMessage: string = '';

  showDrawer: boolean = false;
  showAddMenu: boolean = false;

  messages: Message[] = [
    {
      _id: '1',
      __v: 1,
      message: 'You were the Chosen On!',
      sender: 'Obi-Wan Kenobi',
      receiver: '656c6bd50e00985c3867c4d9',
      type: 'text',
      visible: true,
      createdAt: '2021-03-01T15:10:00.000Z',
      updatedAt: '2021-03-01T15:10:00.000Z',
      deletedAt: '',
      seenAt: '2021-03-01T15:11:00.000Z'
    } as Message,
    {
      _id: '2',
      __v: 1,
      message: 'I hate you so much!',
      sender: '656c6bd50e00985c3867c4d9',
      receiver: 'Obi-Wan Kenobi',
      type: 'text',
      visible: true,
      createdAt: '2021-03-01T15:11:00.000Z',
      updatedAt: '2021-03-01T15:11:00.000Z',
      deletedAt: '',
      seenAt: '2021-03-01T15:12:00.000Z'
    } as Message,
    {
      _id: '3',
      __v: 1,
      message: 'Are you realy sure?',
      sender: 'Obi-Wan Kenobi',
      receiver: '656c6bd50e00985c3867c4d9',
      type: 'text',
      visible: true,
      createdAt: '2021-03-01T15:12:00.000Z',
      updatedAt: '2021-03-01T15:12:00.000Z',
      deletedAt: '',
      seenAt: '2021-03-01T15:13:00.000Z'
    } as Message,
    {
      _id: '2',
      __v: 1,
      message: 'Yes I am!',
      sender: '656c6bd50e00985c3867c4d9',
      receiver: 'Obi-Wan Kenobi',
      type: 'text',
      visible: true,
      createdAt: '2021-03-01T15:13:00.000Z',
      updatedAt: '2021-03-01T15:13:00.000Z',
      deletedAt: '',
      seenAt: '2021-03-01T15:14:00.000Z'
    } as Message,
    {
      _id: '3',
      __v: 1,
      message: 'That i cant belive...',
      sender: 'Obi-Wan Kenobi',
      receiver: '656c6bd50e00985c3867c4d9',
      type: 'text',
      visible: true,
      createdAt: '2021-03-01T15:14:00.000Z',
      updatedAt: '2021-03-01T15:14:00.000Z',
      deletedAt: '',
      seenAt: '2021-03-01T15:15:00.000Z'
    } as Message,
    {
      _id: '3',
      __v: 1,
      message: 'Can you please trust me?',
      sender: 'Obi-Wan Kenobi',
      receiver: '656c6bd50e00985c3867c4d9',
      type: 'text',
      visible: true,
      createdAt: '2021-03-01T15:15:00.000Z',
      updatedAt: '2021-03-01T15:15:00.000Z',
      deletedAt: '',
      seenAt: '2021-03-01T15:16:00.000Z'
    } as Message,
    {
      _id: '3',
      __v: 1,
      message: 'Anakin are you there?',
      sender: 'Obi-Wan Kenobi',
      receiver: '656c6bd50e00985c3867c4d9',
      type: 'text',
      visible: true,
      createdAt: '2021-03-01T15:16:00.000Z',
      updatedAt: '2021-03-01T15:16:00.000Z',
      deletedAt: '',
      seenAt: '2021-03-01T15:17:00.000Z'
    } as Message,
    {
      _id: '3',
      __v: 1,
      message: 'Anakin ??????',
      sender: 'Obi-Wan Kenobi',
      receiver: '656c6bd50e00985c3867c4d9',
      type: 'text',
      visible: true,
      createdAt: '2021-03-01T15:17:00.000Z',
      updatedAt: '2021-03-01T15:17:00.000Z',
      deletedAt: '',
      seenAt: '2021-03-01T15:18:00.000Z'
    } as Message,
    {
      _id: '2',
      __v: 1,
      message: 'WHAT? Go away!',
      sender: '656c6bd50e00985c3867c4d9',
      receiver: 'Obi-Wan Kenobi',
      type: 'text',
      visible: true,
      createdAt: '2021-03-01T15:18:00.000Z',
      updatedAt: '2021-03-01T15:18:00.000Z',
      deletedAt: '',
      seenAt: '2021-03-01T15:19:00.000Z'
    } as Message,
    {
      _id: '3',
      __v: 1,
      message: 'No! Let me help you! Please!',
      sender: 'Obi-Wan Kenobi',
      receiver: '656c6bd50e00985c3867c4d9',
      type: 'text',
      visible: true,
      createdAt: '2021-03-01T15:19:00.000Z',
      updatedAt: '2021-03-01T15:19:00.000Z',
      deletedAt: '',
      seenAt: '2021-03-01T15:20:00.000Z'
    } as Message,
  ];

  constructor(public appStore: AppStoreService) {
    addIcons({
      'ellipsis-horizontal': ellipsisHorizontal,
      'ellipsis-vertical': ellipsisVertical
    })
  }

  onClickOptions() {
    console.log('onClickOptions')
    this.showDrawer = !this.showDrawer;
  }

  OnClickAddMessage(message: string) {
    const newMessage: Message = {
      _id: '4',
      __v: 1,
      message: message,
      sender: this.appStore.getUserId(),
      receiver: 'Obi-Wan Kenobi',
      type: 'text',
      visible: true,
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
      deletedAt: '',
      seenAt: ''
    } as Message;
    this.messages.push(newMessage);
    this.newMessage = '';
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  onClickAdd(){}

  ngOnInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

}
