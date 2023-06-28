import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { LandPageComponent } from './land-page/land-page.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PatientRegistrationComponent,
    LandPageComponent,
    PatientEditComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
