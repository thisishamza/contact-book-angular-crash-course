import {Component, Input, OnInit} from '@angular/core';
import {ContactService} from '../../services/contact.service'
import {Contact} from "../../Contacts";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() contact: Contact;
  private contacts: Contact[];

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {}

  onSearch(search_term: string) {

  }
}
