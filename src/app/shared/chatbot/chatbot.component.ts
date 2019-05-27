import { Component, OnInit } from '@angular/core';
import { ChatbotService, Message } from './chatbot.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {
  public messages:Observable<Message[]>
 
  constructor(private chatService:ChatbotService) { }

  ngOnInit() {
    this.chatService.converse('welcome')
    this.messages=this.chatService.convseration.asObservable();
  }

}
