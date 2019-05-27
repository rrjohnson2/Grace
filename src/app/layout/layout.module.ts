import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing.module';
import { CommonModule } from '@angular/common';
import { GracenavbarComponent } from '../shared/gracenavbar/gracenavbar.component';
import { NavbarComponent } from 'app/shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from 'app/shared/footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { CommonlySharedModule } from 'app/shared/common/commonly.shared.module';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GraceNotificationComponent } from 'app/shared/grace-notification/grace-notification.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { GraceModalComponent } from 'app/shared/grace-modal/grace-modal.component';
import { ChatbotModule } from 'app/shared/chatbot/chatbot.module';


@NgModule({
    declarations: [
        LayoutComponent,
        GracenavbarComponent,
        FooterComponent,
        FaqComponent,
        ContactComponent,
        GraceNotificationComponent,
        ComingSoonComponent,
        
      
        

    ],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        NgbModule,
        CommonlySharedModule,
        FormsModule,
        ReactiveFormsModule,
        ChatbotModule
      
        
    ],
    
})
export class LayoutModule { }
