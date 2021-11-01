import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-contact-form',
  templateUrl: './add-contact-form.component.html',
  styleUrls: ['./add-contact-form.component.css']
})
export class AddContactFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private form: FormBuilder) {
  }

  ngOnInit() {
    this.contactForm = this.form.group({
      first_name: '',
      last_name: '',
      address: '',
      phone_number: this.form.array([]),
      designation: ''
    })

  }

  get phoneForms() {
    return this.contactForm.get('phone_number') as FormArray
  }

  addPhone() {

    const phone = this.form.group({
      phone_number: [],
    })

    this.phoneForms.push(phone);
  }

  deletePhone(i: number) {
    this.phoneForms.removeAt(i)
  }
}
