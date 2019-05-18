import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  public qna=[
    {
      question:`WHO NEEDS A DOULA?`,
      answer:`Anyone who is interested regardless of birth plan or outcome. We all need advocacy, support, information, and compassion!`
    },
    {
      question:`WHAT DOES A LABOR DOULA DO?`,
      answer:`A doula is trained in childbirth and provides emotional physical and educational support to a mother who is expecting, in labor, or recently given birth. The purpose is to help women have a safe, memorable, and empowering birthing experience.
       - americanpregnancy.org `
    },
    {
      question:`WHAT ARE THE BENEFITS TO HAVING A DOULA?`,
      answer:`Cochran's Collaboration released a review of 21 studies of 15000 woman around the world a found the following benefits to having a doula: 
      - more likely to have a vaginal birth - less likely to have narcotics/epidural- more likely to have shorter labors - less likely to have a cesarean - more than a quarter were  less likely to be disastisfied with their birth- significantly less likely to feel a loss of control in labor -imprtoved breastfeeding- decreased postpartum depression`
    },
    {
      question:`DOES A DOULA REPLACE THE PARTNER OR MEDICAL PROVIDER?`,
      answer:`Nope! As a doula I work with your partner and birth team. I refer to your doctor regarding all medical matters and refer you to healthcare professionals for additional support, assessment, prescriptions, or diagnosis where needed. I work with your birth partner to support them as well as you. No one can replace a husband in the birthing room! `
    }
  ]
  constructor() { 

  }

  ngOnInit() {
  }

}
