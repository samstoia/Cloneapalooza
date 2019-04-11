import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TicketsComponent } from './tickets/tickets.component';
import { LineupComponent } from './lineup/lineup.component';
import { AdminComponent } from './admin/admin.component';
import { EmailsComponent } from './emails/emails.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'tickets',
    component: TicketsComponent
  },
  {
    path: 'lineup',
    component: LineupComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'emails/:id',
    component: EmailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);