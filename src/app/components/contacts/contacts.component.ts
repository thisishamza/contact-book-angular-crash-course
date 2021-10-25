import { Component, OnInit } from '@angular/core';
import {Contact} from '../../Contacts'
import {CONTACTS} from '../../demo-contacts'
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
    contacts: Contact[] = CONTACTS
  constructor() { }

  ngOnInit(): void {
  }

}
