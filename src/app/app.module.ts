import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';



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
import { AdminComponent } from './admin/admin.component';
import { EmailsComponent } from './emails/emails.component';
import { EditEmailComponent } from './edit-email/edit-email.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

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
    LineupComponent,
    AdminComponent,
    EmailsComponent,
    EditEmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
