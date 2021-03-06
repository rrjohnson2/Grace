import { NgModule, Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: 
        [
            {path:'', redirectTo:'home', pathMatch:'prefix'},
            {path:'home', loadChildren:'./home/home.module#HomeModule'},
            {path:'faq' , component:FaqComponent},
            {path:'contact' , component:ContactComponent},
            {path:'coming-soon' , component:ComingSoonComponent},
            {path:'store', redirectTo:'coming-soon', pathMatch:'prefix'},
            {path:'portal', redirectTo:'coming-soon', pathMatch:'prefix'},
            {path:'**', redirectTo:'home', pathMatch:'prefix'},
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class LayoutRoutingModule { }
