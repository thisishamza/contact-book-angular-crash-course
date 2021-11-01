import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Contact} from '../Contacts'
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl: string = 'http://localhost:5000/contacts'

  constructor(private http: HttpClient) {
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);

  }

  deleteContact(contact: Contact): Observable<Contact> {
    const url = `${this.apiUrl}/${contact.id}`;
    let body = {
      "is_active": 0
    }
    return this.http.patch<Contact>(url, body);
  }

  searchContact(search_term:string): Observable<Contact[]> {
    const url= this.apiUrl;
    return this.http.get<Contact[]>(url);
  }

}
