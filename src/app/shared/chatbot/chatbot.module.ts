import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotComponent } from './chatbot.component';
import { ChatbotService } from './chatbot.service';

@NgModule({
  declarations: [ChatbotComponent],
  imports: [
    CommonModule,
  ],
  exports:[ChatbotComponent],
  providers:[
    ChatbotService
  ]
})
export class ChatbotModule { }
