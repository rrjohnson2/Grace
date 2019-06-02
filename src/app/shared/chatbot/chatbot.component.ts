import { Component, OnInit } from '@angular/core';
import { ChatbotService, Message } from './chatbot.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {
  public messages:Observable<Message[]>
  private openBoolean:boolean=true;
  public openSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.openBoolean);
  public open :Observable<boolean>;
  public sendForm:FormGroup;
  
 
  constructor(private chatService:ChatbotService) { }

  ngOnInit() {
    this.messages=this.chatService.convseration.asObservable();
    this.setOpen();
    this.createSendForm();
  }
  createSendForm()
  {
    this.sendForm = new FormGroup({
      message: new FormControl(null,[
        Validators.required
      ]),
    });
  }
  send()
  {
    var mgs = this.sendForm.get('message').value;
    this.chatService.converse(mgs);
    this.messages=this.chatService.convseration.asObservable();
    this.sendForm.reset();
  }

  setOpen()
  {
    this.openSubject.next(this.openBoolean);
    this.open= this.openSubject.asObservable();
  }
  toogleChatWindow()
  {
    this.openBoolean=!this.openBoolean;
    this.setOpen();
  }

}
