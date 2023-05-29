import { Component } from '@angular/core';
import { MessagesService } from "../messages.service";
import { IMessage } from '../messages.service';


@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.css']
})
export class AddMessagesComponent {
  message?: string

  constructor(public messagesService: MessagesService) { }

  addMessage(): void {
    const message: IMessage = { message: this.message!, hour: '12:30' }
    this.messagesService.add(message)
    this.message = undefined
  }
}
