import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {SearchComponent} from './components/search/search.component';
import {AddContactFormComponent} from './components/add-contact-form/add-contact-form.component';

// import { AngularFireModule} from 'angularfire2';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    SearchComponent,
    AddContactFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
