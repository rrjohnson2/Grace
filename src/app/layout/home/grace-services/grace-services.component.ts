import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Content } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-grace-services',
  templateUrl: './grace-services.component.html',
  styleUrls: ['./grace-services.component.scss']
})
export class GraceServicesComponent implements OnInit {

  @ViewChild("carousel") carousel:NgbCarousel
  public carousel_content:string;
  public services=
  [
    {
      title:"FREE CONSULTATION",
      image:`assets/img/freecon.jpg`,
      content:`Let's talk! I want to get to know you as much as you me. We can sit down for a chance to answer any questions you may have before we decide to partner together. If I am not the best fit for your family, I can refer you to others who may better fit your needs. Includes:1 free in person meetup`
    },
    {
      title:"PREGNANCY SUPPORT",
      image:`assets/img/pregosup.jpg`,
      content:`As a pregnancy doula my goal is for you to feel heard, supported, and ready to bring your baby into the world. I am there for phone and in person consultations to help provide unbiased education and resources where needed. Together we can build a birth "plan" and work through any emotions leading up to your labor. 
      Includes 2 private sessions covering basics and comfort measures Birth plan Unlimited phone and email support `
    },
    {
      title:"LACTATION SUPPORT",
      image:`assets/img/lactation.jpg`,
      content:`If you choose to breastfeed it can be beautiful and magical. It can also be dang hard! Breastfeeding is the first challenge you face after giving birth. Having adequate support and encouragement through those critical first weeks is vital to building a successful breastfeeding relationship. I can be apart of that support team. I provide support in person or over the phone. I can be that unbiased educator on your side to help with whatever your feeding goals may be. 
      Trained with CAPPA as lactation educator.`
    },
    {
      title:"BIRTHING DOULA",
      image:`assets/img/pregosup.jpg`,
      content:`As your birth doula my goal is to work with your partner and birth team to create a peaceful positive experience. I help you to understand any situation, provide unbiased information to help make decisions, and then help you to communicate and advocate for your desires. I do not replace your partner, but rather support you both with continuous physical, emotional, and informational support. 
      Includes:1-2 untimed prenatal visits Unlimited phone and email support Continuous labor support Immediate postpartum support Resource refferals`
    },
  ]
  public service_index=0;
  public service;
  
  constructor() { }

  ngOnInit() {
    this.setService();
  }

  private setService()
  {
  this.service = this.services[this.service_index];
  }
  public turn(direction)
  {
    console.log(direction)
    if(direction=="right")
    {
     
       if(this.service_index!=this.services.length-1)
       {
         this.service_index++;
       }
    }
    else{
      if(this.service_index!=0)
      {
        this.service_index--;
      }
    }

    this.setService();
  }
  
  
  
}
