import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing.module';
import { CommonModule } from '@angular/common';
import { GracenavbarComponent } from '../shared/gracenavbar/gracenavbar.component';
import { NavbarComponent } from 'app/shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [
        LayoutComponent,
        GracenavbarComponent,

    ],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        NgbModule,
        
    ]
})
export class LayoutModule { }
