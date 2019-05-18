import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GlobalService } from 'app/services/global.service';
import { error } from 'util';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactForm:FormGroup;
  private first;
  private last;
  private email;
  private phonenumber;
  private message; 

  private sms_message;

  constructor(private globalservice:GlobalService) { }

  ngOnInit() {
    this.createContactForm();
  }

  createContactForm()
  {
    this.contactForm = new FormGroup(
      {
        firstname: new FormControl(null,[
          Validators.required
        ]),
        lastname: new FormControl(null,[
          Validators.required,
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
    this.first= this.contactForm.get('firstname').value;
    this.last = this.contactForm.get('lastname').value;
    this.email= this.contactForm.get('email').value;
    this.phonenumber= this.contactForm.get('phonenumber').value;
    this.message= this.contactForm.get('message').value;
    
    this.sms_message=
    `
    \n
    First: ${this.first}\n
    Last: ${this.last}\n
    Email: ${this.email}\n
    Phone: ${this.phonenumber}\n
    Message: ${this.message}
    `
  }

}
