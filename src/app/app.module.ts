import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { UploadcardComponent } from './app/uploadcard/uploadcard.component';
import { LicensecardComponent } from './app/licensecard/licensecard.component';
import { ContentcardComponent } from './app/contentcard/contentcard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UploadcardComponent,
    LicensecardComponent,
    ContentcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
