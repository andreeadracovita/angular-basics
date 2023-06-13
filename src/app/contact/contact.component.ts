import { Component, ViewChild } from '@angular/core';
import { IDeactivateComponent } from '../services/canDeactivate-guard.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements IDeactivateComponent {
  firstName: string = '';
  lastName: string = '';
  message: string = '';

  @ViewChild('myForm') form: NgForm | undefined;

  canExit() {
    if (this.firstName || this.lastName || this.message) {
      return confirm('You have unsaved changes. Do you really want to discard these changes?');
    }
    return true;
  }

  onSubmit() {
    console.log(this.form);
  }
}
