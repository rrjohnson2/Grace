import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { ApiAiClient } from "api-ai-javascript/es6/ApiAiClient";
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  private welcome:Message= new Message('bot',`Welcome to my corner of the internet! Providing support to families throughout pregnancy is truly a passion of mine! As your doula and advocate my goal is to empower you with unbiased information, non-judgement encouragement, and professional support. I will always be respectful and inclusive as I guide you through this physical and emotional journey. Women with doulas report having a more positive childbirth experience as well as decrease in cesarean rate by 50%, the length of labor by 25%, and requests for epidural by 60%, (Source: Continuous Support for Women. Cochrane Database). I am trained with CAPPA and servicing the Raleigh, Triangle, and Wake County Areas.`)
  private prev_convo:Message[]=[this.welcome];
  

  readonly token = environment.dialogflow.angularBot
  readonly client = new ApiAiClient({
    accessToken:this.token
  });

  convseration = new  BehaviorSubject<Message[]>(this.prev_convo);

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
