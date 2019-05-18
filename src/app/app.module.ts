import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CoverPhotoComponent } from './layout/home/cover-photo/cover-photo.component';
import { MeetGraceComponent } from './layout/home/meet-grace/meet-grace.component';
import { GraceServicesComponent } from './layout/home/grace-services/grace-services.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './layout/contact/contact.component';
import { GraceModalLargeComponent } from './shared/grace-modal-large/grace-modal-large.component';
import { HttpClientModule } from '@angular/common/http';
import { GlobalService } from './services/global.service';
import { GraceNotificationComponent } from './shared/grace-notification/grace-notification.component';
import { ComingSoonComponent } from './layout/coming-soon/coming-soon.component';





@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        HttpClientModule
    ],
    providers: [GlobalService],
    bootstrap: [AppComponent]
})
export class AppModule { }
