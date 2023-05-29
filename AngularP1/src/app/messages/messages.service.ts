import { Injectable } from '@angular/core';


export interface IMessage {
  message: string
  hour: string
}

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor() { }

  messages: Array<IMessage> = [];

  add(message: IMessage) {
    this.messages.push(message)
  }
}
