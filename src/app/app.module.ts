import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrandingComponent } from './branding/branding.component';
import { MidnavComponent } from './midnav/midnav.component';
import { PosterComponent } from './poster/poster.component';
import { NewsComponent } from './news/news.component';
import { LownavComponent } from './lownav/lownav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BrandingComponent,
    MidnavComponent,
    PosterComponent,
    NewsComponent,
    LownavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
