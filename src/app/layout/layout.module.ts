import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing.module';
import { CommonModule } from '@angular/common';
import { GracenavbarComponent } from '../shared/gracenavbar/gracenavbar.component';
import { NavbarComponent } from 'app/shared/navbar/navbar.component';


@NgModule({
    declarations: [
        LayoutComponent,
        GracenavbarComponent,
    ],
    imports: [
        CommonModule,
        LayoutRoutingModule
    ]
})
export class LayoutModule { }
