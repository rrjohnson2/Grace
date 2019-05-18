import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraceModalLargeComponent } from '../grace-modal-large/grace-modal-large.component';





@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    GraceModalLargeComponent
  ],
  exports: [
    GraceModalLargeComponent
  ]
})

export class CommonlySharedModule { }