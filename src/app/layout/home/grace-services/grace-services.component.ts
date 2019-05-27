import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap/carousel/carousel';
import { GraceModalComponent } from 'app/shared/grace-modal/grace-modal.component';


@Component({
  selector: 'app-grace-services',
  templateUrl: './grace-services.component.html',
  styleUrls: ['./grace-services.component.scss']
})
export class GraceServicesComponent implements OnInit {

  @ViewChild("carousel") carousel:NgbCarousel
  @ViewChild("modal") modal:GraceModalComponent
  public tagged;
  public services=
  [
    {
      id:"free",
      title:"FREE CONSULTATION",
      image:`assets/img/freecon.jpg`,
      content:
      {
        goal:`
        My goal is for us to get to know each other and answer any questions . 
        If I am not the best fit for your family,
        I can refer you to a doula who may better fit your needs.`,
        points:[
          'Includes: 1 free in person meetup.'
        ]
      }
    },
    {
      id:"preg",
      title:"PREGNANCY SUPPORT",
      image:`assets/img/pregosup.jpg`,
      content:
      {
        goal:`
        My goal is for you to feel heard, supported, and ready to bring your baby into the world.
        Together we will work through any fears or past trauma leading up to your childbirth.
        We will build a birth “plan” as I provide unbiased evidence-based information where needed.
        We will learn comfort measures and rebozo techniques`,
        points:[
          `2-3 prenatal visits covering the basics and comfort measures.`, 
          `Help building a birth plan.`,
          `Unlimited phone and email support throughout pregnancy.`
        ]
      }
    },
    {
      id:"lact",
      title:"FEEDING SUPPORT",
      image:`assets/img/lactation1.jpg`,
      content:
      {
        goal:
        `My goal is to help guide and support you however you choose to feed your infant.`,
        points:[
          `Breastfeeding- Breastfeeding can be magical and dang hard! Having adequate support in those first weeks is vital to building a successful breastfeeding relationship. As a trained CAPPA lactation educator, I can provide evidence-based information about lactation and breastfeeding. From initial breastfeeding through weaning I can provide education and encouragement to reach your goals.`, 
          `Bottle Feeding/Pumping- Balancing bottles, breast, and pump can be difficult. I can provide the necessary evidence-based information so that you can successfully reach your goals and feed your baby how you feel best.`,
          `Formula Feeding- I have knowledge on formula-feeding and can provide the evidence-based information necessary to support this decision.`
        ]
      }
    },
    {
      id:"birth",
      title:"BIRTHING DOULA",
      image:`assets/img/birth.jpg`,
      content:
      {
        goal:`
        My goal is to work with alongside your birth team to give you a positive experience through by providing the following.`,
        points:[
          `Unbiased Evidence Based Information-Interpreting situations and providing information to help you make the best decisions for your family.`, 
          `Comfort Measures- Working with your partner to keep you as comfortable as possible. No matter the type of birth you choose there are many comfort measures we can employ.`,
          `Emotional Support- Supporting you through fears and previous birth traumas. Encouraging you to birth the way you want to.`,
          `Advocacy- Help you to communicate and advocate for your desires. Make sure that you are respected and heard.`,
          `Includes: 2-3 untimed prenatal visits. Unlimited phone and email support. Continuous labor support. Immediate postpartum support. Resource referrals`
        ]
      }
    },
  ]
  
  
  constructor() { }

  ngOnInit() {
    this.tagged= this.services[0];
    
  }

  updateContent(slide:NgbSlideEvent)
  {
    var active;
    switch(slide.current)
    {
      case"free":
        active= this.services[0];
        break;
      case"preg":
        active= this.services[1];
        break;
      case"lact":
        active= this.services[2];
        break;
      case"birth":
        active= this.services[3];
        break;
    }
    this.tagged=active;
  }

  openModal(tagged)
  {
    this.modal.populateOpen(tagged.title,tagged.content);
    this.carousel.pause();
  }

  resume(event)
  {
    if (event) {
      console.log("hit")
      this.carousel.cycle();
    }
  }
  
  
}
