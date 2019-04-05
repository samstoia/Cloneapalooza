import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrandingComponent } from './branding/branding.component';
import { MidnavComponent } from './midnav/midnav.component';
import { PosterComponent } from './poster/poster.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BrandingComponent,
    MidnavComponent,
    PosterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
