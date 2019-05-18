import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/platform-browser';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { GracenavbarComponent } from '../shared/gracenavbar/gracenavbar.component';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  private _router: Subscription;
    @ViewChild(GracenavbarComponent) navbar: GracenavbarComponent;
    private _transparent: boolean;

    constructor( private renderer : Renderer, private router: Router, @Inject(DOCUMENT,) private document: any, private element : ElementRef, public location: Location) {
        var browserRefresh = !router.navigated && 
                            (
                                this.router.url==='/contact' ||
                                this.router.url==='/faq' ||
                                this.router.url==='/coming-soon'
                            );
        if(browserRefresh)
        {
            this._transparent=false;
        }
    }
    ngOnInit() {

        
        var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
        this.navbar.sidebarClose();
        
        if(!this._transparent)
        {
           
            navbar.classList.remove('navbar-transparent');
        }

        this.renderer.listenGlobal('window', 'scroll', (event) => {
            
            const number = window.scrollY;
            var _location = this.location.path();
            var transparent=
                 _location==='/faq' || 
                 _location==='/contact' || 
                 _location==='/coming-soon'
            //_location = _location.split('/')[2];
            console.log(_location)
            if (number > 150 || window.pageYOffset > 150 ) {
                navbar.classList.remove('navbar-transparent');
            } else if (!transparent) {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        
        
    
            
        
    }

}
//_location !== 'login' && this.location.path() !== '/nucleoicons'