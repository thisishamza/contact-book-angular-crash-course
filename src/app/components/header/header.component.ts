import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Contact Book';

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }
  AddContactPage(){
    this.router.navigate(['/add-contact']).then(r => {console.log("navigated")})
  }
}
