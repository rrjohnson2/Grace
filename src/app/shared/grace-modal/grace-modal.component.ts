import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-grace-modal',
  templateUrl: './grace-modal.component.html',
  styleUrls: ['./grace-modal.component.scss']
})
export class GraceModalComponent implements OnInit {

  
  closeResult: string;
  title;
  content;
  @ViewChild('classic') classic;
  
  @Output() resume: EventEmitter<any>= new  EventEmitter<any>();

  constructor(private modalService: NgbModal) {}
  
  ngOnInit(): void {
    
  }

  open(content) {
          this.modalService.open(content).result.then((result) => {
              this.resume.emit(true);
              this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
              this.resume.emit(true);
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
  }

  private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
      } else {
          return  `with: ${reason}`;
      }
     
  }

  public populateOpen(title,content)
  {
      this.title=title;
      this.content=content;
      this.open(this.classic);
  }



}
