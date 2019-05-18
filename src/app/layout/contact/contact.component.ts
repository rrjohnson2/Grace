import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GlobalService } from 'app/services/global.service';
import { error } from 'util';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private subscription;
  public contactForm:FormGroup;
  private name;
  private email;
  private phonenumber;
  private message; 

  private sms_message;

  constructor(private globalservice:GlobalService, ) {
  
   }

  ngOnInit() {
    this.createContactForm();
  }

  createContactForm()
  {
    this.contactForm = new FormGroup(
      {
        name: new FormControl(null,[
          Validators.required
        ]),
        email: new FormControl(null,[
          Validators.required,
        ]),
        phonenumber: new FormControl(null,[
          Validators.required,
        ]),
        message: new FormControl(null,[
          Validators.required,
        ])
      }
    );
  }

  sendMessage(){

    this.contructSmsMessage();
    console.log(this.sms_message)
    var sms =
    {
      message:this.sms_message,
      phone_number:'3366181285'
    }
    console.log(this.globalservice)
    this.globalservice.send(sms).subscribe(
      error =>{
        console.log(error);
      }
    );



  }


  contructSmsMessage()
  {
    this.name= this.contactForm.get('name').value;
    this.email= this.contactForm.get('email').value;
    this.phonenumber= this.contactForm.get('phonenumber').value;
    this.message= this.contactForm.get('message').value;
    
    this.sms_message=
    `
    \n
    Name: ${this.name}\n
    Email: ${this.email}\n
    Phone: ${this.phonenumber}\n
    Message: ${this.message}
    `
  }

}
