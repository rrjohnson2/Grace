import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { ApiAiClient } from "api-ai-javascript/es6/ApiAiClient";
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  private prev_convo:Message[]=[];

  readonly token = environment.dialogflow.angularBot
  readonly client = new ApiAiClient({
    accessToken:this.token
  });

  convseration = new  BehaviorSubject<Message[]>([]);

  constructor() { }

  private updateConversation(message:Message)
  {
    this.prev_convo.push(message);
    this.convseration.next(this.prev_convo);
  }

  converse(mgs:string)
  {
    this.updateConversation(new Message('usr',mgs));

    return this.client.textRequest(mgs).then(
      data =>{
        const speech = data.result.fulfillment.speech;
        this.updateConversation(new Message('bot',speech));
      }
    )
  }

 
}

export class Message {
    sender:string;
    content:string
    constructor(sender:string, content:string){
      this.sender=sender;
      this.content=content
    }
}
