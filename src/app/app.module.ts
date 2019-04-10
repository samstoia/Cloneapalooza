import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrandingComponent } from './branding/branding.component';
import { MidnavComponent } from './midnav/midnav.component';
import { PosterComponent } from './poster/poster.component';
import { NewsComponent } from './news/news.component';
import { LownavComponent } from './lownav/lownav.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { TicketsComponent } from './tickets/tickets.component';
import { LineupComponent } from './lineup/lineup.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BrandingComponent,
    MidnavComponent,
    PosterComponent,
    NewsComponent,
    LownavComponent,
    FooterComponent,
    WelcomeComponent,
    TicketsComponent,
    LineupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
