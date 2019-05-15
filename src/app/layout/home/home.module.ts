import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { CoverPhotoComponent } from './cover-photo/cover-photo.component';
import { MeetGraceComponent } from './meet-grace/meet-grace.component';
import { GraceServicesComponent } from './grace-services/grace-services.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonlySharedModule } from 'app/shared/common/commonly.shared.module';




@NgModule({
    declarations: [
        HomeComponent,
        CoverPhotoComponent,
        MeetGraceComponent,
        GraceServicesComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        NgbModule,
        CommonlySharedModule
    ]
})
export class HomeModule { }
