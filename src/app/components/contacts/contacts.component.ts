import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../../Contacts'
import {ContactService} from '../../services/contact.service'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  @Input() contact: Contact;
  @Output() onDeleteContact: EventEmitter<Contact> = new EventEmitter();

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((contacts) => (this.contacts = contacts.filter(x=> x.is_active===1)));
  }

  onDelete(contact: Contact) {
    this.contactService.deleteContact(contact)
      .subscribe(
        () => (this.contacts = this.contacts.filter((c) => c.is_active === 1)));
  }
}
